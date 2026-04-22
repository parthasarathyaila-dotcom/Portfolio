"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="container-x py-28 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-muted"
          >
            (01) About
          </motion.span>
        </div>

        <div className="md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl leading-tight tracking-tight md:text-6xl"
          >
            A designer trained as a fine artist —{" "}
            <span className="italic text-muted">
              shipping product, not just pixels.
            </span>
          </motion.h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {profile.about.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-base leading-relaxed text-muted md:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
