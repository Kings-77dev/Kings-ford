"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowRight, ArrowUpRight } from "@/components/icons/Arrows";

/**
 * Hero: a clean three-beat headline ("Research. Design. Build.") with a
 * cursor-driven glow, grain overlay, live clock, and an availability spec panel.
 *
 * Self-contained so it can be swapped for a different hero later without
 * touching the rest of the page.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [clock, setClock] = useState("");

  /* live Amsterdam clock */
  useEffect(() => {
    const tick = () => {
      try {
        setClock(
          new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Europe/Amsterdam",
          }).format(new Date()) + " CET",
        );
      } catch {
        setClock(new Date().toTimeString().slice(0, 5) + " CET");
      }
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  /* entrance */
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".kf-rise", {
          y: 24,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          delay: 0.1,
        })
        .from(
          ".kspec > div",
          { y: 18, opacity: 0, duration: 0.6, stagger: 0.08 },
          0.5,
        );
    },
    { scope: root },
  );

  /* cursor-driven glow (desktop only) */
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    const hero = root.current!;
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
      hero.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="hero-kinetic relative flex min-h-[100svh] items-stretch justify-center overflow-hidden pt-[68px] sm:pt-[76px]"
    >
      <div className="glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="wrap relative z-[2] grid flex-1 items-start gap-[clamp(36px,6vw,96px)] pt-[clamp(28px,4vw,64px)] pb-[clamp(40px,7vw,110px)] md:grid-cols-[minmax(0,1fr)_280px]">
        {/* copy */}
        <div className="flex min-w-0 flex-col justify-center">
          <h1 className="m-0 max-w-[13ch] font-sans text-[clamp(46px,9vw,140px)] font-medium leading-[1.05] tracking-[-0.06em]">
            <span className="kf-rise block">Research.</span>
            <span className="kf-rise block">Design.</span>
            <span className="kf-rise block">Build.</span>
          </h1>
          <p className="kf-rise m-0 mt-8 max-w-[52ch] text-[clamp(17px,1.4vw,21px)] text-muted">
            I use research, design, and technology to solve meaningful problems
            that improve people’s lives.
          </p>
          <div className="kf-rise mt-[38px] flex flex-wrap gap-[13px]">
            <a className="btn" data-track="hero-work" href="#work">
              View selected work <ArrowUpRight />
            </a>
            <a className="btn ghost" data-track="hero-contact" href="#contact">
              Get in touch <ArrowRight />
            </a>
          </div>
        </div>

        {/* spec panel */}
        <aside
          className="kspec grid gap-6 self-center border-line max-md:border-t max-md:grid-cols-2 max-md:pt-[22px] md:border-l md:pl-[22px]"
          aria-label="Availability and location"
        >
          <Spec k="Based in">The Hague, NL</Spec>
          <Spec k="Status">
            <b className="status inline-flex items-center gap-[9px] font-mono text-[13px] font-normal tracking-[0.02em] text-cream">
              <i />
              Open to product design + frontend roles
            </b>
          </Spec>
          <Spec k="Local time">{clock}</Spec>
          <Spec k="Languages">English</Spec>
        </aside>
      </div>
    </section>
  );
}

function Spec({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-[6px]">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        {k}
      </span>
      {typeof children === "string" ? (
        <b className="font-mono text-[13px] font-normal tracking-[0.02em] text-cream">
          {children}
        </b>
      ) : (
        children
      )}
    </div>
  );
}
