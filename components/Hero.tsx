"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.18] grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 flex items-center gap-3 text-sm text-muted"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Available for select projects · {profile.location}
        </motion.div>

        <h1 className="font-display text-[14vw] leading-[0.95] tracking-tightest md:text-[clamp(72px,9vw,168px)]">
          <Reveal delay={0.05}>
            <span className="block">Designing</span>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="block italic text-muted">calmer, considered</span>
          </Reveal>
          <Reveal delay={0.25}>
            <span className="block">software.</span>
          </Reveal>
        </h1>

        <div className="mt-12 grid gap-8 md:mt-20 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="md:col-span-6 md:col-start-1 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="md:col-span-4 md:col-start-9 flex flex-col items-start gap-3 md:items-end md:text-right"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Currently
            </span>
            <span className="text-base">
              Senior UI/UX Designer
              <br />
              <span className="text-muted">@ IMImobile</span>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted"
        >
          <span className="h-px w-10 bg-line" />
          <span>Scroll to explore selected work</span>
        </motion.div>
      </div>
    </section>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="relative inline-block overflow-hidden align-top">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
