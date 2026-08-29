import type React from "react";
import Image from "next/image";
import CaseStudyNav, { type NavSection } from "@/components/work/CaseStudyNav";
import VideoSlot from "@/components/work/VideoSlot";

/**
 * Xentys case study body, content sourced strictly from the authoritative
 * brief (xentys_portfolio_case_study.md). Titled, un-numbered sections with a
 * sticky scroll-spy nav. Real redesign screens live in /public/assets/xentys
 * and render through `ImageSlot` (next/image). Slots without a `src` fall back
 * to a labelled placeholder frame (consultant card + open application, awaiting
 * screens from the client).
 */

const SLOT = "/assets/xentys";

const SECTIONS: NavSection[] = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "findings", label: "Key Findings" },
  { id: "strategy", label: "Design Strategy" },
  { id: "decisions", label: "Design Decisions" },
  { id: "prototype", label: "Prototype" },
  { id: "testing", label: "Testing" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function XentysCaseStudy() {
  return (
    <>
      <CaseStudyNav sections={SECTIONS} />

      {/* ── OVERVIEW ───────────────────────────────────────────────────── */}
      <Section
        id="overview"
        eyebrow="Overview"
        title={
          <>
            Two audiences, one clearer experience.
          </>
        }
      >
        <p>
          <strong>
            What began as a research-led redesign is now being built.
          </strong>{" "}
          I&rsquo;m developing the production frontend in Next.js, and the new
          Xentys site goes live in July 2026.
        </p>
        <p>
          Xentys had an existing website with a lot of relevant content, but the
          experience did not clearly communicate the value of the company or
          guide users toward action. The site served two audiences with very
          different goals: hiring managers looking for recruitment support, and
          candidates looking for vacancies.
        </p>
        <p>
          The challenge was not only visual. The project required understanding
          why users were not finding the right information, why important
          conversion routes were weak, and how trust could be communicated
          earlier in the journey.
        </p>
        <blockquote className="my-8 rounded-[14px] border border-[rgb(184_67_31/0.22)] bg-[rgb(184_67_31/0.08)] p-6 font-serif text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.3] tracking-[-0.01em] text-cream">
          Clarity first, trust second, human connection throughout.
        </blockquote>
        <p>
          This became the foundation for the information architecture, interface
          decisions, conversion flows, and final prototype.
        </p>

        <h3 className={H3}>My role</h3>
        <p>
          I worked across the full UX process, from research and synthesis to
          interface design, prototyping, testing, and iteration:
        </p>
        <ul className={UL}>
          <li>
            auditing the existing website through heuristic evaluation and
            accessibility review;
          </li>
          <li>
            analysing website behaviour using heatmaps, analytics, and
            search-performance data;
          </li>
          <li>
            conducting stakeholder interviews and usability testing with
            clients, candidates, and internal recruiters;
          </li>
          <li>
            translating findings into data cards, affinity clusters, design
            principles, and concept directions;
          </li>
          <li>
            creating personas, journey maps, information architecture, user
            flows, and wireframes;
          </li>
          <li>designing the visual direction and design system;</li>
          <li>building a coded hi-fi prototype in Next.js;</li>
          <li>
            testing the prototype, reviewing it with internal stakeholders, and
            refining it through final iterations.
          </li>
        </ul>
      </Section>

      {/* ── CHALLENGE ──────────────────────────────────────────────────── */}
      <Section
        id="challenge"
        eyebrow="Challenge"
        title={
          <>
            An archive, not a <em>conversion platform</em>.
          </>
        }
      >
        <p>
          The original Xentys website worked more like an information archive
          than a conversion-focused recruitment platform. It described what the
          company did, but it did not guide users clearly enough. Four problems
          stood out:
        </p>
        <ul className={UL}>
          <li>
            <strong>Users could not understand the offer quickly enough.</strong>{" "}
            The homepage did not immediately separate clients from candidates,
            which made the first step unclear.
          </li>
          <li>
            <strong>
              Client and candidate journeys were not clearly separated.
            </strong>{" "}
            Hiring managers and job-seeking candidates had different goals, but
            the navigation and CTAs did not support those differences strongly
            enough.
          </li>
          <li>
            <strong>Important trust signals appeared too late.</strong> Recruiter
            visibility, team expertise, process clarity, and social proof were
            hidden deeper in the website.
          </li>
          <li>
            <strong>Conversion paths lacked guidance.</strong> Clients had no
            clear vacancy-intake route, while candidates did not always
            understand what would happen after applying.
          </li>
        </ul>
        <p>
          The goal was to redesign the website so that both audiences could
          understand where to go, why Xentys was credible, and what step to take
          next.
        </p>
        <VideoSlot
          src={`${SLOT}/old-site.mp4`}
          poster={`${SLOT}/homepage-before.png`}
          addr="xentys.nl"
          label="Original Xentys site"
          caption="A walk through the original Xentys site, content-rich, but built like an archive: no clear split between hiring managers and candidates, and weak routes to action."
        />
        <VideoSlot
          src={`${SLOT}/old-vacancies-and-details.mp4`}
          poster={`${SLOT}/old-vacancies-poster.png`}
          addr="xentys.nl/vacancies"
          label="Original vacancies & vacancy detail"
          caption="The original vacancy listing and detail pages in motion: text-heavy, with weak affordances and unclear next steps."
        />
      </Section>

      {/* ── RESEARCH ───────────────────────────────────────────────────── */}
      <Section
        id="research"
        eyebrow="Research"
        title={
          <>
            Understanding the site from every angle.
          </>
        }
      >
        <p>
          The research phase used multiple methods to understand the website from
          different perspectives:
        </p>
        <ul className={UL}>
          <li>
            <strong>Heuristic evaluation</strong>: to identify usability issues
            in the current interface.
          </li>
          <li>
            <strong>Accessibility audit</strong>: contrast, form labels,
            semantic structure, ARIA, keyboard use, and touch targets.
          </li>
          <li>
            <strong>Web analytics &amp; heatmaps</strong>: how users interacted
            with the homepage, vacancies, and About pages.
          </li>
          <li>
            <strong>SEO &amp; AIEO analysis</strong>: discoverability, search
            intent, content structure, and AI-assisted discovery.
          </li>
          <li>
            <strong>Stakeholder interviews</strong>: how recruiters, candidates,
            and client-side users perceived the current site.
          </li>
          <li>
            <strong>Usability testing</strong>: where users struggled with
            orientation, navigation, vacancy browsing, application, and contact.
          </li>
          <li>
            <strong>Competitor &amp; precedent analysis</strong>: recruitment
            patterns and useful directions, without copying competitors.
          </li>
          <li>
            <strong>Co-creation workshop</strong>: aligning findings with
            stakeholder priorities and exploring concept directions.
          </li>
        </ul>
        <ImageSlot
          src={`${SLOT}/data-cards.png`}
          width={904}
          height={410}
          label="Research data cards"
          caption="Research findings were translated into data cards and clustered into recurring themes."
        />
        <ImageSlot
          frame
          addr="xentys.nl"
          src={`${SLOT}/heatmap.png`}
          width={936}
          height={528}
          label="Behaviour heatmap"
          caption="Heatmaps and analytics showed how users actually moved through the homepage and vacancies."
        />
      </Section>

      {/* ── KEY FINDINGS ───────────────────────────────────────────────── */}
      <Section
        id="findings"
        eyebrow="Key Findings"
        title={
          <>
            What the research surfaced.
          </>
        }
      >
        <Finding
          title="The first impression was not clear enough"
          body="Users needed to understand quickly whether the website was relevant to them. The homepage did not make the two primary pathways clear: hiring support for clients and vacancy exploration for candidates."
          response="Create a two-audience homepage with clear entry points, one for hiring managers and one for candidates."
        />
        <Finding
          title="The client pathway was weak"
          body="Clients had no clear way to start a hiring conversation or share a vacancy brief. The generic contact form did not explain what information was needed or what would happen next."
          response="Introduce a guided consultation flow that helps clients share the basics of a vacancy and understand the next step."
        />
        <Finding
          title="Candidates needed clearer application routes"
          body="The candidate journey was too passive. If a user did not find the right vacancy, there was no strong alternative route to stay connected with Xentys."
          response="Add an open-application pathway alongside role-specific applications, so candidates can register interest even when no vacancy matches."
        />
        <Finding
          title="Trust was present, but not visible early enough"
          body="Users were interested in team members and recruiter visibility, but these trust signals appeared too deep in the site."
          response="Surface recruiter profiles, team expertise, process clarity, client logos, metrics, and testimonials earlier in the journey."
        />
        <Finding
          title="Vacancy browsing needed stronger affordances"
          body="Heatmap and usability findings showed users interacted heavily with vacancy headings and content areas. The listing needed clearer cards, filters, and clickable behaviour."
          response="Redesign the vacancies page around scannable cards, clearer filtering, visible result counts, and stronger click affordances."
        />
      </Section>

      {/* ── DESIGN STRATEGY ────────────────────────────────────────────── */}
      <Section
        id="strategy"
        eyebrow="Design Strategy"
        title={
          <>
            Clarity, trust, human <em>connection</em>.
          </>
        }
      >
        <p>The research translated into three strategic pillars:</p>
        <h3 className={H3}>Clarity</h3>
        <p>
          Make it immediately obvious what Xentys does, who the website is for,
          and what each audience should do next.
        </p>
        <h3 className={H3}>Trust</h3>
        <p>
          Bring credibility forward through recruiter visibility, process
          explanation, proof points, client signals, and reassurance.
        </p>
        <h3 className={H3}>Human connection</h3>
        <p>
          Recruitment is relationship-led, so the interface needed to show who
          users would be dealing with and what would happen after contact, not
          just describe a company.
        </p>
        <ImageSlot
          src={`${SLOT}/information-architecture.png`}
          width={2048}
          height={420}
          label="Information architecture"
          caption="The redesigned structure separates employer and candidate needs while keeping the website manageable."
        />
      </Section>

      {/* ── DESIGN DECISIONS ───────────────────────────────────────────── */}
      <Section
        id="decisions"
        eyebrow="Design Decisions"
        title={
          <>
            Decisions that shaped the redesign.
          </>
        }
      >
        <Decision
          title="Two-audience homepage"
          body="Instead of one generic entry point, visitors are guided toward two clear routes (“I need to hire” and “I’m looking for a new role”) so they can identify their path without interpreting the whole site first."
          why="Clients and candidates have different goals. Making that distinction visible above the fold reduces orientation friction."
        />
        <Decision
          title="Employer mega-menu"
          body="Rather than relying on a standalone client overview page, employer-facing content is distributed across the homepage, service pages, consultation flow, and navigation."
          why="The original navigation made services hard to discover. The revised structure gives hiring managers a faster overview of what Xentys can help with."
        />
        <Decision
          title="Guided consultation flow"
          body="A generic contact form was replaced with a purposeful vacancy-brief flow asking for placement type, role details, urgency, contact preference, and optional vacancy information, and explaining what happens after submission."
          why="The flow reduces ambiguity and makes the action feel specific to hiring, not just “contact us.”"
        />
        <ImageSlot
          compact
          src={`${SLOT}/consultation-flow.png`}
          width={451}
          height={494}
          label="Guided consultation flow"
          caption="The generic contact form became a guided vacancy-brief flow for hiring managers."
        />
        <Decision
          title="Recruiter visibility"
          body="Recruiter profiles were added at key decision points, including vacancy pages and consultation moments: each showing a named recruiter, photo, direct contact details, and a short personal line."
          why="Research showed trust in recruitment is strongly tied to people. Showing the recruiter helps the site feel more personal and credible."
        />
        <ImageSlot
          compact
          src={`${SLOT}/consultant-card.png`}
          width={720}
          height={878}
          label="Consultant card"
          caption="Recruiter visibility was added at key decision points to make the experience feel more personal and trustworthy."
        />
        <Decision
          title="Improved vacancy cards & filters"
          body="The vacancy listing was redesigned around scannable cards surfacing title, sector, location, placement type, salary or day rate, date posted, and recruiter connection, with practical filters to narrow the list."
          why="Vacancy browsing is one of the most important candidate tasks. Better cards and filters reduce effort and make the page feel more usable."
        />
        <VideoSlot
          src={`${SLOT}/vacancy-listing.mp4`}
          poster={`${SLOT}/vacancy-listing-poster.png`}
          addr="xentys.nl/vacancies"
          label="Vacancy listing"
          caption="Vacancy cards were redesigned to make role information easier to scan and filter, with practical filters to narrow the list."
        />
        <VideoSlot
          src={`${SLOT}/vacancy-detail-demo.mp4`}
          poster={`${SLOT}/vacancy-detail-poster.png`}
          addr="xentys.nl/vacancy"
          label="Vacancy detail"
          caption="The vacancy detail page surfaces role information, the assigned recruiter, and a clear path to apply."
        />
        <Decision
          title="Open-application route"
          body="Candidates can apply for a specific role or submit an open application, giving them a next step even when no current vacancy matches their profile."
          why="Specialist recruitment isn’t only about live vacancies. The open-application route keeps the relationship open and supports the candidate pipeline."
        />
        <VideoSlot
          src={`${SLOT}/open-application.mp4`}
          poster={`${SLOT}/open-application-poster.png`}
          addr="xentys.nl/open-application"
          label="Open application"
          caption="Candidates can still take action even when no current vacancy matches their profile. An open application keeps the relationship open."
        />
        <Decision
          title="Post-submission success states"
          body="Instead of a generic confirmation, success messages explain that the submission was received, who will follow up, expected response timing, and what the user can do next."
          why="Users shouldn’t feel abandoned after submitting important information. Clear feedback builds confidence and reduces uncertainty."
        />
        <ImageSlot
          compact
          src={`${SLOT}/success-state.png`}
          width={451}
          height={375}
          label="Success state"
          caption="Post-submission screens explain what happens next, who will respond, and when."
        />
        <Decision
          title="Floating contact menu"
          body="A floating contact button was refined into a small labelled menu: call, email, LinkedIn."
          why="The original phone-icon interpretation was ambiguous. Labelled options make the contact entry point clearer without overwhelming the page."
        />
      </Section>

      {/* ── PROTOTYPE (cream) ──────────────────────────────────────────── */}
      <Section
        id="prototype"
        eyebrow="Prototype"
        cream
        title={
          <>
            Built in <em>code</em>, then carried into production.
          </>
        }
      >
        <p>
          The final hi-fi design was translated into a coded prototype using
          Next.js. The project involved more than static screens. The prototype
          needed to demonstrate:
        </p>
        <ul className={UL}>
          <li>navigation behaviour;</li>
          <li>vacancy filtering;</li>
          <li>modal interactions;</li>
          <li>form flows;</li>
          <li>responsive layouts;</li>
          <li>hover and active states;</li>
          <li>post-submission success states.</li>
        </ul>
        <p>
          Building the prototype in code made the experience feel closer to a
          real product and helped reveal implementation-level issues that static
          mockups might not show.
        </p>
        <figure className="m-0 my-9">
          <div className="grid grid-cols-3 gap-4">
            {[
              { n: 1, h: 2013 },
              { n: 2, h: 2303 },
              { n: 3, h: 2556 },
            ].map(({ n, h }) => (
              <Image
                key={n}
                src={`${SLOT}/responsive-${n}.png`}
                alt={`Responsive mobile screen ${n}`}
                width={1179}
                height={h}
                sizes="(min-width: 768px) 220px, 30vw"
                className="h-auto w-full rounded-[12px] border border-[rgb(33_26_18/0.16)]"
              />
            ))}
          </div>
          <figcaption className="mt-3 max-w-[60ch] font-mono text-[11px] italic leading-[1.55] text-[#5c5345]">
            The hi-fi prototype was built responsively: the core flows adapt
            cleanly to mobile.
          </figcaption>
        </figure>
      </Section>

      {/* ── TESTING ────────────────────────────────────────────────────── */}
      <Section
        id="testing"
        eyebrow="Testing"
        title={
          <>
            Validated, then refined.
          </>
        }
      >
        <h3 className={H3}>Lo-fi testing</h3>
        <p>
          The lo-fi prototype tested the structure of the main journeys before
          visual design was added, validating the homepage, client pathway,
          candidate pathway, open application, and internal-recruiter
          expectations.
        </p>
        <h3 className={H3}>Hi-fi testing</h3>
        <p>
          The hi-fi prototype tested whether the final visual design,
          interactions, and conversion flows were clear enough, focusing on:
        </p>
        <ul className={UL}>
          <li>first impression;</li>
          <li>audience route selection;</li>
          <li>vacancy browsing;</li>
          <li>consultation flow;</li>
          <li>open application;</li>
          <li>visual credibility &amp; recruiter visibility;</li>
          <li>post-submission reassurance.</li>
        </ul>
        <h3 className={H3}>Stakeholder review &amp; regression</h3>
        <p>
          The prototype was reviewed with internal Xentys stakeholders to confirm
          it matched the organisation&rsquo;s recruitment model and business
          needs. A short regression check then confirmed the main usability
          issues had been addressed without introducing new friction.
        </p>
        <h3 className={H3}>Final iterations</h3>
        <p>Refinements based on testing and stakeholder feedback included:</p>
        <ul className={UL}>
          <li>making the candidate CTA more visible;</li>
          <li>improving the vacancy-filter hierarchy;</li>
          <li>making vacancy cards clearly clickable;</li>
          <li>changing the floating contact button into a labelled menu;</li>
          <li>clarifying the consultation modal;</li>
          <li>improving success states;</li>
          <li>correcting smaller interaction and consistency issues.</li>
        </ul>
      </Section>

      {/* ── OUTCOME ────────────────────────────────────────────────────── */}
      <Section
        id="outcome"
        eyebrow="Outcome"
        title={
          <>
            A clearer Xentys, now in production.
          </>
        }
      >
        <p>
          The redesign is now in production. I&rsquo;m building the frontend in
          Next.js, and the new site launches in July 2026. What started as a
          research-led proposal became a real product: a clearer structure for
          both audiences, trust signals brought forward, improved vacancy
          browsing, guided conversion flows, and more reassuring post-submission
          feedback.
        </p>
        <p>
          Final content, CMS integration, and accessibility compliance are part
          of the build, and I&rsquo;ll measure conversion once the site is live.
        </p>
        <VideoSlot
          src={`${SLOT}/home-new.mp4`}
          poster={`${SLOT}/homepage-after.png`}
          addr="xentys.nl"
          label="Redesigned Xentys homepage"
          caption="The redesigned homepage: two clear audience routes, trust signals brought forward, and a guided path to action."
        />
        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          <BeforeAfter
            label="Before"
            items={[
              "Text-heavy pages with weak hierarchy.",
              "Client and candidate paths not clearly separated.",
              "Trust signals hidden too late.",
              "Contact and application flows lacked guidance.",
              "Vacancy browsing relied on headings and weak affordances.",
              "Unclear what happened after submitting information.",
            ]}
          />
          <BeforeAfter
            label="After"
            accent
            items={[
              "Two clear audience routes from the homepage.",
              "More visible employer and candidate journeys.",
              "Recruiter profiles and trust signals surfaced earlier.",
              "Guided consultation and open-application flows.",
              "Scannable vacancy cards and improved filters.",
              "Clear success states with next-step reassurance.",
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
          This project showed me how much work sits between research findings and
          a final interface. The biggest challenge wasn&rsquo;t redesigning the
          website visually, but deciding which findings should shape the
          structure, which should influence interaction design, and which should
          become content or implementation recommendations.
        </p>
        <p>
          It pushed me to work across business goals, user needs, interface
          structure, visual design, accessibility, SEO, and frontend
          prototyping. Building the final prototype in Next.js helped me test the
          design more realistically and think about how the experience would work
          beyond static screens.
        </p>
        <p>
          The project is now in implementation, and I&rsquo;m building it. The
          next steps are refining final copy, completing technical accessibility
          testing, connecting the flows to a CMS, and measuring conversion after
          launch. Carrying a research-led design all the way into a production
          frontend is exactly the kind of end-to-end work I want to keep doing.
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

function Finding({
  title,
  body,
  response,
}: {
  title: string;
  body: string;
  response: string;
}) {
  return (
    <div className="border-t border-line py-7 first:border-t-0 first:pt-0">
      <h3 className="m-0 mb-3 text-[clamp(19px,1.9vw,25px)] font-medium leading-[1.15] tracking-[-0.03em] text-cream">
        {title}
      </h3>
      <p className="m-0">{body}</p>
      <p className="m-0 mt-3 text-cream">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
          Design response
        </span>
        {response}
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

function ImageSlot({
  ratio,
  label,
  caption,
  src,
  width,
  height,
  compact = false,
  scroll = false,
  frame = false,
  addr = "xentys.nl",
  cream = false,
}: {
  ratio?: string;
  label: string;
  caption: string;
  src?: string;
  width?: number;
  height?: number;
  compact?: boolean;
  scroll?: boolean;
  frame?: boolean;
  addr?: string;
  cream?: boolean;
}) {
  const border = cream ? "border-[rgb(33_26_18/0.16)]" : "border-line";
  const placeholderBg = cream
    ? "bg-[rgb(33_26_18/0.04)]"
    : "bg-[rgb(243_237_223/0.03)]";
  const labelColor = cream ? "text-[#9a7b53]" : "text-muted";
  const capColor = cream ? "text-[#5c5345]" : "text-muted";

  const img = (
    <Image
      src={src ?? ""}
      alt={label}
      width={width ?? 1600}
      height={height ?? 1000}
      sizes="(min-width: 768px) 840px, 100vw"
      className="block h-auto w-full"
    />
  );

  return (
    <figure className="m-0 my-9">
      {src ? (
        frame ? (
          // Browser-chrome frame (matches VideoSlot), for full website screenshots.
          <div className={`overflow-hidden rounded-[14px] border ${border}`}>
            <div className="chrome">
              <i />
              <i />
              <i />
              <span className="addr">{addr}</span>
            </div>
            {scroll ? (
              <div className="max-h-[560px] w-full overflow-y-auto">{img}</div>
            ) : (
              img
            )}
          </div>
        ) : scroll ? (
          <div
            className={`max-h-[560px] w-full overflow-y-auto rounded-[14px] border ${border}`}
          >
            {img}
          </div>
        ) : (
          <Image
            src={src}
            alt={label}
            width={width ?? 1600}
            height={height ?? 1000}
            sizes="(min-width: 768px) 840px, 100vw"
            className={`h-auto w-full rounded-[14px] border ${border} ${
              compact ? "max-w-[440px]" : ""
            }`}
          />
        )
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
