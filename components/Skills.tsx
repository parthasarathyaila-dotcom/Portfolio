"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  const groups: { label: string; items: string[] }[] = [
    { label: "Craft", items: skills.craft },
    { label: "Tools", items: skills.tools },
    { label: "Domains", items: skills.domains },
  ];

  return (
    <section className="container-x py-28 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <span className="text-xs uppercase tracking-[0.25em] text-muted">
            (04) Toolkit
          </span>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
            What I bring
          </h2>
        </div>

        <div className="md:col-span-9 grid gap-12 md:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">
                {g.label}
              </div>
              <ul className="space-y-2 text-base md:text-lg">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="border-b border-line pb-2 last:border-0"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
