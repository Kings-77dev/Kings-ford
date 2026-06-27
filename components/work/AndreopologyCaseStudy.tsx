import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons/Arrows";
import EditorialVideo from "@/components/work/EditorialVideo";

/**
 * Andreopology Studio, a bespoke, editorial, image-led layout (intentionally
 * different from the studio's structured case studies). A slow gallery
 * walk-through on the near-black canvas the site itself uses: framed pages and
 * real prototype clips alternating with short captions. The site is monochrome
 * by design, so this page carries no rust accent. Content from the brief;
 * page.tsx skips the standard hero/facts for this slug so this owns the page.
 */

const SLOT = "/assets/andreopology";

const DETAILS: [string, string][] = [
  [
    "Dark gallery mode",
    "the primary language, the contrast makes the photography feel cinematic and premium.",
  ],
  [
    "A quiet UI",
    "navigation, captions, and metadata kept small so they support the images instead of competing.",
  ],
  [
    "Subtle interaction throughout",
    "fixed chrome, a splash state, a custom cursor, scroll-reveal, sticky portrait, each restrained enough never to pull focus.",
  ],
];

export default function AndreopologyCaseStudy() {
  return (
    <article className="pb-[clamp(30px,5vw,70px)]">
      {/* ── Title block ──────────────────────────────────────────────── */}
      <header className="wrap pt-[clamp(16px,3vw,36px)]">
        <div className="mb-[clamp(44px,7vw,96px)] flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <Link href="/#work" className="transition-colors hover:text-cream">
            <ArrowLeft /> All work
          </Link>
          <span>Case study · 04 / 05</span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          A slow photography archive
        </span>
        <h1 className="mt-5 max-w-[14ch] text-[clamp(46px,8.5vw,116px)] font-medium leading-[0.92] tracking-[-0.055em] text-cream">
          Andreopology Studio
        </h1>
        <p className="mt-7 max-w-[44ch] text-[clamp(18px,1.7vw,26px)] leading-[1.35] text-muted">
          A website for a documentary photography studio, built like an editorial
          archive rather than a portfolio.
        </p>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-7 font-mono text-[12px] leading-[1.6] text-muted">
          <span>Design &amp; front-end prototype · React · 2026</span>
          <span>
            Role:{" "}
            <span className="text-cream">
              art direction, UI design, interaction design, front-end
              prototyping, design handoff
            </span>
          </span>
        </div>
      </header>

      {/* ── Cover ────────────────────────────────────────────────────── */}
      <Block top>
        <Frame
          src={`${SLOT}/hero.png`}
          width={2200}
          height={1195}
          addr="andreopology.studio"
          alt="The Andreopology homepage, a giant serif wordmark on near-black, with selected-plate metadata"
        />
        <Lead>
          A documentary photography studio didn’t need a portfolio. It needed an{" "}
          <em>archive</em>, a dark gallery you move through slowly, where every
          interface decision steps back so the images lead.
        </Lead>
      </Block>

      {/* ── Homepage ─────────────────────────────────────────────────── */}
      <Block>
        <EditorialVideo
          src={`${SLOT}/landing-page.mp4`}
          poster={`${SLOT}/landing-page-poster.jpg`}
          addr="andreopology.studio"
        />
        <Cap>
          The homepage moves through plates on scroll, a cinematic first
          impression, tactile and gallery-like, with quiet archive metadata.
        </Cap>
      </Block>

      {/* ── Work archive ─────────────────────────────────────────────── */}
      <Block>
        <Frame
          src={`${SLOT}/work-grid.png`}
          width={2200}
          height={1195}
          addr="andreopology.studio/work"
          alt="The work archive, series presented as a catalogue with editorial metadata"
        />
        <Cap>
          Work is presented as a catalogue, not a grid. Each series carries a
          number, year, location, and plate count, editorial, archival,
          considered.
        </Cap>
      </Block>

      {/* ── Series detail ────────────────────────────────────────────── */}
      <Block>
        <EditorialVideo
          src={`${SLOT}/series.mp4`}
          poster={`${SLOT}/series-poster.jpg`}
          addr="andreopology.studio/series"
        />
        <Cap>
          Inside a series, plates are laid out like a contact sheet, photography
          as documented observation, not decoration.
        </Cap>
      </Block>

      {/* ── The system, built spec card ─────────────────────────────── */}
      <Block>
        <SpecCard />
        <Cap>
          The whole site is built on one idea: a dark, near-black gallery
          canvas; serif display titles, monospace metadata, a quiet sans for the
          UI; an interface kept deliberately small so the photography stays the
          centre of attention.
        </Cap>
      </Block>

      {/* ── Studio / About ───────────────────────────────────────────── */}
      <Block>
        <EditorialVideo
          src={`${SLOT}/studio-page.mp4`}
          poster={`${SLOT}/studio-page-poster.jpg`}
          addr="andreopology.studio/studio"
        />
        <Cap>
          The Studio page pins the photographer’s portrait while biography,
          projects, and exhibitions scroll alongside, identity as part of the
          experience, not a plain CV page.
        </Cap>
      </Block>

      {/* ── Store ────────────────────────────────────────────────────── */}
      <Block>
        <EditorialVideo
          src={`${SLOT}/shop.mp4`}
          poster={`${SLOT}/shop-poster.jpg`}
          addr="andreopology.studio/shop"
        />
        <Cap>
          A store route leaves room for prints and editions, the work, available
          to take home, without breaking the gallery’s quiet.
        </Cap>
      </Block>

      {/* ── Inquire ──────────────────────────────────────────────────── */}
      <Block>
        <EditorialVideo
          src={`${SLOT}/contact.mp4`}
          poster={`${SLOT}/contact-poster.jpg`}
          addr="andreopology.studio/contact"
        />
        <Cap>
          The inquiry route keeps the commercial path clear, portraits,
          weddings, editorial, while holding the same restrained tone.
        </Cap>
      </Block>

      {/* ── Prototype statement ──────────────────────────────────────── */}
      <Block>
        <Lead>
          Designed and prototyped in React, so the motion, the scrolling, and
          the sticky behaviour are real, not faked. ✨
        </Lead>
      </Block>

      {/* ── Details + What it is + sign-off ──────────────────────────── */}
      <section className="wrap pt-[clamp(50px,8vw,110px)]">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-[clamp(28px,3.8vw,50px)] font-medium leading-[1.0] tracking-[-0.045em] text-cream">
            The details that hold it together
          </h2>
          <ul className="mt-8 grid list-none gap-0 p-0">
            {DETAILS.map(([t, d]) => (
              <li
                key={t}
                className="grid grid-cols-[auto_1fr] gap-4 border-t border-line py-5"
              >
                <span className="mt-[11px] h-px w-5 shrink-0 bg-line-strong" />
                <p className="m-0 text-[clamp(16px,1.3vw,18px)] leading-[1.5] text-muted">
                  <span className="text-cream">{t}</span>: {d}
                </p>
              </li>
            ))}
          </ul>

          <h2 className="mt-[clamp(54px,7vw,96px)] text-[clamp(28px,3.8vw,50px)] font-medium leading-[1.0] tracking-[-0.045em] text-cream">
            What it is
          </h2>
          <p className="mt-6 text-[clamp(17px,1.4vw,20px)] leading-[1.6] text-muted">
            A high-fidelity website design and front-end prototype, packaged for
            production handoff: visual identity, an archive-style way to browse
            series, a cinematic homepage, a distinctive Studio page, store and
            inquiry routes, and handoff documentation.{" "}
            <span className="text-cream">
              Not a launched site; a design and prototype ready to be built.
            </span>
          </p>

          <div className="mt-[clamp(54px,7vw,96px)] flex flex-col gap-1 border-t border-line pt-7 font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
            <span className="text-cream">
              Design &amp; front-end prototype, Kings Ford®
            </span>
            <span>Andreopology Studio · 2026</span>
          </div>
        </div>
      </section>
    </article>
  );
}

