"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="container-x py-28 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            (03) Path
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
            Experience
          </h2>
        </div>

        <ul className="md:col-span-9 hairline">
          {experience.map((e, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-12 gap-6 border-b border-line py-8"
            >
              <div className="col-span-12 text-xs uppercase tracking-[0.2em] text-muted md:col-span-3">
                {e.period}
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  {e.role}
                </div>
                <div className="mt-1 text-sm text-muted">{e.company}</div>
              </div>
              <div className="col-span-12 text-sm text-muted md:col-span-3">
                {e.blurb}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
