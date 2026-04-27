"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "@/lib/data";

export function Work() {
  return (
    <section id="work" className="container-x py-28 md:py-40">
      <div className="mb-16 flex items-end justify-between gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-muted"
          >
            (02) Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-display text-4xl tracking-tight md:text-6xl"
          >
            Recent case studies
          </motion.h2>
        </div>
        <span className="hidden text-sm text-muted md:block">
          {projects.length} projects · 2023 — present
        </span>
      </div>

      <ul className="hairline">
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </ul>

      <div className="mt-12 text-sm text-muted">
        More case studies are being adapted from decks — open the live one to
        see how I write up a project end-to-end.
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hover, setHover] = useState(false);
  const isLive = !project.comingSoon && !!project.caseStudy;

  const Inner = (
    <div className="grid grid-cols-12 items-center gap-6 py-8 md:py-10">
      <div className="col-span-1 text-xs text-muted">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="col-span-11 md:col-span-5">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl leading-tight tracking-tight md:text-4xl">
            {project.title}
          </h3>
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Read
            </span>
          ) : (
            <span className="rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">
              Coming soon
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted md:hidden">{project.summary}</p>
      </div>

      <div className="hidden md:col-span-3 md:block">
        <div className="text-sm">{project.client}</div>
        <div className="text-xs text-muted">{project.category}</div>
      </div>

      <div className="hidden text-sm text-muted md:col-span-2 md:block">
        {project.year}
      </div>

      <div className="hidden items-center justify-end gap-2 text-sm text-muted md:col-span-1 md:flex">
        <span
          className={`inline-block transition-transform duration-500 ${
            hover ? "translate-x-1" : ""
          }`}
        >
          ↗
        </span>
      </div>
    </div>
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative border-b border-line"
    >
      {isLive ? (
        <Link href={`/work/${project.slug}`} className="block">
          {Inner}
        </Link>
      ) : (
        <div className="cursor-not-allowed opacity-90">{Inner}</div>
      )}

      <motion.div
        initial={false}
        animate={{ height: hover ? "auto" : 0, opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-12 gap-6 pb-10">
          <div className="col-start-2 col-span-9 md:col-start-3 md:col-span-7">
            <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
              {isLive && (
                <Link
                  href={`/work/${project.slug}`}
                  className="ml-auto inline-flex items-center gap-1.5 text-xs text-[var(--fg)] underline-offset-4 hover:underline"
                >
                  Read the full case study →
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
}