/* ── helpers ───────────────────────────────────────────────────────────── */

function Block({
  children,
  top = false,
}: {
  children: React.ReactNode;
  top?: boolean;
}) {
  return (
    <section
      className={`wrap ${top ? "pt-[clamp(30px,5vw,56px)]" : "pt-[clamp(54px,8vw,118px)]"}`}
    >
      <div className="mx-auto max-w-[960px]">{children}</div>
    </section>
  );
}

function Frame({
  src,
  width,
  height,
  alt,
  addr,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  addr: string;
}) {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-[14px] border border-line bg-[#0c0a07]">
        <div className="chrome">
          <i />
          <i />
          <i />
          <span className="addr">{addr}</span>
        </div>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1280px) 1240px, 100vw"
          className="block h-auto w-full object-cover"
        />
      </div>
    </figure>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-[clamp(32px,4.5vw,60px)] max-w-[40ch] text-center text-[clamp(22px,2.7vw,36px)] font-medium leading-[1.25] tracking-[-0.03em] text-cream [&_em]:font-serif [&_em]:font-normal">
      {children}
    </p>
  );
}

function Cap({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-7 max-w-[58ch] text-center text-[clamp(16px,1.35vw,20px)] leading-[1.55] text-muted [&_em]:font-serif [&_em]:font-normal [&_em]:text-cream [&_span]:text-cream">
      {children}
    </p>
  );
}

function SpecCard() {
  const type: [string, string][] = [
    ["Display", "Serif"],
    ["Metadata", "Mono"],
    ["Interface", "Sans"],
  ];
  const palette: [string, string][] = [
    ["#0D0C0A", "Gallery"],
    ["#1A1813", "Surface"],
    ["#8C8579", "Metadata"],
    ["#F2EFE9", "Plates / text"],
  ];
  return (
    <div className="grid gap-px overflow-hidden rounded-[16px] border border-line bg-line md:grid-cols-[1.25fr_1fr]">
      <div className="bg-[#15120d] p-8 sm:p-10">
        <div className="mb-7 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Type
        </div>
        <div className="font-serif text-[clamp(44px,6.5vw,82px)] leading-[0.9] tracking-[-0.02em] text-cream">
          Via Roma
        </div>
        <div className="mt-3 font-mono text-[11px] tracking-[0.12em] text-muted">
          № 02 · COSENZA, IT · ARCHIVE
        </div>
        <div className="mt-8 grid gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.1em]">
          {type.map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span className="text-muted">{k}</span>
              <span className="text-cream">{v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#15120d] p-8 sm:p-10">
        <div className="mb-7 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Palette
        </div>
        <div className="grid gap-3">
          {palette.map(([hex, name]) => (
            <div key={hex} className="flex items-center gap-4">
              <span
                className="h-9 w-9 shrink-0 rounded-md border border-line"
                style={{ backgroundColor: hex }}
              />
              <div className="flex w-full items-baseline justify-between font-mono text-[11px]">
                <span className="text-cream">{name}</span>
                <span className="text-muted">{hex}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
