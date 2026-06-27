"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { ArrowRight, ArrowUpRight } from "@/components/icons/Arrows";

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.registerPlugin(ScrollTrigger, SplitText);

      const split = SplitText.create("#contactTitle", {
        type: "lines,words",
        mask: "lines",
      });
      gsap.from(split.words, {
        yPercent: 115,
        duration: 1,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: { trigger: root.current, start: "top 72%", once: true },
      });
      gsap.from(".contact-fade", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 62%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="contact"
      className="relative overflow-hidden bg-cream py-[clamp(72px,9vw,140px)] text-[#1c1711]"
    >
      <div className="wrap relative z-[1]">
        <span className="eyebrow text-[#786c60]">Start a conversation</span>
        <h2
          id="contactTitle"
          className="m-0 mb-[30px] mt-5 max-w-[9ch] text-[clamp(60px,9vw,144px)] font-medium leading-[0.86] tracking-[-0.08em]"
        >
          Have a project in mind?{" "}
          <em className="font-serif font-normal italic tracking-[-0.04em] text-accent">
            Let&rsquo;s talk.
          </em>
        </h2>
        <p className="contact-fade max-w-[50ch] text-[18px] text-[#685d51]">
          Tell me what you are building, what feels unclear, or where your team
          needs extra support. I will reply with a practical next step.
        </p>
        <div className="contact-fade mt-7 flex flex-wrap gap-[13px]">
          <a
            className="btn"
            data-track="contact-email"
            href="mailto:freshfaya6@yahoo.com"
          >
            Send an email <ArrowUpRight />
          </a>
          <a
            className="btn ghost border-[rgb(28_23_17/0.26)] text-[#1c1711] hover:border-[#1c1711] hover:bg-[rgb(28_23_17/0.04)]"
            data-track="contact-booking"
            href="#"
          >
            Book a short intro <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
