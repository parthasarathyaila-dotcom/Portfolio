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
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-8 flex items-center gap-3 text-sm text-muted"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for select projects · {profile.location}
            </motion.div>

            <h1 className="font-display text-[12vw] leading-[0.95] tracking-tightest md:text-[clamp(64px,7.5vw,140px)]">
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
              className="mt-10 max-w-xl text-lg leading-relaxed text-muted md:mt-14 md:text-xl"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted md:mt-20"
            >
              <span className="h-px w-10 bg-line" />
              <span>Scroll to explore selected work</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease }}
            className="md:col-span-4 md:pt-6"
          >
            <div className="relative mx-auto w-full max-w-[420px] md:ml-auto md:mr-0">
              <img
                src="/pardh.jpg"
                alt="Partha Sarathy Aila"
                className="portrait-blend block h-auto w-full aspect-[4/5] object-cover"
              />

              <div className="relative mt-6 flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Currently
                </span>
                <span className="text-base">
                  Senior Product Designer
                  <br />
                  <span className="text-muted">@ Phenom</span>
                </span>
                <span className="text-xs text-muted">
                  UX Strategist · Crafting seamless digital experiences
                </span>
              </div>
            </div>
          </motion.div>
        </div>
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
