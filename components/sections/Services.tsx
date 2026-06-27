"use client";

import { useRef, useState } from "react";
import { services } from "@/lib/data";
import { ArrowRight } from "@/components/icons/Arrows";
import { useSectionReveal } from "@/components/fx/useSectionReveal";

export default function Services() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(0);
  useSectionReveal(root);

  return (
    <section ref={root} id="services" className="py-[clamp(80px,10vw,150px)]">
      <div className="wrap">
        <div className="section-top mb-[clamp(60px,7.5vw,120px)] grid grid-cols-1 items-start gap-10 md:grid-cols-[200px_minmax(0,1fr)]">
          <span className="eyebrow">Ways to work together</span>
          <div>
            <h2 className="m-0 max-w-[11ch] text-[clamp(40px,5.4vw,78px)] font-medium leading-[0.95] tracking-[-0.06em]">
              A sharp idea needs a{" "}
              <em className="font-serif font-normal">
                usable system
              </em>
              .
            </h2>
            <p className="mt-5 max-w-[54ch] text-[17px] text-muted">
              Open the service that best matches your current problem.
            </p>
          </div>
        </div>

        <div className="acc-list border-t border-line">
          {services.map((s, i) => (
            <details
              key={s.num}
              className="acc reveal border-b border-line"
              open={open === i}
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(open === i ? -1 : i);
                }}
                className="grid cursor-pointer list-none grid-cols-[40px_1fr_auto] items-center py-6 sm:grid-cols-[52px_1fr_auto] [&::-webkit-details-marker]:hidden"
              >
                <b className="font-mono text-[10px] font-normal text-accent">
                  {s.num}
                </b>
                <h3 className="m-0 text-[28px] font-medium leading-none tracking-[-0.075em] sm:text-[clamp(30px,4vw,58px)]">
                  {s.title}
                </h3>
                <i className="acc-plus font-mono text-[20px] not-italic text-accent transition-transform duration-200">
                  +
                </i>
              </summary>
              <div className="grid grid-cols-1 gap-[26px] pb-7 sm:grid-cols-[1fr_0.9fr] sm:pl-[52px]">
                <div>
                  <p className="m-0 mb-4 max-w-[56ch] text-muted">{s.copy}</p>
                  <div className="mb-[18px] font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    {s.scope}
                  </div>
                  <a
                    className="text-link"
                    data-track={s.track}
                    href="#contact"
                  >
                    {s.cta} <ArrowRight />
                  </a>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-[220px] w-full border border-line object-cover"
                  src={s.img}
                  alt={s.imgAlt}
                  loading="lazy"
                />
              </div>
            </details>
          ))}
        </div>

        <div className="custom-note reveal mt-[15px] grid grid-cols-1 items-center gap-[10px] rounded-[var(--radius-card)] border border-line bg-[rgb(243_237_223/0.025)] px-[26px] py-[22px] md:grid-cols-[180px_minmax(0,1fr)_auto] md:gap-6">
          <span className="eyebrow">Custom projects</span>
          <p className="m-0 text-[15px] text-muted">
            Need something more involved? Larger website redesigns, multi-page
            builds, and longer-term support are scoped around the project.
          </p>
          <a
            className="text-link whitespace-nowrap text-[13px]"
            data-track="service-custom"
            href="#contact"
          >
            Discuss a custom project <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
