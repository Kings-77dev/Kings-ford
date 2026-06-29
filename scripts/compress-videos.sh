#!/usr/bin/env bash
# Compress case-study screen recordings into web-friendly clips.
# For each input .mp4: re-encodes it IN PLACE to an optimized H.264 MP4
# (downscaled, CRF, web faststart, audio stripped, the clips are muted) and
# emits a matching VP9 .webm alongside it. Both derive from the original file.
#
# Usage:
#   scripts/compress-videos.sh public/assets/xentys/home-old.mp4 [more.mp4 ...]
#
# Requires ffmpeg (brew install ffmpeg).
set -euo pipefail

MAXW=1440   # 2880px recordings → 1440px is ample for a ~880px display (retina headroom)

command -v ffmpeg >/dev/null || { echo "ffmpeg not found, run: brew install ffmpeg"; exit 1; }

for src in "$@"; do
  [ -f "$src" ] || { echo "skip (missing): $src"; continue; }
  dir=$(dirname "$src"); base=$(basename "$src" .mp4)
  tmp="$dir/$base.opt.mp4"; webm="$dir/$base.webm"
  before=$(du -h "$src" | cut -f1)
  echo "→ $src ($before)"

  # Optimized H.264 MP4, proper isom container, web faststart, no audio.
  ffmpeg -y -loglevel error -i "$src" -an \
    -vf "scale='min(${MAXW},iw)':-2" \
    -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 26 -preset slow \
    -movflags +faststart "$tmp"

  # VP9 WebM, smaller, open format (from the original, not the re-encoded mp4).
  ffmpeg -y -loglevel error -i "$src" -an \
    -vf "scale='min(${MAXW},iw)':-2" \
    -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -deadline good -cpu-used 4 "$webm"

  mv "$tmp" "$src"
  echo "   done: $(du -h "$src" | cut -f1) mp4 / $(du -h "$webm" | cut -f1) webm"
done
