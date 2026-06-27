import type React from "react";
import Image from "next/image";
import CaseStudyNav, { type NavSection } from "@/components/work/CaseStudyNav";
import VideoSlot from "@/components/work/VideoSlot";

/**
 * Focus case study body: a self-initiated product-design project, content
 * sourced from the authoritative brief (focus_portfolio_case_study_reframed.md).
 * Titled, un-numbered sections with a sticky scroll-spy nav. Image positions are
 * placeholder slots awaiting real screens (intended paths on `data-image-path`);
 * the hero VideoSlot is a sample placeholder until the widget demo is recorded.
 */

const SLOT = "/assets/focus";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "challenge", label: "Challenge" },
  { id: "strategy", label: "Strategy" },
  { id: "concept", label: "Core Concept" },
  { id: "widget", label: "Floating Widget" },
  { id: "dashboard", label: "Dashboard" },
  { id: "decisions", label: "Design Decisions" },
  { id: "direction", label: "Design Direction" },
  { id: "prototype", label: "Prototype" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function FocusCaseStudy() {
  return (
    <>
      <CaseStudyNav sections={SECTIONS} />

      {/* ── OVERVIEW ───────────────────────────────────────────────────── */}
      <Section
        id="overview"
        eyebrow="Overview"
        title={
          <>
            A floating backlog for the moment work <em>actually happens</em>.
          </>
        }
      >
        <p>
          As a designer and developer, I often work across several projects at
          once: designing in Figma, coding in VS Code, checking references in
          the browser, and jumping between tabs. Small but important tasks appear
          constantly in the middle of that work: a UI issue to fix, a bug to
          note, a backlog item to remember.
        </p>
        <p>
          The trouble is that these tasks always show up while I’m already deep
          inside another tool. Opening a full project-management app just to jot
          down one line felt too heavy, so small tasks stayed in my head, and
          then disappeared.
        </p>
        <p>
          Focus is my answer to that. Rather than build another
          project-management platform, I designed a lightweight productivity
          system around a <strong>floating task widget</strong> that keeps the
          active project backlog visible while I work, backed by a simple
          dashboard for the bigger picture.
        </p>
        <blockquote className={BQ}>
          Your active project backlog should stay visible while you work,
          without forcing you to leave your workflow.
        </blockquote>
        <VideoSlot
          src={`${SLOT}/pc.mp4`}
          poster={`${SLOT}/pc-poster.jpg`}
          chrome={false}
          label="Focus widget demo"
          caption="The floating widget in use, capturing a task mid-work, checking it off, and opening the dashboard for the bigger picture."
        />
        <h3 className={H3}>My role</h3>
        <p>
          This was a solo, self-initiated project, so I worked across the whole
          arc:
        </p>
        <ul className={UL}>
          <li>noticing and framing the workflow problem from my own daily work;</li>
          <li>defining the product opportunity and strategy;</li>
          <li>designing the floating widget and its supporting dashboard;</li>
          <li>structuring the information architecture;</li>
          <li>designing the UI, interaction states, and a mobile concept;</li>
          <li>building a front-end prototype of the core flow.</li>
        </ul>
      </Section>

      {/* ── THE PROBLEM ────────────────────────────────────────────────── */}
      <Section
        id="problem"
        eyebrow="The Problem"
        title={
          <>
            The tasks were never there when I <em>needed them</em>.
          </>
        }
      >
        <p>
          This project didn’t start from formal research. It started from my own
          repeated frustration. Looking at my workflow, the same pattern kept
          showing up:
        </p>
        <ul className={UL}>
          <li>I work on several projects at the same time;</li>
          <li>each project has many small tasks and improvements;</li>
          <li>backlog items get spread across tabs, notes, chats, and memory;</li>
          <li>while actively working, I don’t want to open a heavy tool;</li>
          <li>if a task isn’t visible, I forget it;</li>
          <li>if the system is too complex, I stop using it.</li>
        </ul>
        <p>
          The real issue wasn’t that I needed more features. It was that my tasks
          weren’t <strong>present at the moment I needed them</strong>.
        </p>
        <h3 className={H3}>Why this isn’t a research case study</h3>
        <p>
          I’m framing this differently from a client or academic project. It
          isn’t about proving a problem through interviews or large-scale
          testing. It’s about spotting a real personal workflow pain point,
          designing a focused product response, and prototyping around it. This
          is self-initiated product design, drawn from lived experience.
        </p>
      </Section>

      {/* ── CHALLENGE ──────────────────────────────────────────────────── */}
      <Section
        id="challenge"
        eyebrow="Challenge"
        title={
          <>
            Visible while working, without becoming{" "}
            <em>another heavy tool</em>.
          </>
        }
      >
        <blockquote className={BQ}>
          How might I keep project tasks and backlog items visible during active
          design and development work, without creating another heavy tool to
          manage?
        </blockquote>
        <p>
          This shaped the entire product. Focus had to be light enough to use
          while working, but structured enough to manage several projects at
          once.
        </p>
      </Section>

      {/* ── STRATEGY ───────────────────────────────────────────────────── */}
      <Section
        id="strategy"
        eyebrow="Strategy"
        title={
          <>
            Start where the problem happens, not at a <em>dashboard</em>.
          </>
        }
      >
        <p>The strategy came down to one decision:</p>
        <blockquote className={BQ}>
          The floating widget is the main product. The dashboard is secondary.
        </blockquote>
        <p>
          Most productivity tools start with a dashboard. Focus starts at the
          moment the problem actually happens, while I’m already working. The
          widget sits beside my workspace and keeps the current backlog visible;
          the dashboard exists for bigger-picture planning. Holding that
          hierarchy is what stops the product from becoming too heavy.
        </p>
      </Section>

      {/* ── CORE CONCEPT ───────────────────────────────────────────────── */}
      <Section
        id="concept"
        eyebrow="Core Concept"
        title={
          <>
            Two layers: a <em>companion</em> and an <em>overview</em>.
          </>
        }
      >
        <p>Focus has two connected layers.</p>
        <Part
          title="1 · Floating task widget"
          body="A small desktop widget that stays open while I work, showing the active project, open tasks, a quick-add input, completed tasks, and project progress."
          purpose="Keep the backlog visible and capture tasks in the moment, without leaving the workflow."
        />
        <Part
          title="2 · Dashboard"
          body="A larger planning space for viewing projects, learning goals, completed work, and overall progress."
          purpose="Organise the bigger picture, only when a wider view is actually needed."
        />
        <h3 className={H3}>The moment it’s built for</h3>
        <p>
          A typical moment: I’m building a website in VS Code, notice the mobile
          navigation needs a fix, and remember the card spacing needs checking in
          Figma. I don’t want to open Notion, Trello, or a full dashboard. I
          need to capture both tasks and keep working. Focus is designed for
          exactly that moment.
        </p>
      </Section>

      {/* ── FLOATING WIDGET ────────────────────────────────────────────── */}
      <Section
        id="widget"
        eyebrow="Floating Widget"
        title={
          <>
            The widget does the <em>daily</em> work.
          </>
        }
      >
        <p>
          The widget is the part I actually live in. It’s built for fast capture
          and completion:
        </p>
        <ul className={UL}>
          <li>active project name and a quick project switcher;</li>
          <li>a visible task list with checkboxes and manual reordering;</li>
          <li>a quick-add input for capturing tasks instantly;</li>
          <li>due dates, notes, and a compact progress indicator;</li>
          <li>completed-task history;</li>
          <li>a collapsed mode, and a button to open the full dashboard.</li>
        </ul>
        <VideoSlot
          src={`${SLOT}/widget-quick-add.mp4`}
          poster={`${SLOT}/widget-quick-add-poster.jpg`}
          chrome={false}
          label="Quick task capture"
          caption="A task can be captured or edited inline in a second, without opening a full planning tool."
        />
      </Section>

      {/* ── DASHBOARD ──────────────────────────────────────────────────── */}
      <Section
        id="dashboard"
        eyebrow="Dashboard"
        title={
          <>
            One overview, with no <em>repeated</em> corners.
          </>
        }
      >
        <p>
          One of the biggest design decisions was simplifying the structure.
          Early on, the dashboard risked becoming repetitive: Overview,
          Projects, Learn, and Completed could easily show the same information
          in different ways. To avoid that, each section was given a single clear
          job:
        </p>
        <div className="my-7 overflow-hidden rounded-[14px] border border-line">
          {(
            [
              ["Overview", "What needs my attention right now?"],
              ["Projects", "What active work am I managing?"],
              ["Learn", "What skills am I developing?"],
              ["Completed", "What have I finished?"],
              ["Settings", "How do I customise the tool?"],
            ] as const
          ).map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-[110px_1fr] gap-4 border-t border-line px-5 py-4 first:border-t-0 sm:grid-cols-[160px_1fr]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-cream">
                {k}
              </span>
              <span className="text-[15px] leading-[1.5] text-muted">{v}</span>
            </div>
          ))}
        </div>
        <ImageSlot
          src={`${SLOT}/dashboard-overview.png`}
          width={2200}
          height={1370}
          label="The calm dashboard"
          caption="The dashboard gives a bigger-picture overview only when it’s needed: current focus, open tasks, and progress at a glance."
        />
        <ImageSlot
          src={`${SLOT}/dashboard-projects.png`}
          width={2200}
          height={1370}
          label="Projects: active work, separated"
          caption="Active projects grouped by status, kept apart from learning goals and completed work, so each view answers one question."
        />
        <h3 className={H3}>On the go</h3>
        <p>
          A mobile view supports quick checking and updating when I’m away from
          the desktop.
        </p>
        <VideoSlot
          src={`${SLOT}/mobile.mp4`}
          poster={`${SLOT}/mobile-poster.jpg`}
          chrome={false}
          maxW={360}
          label="Focus on mobile"
          caption="On mobile, the same system narrows to quick checking and updating away from the desktop."
        />
      </Section>

      {/* ── DESIGN DECISIONS ───────────────────────────────────────────── */}
      <Section
        id="decisions"
        eyebrow="Design Decisions"
        title={
          <>
            Six choices that kept it <em>light</em>.
          </>
        }
      >
        <Decision
          title="Design around active work, not planning"
          body="The product is built for the moment tasks appear, not just for planning sessions."
          why="The problem happens while I’m working, so the solution has to stay close to the work."
        />
        <Decision
          title="Make the widget the centre of the system"
          body="The floating widget is the main product experience, not an add-on to the dashboard."
          why="It keeps the backlog visible without forcing me to leave Figma, VS Code, or the browser."
        />
        <Decision
          title="Keep the dashboard simple"
          body="The dashboard provides structure but doesn’t try to replace full project-management tools."
          why="If the app becomes too heavy, it recreates the exact problem I’m trying to solve."
        />
        <Decision
          title="Separate active work, learning, and completed progress"
          body="Projects, Learn, and Completed each get their own area."
          why="This prevents repeated content and makes the product easier to scan."
        />
        <Decision
          title="Support collapsed and expanded widget states"
          body="The widget can shrink when screen space is limited."
          why="Screen space is valuable. The widget has to be useful without getting in the way."
        />
        <Decision
          title="Use a calm visual design"
          body="Soft surfaces, warm neutrals, subtle borders, compact typography, and dark-mode options."
          why="The app should reduce mental load, not add more visual noise."
        />
      </Section>

      {/* ── DESIGN DIRECTION ───────────────────────────────────────────── */}
      <Section
        id="direction"
        eyebrow="Design Direction"
        title={
          <>
            A quiet work companion, not a loud <em>dashboard</em>.
          </>
        }
      >
        <p>
          The visual direction is calm, minimal, and utility-focused, a quiet
          companion rather than a loud productivity dashboard. The interface
          leans on:
        </p>
        <ul className={UL}>
          <li>warm neutral backgrounds and soft cards;</li>
          <li>rounded corners and subtle borders;</li>
          <li>muted accent colours and a compact layout;</li>
          <li>clean hierarchy, with simple icons and task states;</li>
          <li>both dark and light interface directions.</li>
        </ul>
        <p>The goal was simple: make Focus feel easy to keep open all day.</p>
        <ImageSlot
          src={`${SLOT}/design-foundation.png`}
          width={2200}
          height={989}
          label="Design foundation"
          caption="The aesthetic I landed on: quiet by default, a single restrained accent, and a tactile (but not toy-like) softness, in both light and dark."
        />
        <ImageGrid
          cols={2}
          images={[
            { src: `${SLOT}/direction-editorial.png`, alt: "Explored visual direction: an editorial, notebook-like treatment", width: 924, height: 540 },
            { src: `${SLOT}/direction-tactile.png`, alt: "Explored visual direction: a tactile, sticky-note paper feel", width: 924, height: 540 },
          ]}
          caption="Two directions I explored (an editorial notebook and a tactile, sticky-note feel) before settling on the calmer, quieter system above."
        />
        <ImageSlot
          src={`${SLOT}/dark-mode.png`}
          width={2200}
          height={1295}
          label="Dark interface direction"
          caption="The system carries both light and dark directions, so it stays comfortable to keep open all day."
        />
        <ImageSlot
          src={`${SLOT}/system-flow.png`}
          width={2200}
          height={989}
          label="One focus, every surface"
          caption="The widget, dashboard, and mobile views work together as one lightweight productivity system."
        />
      </Section>

      {/* ── PROTOTYPE ──────────────────────────────────────────────────── */}
      <Section
        id="prototype"
        eyebrow="Prototype"
        title={
          <>
            The core flow, <em>end to end</em>.
          </>
        }
      >
        <p>The prototype walks the core product flow:</p>
        <ul className={UL}>
          <li>select an active project;</li>
          <li>view the current backlog;</li>
          <li>add a new task quickly;</li>
          <li>reorder tasks manually;</li>
          <li>complete a task and review completed-task history;</li>
          <li>
            open the full dashboard to review projects, learning goals, and
            completed work.
          </li>
        </ul>
        <p>
          It also explores responsive behaviour: how the same system could work
          across desktop and mobile.
        </p>
      </Section>

      {/* ── OUTCOME ────────────────────────────────────────────────────── */}
      <Section
        id="outcome"
        eyebrow="Outcome"
        title={
          <>
            A lightweight companion for <em>multi-project work</em>.
          </>
        }
      >
        <p>
          The outcome is a product concept and prototype for a lightweight task
          tool centred on active work: a floating desktop widget for
          in-the-moment capture and completion, backed by a dashboard for
          projects, learning goals, and completed work, with a mobile concept and
          dark/light directions.
        </p>
        <p>
          It demonstrates product thinking, UI design, information architecture,
          interaction design, and front-end prototyping.
        </p>
        <div className="cs-wide mt-9 grid gap-6 sm:grid-cols-2">
          <BeforeAfter
            label="At the start"
            items={[
              "The idea was simply “build a project tracker.”",
              "Structure risked repeating itself across sections.",
              "The dashboard was the default centre of the app.",
            ]}
          />
          <BeforeAfter
            label="Final direction"
            accent
            items={[
              "A specific problem: losing backlog items during active work.",
              "Each section earned one clear, distinct job.",
              "The floating widget became the heart of the product.",
            ]}
          />
        </div>
      </Section>

      {/* ── REFLECTION ─────────────────────────────────────────────────── */}
      <Section
        id="reflection"
        eyebrow="Reflection"
        title={
          <>
            Designing from a real <em>behaviour</em>.
          </>
        }
      >
        <p>
          This project helped me see that not every portfolio piece needs to be a
          formal research case study. Some are valuable because they show product
          thinking, self-awareness, and the ability to design from a real
          workflow problem. Focus came from my own need, so the problem was clear
          and practical. I wasn’t designing for an imagined user, but for a
          behaviour I experience often.
        </p>
        <p>
          The biggest lesson: productivity tools become too complex fast. The
          more features I added, the more the product risked becoming another
          place where tasks get lost. The strongest version of Focus is the
          simplest one: a floating backlog that stays visible while I work.
        </p>
        <p>
          If I took it further, I’d test it with other designers and developers
          during live work sessions, to see whether the widget actually reduces
          task loss and context switching.
        </p>
      </Section>
    </>
  );
}

