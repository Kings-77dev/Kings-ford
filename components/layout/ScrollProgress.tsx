"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Thin accent bar that scrubs from 0 → full width across the page scroll. */
export default function ScrollProgress() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(".scroll-prog", { scaleX: 1 });
      return;
    }
    gsap.set(".scroll-prog", { scaleX: 0 });
    const tween = gsap.to(".scroll-prog", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return <div className="scroll-prog" aria-hidden="true" />;
}
