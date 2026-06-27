"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { projects } from "@/lib/data";
import { useIsDesktop } from "@/components/fx/useIsDesktop";
import { useSectionReveal } from "@/components/fx/useSectionReveal";
import WorkPreview from "@/components/work/WorkPreview";
import { ArrowRight, ArrowUpRight } from "@/components/icons/Arrows";

const SOURCES = projects.map((p) => p.img);

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [active, setActive] = useState(0);
  const [glOn, setGlOn] = useState(false);
  const { desktop, reduced } = useIsDesktop();

  useSectionReveal(root);

  // decide whether to upgrade to the WebGL preview
  useEffect(() => {
    if (!desktop || reduced) {
      setGlOn(false);
      return;
    }
    const probe = document.createElement("canvas");
    const gl =
      probe.getContext("webgl2") || probe.getContext("webgl");
    setGlOn(!!gl);
  }, [desktop, reduced]);

  // crossfade the fallback <img> when WebGL is off
  useEffect(() => {
    if (glOn || reduced || !imgRef.current) return;
    const img = imgRef.current;
    gsap.fromTo(
      img,
      { opacity: 0.25, scale: 1.04 },
      { opacity: 1, scale: 1, duration: 0.55, ease: "power2.out" },
    );
  }, [active, glOn, reduced]);

  const select = (i: number) => setActive(i);
  const current = projects[active];

  return (
    <section
      ref={root}
      id="work"
      className="bg-bg-2 py-[clamp(80px,10vw,150px)]"
    >
      <div className="wrap">
        <div className="section-top mb-[clamp(60px,7.5vw,120px)] grid grid-cols-1 items-start gap-10 md:grid-cols-[200px_minmax(0,1fr)]">
          <span className="eyebrow">Selected work</span>
          <div>
            <h2 className="m-0 max-w-[11ch] text-[clamp(40px,5.4vw,78px)] font-medium leading-[0.95] tracking-[-0.06em]">
              Work that makes the offer{" "}
              <em className="font-serif font-normal">
                clearer
              </em>
              .
            </h2>
            <p className="mt-5 max-w-[54ch] text-[17px] text-muted">
              A focused selection of projects across UX, visual design, spatial
              experience, and frontend execution.
            </p>
          </div>
        </div>

        {/* Desktop / tablet index: unchanged navigation behaviour */}
        <div className="hidden items-stretch gap-7 md:grid md:grid-cols-[0.82fr_1.18fr]">
          <div className="border-t border-line">
            {projects.map((p, i) => (
              <Link
                key={p.id}
                href={`/work/${p.id}`}
                className={`index-row grid w-full grid-cols-[1fr_auto] items-center gap-[14px] border-b border-line py-6 text-left transition-all duration-300 ${
                  i === active
                    ? "bg-[rgb(243_237_223/0.045)] pl-[14px]"
                    : "hover:bg-[rgb(243_237_223/0.045)] hover:pl-[14px]"
                }`}
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                aria-current={i === active ? "true" : undefined}
              >
                <div>
                  <h3
                    className={`m-0 text-[clamp(26px,3vw,46px)] font-medium leading-none tracking-[-0.07em] transition-colors duration-300 ${
                      i === active ? "text-accent" : ""
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-[6px] font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    {p.subtitle}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-muted">
                  {p.year} <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>

          <div
            className={`active-preview relative overflow-hidden border border-line bg-[#101010] md:sticky md:top-[100px] md:h-auto md:min-h-[570px] md:self-stretch ${
              glOn ? "gl" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              className="active-preview-img h-full w-full object-contain object-top"
              src={current.img}
              alt={`${current.title} preview`}
            />
            {glOn && <WorkPreview sources={SOURCES} activeSrc={current.img} />}
            <PreviewOverlay project={current} />
          </div>
        </div>

        {/* Mobile index: accordion-style preview attached to the active row */}
        <div className="border-t border-line md:hidden">
          {projects.map((p, i) => {
            const isActive = i === active;
            return (
              <div key={p.id}>
                {isActive && (
                  <div id={`work-mobile-preview-${p.id}`} className="active-preview relative mb-7 h-[390px] overflow-hidden border border-line bg-[#101010]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="active-preview-img h-full w-full object-contain object-top"
                      src={p.img}
                      alt={`${p.title} preview`}
                    />
                    <PreviewOverlay project={p} />
                  </div>
                )}
                <button
                  type="button"
                  className={`index-row grid w-full grid-cols-1 items-center gap-[14px] border-b border-line py-6 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[rgb(243_237_223/0.045)] pl-[14px]"
                      : ""
                  }`}
                  onClick={() => select(i)}
                  aria-expanded={isActive}
                  aria-controls={`work-mobile-preview-${p.id}`}
                >
                  <div>
                    <h3
                      className={`m-0 text-[24px] font-medium leading-none tracking-[-0.07em] transition-colors duration-300 ${
                        isActive ? "text-accent" : ""
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-[6px] font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                      {p.subtitle}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function PreviewOverlay({ project }: { project: Project }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-[rgb(10_8_6/0.96)] to-transparent p-7">
      <h3 className="m-0 mb-2 text-[clamp(26px,2.6vw,40px)] font-medium tracking-[-0.07em] text-cream">
        {project.title}
      </h3>
      <p className="m-0 mb-4 max-w-[52ch] text-[14px] text-[#cdc4b4]">
        {project.copy}
      </p>
      <Link
        className="pointer-events-auto inline-flex items-center gap-[9px] font-mono text-[10px] uppercase tracking-[0.12em] text-cream"
        href={`/work/${project.id}`}
      >
        <span className="wc-dot" />
        View case study <ArrowRight className="h-[1.2em] w-[1.2em] text-accent-soft" />
      </Link>
    </div>
  );
}
