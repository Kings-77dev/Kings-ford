"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowRight, ArrowUpRight } from "@/components/icons/Arrows";

/**
 * Hero: "Kinetic Field" (variant B from Portfolio v2).
 * "I design <rotating word> for companies in growth." with a cursor-driven
 * glow, grain overlay, live Amsterdam clock and an availability spec panel.
 *
 * Self-contained so it can be swapped for a different hero later without
 * touching the rest of the page.
 */
const WORDS = [
  "websites",
  "brand systems",
  "interfaces",
  "design systems",
  "digital products",
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const slotRef = useRef<HTMLSpanElement>(null);
  const [clock, setClock] = useState(", : , CET");

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

  /* rotating word */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const slot = slotRef.current;
    if (!slot) return;
    const words = Array.from(slot.children) as HTMLElement[];
    let i = 0;
    const id = setInterval(() => {
      const cur = words[i];
      const nxt = words[(i + 1) % words.length];
      cur.classList.remove("on");
      cur.classList.add("out");
      nxt.classList.remove("out");
      nxt.classList.add("on");
      setTimeout(() => cur.classList.remove("out"), 700);
      i = (i + 1) % words.length;
      slot.setAttribute("aria-label", nxt.textContent || "");
    }, 2400);
    return () => clearInterval(id);
  }, []);

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

      <div className="wrap relative z-[2] grid flex-1 items-center gap-[clamp(36px,6vw,96px)] py-[clamp(70px,9vw,130px)] md:grid-cols-[minmax(0,1fr)_280px]">
        {/* copy */}
        <div className="flex min-w-0 flex-col justify-center">
          <h1 className="kf-rise m-0 max-w-[13ch] font-sans text-[clamp(46px,9vw,140px)] font-medium leading-[0.92] tracking-[-0.06em]">
            I design{" "}
            <span
              ref={slotRef}
              className="kinetic-slot"
              aria-label="websites"
            >
              {WORDS.map((w, idx) => (
                <span key={w} className={idx === 0 ? "on" : undefined}>
                  {w}
                </span>
              ))}
            </span>
            <br />
            for companies in growth.
          </h1>
          <p className="kf-rise m-0 mt-8 max-w-[52ch] text-[clamp(17px,1.4vw,21px)] text-muted">
            UX thinking, visual craft, and frontend execution in one workflow,
            shaped around clarity, calm pacing, and momentum.
          </p>
          <div className="kf-rise mt-[38px] flex flex-wrap gap-[13px]">
            <a className="btn" data-track="hero-kin-contact" href="#contact">
              Begin a conversation <ArrowRight />
            </a>
            <a className="btn ghost" data-track="hero-kin-work" href="#work">
              See selected work <ArrowUpRight />
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
              Available for projects
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
