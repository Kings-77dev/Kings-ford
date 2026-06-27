"use client";

import { useRef } from "react";
import { useSectionReveal } from "@/components/fx/useSectionReveal";
import { ArrowRight } from "@/components/icons/Arrows";

const paths = [
  {
    track: "path-recruitment",
    eyebrow: "For recruitment agencies",
    title: (
      <>
        Make specialist expertise easier to{" "}
        <em className="font-serif font-normal tracking-[-0.02em]">
          trust
        </em>
        .
      </>
    ),
    copy: "Clearer positioning, stronger candidate and employer pathways, and more visible proof at the moments where clients decide whether to get in touch.",
    outcomes: ["Audience routes", "Trust signals", "Service hierarchy", "Responsive system"],
    cta: "Explore the recruitment offer",
    gradient: "linear-gradient(145deg,#261b15,#19130f)",
  },
  {
    track: "path-design-teams",
    eyebrow: "For design & digital teams",
    title: (
      <>
        Add a quiet, capable pair of{" "}
        <em className="font-serif font-normal tracking-[-0.02em]">
          hands
        </em>
        .
      </>
    ),
    copy: "Design support that slots into an existing workflow without unnecessary overhead: sharp execution, clear communication, and a practical mindset.",
    outcomes: ["UI production", "Components", "Campaign pages", "Frontend support"],
    cta: "Explore overflow support",
    gradient: "linear-gradient(145deg,#1c211a,#141712)",
  },
];

export default function Pathways() {
  const root = useRef<HTMLElement>(null);
  useSectionReveal(root);

  return (
    <section ref={root} id="pathways" className="py-[clamp(80px,10vw,150px)]">
      <div className="wrap">
        <div className="section-top mb-[clamp(60px,7.5vw,120px)] grid grid-cols-1 items-start gap-10 md:grid-cols-[200px_minmax(0,1fr)]">
          <span className="eyebrow">A closer fit for your team</span>
          <div>
            <h2 className="m-0 max-w-[11ch] text-[clamp(40px,5.4vw,78px)] font-medium leading-[0.95] tracking-[-0.06em]">
              Specific problems deserve a{" "}
              <em className="font-serif font-normal">
                specific route
              </em>
              .
            </h2>
            <p className="mt-5 max-w-[54ch] text-[17px] text-muted">
              Two focused entry points for the types of teams I am currently
              helping most often.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {paths.map((p) => (
            <a
              key={p.track}
              className="path reveal relative flex min-h-[340px] flex-col overflow-hidden rounded-[var(--radius-card)] border border-line p-[clamp(26px,4vw,48px)] transition-colors duration-300 hover:border-accent sm:min-h-[370px]"
              data-track={p.track}
              href="#"
              style={{ background: p.gradient }}
            >
              <span className="inline-flex items-center gap-2 text-[rgb(243_237_223/0.7)]">
                <i className="inline-block h-[6px] w-[6px] flex-none rounded-full bg-accent" />
                <span className="eyebrow text-[rgb(243_237_223/0.7)]">
                  {p.eyebrow}
                </span>
              </span>
              <h3 className="mb-[15px] mt-[23px] max-w-[14ch] text-[clamp(34px,4vw,57px)] font-medium leading-[0.93] tracking-[-0.065em] text-balance">
                {p.title}
              </h3>
              <p className="m-0 max-w-[44ch] text-[15px] text-muted">{p.copy}</p>
              <div className="mt-5 flex max-w-[45ch] flex-wrap gap-[7px]">
                {p.outcomes.map((o) => (
                  <span
                    key={o}
                    className="rounded-full border border-[rgb(243_237_223/0.13)] px-[7px] py-[6px] font-mono text-[8px] uppercase tracking-[0.08em] text-[#c9bdad]"
                  >
                    {o}
                  </span>
                ))}
              </div>
              <span className="text-link mt-auto pt-[26px] text-[14px]">
                {p.cta} <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
