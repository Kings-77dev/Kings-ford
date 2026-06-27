"use client";

import { ArrowUpRight } from "@/components/icons/Arrows";
import { useEffect, useState } from "react";

/** Floating "Let's talk" button that appears mid-page and hides near the footer. */
export default function StickyTalk() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(
        y > innerHeight * 0.72 &&
          y < document.body.scrollHeight - innerHeight * 1.15,
      );
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed right-4 bottom-4 sm:right-[22px] sm:bottom-5 z-30 transition-all duration-300"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "none" : "translateY(12px)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <a
        className="btn shadow-[0_15px_36px_rgba(0,0,0,0.23)]"
        data-track="sticky-talk"
        href="#contact"
      >
        Let&rsquo;s talk <ArrowUpRight />
      </a>
    </div>
  );
}
