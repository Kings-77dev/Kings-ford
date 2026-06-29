"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { ArrowUpRight } from "@/components/icons/Arrows";

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.registerPlugin(ScrollTrigger, SplitText);

      // No mask: a plain line split + rise-and-fade. The previous mask:"lines"
      // wrapped each line in overflow:hidden, which clipped descenders (g, p, y).
      const split = SplitText.create("#contactTitle", { type: "lines" });
      gsap.from(split.lines, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: { trigger: root.current, start: "top 72%", once: true },
        onComplete: () => split.revert(),
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
          className="m-0 mb-[30px] mt-5 max-w-[18ch] text-[clamp(40px,6vw,94px)] font-medium leading-[1.05] tracking-[-0.06em]"
        >
          If you&rsquo;re working on a problem that matters, I&rsquo;d love to
          help{" "}
          <em className="font-serif font-normal italic tracking-[-0.04em] text-accent">
            solve it.
          </em>
        </h2>
        <p className="contact-fade max-w-[52ch] text-[18px] text-[#685d51]">
          I&rsquo;m looking for a role where research, design, and frontend come
          together on problems that matter. If that&rsquo;s the kind of work
          your team does, I&rsquo;d like to hear from you.
        </p>
        <div className="contact-fade mt-7 flex flex-wrap gap-[13px]">
          <a
            className="btn"
            data-track="contact-email"
            href="mailto:kings.agyei6@gmail.com"
          >
            Send an email <ArrowUpRight />
          </a>
          <a
            className="btn ghost border-[rgb(28_23_17/0.26)] text-[#1c1711] hover:border-[#1c1711] hover:bg-[rgb(28_23_17/0.04)]"
            data-track="contact-linkedin"
            href="https://www.linkedin.com/in/kingsford-agyei-841b80216/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
