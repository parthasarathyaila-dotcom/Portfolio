import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { CaseStudy } from "@/components/CaseStudy";
import { Footer } from "@/components/Footer";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy && p.caseStudy.length > 0)
    .map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Case study not found" };
  return {
    title: `${project.title} — Partha Sarathy Aila`,
    description: project.summary,
  };
}

export default function CaseStudyPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project || !project.caseStudy) notFound();

  return (
    <main className="relative">
      <header className="container-x flex h-16 items-center justify-between border-b border-line">
        <Link href="/" className="group inline-flex items-center gap-2 text-sm">
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
            ←
          </span>
          <span>Back to work</span>
        </Link>
        <Link
          href="/#contact"
          className="group hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-all hover:border-[var(--fg)] md:inline-flex"
        >
          <span>Let's talk</span>
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </Link>
      </header>

      <CaseStudy project={project} />

      <Footer />
    </main>
  );
}
