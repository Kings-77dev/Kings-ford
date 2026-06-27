"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient screen-recording showcase, framed like a browser window (reuses the
 * `.chrome` primitive from globals.css). Pass `src` (mp4, + optional `webm`)
 * for a real clip: it autoplays muted + loops, plays only while in view, and
 * falls back to the poster + native controls when the user prefers reduced
 * motion. With no `src` it renders an animated "sample" placeholder so the
 * treatment is visible before real footage exists, drop a clip in to replace.
 */
export default function VideoSlot({
  label,
  caption,
  addr = "xentys.nl",
  src,
  webm,
  poster,
  chrome = true,
  maxW,
  cream = false,
}: {
  label: string;
  caption: string;
  addr?: string;
  src?: string;
  webm?: string;
  poster?: string;
  chrome?: boolean;
  maxW?: number;
  cream?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Reduced motion: don't autoplay; show the poster + controls instead.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.autoplay = false;
      v.controls = true;
      v.pause();
      return;
    }

    // Otherwise only decode/play while the clip is on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const border = cream ? "border-[rgb(33_26_18/0.16)]" : "border-line";
  const capColor = cream ? "text-[#5c5345]" : "text-muted";

  return (
    <figure
      className="m-0 my-9"
      style={maxW ? { maxWidth: maxW, marginInline: "auto" } : undefined}
    >
      <div className={`overflow-hidden rounded-[14px] border ${border}`}>
        {chrome && (
          <div className="chrome">
            <i />
            <i />
            <i />
            <span className="addr">{addr}</span>
          </div>
        )}
        {src ? (
          <video
            ref={videoRef}
            className="block h-auto w-full bg-[#0c0a07]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={label}
          >
            {webm ? <source src={webm} type="video/webm" /> : null}
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <div
            className="vs-sample relative grid aspect-[16/10] place-items-center overflow-hidden bg-[#0c0a07]"
            role="img"
            aria-label={`${label} (sample placeholder)`}
          >
            <span className="relative z-[1] px-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[rgb(243_237_223/0.72)]">
              {label}
            </span>
          </div>
        )}
      </div>
      <figcaption
        className={`mt-3 max-w-[60ch] font-mono text-[11px] italic leading-[1.55] ${capColor}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
