import type React from "react";
import Image from "next/image";
import CaseStudyNav, { type NavSection } from "@/components/work/CaseStudyNav";
import VideoSlot from "@/components/work/VideoSlot";

/**
 * EcoSmoker case study body: content sourced strictly from the authoritative
 * brief (ecosmoker_portfolio_case_study.md). Titled, un-numbered sections with
 * a sticky scroll-spy nav. Image positions are placeholder slots awaiting real
 * images (intended paths recorded on `data-image-path`).
 */

const SLOT = "/assets/ecosmoker";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "insights", label: "Key Insights" },
  { id: "direction", label: "Design Direction" },
  { id: "ideation", label: "Ideation" },
  { id: "concept", label: "Final Concept" },
  { id: "prototype", label: "Prototyping" },
  { id: "testing", label: "Testing" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function EcoSmokerCaseStudy() {
  return (
    <>
      <CaseStudyNav sections={SECTIONS} />

      {/* ── OVERVIEW ───────────────────────────────────────────────────── */}
      <Section
        id="overview"
        eyebrow="Overview"
        title={
          <>
            One litter problem, three connected <em>touchpoints</em>.
          </>
        }
      >
        <p>
          This project responded to a visible cigarette-waste problem around the
          THUAS building. Mission Zero wanted to explore creative solutions that
          could encourage smokers to dispose of cigarette butts correctly, and
          become more aware of the environmental impact of cigarette litter.
        </p>
        <p>
          At first the issue seemed simple: people were throwing cigarette butts
          on the ground. Through research, I found the problem was not only about
          awareness. It was also about convenience, visibility, weather, social
          behaviour, and where disposal units were placed.
        </p>
        <p>The final concept combined three touchpoints:</p>
        <ul className={UL}>
          <li>
            <strong>A phone-case butt holder</strong> for temporary storage when
            users are on the move.
          </li>
          <li>
            <strong>A smart disposal bin</strong> placed in more visible and
            convenient locations.
          </li>
          <li>
            <strong>An accompanying app</strong> that tracks impact and shows how
            collected cigarette waste can be repurposed.
          </li>
        </ul>
        <blockquote className="my-8 rounded-[14px] border border-[rgb(184_67_31/0.22)] bg-[rgb(184_67_31/0.08)] p-6 font-serif text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.3] tracking-[-0.01em] text-cream">
          Make responsible disposal easier, more visible, and more rewarding.
        </blockquote>

        <h3 className={H3}>My role</h3>
        <p>
          I worked across the full process, from research and synthesis to
          ideation, physical and digital prototyping, testing, and iteration:
        </p>
        <ul className={UL}>
          <li>
            running desk research, site analysis, observation, and
            semi-structured interviews with smokers;
          </li>
          <li>
            translating findings into themed insights and a clear design
            direction;
          </li>
          <li>
            sketchstorming concepts and selecting directions through an
            evaluation matrix;
          </li>
          <li>
            building physical prototypes via 3D modelling, 3D printing, and foam
            modelling;
          </li>
          <li>prototyping the companion app from paper to a higher-fidelity flow;</li>
          <li>
            testing the prototypes with smokers and refining the concept through
            iteration.
          </li>
        </ul>
      </Section>

      {/* ── CHALLENGE ──────────────────────────────────────────────────── */}
      <Section
        id="challenge"
        eyebrow="Challenge"
        title={
          <>
            The bins existed, the behaviour <em>didn’t follow</em>.
          </>
        }
      >
        <p>
          The existing disposal units around the THUAS smoking area were not
          enough to prevent cigarette litter. Smokers still discarded butts on
          the ground, especially when units were hard to see, inconvenient to
          reach, affected by wind, or simply absent from the places where people
          actually smoked.
        </p>
        <blockquote className="my-8 rounded-[14px] border border-[rgb(184_67_31/0.22)] bg-[rgb(184_67_31/0.08)] p-6 font-serif text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.3] tracking-[-0.01em] text-cream">
          How might we design a solution that makes cigarette disposal convenient
          and responsible while raising awareness of its environmental impact
          around the THUAS building?
        </blockquote>
        <p>
          The challenge was not only to create a new bin. It was to understand
          the behaviour around disposal and design for the moments where people
          currently fail to act responsibly.
        </p>
      </Section>

      {/* ── RESEARCH ───────────────────────────────────────────────────── */}
      <Section
        id="research"
        eyebrow="Research"
        title={
          <>
            Understanding the behaviour, not just the litter.
          </>
        }
      >
        <p>
          The research aimed to understand how smokers currently dispose of
          cigarette waste around THUAS, what barriers prevent proper disposal,
          and what role visibility, convenience, weather, and social behaviour
          play. I used several methods to build that picture:
        </p>
        <ul className={UL}>
          <li>
            <strong>Desk research</strong>: framing cigarette waste as both an
            environmental issue and a behavioural design challenge.
          </li>
          <li>
            <strong>Site analysis</strong>: mapping where people smoked, where
            units were placed, how visible they were, and where waste
            accumulated.
          </li>
          <li>
            <strong>Observation</strong>: watching real behaviour to reveal
            patterns interviews would miss: group smoking, movement paths, and
            ignored units.
          </li>
          <li>
            <strong>Semi-structured interviews</strong>: understanding
            motivations, frustrations, and habits, including why people littered
            even when they knew better.
          </li>
          <li>
            <strong>Thematic analysis</strong>: clustering the data into
            recurring themes that became the foundation for ideation.
          </li>
        </ul>
        <ImageGrid
          cols={2}
          fit="cover"
          aspect="4 / 3"
          images={[
            { src: `${SLOT}/site-analysis-1.jpg`, alt: "Students standing at the THUAS smoking-area wall beside a no-smoking sign", width: 2115, height: 2200 },
            { src: `${SLOT}/site-analysis-2.jpg`, alt: "A glass smoking shelter by the canal with cigarette butts littered on the grass in front", width: 1650, height: 2200, pos: "50% 78%" },
            { src: `${SLOT}/site-analysis-3.jpg`, alt: "A ground-level disposal grate full of butts, with more scattered across the pavement around it", width: 2200, height: 1650 },
            { src: `${SLOT}/site-analysis-4.webp`, alt: "A pole-mounted stainless cigarette disposal unit beside a bench", width: 1536, height: 2048 },
          ]}
          caption="Site analysis and observation around the THUAS building: mapping where people smoked, where disposal units sat, and where waste actually accumulated."
        />
        <ImageSlot
          src={`${SLOT}/persona-empathy-map.webp`}
          width={2048}
          height={1219}
          label="Persona / empathy map"
          caption="An empathy map for “Max, the wannabe sustainable smoker” synthesised what smokers say, think, do, and feel, and where responsible disposal breaks down."
        />
      </Section>

      {/* ── KEY INSIGHTS ───────────────────────────────────────────────── */}
      <Section
        id="insights"
        eyebrow="Key Insights"
        title={
          <>
            What the research surfaced.
          </>
        }
      >
        <ImageSlot
          src={`${SLOT}/affinity-diagram.png`}
          width={2800}
          height={1416}
          label="Affinity diagram: clustered research insights"
          caption="Interview and observation notes were clustered into themes, accessibility, awareness, environmental factors, and social behaviour, that became the key insights below."
        />
        <Insight
          title="The smoking area wasn’t clearly bounded"
          body="The designated area was large with no clear edge, so people drifted into spots with no disposal unit nearby."
          implication="Clearer boundaries and better-placed disposal points."
        />
        <Insight
          title="Existing units were small and easy to miss"
          body="Ground-level units were low-visibility; users had to look down or already know where they were."
          implication="Make disposal points more visible and easier to use."
        />
        <Insight
          title="Disposal units were concentrated in one area"
          body="They weren’t distributed across the full area, so some smokers had to leave their path or throw butts from a distance."
          implication="Place disposal options along people’s natural movement paths."
        />
        <Insight
          title="Wind affected disposal accuracy"
          body="Even when users tried to dispose correctly, wind made them miss the ground-level units."
          implication="Reduce the chance of butts being blown away or missing the target."
        />
        <Insight
          title="Weather shaped where people smoked"
          body="People moved to sheltered, non-designated spots in rain, wind, or cold, spots that had no disposal units."
          implication="Account for real smoking behaviour, not just the official zone."
        />
        <Insight
          title="Convenience drove behaviour"
          body="Improper disposal spiked when people were in a hurry, when the bin wasn’t nearby, or when disposal took extra effort."
          implication="Make responsible disposal more convenient than dropping a butt on the ground."
        />
        <Insight
          title="Existing litter reinforced more littering"
          body="When the ground was already dirty, users felt less responsibility to dispose correctly."
          implication="A cleaner, more intentional environment supports better social norms."
        />
      </Section>

      {/* ── DESIGN DIRECTION ───────────────────────────────────────────── */}
      <Section
        id="direction"
        eyebrow="Design Direction"
        title={
          <>
            From butts to <em>better</em>.
          </>
        }
      >
        <p>The research pointed to a disposal experience that needed to be:</p>
        <ul className={UL}>
          <li>
            <strong>visible</strong>: users should notice disposal options
            without searching;
          </li>
          <li>
            <strong>convenient</strong>: disposal should fit into existing
            behaviour;
          </li>
          <li>
            <strong>distributed</strong>: disposal points should appear where
            smokers actually move;
          </li>
          <li>
            <strong>motivating</strong>: users should understand the positive
            impact of correct disposal;
          </li>
          <li>
            <strong>practical</strong>: the solution should be testable through
            physical and digital prototypes.
          </li>
        </ul>
        <blockquote className="my-8 rounded-[14px] border border-[rgb(184_67_31/0.22)] bg-[rgb(184_67_31/0.08)] p-6 font-serif text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.3] tracking-[-0.01em] text-cream">
          From Butts to Better: sustainable solutions for rethinking bad
          cigarette-disposal practices.
        </blockquote>
        <p>
          The vision was a redesigned smoking environment with clearer
          boundaries, more prominent disposal options, and feedback that helps
          people see how their actions add up to a cleaner shared space.
        </p>
        <ImageGrid
          cols={2}
          maxW={640}
          images={[
            { src: `${SLOT}/design-direction-1.png`, alt: "Design-direction poster: From Butts to Better, problem statement and introduction", width: 1587, height: 2245 },
            { src: `${SLOT}/design-direction-2.png`, alt: "Design-direction poster: envisioned experience and rationale", width: 1587, height: 2245 },
          ]}
          caption="The design direction (“From Butts to Better”) translated the research insights into the envisioned experience for a more responsible disposal environment."
        />
      </Section>

      {/* ── IDEATION ───────────────────────────────────────────────────── */}
      <Section
        id="ideation"
        eyebrow="Ideation"
        title={
          <>
            Exploring directions, then choosing.
          </>
        }
      >
        <p>I used sketchstorming to explore several interventions quickly:</p>
        <ul className={UL}>
          <li>
            <strong>Eye-level disposal unit</strong>: a more visible unit, less
            affected by wind.
          </li>
          <li>
            <strong>Phone-case butt holder</strong>: temporary storage until
            users reach a disposal point.
          </li>
          <li>
            <strong>Smart disposal bin &amp; app</strong>: a bin that counts
            butts and communicates recycling impact.
          </li>
          <li>
            <strong>Weather-protected smoking area</strong>: a shelter that
            keeps disposal close and visible.
          </li>
        </ul>
        <ImageGrid
          cols={2}
          images={[
            { src: `${SLOT}/sketch-1.jpg`, alt: "Sketch: phone case with an ash-tray compartment", width: 1668, height: 2154 },
            { src: `${SLOT}/sketch-2.jpg`, alt: "Sketch: smart disposal bin with a lid and screen", width: 1668, height: 2154 },
            { src: `${SLOT}/sketch-3.jpg`, alt: "Sketch: eye-level cigarette disposal unit with a mount", width: 1668, height: 2157 },
            { src: `${SLOT}/sketch-4.jpg`, alt: "Sketch: enclosed, weather-protected smoking area", width: 1668, height: 2154 },
          ]}
          caption="Sketchstorming explored four directions: a phone-case holder, a smart disposal bin, an eye-level mounted unit, and an enclosed smoking area."
        />
        <h3 className={H3}>Choosing a direction</h3>
        <p>
          I compared the concepts with an evaluation matrix scoring creativity,
          cost, usefulness, and feasibility. The phone-case holder scored highest
          for directly tackling convenience; the smart bin and app added value by
          connecting disposal to feedback and impact. Rather than pick one, I
          combined the two strongest directions into a single connected system.
        </p>
        <ImageSlot
          src={`${SLOT}/evaluation-matrix.jpg`}
          width={634}
          height={820}
          compact
          label="Evaluation matrix"
          caption="Each concept was scored on creativity, cost, usefulness, and feasibility. The phone-case holder came out highest, with the smart bin and app close behind."
        />
      </Section>

      {/* ── FINAL CONCEPT ──────────────────────────────────────────────── */}
      <Section
        id="concept"
        eyebrow="Final Concept"
        title={
          <>
            A small disposal <em>ecosystem</em>.
          </>
        }
      >
        <p>
          The final concept became a small disposal ecosystem made up of three
          connected parts.
        </p>
        <Part
          title="Phone-case butt holder"
          body="A physical phone-case attachment that lets smokers store butts temporarily when there’s no bin nearby or they’re in a rush."
          purpose="Make correct disposal possible even when the user isn’t close to a unit."
        />
        <Part
          title="Smart disposable bin"
          body="A visible bin that counts collected butts and helps prevent the wrong waste from being dropped inside."
          purpose="Make disposal visible, measurable, and part of a wider sustainability story."
        />
        <Part
          title="EcoSmoker app"
          body="A companion app that shows users their contribution and communicates what cigarette waste can become through recycling."
          purpose="Turn disposal from a hidden action into visible feedback and impact."
        />
        <ImageSlot
          src={`${SLOT}/final-concept-poster.webp`}
          width={1587}
          height={2245}
          compact
          label="EcoSmoker campaign poster"
          caption="A campaign poster ties the system together: the environmental stakes, the smart bin, and the app that turns collected butts into recycled material and rewards."
        />
      </Section>

      {/* ── PROTOTYPING (cream) ────────────────────────────────────────── */}
      <Section
        id="prototype"
        eyebrow="Prototyping"
        cream
        title={
          <>
            Made <em>tangible</em>, fast.
          </>
        }
      >
        <p>
          I prototyped the system physically and digitally so people could react
          to it realistically, long before any technical build.
        </p>

        <h3 className={H3_CREAM}>Physical phone-case prototype</h3>
        <p>
          I modelled the holder in 3D and produced a physical prototype by 3D
          printing, exploring the size of the butt compartment, how it attaches to
          the phone case, how users open, close, and empty it, and whether the
          idea felt convenient or uncomfortable.
        </p>
        <VideoSlot
          src={`${SLOT}/phone-case.mp4`}
          poster={`${SLOT}/phone-case-poster.jpg`}
          chrome={false}
          cream
          label="3D model of the phone-case holder"
          caption="The holder was modelled in 3D: a slim shell with a slide-out compartment that stores spent cigarette butts until the user reaches a bin."
        />
        <ImageSlot
          src={`${SLOT}/phone-case-hand.jpg`}
          width={1200}
          height={1600}
          compact
          cream
          label="3D-printed phone case in hand"
          caption="The printed prototype in hand, making the temporary cigarette-butt holder tangible enough to test how it opens, closes, and feels to carry."
        />

        <h3 className={H3_CREAM}>Smart-bin lo-fi prototype</h3>
        <p>
          I built a smart-bin mock-up from workshop materials and hard foam to
          communicate scale, form, and basic interaction, visibility, placement,
          opening design, waste separation, and how users would understand its
          purpose, without building the full technical system.
        </p>
        <ImageGrid
          cream
          cols={2}
          images={[
            { src: `${SLOT}/smart-bin-prototype.webp`, alt: "Cutting hard foam in the workshop to build the smart-bin mock-up", width: 1536, height: 1748 },
            { src: `${SLOT}/smart-bin-final.webp`, alt: "The finished smart-bin mock-up: a top grille for disposal, a screen showing impact, and a companion bin", width: 1536, height: 2048 },
          ]}
          caption="From hard foam to the finished mock-up. A top grille keeps other waste out, while a screen communicates impact and recycling."
        />

        <h3 className={H3_CREAM}>App prototype</h3>
        <p>
          I started the app with paper prototypes, then moved toward a
          higher-fidelity direction focused on logging disposal actions, showing
          collected impact, explaining how cigarette waste could be repurposed,
          and motivating users through social and environmental feedback.
        </p>
        <ImageGrid
          cream
          cols={2}
          images={[
            { src: `${SLOT}/app-1.webp`, alt: "EcoSmoker app: personal impact dashboard with streak and butts disposed", width: 348, height: 669 },
            { src: `${SLOT}/app-2.webp`, alt: "EcoSmoker app: rewards and badges screen", width: 348, height: 669 },
          ]}
          caption="From paper to a higher-fidelity flow. The app turns disposal into visible impact: a personal dashboard and rewards that make responsible disposal feel meaningful."
        />
      </Section>

      {/* ── TESTING & ITERATION ────────────────────────────────────────── */}
      <Section
        id="testing"
        eyebrow="Testing"
        title={
          <>
            Tested, then refined.
          </>
        }
      >
        <p>
          I tested the prototypes with smokers who use the campus smoking areas,
          focusing on whether the phone-case holder felt useful and convenient,
          whether people understood the smart bin, and whether the app feedback
          made the behaviour feel more meaningful.
        </p>
        <h3 className={H3}>What testing surfaced</h3>
        <ul className={UL}>
          <li>the phone case should be fireproof;</li>
          <li>the smell of stored butts could become a problem;</li>
          <li>the holder might need holes or ventilation;</li>
          <li>face detection could accidentally pick up passers-by;</li>
          <li>the bin needed a grid to stop other waste going inside.</li>
        </ul>
        <p>
          This showed the concept was promising, but it needed stronger material,
          hygiene, privacy, and waste-control thinking before it could become
          realistic.
        </p>
        <h3 className={H3}>Iterations</h3>
        <Decision
          title="Phone-case holder"
          body="Added internal grooves to better hold butts, and treated smell control and fireproof material as key requirements."
          why="The prototype is a functional concept, not a manufacturable product, but those constraints shape whether it could ever be one."
        />
        <Decision
          title="Smart bin"
          body="Added a grid or controlled opening to reduce contamination from other waste, and dropped face detection."
          why="Face detection was sensitive and technically risky, so the focus shifted to counting and impact feedback rather than surveillance."
        />
        <Decision
          title="App"
          body="Refined the direction around impact tracking and environmental feedback."
          why="Users should feel part of a wider sustainability action rather than simply being monitored."
        />
      </Section>

      {/* ── OUTCOME ────────────────────────────────────────────────────── */}
      <Section
        id="outcome"
        eyebrow="Outcome"
        title={
          <>
            A grounded concept for cleaner smoking areas.
          </>
        }
      >
        <p>
          The outcome was a concept system for more responsible cigarette-waste
          disposal around THUAS: a portable phone-case holder for convenience, a
          smart bin for visibility and collection, and an app that communicates
          environmental impact and recycling potential.
        </p>
        <p>
          The project showed that cigarette litter isn’t only caused by a lack of
          awareness. It’s shaped by convenience, visibility, weather, social
          norms, and the placement and design of the physical environment, so
          the concept made disposal easier at the moment of use and more
          meaningful after it.
        </p>
        <div className="cs-wide mt-9 grid gap-6 sm:grid-cols-2">
          <BeforeAfter
            label="At the start"
            items={[
              "The problem looked like a simple awareness gap.",
              "“People just need to be told to use the bins.”",
              "More bins seemed like the obvious fix.",
            ]}
          />
          <BeforeAfter
            label="After the process"
            accent
            items={[
              "Disposal was shaped by convenience, visibility, weather, and placement.",
              "Behaviour failed at specific moments, not from ignorance.",
              "A connected system, holder, bin, and app, fit how people actually smoke.",
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
            What I took from it.
          </>
        }
      >
        <p>
          This project taught me that sustainable behaviour change can’t rely on
          telling people to do the right thing. The design has to fit the moment
          where the behaviour happens. Smokers acted on convenience, weather,
          visibility, and social context, so the concept had to reduce friction,
          not just communicate responsibility.
        </p>
        <p>
          It also pushed me to work physically as well as digitally, 3D
          modelling, 3D printing, foam, paper prototyping, and app design, to
          explore the system from several angles. Making ideas tangible early
          meant people could react to them far more realistically in testing.
        </p>
        <p>
          If I took it further, I’d develop the phone-case material, test smell
          and heat safety, simplify the smart-bin technology, rethink the
          privacy-sensitive features, and run a longer field test around the
          THUAS smoking areas.
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

function Insight({
  title,
  body,
  implication,
}: {
  title: string;
  body: string;
  implication: string;
}) {
  return (
    <div className="border-t border-line py-7 first:border-t-0 first:pt-0">
      <h3 className="m-0 mb-3 text-[clamp(19px,1.9vw,25px)] font-medium leading-[1.15] tracking-[-0.03em] text-cream">
        {title}
      </h3>
      <p className="m-0">{body}</p>
      <p className="m-0 mt-3 text-cream">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
          Design implication
        </span>
        {implication}
      </p>
    </div>
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

type GridImage = { src: string; alt: string; width: number; height: number; pos?: string };

function ImageGrid({
  images,
  caption,
  cols = 2,
  fit = "natural",
  aspect = "4 / 3",
  maxW,
  cream = false,
}: {
  images: GridImage[];
  caption?: string;
  cols?: 1 | 2 | 3;
  fit?: "cover" | "natural";
  aspect?: string;
  maxW?: number;
  cream?: boolean;
}) {
  const border = cream ? "border-[rgb(33_26_18/0.16)]" : "border-line";
  const bg = cream ? "bg-[rgb(33_26_18/0.04)]" : "bg-[rgb(243_237_223/0.03)]";
  const colClass = cols === 3 ? "sm:grid-cols-3" : cols === 2 ? "sm:grid-cols-2" : "";
  return (
    <figure className="m-0 my-9" style={maxW ? { maxWidth: maxW, marginInline: "auto" } : undefined}>
      <div className={`grid grid-cols-1 gap-3 ${colClass}`}>
        {images.map((img) =>
          fit === "cover" ? (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-[12px] border ${border} ${bg}`}
              style={{ aspectRatio: aspect }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
                style={{ objectPosition: img.pos ?? "center" }}
              />
            </div>
          ) : (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className={`h-auto w-full self-start rounded-[12px] border ${border} ${bg}`}
            />
          )
        )}
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
