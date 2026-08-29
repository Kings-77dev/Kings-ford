import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@/components/icons/Arrows";
import { notFound } from "next/navigation";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import XentysCaseStudy from "@/components/work/XentysCaseStudy";
import EcoSmokerCaseStudy from "@/components/work/EcoSmokerCaseStudy";
import BouwkeetCaseStudy from "@/components/work/BouwkeetCaseStudy";
import FocusCaseStudy from "@/components/work/FocusCaseStudy";
import AndreopologyCaseStudy from "@/components/work/AndreopologyCaseStudy";
import { caseStudies } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies[slug];
  if (!project) return {};
  return {
    title: `${project.title}, Kings Ford®`,
    description: project.lede,
  };
}

const factClass = "font-mono text-[13px] tracking-[0.02em] text-cream";
const keyClass = "mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] text-muted";

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = caseStudies[slug];
  if (!project) notFound();
  const full = project.full;

  return (
    <>
      <Nav />
      <main className="pt-[96px]">
        {slug !== "andreopology" && (
        <section className="border-b border-line py-[clamp(50px,8vw,120px)_clamp(40px,5vw,80px)]">
          <div className="wrap">
            <div className="mb-[42px] flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <Link href="/#work" className="transition-colors hover:text-cream">
                <ArrowLeft /> All work
              </Link>
              <span>Case study · {project.count}</span>
            </div>
            <h1 className="m-0 max-w-[13ch] text-[clamp(54px,9vw,134px)] font-medium leading-[0.94] tracking-[-0.06em] [&_em]:font-serif [&_em]:font-normal">
              {project.headline}
            </h1>
            <p className="my-9 max-w-[58ch] text-[clamp(18px,1.5vw,22px)] leading-[1.5] text-muted md:mb-12">
              {project.lede}
            </p>
            <div className="grid gap-[22px] border-t border-line py-[26px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <div>
                <span className={keyClass}>Client</span>
                <span className={factClass}>{project.client}</span>
              </div>
              {project.sector && (
                <div>
                  <span className={keyClass}>Sector</span>
                  <span className={factClass}>{project.sector}</span>
                </div>
              )}
              <div>
                <span className={keyClass}>Year</span>
                <span className={factClass}>{project.year}</span>
              </div>
              <div>
                <span className={keyClass}>Role</span>
                <span className={factClass}>{project.role}</span>
              </div>
              <div>
                <span className={keyClass}>Type</span>
                <span className={factClass}>{project.type}</span>
              </div>
              {project.tools && (
                <div className="sm:col-span-2 lg:col-span-3">
                  <span className={keyClass}>Tools</span>
                  <span className={factClass}>{project.tools}</span>
                </div>
              )}
              {project.output && (
                <div className="sm:col-span-2 lg:col-span-4">
                  <span className={keyClass}>Output</span>
                  <span className={factClass}>{project.output}</span>
                </div>
              )}
            </div>
            {project.siteUrl ? (
              // Framed hero (browser-chrome window) for projects with a real site:
              // matches the in-article media; sized between the body media and full-bleed.
              <figure className="mx-auto mt-[54px] max-w-[1120px]">
                <div className="overflow-hidden rounded-[14px] border border-line bg-[#101010]">
                  <div className="chrome">
                    <i />
                    <i />
                    <i />
                    <span className="addr">{project.siteUrl}</span>
                  </div>
                  <div className="relative w-full" style={{ aspectRatio: "2880 / 1384" }}>
                    <Image
                      src={project.img}
                      alt={`${project.title} homepage`}
                      fill
                      priority
                      sizes="(min-width: 1180px) 1120px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                {project.caption && (
                  <figcaption className="mt-3 font-mono text-[11px] leading-[1.5] text-muted">
                    {project.caption}
                  </figcaption>
                )}
              </figure>
            ) : (
              // Same sizing as the framed hero (capped + centred), plain image:
              // until the project has a real desktop screen/video (then it gets the chrome UI).
              <figure className="mx-auto mt-[54px] max-w-[1120px]">
                <div className="relative aspect-[16/9.5] overflow-hidden rounded-[14px] border border-line bg-[#101010]">
                  <Image
                    src={project.img}
                    alt={`${project.title} project preview`}
                    fill
                    priority
                    sizes="(min-width: 1180px) 1120px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                {project.caption && (
                  <figcaption className="mt-3 font-mono text-[11px] leading-[1.5] text-muted">
                    {project.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </section>
        )}

        {!full && (
          <section className="wrap py-20">
            <div className="max-w-[680px] rounded-[14px] border border-line bg-[rgb(243_237_223/0.03)] p-8">
              <span className="mb-[10px] block font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                ★ Case study in progress
              </span>
              <p className="m-0 text-[17px] leading-[1.55] text-muted">
                The full write-up for this project is being prepared. The page
                structure, hero, project facts, preview image, and next-project
                navigation are already in place so you can expand it later.
              </p>
            </div>
          </section>
        )}

        {full && slug === "xentys" && <XentysCaseStudy />}
        {full && slug === "ecosmoker" && <EcoSmokerCaseStudy />}
        {full && slug === "bouwkeet" && <BouwkeetCaseStudy />}
        {full && slug === "focus-tracker" && <FocusCaseStudy />}
        {full && slug === "andreopology" && <AndreopologyCaseStudy />}

        <section className="wrap">
          <div className="border-t border-line py-[clamp(60px,8vw,110px)]">
            <Link
              href={`/work/${project.next}`}
              className="flex items-end justify-between gap-[30px] max-md:flex-col max-md:items-start"
            >
              <div>
                <span className="mb-[14px] block font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Next project
                </span>
                <h3 className="m-0 text-[clamp(32px,4.4vw,56px)] font-medium leading-none tracking-[-0.05em]">
                  {project.nextTitle}
                </h3>
              </div>
              <span className="grid h-[60px] w-[60px] shrink-0 place-items-center rounded-full border border-line-strong transition-all duration-300 hover:rotate-[-45deg] hover:border-accent hover:bg-accent hover:text-white">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
