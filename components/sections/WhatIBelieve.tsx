"use client";

import { useRef } from "react";
import { useSectionReveal } from "@/components/fx/useSectionReveal";

/** "What I believe" band: surfaces the manifesto (replaces the old services
 *  and pathways sections). */
const BELIEFS = [
  "Good design fixes the right problem, not just the obvious one.",
  "Research is where meaningful design begins.",
  "Technology should remove barriers, not create them.",
  "An interface only matters when it makes someone’s life better.",
];

export default function WhatIBelieve() {
  const root = useRef<HTMLElement>(null);
  useSectionReveal(root);

  return (
    <section ref={root} id="beliefs" className="py-[clamp(80px,10vw,150px)]">
      <div className="wrap grid grid-cols-1 items-start gap-10 md:grid-cols-[200px_minmax(0,1fr)]">
        <span className="eyebrow reveal md:pt-2">What I believe</span>
        <div>
          <h2 className="reveal m-0 max-w-[14ch] text-[clamp(40px,5.4vw,78px)] font-medium leading-[0.95] tracking-[-0.06em]">
            Good design fixes the{" "}
            <em className="font-serif font-normal">right problem</em>.
          </h2>
          <ul className="reveal mt-[clamp(36px,5vw,64px)] grid list-none gap-0 border-t border-line p-0">
            {BELIEFS.map((b) => (
              <li
                key={b}
                className="border-b border-line py-6 text-[clamp(19px,2vw,26px)] font-medium leading-[1.35] tracking-[-0.025em] text-cream"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
