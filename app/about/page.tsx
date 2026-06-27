import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "About, Kings Ford®",
  description:
    "Kings Ford: UI/UX designer and frontend developer in The Hague. Websites, interfaces, and visual systems for small teams trying to make their work easier to understand.",
};

export default function AboutPage() {
  return (
    <>
      <Nav aboutCurrent />
      <main className="pt-[96px]">
        <section className="border-b border-line py-[clamp(50px,8vw,120px)_clamp(50px,7vw,100px)]">
          <div className="wrap">
            <span className="eyebrow mb-[42px] block">About</span>
            <h1 className="m-0 max-w-[12ch] text-[clamp(54px,9.5vw,142px)] font-medium leading-[0.94] tracking-[-0.065em]">
              I&rsquo;m Kings, a designer who likes to{" "}
              <em className="font-serif font-normal">
                build the thing
              </em>
              .
            </h1>
            <p className="mt-[42px] max-w-[48ch] text-[clamp(19px,1.7vw,25px)] leading-[1.5] text-muted">
              A practice from The Hague working in design and frontend, mostly
              for small teams trying to make their work easier to understand.
            </p>
          </div>
        </section>

        <section className="py-[clamp(70px,10vw,150px)]">
          <div className="wrap grid items-start gap-[clamp(36px,6vw,90px)] md:grid-cols-[5fr_7fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-line bg-[linear-gradient(145deg,#3b3126,#1a1611)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(195,122,89,.95),transparent_0),linear-gradient(145deg,#3b3126,#1a1611)]" />
              <div className="absolute bottom-[-8%] right-[9%] h-[70%] w-[52%] rounded-t-[150px] bg-[#211b16]" />
              <div className="absolute right-[-7%] top-[9%] aspect-square w-[66%] rounded-full bg-[#c37a59] opacity-95" />
              <span className="absolute bottom-[18px] left-[18px] rounded-full border border-[rgb(243_237_223/0.18)] bg-[rgb(17_13_9/0.85)] px-3 py-[7px] font-mono text-[10px] uppercase tracking-[0.14em] text-cream backdrop-blur-[10px]">
                ★ The Hague, NL
              </span>
            </div>
            <div className="text-[clamp(17px,1.3vw,21px)] leading-[1.6] text-muted">
              <p className="m-0">
                <strong className="font-medium text-cream">
                  I design and build websites, interfaces, and visual systems
                </strong>{" "}
                , most often for recruitment agencies, design teams, and small
                SaaS companies. My background is split between UX, visual craft,
                and frontend, which means I can take a project from a vague
                problem to a real, shippable thing without bouncing it between
                three different freelancers.
              </p>
              <p className="mt-6">
                I started working independently in 2022 after two years inside a
                Rotterdam product team. The work I&rsquo;m proudest of is usually
                quiet, a clearer route through a form, a homepage that
                doesn&rsquo;t try to do five things at once, a brand that the team
                can actually use without asking for a designer every time.
              </p>
              <p className="mt-6">
                Outside of client work I&rsquo;m building a small library of personal
                projects exploring what genuinely useful interface motion can
                look like, without the spectacle. If any of that overlaps with
                what you&rsquo;re working on, I&rsquo;d be glad to hear about it.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f1ebdc] py-[clamp(70px,10vw,150px)] text-[#211a12]">
          <div className="wrap">
            <h2 className="m-0 mb-[52px] max-w-[14ch] text-[clamp(34px,4.8vw,64px)] font-medium leading-[0.98] tracking-[-0.05em]">
              How I actually work.
            </h2>
            <div className="border-t border-[rgb(33_26_18/0.18)]">
              {[
                [
                  "01",
                  "Clarity first, polish second.",
                  "If the message and the structure aren’t right, no amount of motion or detail will save the page. I’d rather ship something quietly good than something loudly fine.",
                ],
                [
                  "02",
                  "Build it, don’t just design it.",
                  "I close the loop between Figma and the real thing. Most projects ship as code I’ve written, which means decisions actually stick.",
                ],
                [
                  "03",
                  "Small scope, real attention.",
                  "One project at a time, usually. You’ll know who’s doing the work and how to reach me. No agency layer, no account managers.",
                ],
                [
                  "04",
                  "The system, not just the screen.",
                  "I leave teams with a brand, a component set, and a way of working that doesn’t depend on me sticking around forever.",
                ],
              ].map(([num, title, copy]) => (
                <div
                  key={num}
                  className="grid items-start gap-[18px] border-b border-[rgb(33_26_18/0.18)] py-[30px] md:grid-cols-[60px_minmax(0,1.1fr)_minmax(0,1.7fr)] md:gap-[30px]"
                >
                  <b className="font-mono text-[11px] font-normal tracking-[0.12em] text-[#9a7b53]">
                    {num}
                  </b>
                  <h3 className="m-0 text-[clamp(21px,2.3vw,30px)] font-medium leading-[1.05] tracking-[-0.035em]">
                    {title}
                  </h3>
                  <p className="m-0 max-w-[54ch] text-[16px] leading-[1.55] text-[#5c5345] md:col-auto">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[clamp(70px,10vw,140px)]">
          <div className="wrap grid gap-[32px] md:grid-cols-3 md:gap-[50px]">
            {[
              {
                k: "Currently",
                items: [
                  ["Available for projects", "Q3 to Q4 2026"],
                  ["Building a personal tool for focus", "Side project"],
                  ["Reading East of Eden", "Steinbeck"],
                ],
              },
              {
                k: "Tools",
                items: [
                  ["Figma & Framer", "Design, prototypes"],
                  ["React, Next.js, Astro", "Frontend"],
                  ["Webflow", "Marketing sites"],
                ],
              },
              {
                k: "Worked with",
                items: [
                  ["Xentys Recruitment", "2026, Website"],
                  ["ECOASIS", "2025, Service system"],
                  ["Andreopology Studio", "2026, Web build"],
                ],
              },
            ].map((group) => (
              <div key={group.k}>
                <span className="mb-[18px] block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  {group.k}
                </span>
                <ul className="m-0 grid list-none gap-[10px] p-0">
                  {group.items.map(([item, small]) => (
                    <li key={item} className="font-mono text-[13.5px] text-cream">
                      {item}
                      <small className="mt-0.5 block text-[11px] tracking-[0.06em] text-muted">
                        {small}
                      </small>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
