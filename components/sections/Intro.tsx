"use client";

import { useRef } from "react";
import { useSectionReveal } from "@/components/fx/useSectionReveal";

/** Introduction band: the positioning statement, just under the hero. */
export default function Intro() {
  const root = useRef<HTMLElement>(null);
  useSectionReveal(root);

  return (
    <section
      ref={root}
      className="border-b border-line py-[clamp(64px,9vw,128px)]"
    >
      <div className="wrap grid grid-cols-1 items-start gap-8 md:grid-cols-[200px_minmax(0,1fr)]">
        <span className="eyebrow reveal md:pt-2">Approach</span>
        <p className="reveal max-w-[46ch] text-[clamp(21px,2.1vw,30px)] leading-[1.4] tracking-[-0.01em] text-cream">
          From research-heavy platforms to editorial websites and internal
          tools, I enjoy understanding complex problems and turning them into
          clear, intuitive products.{" "}
          <span className="text-muted">
            My background runs from UX research through to frontend code, so I
            can take a project from the first question to a shipped interface,
            without handing it between three different people.
          </span>
        </p>
      </div>
    </section>
  );
}
