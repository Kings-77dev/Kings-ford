import type React from "react";
import Image from "next/image";
import CaseStudyNav, { type NavSection } from "@/components/work/CaseStudyNav";

/**
 * Makerspace Rotterdam case study body, content sourced strictly from the authoritative
 * brief (makerspace-rotterdam_portfolio_case_study.md). A group UX/service-design project,
 * so the copy keeps the collaborative framing. Titled, un-numbered sections
 * with a sticky scroll-spy nav. Image positions are placeholder slots awaiting
 * real images (intended paths recorded on `data-image-path`).
 */

const SLOT = "/assets/makerspace-rotterdam";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "users", label: "Audiences" },
  { id: "process", label: "Process" },
  { id: "concept", label: "Final Concept" },
  { id: "decisions", label: "Design Decisions" },
  { id: "testing", label: "Testing" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function MakerspaceCaseStudy() {
  return (
    <>
      <CaseStudyNav sections={SECTIONS} />

      {/* ── OVERVIEW ───────────────────────────────────────────────────── */}
      <Section
        id="overview"
        eyebrow="Overview"
        title={
          <>
            Making the value of <em>making</em> visible.
          </>
        }
      >
        <p>
          Makerspace Rotterdam is a makerspace for children aged 8–13, offering hands-on
          workshops in textiles, ceramics, wood, metal, plastics, and digital
          electronics. The organisation wanted to make the value of these
          workshops more visible, not just the objects children make, but the
          confidence, creativity, collaboration, curiosity, problem-solving, and
          empowerment they develop through making.
        </p>
        <p>
          Much of that value happens beneath the surface. Parents often see only
          the final object; facilitators notice growth that is hard to record,
          compare, or communicate.
        </p>
        <blockquote className="my-8 rounded-[14px] border border-[rgb(184_67_31/0.22)] bg-[rgb(184_67_31/0.08)] p-6 font-serif text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.3] tracking-[-0.01em] text-cream">
          How can we help children reflect on their workshop experience in a
          playful way, while making their growth visible to facilitators,
          parents, and Makerspace Rotterdam?
        </blockquote>
        <p>
          As part of a team, I helped design a connected reflection and
          data-tracking system: a physical booklet, sticker-based reflection, a
          scanning app, a facilitator dashboard, and a playful “Frankenstein”
          growth object.
        </p>
        <ImageGrid
          layout="row"
          rowH={290}
          images={[
            { src: `${SLOT}/makerspace-1.jpeg`, alt: "Makerspace Rotterdam: project models by the window", width: 2048, height: 1536 },
            { src: `${SLOT}/makerspace-2.jpeg`, alt: "Makerspace Rotterdam: workshop with 3D printers", width: 1536, height: 2048 },
            { src: `${SLOT}/makerspace-3.jpeg`, alt: "Makerspace Rotterdam: the making space", width: 1536, height: 2048 },
          ]}
          caption="Makerspace Rotterdam helps children learn through making; the project focused on making that growth visible."
        />

        <h3 className={H3}>My role</h3>
        <p>
          This was a collaborative group project run with a Scrum workflow. I
          contributed across:
        </p>
        <ul className={UL}>
          <li>understanding the client’s goals and the Makerspace Rotterdam context;</li>
          <li>
            ideating concepts around reflection, motivation, and visible growth;
          </li>
          <li>shaping the system logic from child input to facilitator insight;</li>
          <li>
            developing and documenting the booklet, scanning, dashboard, and
            Frankenstein concept;
          </li>
          <li>
            supporting the Scrum process: backlog, sprint planning, demos, and
            retrospectives.
          </li>
        </ul>
      </Section>

      {/* ── CHALLENGE ──────────────────────────────────────────────────── */}
      <Section
        id="challenge"
        eyebrow="Challenge"
        title={
          <>
            Growth that was hard to see.
          </>
        }
      >
        <p>
          Makerspace Rotterdam’s workshops create value beyond the final object: confidence,
          resilience, creativity, collaboration, curiosity, problem-solving, and
          empowerment. The difficulty was that this growth wasn’t easy to see or
          communicate. Four connected problems stood out:
        </p>
        <ul className={UL}>
          <li>
            <strong>Parents mainly saw the final product.</strong> They saw what
            the child made, but not the process, effort, or soft-skill
            development behind it.
          </li>
          <li>
            <strong>Facilitators noticed growth but lacked a system.</strong> They
            could sense a child becoming more confident, but had no simple way to
            record or visualise it over time.
          </li>
          <li>
            <strong>Reflection needed to be child-friendly.</strong> For ages
            8–13, reflection had to be short, visual, playful, and tied to the
            making, not feel like schoolwork.
          </li>
          <li>
            <strong>Makerspace Rotterdam needed evidence of long-term value.</strong> The
            organisation needed a clearer way to show its impact to parents,
            schools, funders, and the wider community.
          </li>
        </ul>
        <h3 className={H3}>The design goal</h3>
        <p>The system needed to:</p>
        <ul className={UL}>
          <li>help children reflect on what they learned and how they felt;</li>
          <li>keep reflection playful and age-appropriate;</li>
          <li>fit existing workshop routines without taking too much time;</li>
          <li>help facilitators record soft- and hard-skill progress;</li>
          <li>
            help parents understand development beyond the final product;
          </li>
          <li>give Makerspace Rotterdam a clearer way to show the value of making.</li>
        </ul>
      </Section>

      {/* ── AUDIENCES ──────────────────────────────────────────────────── */}
      <Section
        id="users"
        eyebrow="Audiences"
        title={
          <>
            Four groups, four different needs.
          </>
        }
      >
        <p>
          The system had to serve four audiences at once, each wanting something
          different from the same reflection data.
        </p>
        <ul className={UL}>
          <li>
            <strong>Children (8–13)</strong>: a playful, low-effort way to
            reflect and see their own progress.
          </li>
          <li>
            <strong>Facilitators</strong>: a realistic way to record and
            interpret soft- and hard-skill development.
          </li>
          <li>
            <strong>Parents</strong>: insight into the process and growth behind
            the final object.
          </li>
          <li>
            <strong>Makerspace Rotterdam</strong>: evidence of long-term value for parents,
            schools, and funders.
          </li>
        </ul>
      </Section>

      {/* ── PROCESS (cream) ────────────────────────────────────────────── */}
      <Section
        id="process"
        eyebrow="Process"
        cream
        title={
          <>
            Four sprints, one system.
          </>
        }
      >
        <p>
          The project ran across four Scrum sprints, moving from open concepts to
          one connected system.
        </p>

        <h3 className={H3_CREAM}>Sprint 0: Understanding the problem</h3>
        <p>
          We started with Makerspace Rotterdam’s mission and the problem space, then explored
          early concepts and scored them on fun, value, originality, feasibility,
          and tracking. Two directions emerged, a hero/avatar story and value
          cards with reflection, which we later combined.
        </p>
        <ImageSlot
          cream
          compact
          src={`${SLOT}/early-ideation.png`}
          width={2004}
          height={2652}
          label="Early ideation"
          caption="The team explored multiple ways to help children reflect in a playful and trackable way."
        />
        <ImageSlot
          cream
          compact
          src={`${SLOT}/evaluation-matrix.png`}
          width={4096}
          height={3871}
          label="Evaluation matrix"
          caption="Concepts were evaluated based on fun, value, originality, feasibility, and tracking."
        />

        <h3 className={H3_CREAM}>Sprint 1: From cards to a booklet</h3>
        <p>
          The first big shift turned the reflection-card idea into a booklet.
          Cards were playful but easy to lose and hard to track across workshops;
          a personal booklet stayed with each child across the programme. The
          system took shape: children reflect in a booklet, stickers make it
          playful, facilitators scan the pages, scanned answers become structured
          data, the dashboard helps interpret progress, and the Frankenstein
          object turns growth into a playful physical outcome.
        </p>
        <ImageGrid
          cream
          cols={3}
          images={[
            { src: `${SLOT}/booklet-draft-1.png`, alt: "First booklet draft", width: 904, height: 434 },
            { src: `${SLOT}/booklet-draft-2.png`, alt: "Second booklet draft", width: 7480, height: 4070 },
            { src: `${SLOT}/booklet-draft-3.png`, alt: "Booklet draft with content", width: 904, height: 558 },
          ]}
          caption="The reflection system evolved from loose cards into a personal booklet that follows the child across workshops."
        />

        <h3 className={H3_CREAM}>Sprint 2: Testing and refining the visualisation</h3>
        <p>
          We validated the booklet, scanning flow, dashboard, and Frankenstein in
          the Makerspace Rotterdam context. Facilitators wanted the booklet less text-heavy
          and more guided; the dashboard more visual and less numeric, with space
          for private notes; and the Frankenstein clearer about what each body
          part represents.
        </p>

        <h3 className={H3_CREAM}>Sprint 3: Finalising the system</h3>
        <p>
          The last sprint made the concept feel like one complete system rather
          than separate parts: refining the booklet layout, sticker system,
          scanning flow, dashboard structure, Frankenstein object, and the story
          of how reflection data moves through it all.
        </p>
      </Section>

      {/* ── FINAL CONCEPT ──────────────────────────────────────────────── */}
      <Section
        id="concept"
        eyebrow="Final Concept"
        title={
          <>
            One connected reflection <em>system</em>.
          </>
        }
      >
        <p>
          The final concept is a connected reflection and data-tracking system
          made up of five parts that move a child’s reflection from paper to
          insight to playful progress.
        </p>
        <Part
          title="Reflection booklet"
          body="A personal booklet that follows each child through the programme. Parents set initial goals at registration, children set their own in the first workshop, and after each workshop children reflect on Makerspace Rotterdam’s core values: creativity, collaboration, empowerment, curiosity, and problem-solving."
          purpose="Make reflection personal, visual, and easy to connect across workshops."
        />
        <ImageGrid
          cols={2}
          images={[
            { src: `${SLOT}/booklet-cover.png`, alt: "Final reflection booklet: cover", width: 3588, height: 1866 },
            { src: `${SLOT}/booklet-final-2.png`, alt: "Final reflection booklet: reflection spread", width: 3588, height: 1866 },
          ]}
          caption="The final booklet, a cover and a reflection spread for each workshop."
        />
        <Part
          title="Sticker system"
          body="Children answer reflection prompts with stickers, a low-threshold, playful way to express how a workshop went. A sticker’s position on the page can be scanned and translated into data."
          purpose="Turn reflection into something fast and visual that still produces structured data."
        />
        <ImageGrid
          layout="row"
          rowH={300}
          images={[
            { src: `${SLOT}/sticker-sheet.png`, alt: "The sticker sheet: playful creature stickers", width: 1024, height: 1536 },
            { src: `${SLOT}/booklet-stickers.png`, alt: "The booklet with stickers placed", width: 2841, height: 1479 },
          ]}
          caption="Children place playful stickers to answer prompts, fast, visual, and engaging."
        />
        <Part
          title="Scanning app"
          body="Facilitators scan completed pages on a phone or tablet, using participant, programme, and workshop selection plus image recognition to digitise the booklet input."
          purpose="Make data capture realistic within Makerspace Rotterdam’s weekly routines."
        />
        <ImageSlot
          src={`${SLOT}/scanning-app.png`}
          width={2048}
          height={866}
          label="Scanning app: lo-fi"
          caption="Lo-fi screens mapped the flow: pick a programme, choose a workshop, then scan the booklet."
        />
        <ImageGrid
          layout="row"
          rowH={420}
          images={[
            { src: `${SLOT}/app-hifi1.png`, alt: "Scanning app hi-fi: programme selection", width: 4218, height: 8715 },
            { src: `${SLOT}/app-hifi2.png`, alt: "Scanning app hi-fi: workshop selection", width: 4104, height: 8484 },
            { src: `${SLOT}/app-hifi3.png`, alt: "Scanning app hi-fi: scan step", width: 4104, height: 8484 },
            { src: `${SLOT}/app-hifi4.png`, alt: "Scanning app hi-fi: confirmation", width: 4104, height: 8484 },
          ]}
          caption="The final hi-fi scanning app, the flow as it feels on a facilitator's phone."
        />
        <Part
          title="Facilitator dashboard"
          body="A structured overview of attendance, soft-skill patterns, hard-skill progress, development across workshops, individual profiles, and contextual notes."
          purpose="Support preparation, observation, and tailored guidance, not formal grading."
        />
        <ImageGrid
          layout="split"
          images={[
            { src: `${SLOT}/dashboard-workshops.png`, alt: "Facilitator dashboard: workshops overview", width: 4320, height: 3072 },
            { src: `${SLOT}/dashboard-workshop.png`, alt: "Facilitator dashboard: workshop page", width: 4320, height: 3072 },
            { src: `${SLOT}/dashboard-individual.png`, alt: "Facilitator dashboard: individual child profile", width: 4320, height: 5874 },
          ]}
          caption="The dashboard helps facilitators understand attendance, values, soft skills, hard skills, and individual development."
        />
        <Part
          title="Frankenstein growth object"
          body="A buildable character where each body part represents a Makerspace Rotterdam value or skill. As children progress, the Frankenstein grows and changes."
          purpose="Make abstract growth visible, motivating, and non-competitive."
        />
        <ImageSlot
          src={`${SLOT}/frankenstein.png`}
          width={5073}
          height={2247}
          label="Frankenstein concept"
          caption="The Frankenstein object translates abstract growth into a playful, physical character, each body part maps to a Makerspace Rotterdam value."
        />
      </Section>

      {/* ── DESIGN DECISIONS ───────────────────────────────────────────── */}
      <Section
        id="decisions"
        eyebrow="Design Decisions"
        title={
          <>
            Decisions that shaped the system.
          </>
        }
      >
        <Decision
          title="Turn reflection cards into a booklet"
          body="Cards were playful but easy to lose and weak for long-term tracking. A booklet gave each child a personal object that grows with them across workshops."
          why="It made reflection feel personal and easy to connect across multiple workshops."
        />
        <Decision
          title="Use stickers instead of only writing"
          body="Writing-heavy reflection felt too much like schoolwork, so stickers made the activity faster, more visual, and more playful."
          why="Children could reflect without long written answers, and facilitators could collect data more efficiently."
        />
        <Decision
          title="Make reflection part of the workshop routine"
          body="Facilitators already have informal reflection moments, so the concept builds on those rather than adding a separate task."
          why="A system that fits the real workflow is far more likely to actually be used."
        />
        <Decision
          title="Use scanning to bridge physical and digital"
          body="The booklet keeps the experience tangible for children, while scanning makes the data usable for facilitators."
          why="It keeps reflection child-friendly while still supporting tracking and dashboard visualisation."
        />
        <Decision
          title="Keep the dashboard supportive, not judgemental"
          body="Facilitators wanted insight, not a grading tool, so the dashboard supports preparation, observation, and discussion."
          why="It protects Makerspace Rotterdam’s child-centred ethos and avoids turning creative development into grades."
        />
        <Decision
          title="Use Frankenstein as a playful growth metaphor"
          body="Soft-skill development is abstract, so a buildable character gives children a physical metaphor for their growth."
          why="It makes progress visible, motivating, and non-competitive."
        />
      </Section>

      {/* ── TESTING & ITERATION ────────────────────────────────────────── */}
      <Section
        id="testing"
        eyebrow="Testing"
        title={
          <>
            Tested with facilitators, then refined.
          </>
        }
      >
        <p>
          Because direct testing with children was hard to organise, validation
          relied on facilitator feedback, prototype walkthroughs, role-play
          simulations, and testing with age-appropriate participants where
          possible.
        </p>
        <h3 className={H3}>What testing surfaced</h3>
        <ul className={UL}>
          <li>reflection should be short, guided, and playful, not like schoolwork;</li>
          <li>multiple-choice and visual prompts work better than open writing alone;</li>
          <li>stickers make the experience more engaging;</li>
          <li>facilitators value tracking soft-skill development;</li>
          <li>scanning should be simple and fit existing routines;</li>
          <li>the dashboard should be more visual and less numeric, with space for notes;</li>
          <li>Frankenstein has strong potential but needs clear logic and a buildable structure;</li>
          <li>reflection may work best when individual reflection is followed by small-group discussion.</li>
        </ul>
        <h3 className={H3}>Iterations</h3>
        <ul className={UL}>
          <li>
            <strong>Booklet</strong>: more visual, guided, and activity-based,
            with playful prompts, stickers, and room for drawing or discussion to
            reduce the school-like feel.
          </li>
          <li>
            <strong>Scanning flow</strong>: simplified so facilitators can
            realistically scan pages during or after workshops on a phone or
            tablet.
          </li>
          <li>
            <strong>Dashboard</strong>: shifted from raw numbers to
            interpretation, adding individual profiles, workshop overviews,
            comparison, and notes.
          </li>
          <li>
            <strong>Frankenstein</strong>: each body part tied more clearly to a
            value, and the object made buildable, understandable, and visually
            appealing for children.
          </li>
        </ul>
      </Section>

      {/* ── OUTCOME ────────────────────────────────────────────────────── */}
      <Section
        id="outcome"
        eyebrow="Outcome"
        title={
          <>
            One system, four kinds of <em>value</em>.
          </>
        }
      >
        <p>
          The outcome was a physical-digital reflection system that turns abstract
          learning into something visible, and delivers something to each
          audience.
        </p>
        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          <OutcomeCard
            label="Children"
            accent
            items={[
              "Reflect in a playful way.",
              "See their own growth.",
              "Stay motivated to return.",
              "Connect making with personal development.",
            ]}
          />
          <OutcomeCard
            label="Facilitators"
            items={[
              "Collect reflection data more consistently.",
              "Understand development over time.",
              "Prepare for workshops.",
              "Support children more personally.",
            ]}
          />
          <OutcomeCard
            label="Parents"
            items={[
              "See more than the final product.",
              "Understand the value of the process.",
              "Gain clearer insight into their child’s growth.",
            ]}
          />
          <OutcomeCard
            label="Makerspace Rotterdam"
            accent
            items={[
              "Communicate the long-term value of its programmes.",
              "Show evidence of impact.",
              "Support retention and storytelling.",
            ]}
          />
        </div>
        <p className="mt-9">
          Across the sprints the scope shifted from “a fun way for children to
          share feelings” toward a connected system that serves children,
          facilitators, parents, and Makerspace Rotterdam: physical reflection, digital
          insight, and playful progress in one journey.
        </p>
        <ImageGrid
          layout="feature"
          images={[
            { src: `${SLOT}/expo-3.jpeg`, alt: "The Makerspace Rotterdam stand at the expo", width: 5120, height: 3840 },
            { src: `${SLOT}/expo-1.jpeg`, alt: "Expo: a visitor scanning a booklet", width: 3024, height: 4032 },
            { src: `${SLOT}/expo-2.jpeg`, alt: "Expo presentation", width: 3840, height: 5120 },
            { src: `${SLOT}/expo-4.jpeg`, alt: "Expo presentation", width: 3024, height: 4032 },
          ]}
          caption="The final system was presented as a connected journey from child reflection to facilitator insight and visible growth."
        />
      </Section>

      {/* ── REFLECTION ─────────────────────────────────────────────────── */}
      <Section
        id="reflection"
        eyebrow="Reflection"
        title={
          <>
            What I took from it.
          </>
        }
      >
        <p>
          This project showed me how complex it is to design for children,
          facilitators, parents, and an organisation at once. Each group needed
          something different, and the challenge was to connect those needs
          without making the system too heavy.
        </p>
        <p>
          The clearest lesson: reflection can’t feel like extra schoolwork. For
          children it has to be playful, visual, and tied to the activity; for
          facilitators, realistic and quick enough to fit the routine; for parents
          and Makerspace Rotterdam, it has to make growth visible without reducing children to
          numbers.
        </p>
        <p>
          It also taught me the value of designing a system rather than a single
          product. The booklet, stickers, scanning app, dashboard, and
          Frankenstein only make sense together: the strength is the full journey
          from a child’s reflection to facilitator insight to visible, playful
          progress. If I continued, I’d test the booklet and Frankenstein directly
          with more children, simplify the dashboard further with facilitators,
          and prototype the scanning in a more realistic setting.
        </p>
      </Section>
    </>
  );
}

/* ── shared classes ────────────────────────────────────────────────────── */

const H3 =
  "mt-10 mb-2 text-[clamp(18px,1.7vw,22px)] font-medium leading-[1.2] tracking-[-0.02em] text-cream first:mt-0";
// same as H3 but for use inside cream (light) sections, where text-cream is invisible
const H3_CREAM =
  "mt-10 mb-2 text-[clamp(18px,1.7vw,22px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#211a12] first:mt-0";
const UL =
  "my-5 list-disc space-y-2 pl-5 marker:text-muted [&_strong]:font-medium";

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
          <h2
            className="m-0 mb-8 max-w-[18ch] text-[clamp(30px,4.4vw,56px)] font-medium leading-[1.0] tracking-[-0.04em] [&_em]:font-serif [&_em]:font-normal"
          >
            {title}
          </h2>
          <div
            className={`max-w-[880px] text-[clamp(16px,1.15vw,18px)] leading-[1.6] [&_blockquote]:max-w-[64ch] [&_em]:font-serif [&_h3]:max-w-[64ch] [&_p]:max-w-[64ch] [&_p+p]:mt-[18px] [&_strong]:font-medium [&_ul]:max-w-[64ch] ${
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

function OutcomeCard({
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

function ImageSlot({
  ratio,
  label,
  caption,
  src,
  width,
  height,
  compact = false,
  cream = false,
}: {
  ratio?: string;
  label: string;
  caption: string;
  src?: string;
  width?: number;
  height?: number;
  compact?: boolean;
  cream?: boolean;
}) {
  const border = cream ? "border-[rgb(33_26_18/0.16)]" : "border-line";
  const placeholderBg = cream
    ? "bg-[rgb(33_26_18/0.04)]"
    : "bg-[rgb(243_237_223/0.03)]";
  const labelColor = cream ? "text-[#9a7b53]" : "text-muted";
  const capColor = cream ? "text-[#5c5345]" : "text-muted";

  return (
    <figure className="m-0 my-9">
      {src ? (
        <Image
          src={src}
          alt={label}
          width={width ?? 1600}
          height={height ?? 1000}
          sizes={
            compact ? "(min-width: 768px) 560px, 100vw" : "(min-width: 768px) 840px, 100vw"
          }
          className={`h-auto w-full rounded-[14px] border ${border} ${
            compact ? "max-w-[560px]" : ""
          }`}
        />
      ) : (
        <div
          className={`relative w-full overflow-hidden rounded-[14px] border ${border} ${placeholderBg}`}
          style={{ aspectRatio: ratio }}
        >
          <div className="absolute inset-0 grid place-items-center">
            <span
              className={`px-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] ${labelColor}`}
            >
              {label}
            </span>
          </div>
        </div>
      )}
      <figcaption
        className={`mt-3 max-w-[60ch] font-mono text-[11px] italic leading-[1.55] ${capColor}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

/** Responsive grid for a set of related images (numbered photo sets, etc.). */
type GridImage = { src: string; alt: string; width: number; height: number };

/**
 * Grid for related images. Layout is tailored per set so mixed
 * portrait/landscape images stay uncropped but still read as intentional:
 *  - "grid"    even columns (use for same-aspect sets)
 *  - "feature" one wide lead full-width, the rest (same-aspect) in a row below
 *  - "split"   left column stacks all-but-last; right column = the last (tall) image
 *  - "row"     equal-height row, every image shares one height, natural widths
 */
function ImageGrid({
  images,
  caption,
  cols = 3,
  layout = "grid",
  rowH = 320,
  cream = false,
}: {
  images: GridImage[];
  caption: string;
  cols?: 2 | 3;
  layout?: "grid" | "feature" | "split" | "row";
  rowH?: number;
  cream?: boolean;
}) {
  const border = cream ? "border-[rgb(33_26_18/0.16)]" : "border-line";
  const capColor = cream ? "text-[#5c5345]" : "text-muted";
  const cls = `rounded-[12px] border ${border}`;

  const Tile = (im: GridImage) => (
    <Image
      key={im.src}
      src={im.src}
      alt={im.alt}
      width={im.width}
      height={im.height}
      sizes="(min-width: 768px) 430px, 100vw"
      className={`h-auto w-full ${cls}`}
    />
  );

  let body: React.ReactNode;
  if (layout === "feature") {
    const [lead, ...rest] = images;
    body = (
      <div className="grid gap-3">
        {Tile(lead)}
        <div
          className={`grid items-start gap-3 ${
            rest.length >= 3 ? "grid-cols-3" : "grid-cols-2"
          }`}
        >
          {rest.map(Tile)}
        </div>
      </div>
    );
  } else if (layout === "split") {
    const stacked = images.slice(0, -1);
    const tall = images[images.length - 1];
    body = (
      <div className="grid items-start gap-3 sm:grid-cols-2">
        <div className="grid gap-3">{stacked.map(Tile)}</div>
        {Tile(tall)}
      </div>
    );
  } else if (layout === "row") {
    body = (
      <div className="flex flex-wrap items-start gap-3">
        {images.map((im) => (
          <Image
            key={im.src}
            src={im.src}
            alt={im.alt}
            width={im.width}
            height={im.height}
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{ height: rowH, width: "auto" }}
            className={cls}
          />
        ))}
      </div>
    );
  } else {
    body = (
      <div
        className={`grid items-start gap-3 ${
          cols === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
        }`}
      >
        {images.map(Tile)}
      </div>
    );
  }

  return (
    <figure className="m-0 my-9">
      {body}
      <figcaption
        className={`mt-3 max-w-[60ch] font-mono text-[11px] italic leading-[1.55] ${capColor}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
