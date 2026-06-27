"use client";

import { useEffect, useRef, useState } from "react";

export type NavSection = { id: string; label: string };

/**
 * Sticky scroll-spy navigation for a case study.
 * - Desktop (lg+): a slim fixed vertical marker rail on the left edge. Each
 *   item is a tick + label; the active section gets an elongated accent tick
 *   and a persistent label, others reveal their label on hover.
 * - Mobile (<lg): a compact sticky horizontal chip menu under the header.
 * Active section is tracked with an IntersectionObserver. Anchor links smooth-
 * scroll through the site's existing Lenis handler.
 */
export default function CaseStudyNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  // keep the active chip in view on the mobile rail
  useEffect(() => {
    const bar = mobileRef.current;
    if (!bar) return;
    const chip = bar.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    chip?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [active]);

  return (
    <>
      {/* Desktop vertical rail */}
      <nav
        aria-label="Case study sections"
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 lg:flex xl:left-7"
      >
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={on ? "true" : undefined}
              className="group flex items-center gap-3 py-1"
            >
              <span
                className={`h-px transition-all duration-300 ${
                  on
                    ? "w-7 bg-accent"
                    : "w-4 bg-line-strong group-hover:w-6 group-hover:bg-muted"
                }`}
              />
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300 ${
                  on
                    ? "translate-x-0 text-cream opacity-100"
                    : "-translate-x-1 text-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {s.label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Mobile sticky horizontal menu */}
      <div className="sticky top-[68px] z-40 border-y border-line bg-bg/85 backdrop-blur-[14px] lg:hidden">
        <div
          ref={mobileRef}
          className="flex gap-2 overflow-x-auto px-[var(--gutter)] py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sections.map((s) => {
            const on = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-chip={s.id}
                aria-current={on ? "true" : undefined}
                className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-[6px] font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                  on
                    ? "border-accent bg-accent/10 text-cream"
                    : "border-line text-muted"
                }`}
              >
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
