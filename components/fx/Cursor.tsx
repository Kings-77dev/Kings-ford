"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useIsDesktop } from "./useIsDesktop";

/**
 * Difference-blend cursor: a fast dot and a lagging ring. Appears only after
 * the first pointer move, and only on fine-pointer desktops with motion on.
 */
export default function Cursor() {
  const { desktop, reduced } = useIsDesktop();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!desktop || reduced) return;
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const dx = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const dy = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
    const rx = gsap.quickTo(ring, "x", { duration: 0.38, ease: "power3.out" });
    const ry = gsap.quickTo(ring, "y", { duration: 0.38, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      if (!document.body.classList.contains("cur-on")) {
        gsap.set([dot, ring], { x: e.clientX, y: e.clientY });
        document.body.classList.add("cur-on");
      }
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };

    const hot = () => document.body.classList.add("cur-hot");
    const cold = () => document.body.classList.remove("cur-hot");
    const interactive = document.querySelectorAll(
      "a, button, .path, .acc summary",
    );

    addEventListener("mousemove", onMove, { passive: true });
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", hot);
      el.addEventListener("mouseleave", cold);
    });

    return () => {
      removeEventListener("mousemove", onMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", hot);
        el.removeEventListener("mouseleave", cold);
      });
      document.body.classList.remove("cur-on", "cur-hot");
    };
  }, [desktop, reduced]);

  if (!desktop || reduced) return null;
  return (
    <>
      <div className="cur-ring" ref={ringRef} aria-hidden="true" />
      <div className="cur-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
