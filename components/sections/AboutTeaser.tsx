"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons/Arrows";
import { useRef } from "react";
import { useSectionReveal } from "@/components/fx/useSectionReveal";

/** Short About teaser on the homepage, full statement + bio live at /about. */
export default function AboutTeaser() {
  const root = useRef<HTMLElement>(null);
  useSectionReveal(root);

  return (
    <section ref={root} id="about" className="py-[clamp(80px,10vw,150px)]">
      <div className="wrap grid grid-cols-1 items-center gap-[clamp(28px,6vw,92px)] md:grid-cols-[5fr_7fr]">
        <div className="reveal relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-line md:aspect-[4/5]">
          <div
            className="absolute inset-0 grid place-items-center"
            style={{
              background:
                "radial-gradient(120% 90% at 80% 10%,rgba(184,67,31,.22),transparent 55%),linear-gradient(145deg,#2e2519,#171209)",
            }}
            aria-hidden="true"
          >
            <span className="font-serif text-[clamp(90px,11vw,170px)] leading-none tracking-[-0.06em] text-[rgb(243_237_223/0.16)]">
              K<em className="text-[rgb(184_67_31/0.45)]">F</em>
            </span>
          </div>
          <span className="absolute bottom-[8%] left-[9%] z-[2] font-mono text-[9px] uppercase leading-[1.7] tracking-[0.12em] text-[#f4e9db] md:[writing-mode:vertical-rl] md:rotate-180">
            The Hague · UX · UI · Frontend · Visual systems
          </span>
        </div>

        <div className="reveal">
          <span className="eyebrow">About</span>
          <h2 className="m-0 mt-3 max-w-[12ch] text-[clamp(43px,5.7vw,82px)] font-medium leading-[0.93] tracking-[-0.065em]">
            How can I make someone&rsquo;s life{" "}
            <em className="font-serif font-normal">
              better
            </em>
            ?
          </h2>
          <p className="mt-6 max-w-[59ch] text-[17px] text-muted">
            <strong className="font-medium text-cream">
              One question drives my work.
            </strong>{" "}
            I research, design, and build digital products that try to answer
            it.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-[18px]">
            <Link className="text-link" href="/about">
              Read more <ArrowRight />
            </Link>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/kingsford-agyei-841b80216/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
