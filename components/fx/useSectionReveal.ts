"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

/**
 * Shared scroll choreography for a section: the header rises in, anything
 * tagged `.reveal` batch-reveals on enter, and eyebrows drift in parallax.
 * Skipped entirely under reduced-motion so content stays put and visible.
 */
export function useSectionReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>(".section-top, .process-head").forEach((el) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      const batch = gsap.utils.toArray<HTMLElement>(".reveal");
      if (batch.length) {
        gsap.set(batch, { y: 44, opacity: 0 });
        ScrollTrigger.batch(batch, {
          start: "top 90%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.07,
            }),
        });
        // safety net: force-show anything still hidden after first paint
        gsap.delayedCall(1.5, () =>
          batch.forEach((el) => {
            if (
              el.getBoundingClientRect().top < innerHeight &&
              (gsap.getProperty(el, "opacity") as number) < 1
            ) {
              gsap.to(el, { y: 0, opacity: 1, duration: 0.6, overwrite: "auto" });
            }
          }),
        );
      }

      gsap.utils
        .toArray<HTMLElement>(".section-top .eyebrow, .process-head .eyebrow")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { y: 14 },
            {
              y: -22,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            },
          );
        });
    },
    { scope: scope as RefObject<HTMLElement> },
  );
}
