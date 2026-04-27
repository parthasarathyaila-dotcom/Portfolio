"use client";

import { motion } from "framer-motion";
import type { CaseSection, Project } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function CaseStudy({ project }: { project: Project }) {
  if (!project.caseStudy) return null;

  return (
    <article className="relative">
      {project.caseStudy.map((section, i) => (
        <SectionRenderer key={i} section={section} index={i} />
      ))}

      <NextSteps />
    </article>
  );
}

function SectionRenderer({
  section,
  index,
}: {
  section: CaseSection;
  index: number;
}) {
  const animation = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease, delay: Math.min(index, 3) * 0.04 },
  };

  switch (section.kind) {
    case "intro":
      return <IntroSection section={section} />;
    case "stats":
      return (
        <motion.section
          {...animation}
          className="container-x border-b border-line py-20 md:py-28"
        >
          {section.title && (
            <h2 className="mb-12 font-display text-3xl tracking-tight md:text-5xl">
              {section.title}
            </h2>
          )}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {section.items.map((m) => (
              <div
                key={m.label}
                className="flex flex-col gap-3 bg-[var(--bg)] p-8"
              >
                <div className="font-display text-4xl tracking-tight md:text-5xl">
                  {m.value}
                </div>
                <div className="text-sm font-medium">{m.label}</div>
                {m.sub && (
                  <div className="text-xs leading-relaxed text-muted">
                    {m.sub}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      );

    case "prose":
      return (
        <motion.section
          {...animation}
          className="container-x border-b border-line py-20 md:py-28"
        >
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              {section.eyebrow && (
                <span className="text-xs uppercase tracking-[0.25em] text-muted">
                  {section.eyebrow}
                </span>
              )}
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                {section.title}
              </h2>
            </div>
            <div className="col-span-12 space-y-6 text-base leading-relaxed text-muted md:col-span-7 md:col-start-6 md:text-lg">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </motion.section>
      );

    case "quote":
      return (
        <motion.section
          {...animation}
          className="container-x border-b border-line py-24 md:py-32"
        >
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-display text-6xl text-muted md:text-7xl">
              &ldquo;
            </span>
            <p className="mt-2 font-display text-2xl leading-snug tracking-tight md:text-4xl">
              {section.quote}
            </p>
            {section.attribution && (
              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted">
                — {section.attribution}
              </p>
            )}
          </div>
        </motion.section>
      );

    case "list":
      return (
        <motion.section
          {...animation}
          className="container-x border-b border-line py-20 md:py-28"
        >
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              {section.eyebrow && (
                <span className="text-xs uppercase tracking-[0.25em] text-muted">
                  {section.eyebrow}
                </span>
              )}
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                {section.title}
              </h2>
              {section.intro && (
                <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                  {section.intro}
                </p>
              )}
            </div>
            <ul className="col-span-12 divide-y divide-line border-y border-line md:col-span-7 md:col-start-6">
              {section.items.map((it) => (
                <li key={it.title} className="py-6 md:py-8">
                  <h3 className="font-display text-xl tracking-tight md:text-2xl">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
                    {it.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      );

    case "split":
      return (
        <motion.section
          {...animation}
          className="container-x border-b border-line py-20 md:py-28"
        >
          {section.eyebrow && (
            <span className="text-xs uppercase tracking-[0.25em] text-muted">
              {section.eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
            {section.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {[section.left, section.right].map((col, i) => (
              <div key={i} className="bg-[var(--bg)] p-8 md:p-10">
                <h3 className="font-display text-xl tracking-tight md:text-2xl">
                  {col.heading}
                </h3>
                <ul className="mt-6 space-y-4">
                  {col.items.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-base text-muted md:text-lg"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--fg)]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      );

    case "table":
      return (
        <motion.section
          {...animation}
          className="container-x border-b border-line py-20 md:py-28"
        >
          {section.eyebrow && (
            <span className="text-xs uppercase tracking-[0.25em] text-muted">
              {section.eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
            {section.title}
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-line bg-[color:var(--line)]/30">
                  {section.columns.map((c) => (
                    <th
                      key={c}
                      className="px-5 py-4 text-xs font-medium uppercase tracking-[0.18em] text-muted md:px-6"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-line last:border-b-0"
                  >
                    {r.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-5 align-top md:px-6 ${
                          j === 0 ? "font-medium" : "text-muted"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      );

    case "principles":
      return (
        <motion.section
          {...animation}
          className="container-x border-b border-line py-20 md:py-28"
        >
          {section.eyebrow && (
            <span className="text-xs uppercase tracking-[0.25em] text-muted">
              {section.eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
            {section.title}
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((it) => (
              <li
                key={it.number}
                className="flex flex-col gap-4 bg-[var(--bg)] p-8"
              >
                <span className="font-display text-2xl text-muted">
                  {it.number}
                </span>
                <h3 className="font-display text-xl tracking-tight md:text-2xl">
                  {it.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {it.body}
                </p>
              </li>
            ))}
          </ul>
        </motion.section>
      );

    default:
      return null;
  }
}

function IntroSection({
  section,
}: {
  section: Extract<CaseSection, { kind: "intro" }>;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line pb-24 pt-24 md:pb-32 md:pt-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dot-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      >
        <div
          className="aurora-blob h-[460px] w-[460px] -left-24 -top-10 bg-[radial-gradient(circle_at_center,#ff6b35,transparent_60%)]"
          style={{ animation: "blob-float-a 16s ease-in-out infinite" }}
        />
        <div
          className="aurora-blob h-[420px] w-[420px] right-[-100px] top-20 bg-[radial-gradient(circle_at_center,#8b5cf6,transparent_60%)]"
          style={{ animation: "blob-float-b 20s ease-in-out infinite" }}
        />
      </div>

      <div className="container-x">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-xs uppercase tracking-[0.25em] text-muted"
        >
          {section.eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="mt-5 max-w-5xl font-display text-4xl leading-[1.05] tracking-tightest md:text-7xl"
        >
          {section.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mt-10 max-w-3xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {section.lede}
        </motion.p>

        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 md:grid-cols-4 md:gap-x-10"
        >
          {section.meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-2">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                {m.label}
              </dt>
              <dd className="text-sm md:text-base">{m.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function NextSteps() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            End of case study
          </span>
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
            Want to see how I'd think about your problem?
          </h2>
        </div>
        <a
          href="/#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm transition-all hover:border-[var(--fg)]"
        >
          <span>Start a conversation</span>
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