/* ── shared classes ────────────────────────────────────────────────────── */

const H3 =
  "mt-10 mb-2 text-[clamp(18px,1.7vw,22px)] font-medium leading-[1.2] tracking-[-0.02em] text-cream first:mt-0";
const UL =
  "my-5 list-disc space-y-2 pl-5 marker:text-muted [&_strong]:font-medium";
const BQ =
  "my-8 rounded-[14px] border border-[rgb(184_67_31/0.22)] bg-[rgb(184_67_31/0.08)] p-6 font-serif text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.3] tracking-[-0.01em] text-cream";

/* ── helpers ───────────────────────────────────────────────────────────── */

function Section({
  id,
  eyebrow,
  title,
  children,
  cream = false,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  cream?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[120px] py-[clamp(50px,7vw,100px)] ${
        cream ? "bg-[#f1ebdc] text-[#211a12]" : ""
      }`}
    >
      <div className="wrap grid items-start gap-10 md:grid-cols-[180px_minmax(0,1fr)]">
        <div className="md:sticky md:top-[110px]">
          <span
            className={`font-mono text-[11px] uppercase tracking-[0.14em] ${
              cream ? "text-[#9a7b53]" : "text-muted"
            }`}
          >
            {eyebrow}
          </span>
        </div>
        <div>
          <h2 className="m-0 mb-8 max-w-[18ch] text-[clamp(30px,4.4vw,56px)] font-medium leading-[1.0] tracking-[-0.04em] [&_em]:font-serif [&_em]:font-normal">
            {title}
          </h2>
          <div
            className={`max-w-[880px] text-[clamp(16px,1.15vw,18px)] leading-[1.6] [&>*:not(figure):not(.cs-wide)]:max-w-[64ch] [&_em]:font-serif [&_p+p]:mt-[18px] [&_strong]:font-medium ${
              cream
                ? "text-[#5c5345] [&_strong]:text-[#211a12]"
                : "text-muted [&_strong]:text-cream"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function Part({
  title,
  body,
  purpose,
}: {
  title: string;
  body: string;
  purpose: string;
}) {
  return (
    <div className="border-t border-line py-7 first:border-t-0 first:pt-0">
      <h3 className="m-0 mb-3 text-[clamp(19px,1.9vw,25px)] font-medium leading-[1.15] tracking-[-0.03em] text-cream">
        {title}
      </h3>
      <p className="m-0">{body}</p>
      <p className="m-0 mt-3">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
          Purpose
        </span>
        {purpose}
      </p>
    </div>
  );
}

function Decision({
  title,
  body,
  why,
}: {
  title: string;
  body: string;
  why: string;
}) {
  return (
    <div className="border-t border-line py-7 first:border-t-0 first:pt-0">
      <h3 className="m-0 mb-3 text-[clamp(19px,1.9vw,25px)] font-medium leading-[1.15] tracking-[-0.03em] text-cream">
        {title}
      </h3>
      <p className="m-0">{body}</p>
      <p className="m-0 mt-3">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
          Why it matters
        </span>
        {why}
      </p>
    </div>
  );
}

function BeforeAfter({
  label,
  items,
  accent = false,
}: {
  label: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div className="rounded-[14px] border border-line bg-[rgb(243_237_223/0.03)] p-6">
      <span
        className={`mb-4 block font-mono text-[10px] uppercase tracking-[0.15em] ${
          accent ? "text-accent" : "text-muted"
        }`}
      >
        {label}
      </span>
      <ul className="m-0 grid list-none gap-3 p-0 text-[15px] leading-[1.5] text-muted">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span
              className={`mt-[9px] h-px w-3 shrink-0 ${
                accent ? "bg-accent" : "bg-line-strong"
              }`}
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

type GridImage = { src: string; alt: string; width: number; height: number };

function ImageGrid({
  images,
  caption,
  cols = 2,
  cream = false,
}: {
  images: GridImage[];
  caption?: string;
  cols?: 1 | 2 | 3;
  cream?: boolean;
}) {
  const border = cream ? "border-[rgb(33_26_18/0.16)]" : "border-line";
  const bg = cream ? "bg-[rgb(33_26_18/0.04)]" : "bg-[rgb(243_237_223/0.03)]";
  const colClass = cols === 3 ? "sm:grid-cols-3" : cols === 2 ? "sm:grid-cols-2" : "";
  return (
    <figure className="m-0 my-9">
      <div className={`grid grid-cols-1 gap-3 ${colClass}`}>
        {images.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className={`h-auto w-full self-start rounded-[12px] border ${border} ${bg}`}
          />
        ))}
      </div>
      {caption && (
        <figcaption
          className={`mt-3 max-w-[60ch] font-mono text-[11px] italic leading-[1.55] ${
            cream ? "text-[#5c5345]" : "text-muted"
          }`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ImageSlot({
  src,
  width,
  height,
  ratio = "16 / 9",
  label,
  caption,
  path,
  compact = false,
  cream = false,
}: {
  src?: string;
  width?: number;
  height?: number;
  ratio?: string;
  label?: string;
  caption: string;
  path?: string;
  compact?: boolean;
  cream?: boolean;
}) {
  const border = cream ? "border-[rgb(33_26_18/0.16)]" : "border-line";
  const bg = cream ? "bg-[rgb(33_26_18/0.04)]" : "bg-[rgb(243_237_223/0.03)]";

  if (src) {
    return (
      <figure className={`m-0 my-9 ${compact ? "mx-auto max-w-[520px]" : ""}`}>
        <Image
          src={src}
          alt={label ?? ""}
          width={width ?? 1600}
          height={height ?? 1000}
          className={`h-auto w-full rounded-[14px] border ${border} ${bg}`}
        />
        <figcaption
          className={`mt-3 max-w-[60ch] font-mono text-[11px] italic leading-[1.55] ${
            cream ? "text-[#5c5345]" : "text-muted"
          }`}
        >
          {caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="m-0 my-9">
      <div
        data-image-path={path}
        className={`relative w-full overflow-hidden rounded-[14px] border ${
          cream
            ? "border-[rgb(33_26_18/0.16)] bg-[rgb(33_26_18/0.04)]"
            : "border-line bg-[rgb(243_237_223/0.03)]"
        }`}
        style={{ aspectRatio: ratio }}
      >
        <div className="absolute inset-0 grid place-items-center">
          <span
            className={`px-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] ${
              cream ? "text-[#9a7b53]" : "text-muted"
            }`}
          >
            {label}
          </span>
        </div>
      </div>
      <figcaption
        className={`mt-3 max-w-[60ch] font-mono text-[11px] italic leading-[1.55] ${
          cream ? "text-[#5c5345]" : "text-muted"
        }`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
