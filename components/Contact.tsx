"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-28 md:py-40"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.12] grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="container-x">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.25em] text-muted"
        >
          (05) Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-[12vw] leading-[0.95] tracking-tightest md:text-[clamp(72px,8vw,144px)]"
        >
          Let&apos;s build <span className="italic text-muted">something</span>{" "}
          worth using.
        </motion.h2>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--fg)] bg-[var(--fg)] px-6 py-4 text-sm text-[var(--bg)] transition-all hover:bg-transparent hover:text-[var(--fg)]"
          >
            {profile.email}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-4 text-sm transition-all hover:border-[var(--fg)]"
          >
            LinkedIn
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        <div className="mt-16 grid gap-8 text-sm text-muted md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.2em]">Based in</div>
            <div className="mt-2 text-[var(--fg)]">{profile.location}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em]">Working on</div>
            <div className="mt-2 text-[var(--fg)]">
              Senior UI/UX projects · IMImobile
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em]">Open to</div>
            <div className="mt-2 text-[var(--fg)]">
              Product design, design systems, AI-adjacent work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
