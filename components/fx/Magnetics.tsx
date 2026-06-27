"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * Site-wide magnetic pull on every `.btn` (desktop + motion only), mirroring
 * the original static site. Re-binds on route changes via the key in layout.
 */
export default function Magnetics() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(".btn").forEach((b) => {
      const bx = gsap.quickTo(b, "x", { duration: 0.4, ease: "power3.out" });
      const by = gsap.quickTo(b, "y", { duration: 0.4, ease: "power3.out" });
      const onMove = (e: MouseEvent) => {
        const r = b.getBoundingClientRect();
        bx((e.clientX - r.left - r.width / 2) * 0.22);
        by((e.clientY - r.top - r.height / 2) * 0.34);
      };
      const onLeave = () => {
        bx(0);
        by(0);
      };
      b.addEventListener("mousemove", onMove);
      b.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        b.removeEventListener("mousemove", onMove);
        b.removeEventListener("mouseleave", onLeave);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
