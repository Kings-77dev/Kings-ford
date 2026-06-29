import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "About, Kings Ford®",
  description:
    "Kings Ford: a digital product designer and frontend developer in The Hague. I research, design, and build products that solve meaningful problems.",
};

const BELIEFS = [
  "Good design fixes the right problem, not just the obvious one.",
  "Research is where meaningful design begins.",
  "Technology should remove barriers, not create them.",
  "An interface only matters when it makes someone’s life better.",
];

export default function AboutPage() {
  return (
    <>
      <Nav aboutCurrent />
      <main className="pt-[96px]">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="border-b border-line py-[clamp(50px,8vw,120px)_clamp(50px,7vw,100px)]">
          <div className="wrap">
            <span className="eyebrow mb-[42px] block">About</span>
            <h1 className="m-0 max-w-[16ch] text-[clamp(48px,8.5vw,132px)] font-medium leading-[0.95] tracking-[-0.06em]">
              How can I make someone&rsquo;s life{" "}
              <em className="font-serif font-normal">better</em>?
            </h1>
            <p className="mt-[42px] max-w-[52ch] text-[clamp(19px,1.7vw,25px)] leading-[1.5] text-muted">
              That question first pointed me toward medicine. My path changed,
              but the question didn&rsquo;t. Today I answer it as a digital
              product designer and frontend developer.
            </p>
          </div>
        </section>

        {/* ── Mission prose ─────────────────────────────────────────── */}
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
                  I don&rsquo;t design because I like making interfaces look
                  nice.
                </strong>{" "}
                I design because I like solving meaningful problems. Every
                project starts with understanding the real problem before I
                propose a solution. Curiosity, empathy, and honesty build better
                products than assumptions ever do.
              </p>
              <p className="mt-6">
                My background runs across research, design, and frontend, so I
                can take a project from a vague problem to a real, working
                product without it bouncing between three different people. The
                way I work is simple: understand deeply, design thoughtfully,
                build intentionally.
              </p>
            </div>
          </div>
        </section>

        {/* ── What I believe + promise + beyond + next role ─────────── */}
        <section className="bg-[#f1ebdc] py-[clamp(70px,10vw,150px)] text-[#211a12]">
          <div className="wrap">
            <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#9a7b53]">
              What I believe
            </span>
            <h2 className="m-0 mt-4 max-w-[14ch] text-[clamp(34px,4.8vw,64px)] font-medium leading-[0.98] tracking-[-0.05em]">
              Good design fixes the right problem.
            </h2>
            <ul className="m-0 mt-[clamp(36px,5vw,56px)] grid list-none gap-0 border-t border-[rgb(33_26_18/0.18)] p-0">
              {BELIEFS.map((b) => (
                <li
                  key={b}
                  className="border-b border-[rgb(33_26_18/0.18)] py-6 text-[clamp(18px,2vw,26px)] font-medium leading-[1.35] tracking-[-0.025em]"
                >
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-[clamp(54px,7vw,90px)] grid gap-[clamp(36px,5vw,60px)] md:grid-cols-2">
              <div className="md:col-span-2">
                <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#9a7b53]">
                  My promise
                </span>
                <p className="mt-4 max-w-[40ch] text-[clamp(21px,2.4vw,32px)] font-medium leading-[1.25] tracking-[-0.02em]">
                  I care about the problem as if it were my own. I ask the
                  difficult questions, challenge assumptions when they need
                  challenging, and keep refining until the solution genuinely
                  works.
                </p>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#9a7b53]">
                  Beyond design
                </span>
                <p className="mt-4 text-[clamp(16px,1.4vw,19px)] leading-[1.55] text-[#5c5345]">
                  I care about education, technology, and creating opportunities
                  for underserved communities in Ghana and across Africa.
                </p>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#9a7b53]">
                  Looking for my next role
                </span>
                <p className="mt-4 text-[clamp(16px,1.4vw,19px)] leading-[1.55] text-[#5c5345]">
                  I want a role where research, design, and frontend come
                  together on problems that matter, somewhere the right problem
                  counts as much as the finished screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Facts ─────────────────────────────────────────────────── */}
        <section className="py-[clamp(70px,10vw,140px)]">
          <div className="wrap grid gap-[32px] sm:grid-cols-2 md:grid-cols-4 md:gap-[40px]">
            <Fact label="Based in" items={[["The Hague, NL", ""]]} />
            <Fact label="Status" items={[["Open to new roles", "2026"]]} />
            {/* TODO: Experience, add real history (roles + years) when ready; do not invent. */}
            <Fact
              label="Tools"
              items={[
                ["Figma & FigJam", "Design, research"],
                ["Next.js, React, TypeScript", "Frontend"],
                ["Tailwind CSS", "UI"],
              ]}
            />
            {/* TODO: confirm the tools list above. */}
            <Fact
              label="Worked with"
              items={[
                ["Xentys", "Recruitment, 2026"],
                ["Bouwkeet", "Makerspace, 2025"],
                ["Andreopology Studio", "Photography, 2026"],
              ]}
            />
          </div>
          {/* TODO (optional): add a "What I'm looking for" block once owner confirms
              ROLE_TYPES (e.g. Product Designer / Design Engineer),
              TEAM_TYPE (e.g. product teams that value research and ship fast),
              and LOCATION_PREF (e.g. The Hague / Randstad, hybrid, or remote EU). */}
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Fact({
  label,
  items,
}: {
  label: string;
  items: [string, string][];
}) {
  return (
    <div>
      <span className="mb-[18px] block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
      <ul className="m-0 grid list-none gap-[10px] p-0">
        {items.map(([item, small]) => (
          <li key={item} className="font-mono text-[13.5px] text-cream">
            {item}
            {small && (
              <small className="mt-0.5 block text-[11px] tracking-[0.06em] text-muted">
                {small}
              </small>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
