"use client";

import { useEffect, useRef } from "react";

/**
 * A browser-chrome-framed video for the Andreopology editorial layout, matches
 * the `Frame` image treatment (same dark window, dots, address pill). Autoplays
 * muted + loops, plays only while in view, and falls back to a poster + native
 * controls under reduced motion. Caption is rendered by the page, not here.
 */
export default function EditorialVideo({
  src,
  poster,
  addr,
}: {
  src: string;
  poster?: string;
  addr: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.autoplay = false;
      v.controls = true;
      v.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-[14px] border border-line bg-[#0c0a07]">
        <div className="chrome">
          <i />
          <i />
          <i />
          <span className="addr">{addr}</span>
        </div>
        <video
          ref={ref}
          className="block h-auto w-full bg-black"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </figure>
  );
}
