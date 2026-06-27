"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "@/components/icons/Arrows";

/**
 * Fixed top nav. Mobile uses a compact menu to keep the header calm and avoid
 * cramped links on smaller screens.
 */
export default function Nav({ aboutCurrent = false }: { aboutCurrent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      id="nav"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,border-color] duration-300 ${
        scrolled || open
          ? "border-line bg-bg/80 backdrop-blur-[16px]"
          : "border-transparent"
      }`}
    >
      <div className="wrap flex h-[68px] items-center justify-between sm:h-[76px]">
        <Link
          href="/"
          onClick={close}
          className="font-mono text-[14px] font-bold tracking-[0.04em]"
        >
          KINGS FORD
          <sup className="relative top-[-0.18em] align-top text-[0.52em]">®</sup>
        </Link>

        <nav
          className="hidden items-center gap-7 text-[14px] sm:flex"
          aria-label="Primary navigation"
        >
          <Link
            href="/#work"
            className="nav-link py-[10px] text-muted transition-colors duration-200 hover:text-cream"
          >
            Work
          </Link>
          <Link
            href="/about"
            aria-current={aboutCurrent ? "page" : undefined}
            className={`nav-link py-[10px] transition-colors duration-200 hover:text-cream ${
              aboutCurrent ? "text-cream" : "text-muted"
            }`}
          >
            About
          </Link>
          <Link
            href="/#contact"
            data-track="nav-talk"
            className="nav-link flex items-center gap-2 py-[10px] text-cream"
          >
            <i className="block h-2 w-2 rounded-full bg-accent" />
            Let&rsquo;s talk <ArrowUpRight />
          </Link>
        </nav>

        <button
          type="button"
          className="nav-link inline-flex items-center gap-2 py-[10px] font-mono text-[11px] uppercase tracking-[0.14em] text-cream sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-[12px] w-[18px]" aria-hidden="true">
            <span
              className={`absolute left-0 top-[2px] h-px w-full bg-cream transition-transform duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-[2px] left-0 h-px w-full bg-cream transition-transform duration-300 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`sm:hidden ${open ? "block" : "hidden"}`}
      >
        <nav
          className="wrap grid gap-1 border-t border-line bg-bg/95 py-5 backdrop-blur-[16px]"
          aria-label="Mobile navigation"
        >
          <Link
            href="/#work"
            onClick={close}
            className="border-b border-line py-4 text-[34px] font-medium leading-none tracking-[-0.06em] text-cream"
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={close}
            aria-current={aboutCurrent ? "page" : undefined}
            className="border-b border-line py-4 text-[34px] font-medium leading-none tracking-[-0.06em] text-cream"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={close}
            data-track="mobile-nav-talk"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-btn border border-accent bg-accent px-5 py-3 text-[15px] font-bold text-white"
          >
            <i className="block h-2 w-2 rounded-full bg-white/80" />
            Let&rsquo;s talk <ArrowUpRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
