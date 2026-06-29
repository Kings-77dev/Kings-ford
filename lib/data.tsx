import type React from "react";

export type Project = {
  id: string;
  num: string;
  img: string;
  title: string;
  subtitle: string;
  copy: string;
  year: string;
};

export type CaseStudy = Project & {
  count: string;
  headline: React.ReactNode;
  lede: string;
  client: string;
  role: string;
  type: string;
  next: string;
  nextTitle: React.ReactNode;
  caption?: string;
  sector?: string;
  tools?: string;
  output?: string;
  siteUrl?: string;
  full?: boolean;
};

export const projects: Project[] = [
  {
    id: "xentys",
    num: "01",
    img: "/assets/xentys/homepage-after.png",
    title: "Xentys Recruitment",
    subtitle: "UX strategy · Website redesign",
    copy: "A specialist recruitment website rebuilt from research into a clearer, trust-led conversion platform for clients and candidates, now in production for a July 2026 launch.",
    year: "2026",
  },
  {
    id: "bouwkeet",
    num: "02",
    img: "/assets/bouwkeet/hero-thumbnail.png",
    title: "Bouwkeet",
    subtitle: "Service design · Physical-digital system",
    copy: "A playful physical-digital reflection system that makes children’s creative growth visible to facilitators, parents, and Bouwkeet.",
    year: "2025",
  },
  {
    id: "ecosmoker",
    num: "03",
    img: "/assets/ecosmoker/hero-thumbnail.png",
    title: "EcoSmoker",
    subtitle: "Product design · Service concept",
    copy: "A research-led product and service system that makes responsible cigarette-waste disposal more convenient, visible, and rewarding.",
    year: "2025",
  },
  {
    id: "andreopology",
    num: "04",
    img: "/assets/andreopology/work-archive.png",
    title: "Andreopology Studio",
    subtitle: "Web design · Front-end prototype",
    copy: "A dark, gallery-led website and front-end prototype for a documentary photography studio, built like an editorial archive.",
    year: "2026",
  },
  {
    id: "focus-tracker",
    num: "05",
    img: "/assets/focus/hero-thumbnail.png",
    title: "Focus",
    subtitle: "Self-initiated product · Floating task widget",
    copy: "A lightweight productivity tool built around a floating task widget that keeps the active project backlog visible while I design and code.",
    year: "2024",
  },
];

export const caseStudies: Record<string, CaseStudy> = {
  xentys: {
    ...projects[0],
    count: "01 of 05",
    headline: (
      <>
        Redesigning a specialist recruitment website into a clearer{" "}
        <em>conversion platform</em>.
      </>
    ),
    lede: "A research-led UX/UI redesign for Xentys, a specialist procurement and supply-chain recruitment agency in The Hague, turning a text-heavy site into a clearer, trust-led experience for two audiences: clients who need to hire, and candidates looking for new roles.",
    client: "Xentys",
    role: "UX research, UX strategy, UI design, prototyping, validation",
    type: "UX redesign / production build",
    sector: "Recruitment · Procurement · Supply chain",
    tools:
      "Figma, FigJam, Next.js, TypeScript, Tailwind CSS, Plerdy, Google Analytics, Search Console, Lighthouse, WAVE",
    output:
      "Research-led UX/UI redesign, now in production, launching July 2026",
    siteUrl: "xentys.nl",
    next: "bouwkeet",
    nextTitle: <>Bouwkeet<br />Service design &amp; physical-digital system</>,
    caption:
      "Two clear entry points help clients and candidates choose the right journey from the first screen.",
    full: true,
  },
  ecosmoker: {
    ...projects[2],
    count: "03 of 05",
    headline: (
      <>
        Designing a more convenient way to dispose of cigarette waste{" "}
        on campus.
      </>
    ),
    lede: "A research-led product and service design project for Mission Zero at The Hague University of Applied Sciences, investigating why cigarette butts were still littered around campus despite existing bins, and designing a connected system of a phone-case butt holder, a smart bin, and an impact-tracking app.",
    client: "Mission Zero",
    role: "User research, ideation, prototyping, testing, iteration",
    type: "Product & service design concept",
    sector: "Sustainability · Behaviour change · Campus",
    tools:
      "Miro, Canva, 3D modelling, 3D printing, foam modelling, paper prototyping, Figma",
    output:
      "Physical 3D-printed prototype, smart-bin concept, app concept, and tested lo-fi & hi-fi prototypes",
    next: "andreopology",
    nextTitle: <>Andreopology Studio<br />Web design &amp; front-end prototype</>,
    caption:
      "A connected disposal system (phone-case holder, smart bin, and impact app) designed around how people actually smoke.",
    full: true,
  },
  andreopology: {
    ...projects[3],
    count: "04 of 05",
    headline: (
      <>
        Designing a slow, editorial website for a{" "}
        <em>photography studio</em>.
      </>
    ),
    lede: "A client website design and front-end prototype for Andreopology Studio, a documentary photography studio, a dark, gallery-led experience that presents selected series as an editorial archive, with cinematic image plates and a sticky-portrait Studio page.",
    client: "Andreopology Studio",
    role: "UI design, interaction design, front-end prototyping, design handoff",
    type: "Client website / front-end prototype",
    sector: "Photography · Creative studio",
    tools: "React, HTML, CSS, JavaScript, design handoff documentation",
    output:
      "High-fidelity React prototype, visual system, page layouts, interaction states, and a design-handoff package",
    next: "focus-tracker",
    nextTitle: <>Focus<br />Self-initiated product design</>,
    caption:
      "A dark, gallery-led archive, selected series presented with editorial titles and quiet metadata, so the photography leads.",
    full: true,
  },
  "bouwkeet": {
    ...projects[1],
    count: "02 of 05",
    headline: (
      <>
        Making children’s growth visible through playful{" "}
        <em>reflection</em>.
      </>
    ),
    lede: "A group UX and service design project for Bouwkeet, a children’s makerspace, designing a connected physical-digital reflection system (booklet, stickers, scanning app, facilitator dashboard, and a playful “Frankenstein” growth object) that makes the soft-skill growth behind making visible to facilitators, parents, and the organisation.",
    client: "Bouwkeet",
    role: "UX research, concept development, prototyping, testing (group project)",
    type: "Service design / physical-digital system",
    sector: "Creative education · Makerspace · Child-centred design",
    output:
      "Reflection booklet, sticker system, scanning app, facilitator dashboard, Frankenstein growth object, and expo presentation",
    next: "ecosmoker",
    nextTitle: <>EcoSmoker<br />Product &amp; service design</>,
    caption:
      "A connected journey, from a child’s sticker reflection to facilitator insight and a playful growth object.",
    full: true,
  },
  "focus-tracker": {
    ...projects[4],
    count: "05 of 05",
    headline: (
      <>
        A floating backlog that <em>stays with me</em> while I work.
      </>
    ),
    lede: "A self-initiated product-design project, built from my own workflow problem, a lightweight system centred on a floating task widget that keeps the active project backlog visible while I design and code across Figma, VS Code, and the browser, with a dashboard for the bigger picture.",
    client: "Self-initiated",
    role: "Product design, UI design, front-end prototyping",
    type: "Self-initiated product / prototype",
    sector: "Productivity · Designer & developer tools",
    tools: "Figma, Claude Design, React, HTML, CSS",
    output:
      "Floating task widget, dashboard, mobile concept, project IA, interaction states, and a React prototype",
    next: "xentys",
    nextTitle: <>Xentys Recruitment<br />Website redesign</>,
    caption:
      "The floating widget keeps the active project backlog beside your work: capture a task, check it off, and keep going.",
    full: true,
  },
};

