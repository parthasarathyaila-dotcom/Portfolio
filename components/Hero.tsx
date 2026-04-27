"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/data";
import { HeroStickers } from "./HeroStickers";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dot-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      >
        <div
          className="aurora-blob h-[520px] w-[520px] -left-24 -top-24 bg-[radial-gradient(circle_at_center,#ff6b35,transparent_60%)]"
          style={{ animation: "blob-float-a 14s ease-in-out infinite" }}
        />
        <div
          className="aurora-blob h-[460px] w-[460px] right-[-120px] top-10 bg-[radial-gradient(circle_at_center,#8b5cf6,transparent_60%)]"
          style={{ animation: "blob-float-b 18s ease-in-out infinite" }}
        />
        <div
          className="aurora-blob h-[420px] w-[420px] left-1/3 bottom-[-120px] bg-[radial-gradient(circle_at_center,#f59e0b,transparent_60%)]"
          style={{ animation: "blob-float-c 22s ease-in-out infinite" }}
        />
      </div>

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

        <h1 className="font-display text-[9vw] leading-[0.95] tracking-tightest md:text-[clamp(52px,6.4vw,120px)]">
          <Reveal delay={0.05}>
            <span className="block">Designing</span>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="block italic gradient-text">
              calmer, considered
            </span>
          </Reveal>
          <Reveal delay={0.25}>
            <span className="block">software.</span>
          </Reveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:mt-14 md:text-xl"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-16 flex flex-col gap-10 md:mt-20 md:flex-row md:items-end md:justify-between md:gap-6"
        >
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-10 bg-line" />
            <span>Scroll to explore selected work</span>
          </div>

          <div className="flex flex-col gap-1.5 md:items-end md:text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Currently
            </span>
            <span className="text-base">
              Senior Product Designer
              <span className="text-muted"> @ Phenom</span>
            </span>
            <span className="text-xs text-muted">
              UX Strategist · Crafting seamless digital experiences
            </span>
          </div>
        </motion.div>
      </div>

      <HeroStickers constraintsRef={sectionRef} />
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
    <span className="relative block overflow-hidden">
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
