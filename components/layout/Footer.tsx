import Link from "next/link";

const colLink =
  "block py-[2px] mb-2 text-[14px] text-[#e9e0d3] transition-colors duration-200 hover:text-accent";
const colHead =
  "mb-[14px] font-mono text-[9px] uppercase tracking-[0.15em] text-muted";

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(243_237_223/0.08)] bg-[#0c0a07] pt-12 pb-[25px]">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-[1.5fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div className="col-span-2 font-mono text-[18px] font-bold sm:col-span-1">
            KINGS FORD
            <sup className="relative top-[-0.18em] align-top text-[0.52em]">®</sup>
            <p className="mt-[14px] max-w-[25ch] font-sans text-[14px] font-normal text-muted">
              UI/UX designer and frontend developer creating clear websites,
              interfaces, and visual systems.
            </p>
          </div>
          <div>
            <h4 className={colHead}>Site</h4>
            <Link className={colLink} href="/#work">
              Work
            </Link>
            <Link className={colLink} href="/about">
              About
            </Link>
            <Link className={colLink} href="/#contact">
              Contact
            </Link>
          </div>
          <div>
            <h4 className={colHead}>For teams</h4>
            <a className={colLink} href="#">
              Recruitment agencies
            </a>
            <a className={colLink} href="#">
              Design teams
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className={colHead}>Elsewhere</h4>
            <a className={colLink} href="mailto:freshfaya6@yahoo.com">
              freshfaya6@yahoo.com
            </a>
            <a className={colLink} href="#">
              LinkedIn
            </a>
            <a className={colLink} href="#">
              Book a call
            </a>
          </div>
        </div>
        <div className="mt-[38px] flex flex-col gap-2 border-t border-[rgb(243_237_223/0.09)] pt-[22px] font-mono text-[9px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:justify-between">
          <span>The Hague, NL · English</span>
          <span>Designed and built by Kings Ford · © 2026</span>
        </div>
      </div>
    </footer>
  );
}
