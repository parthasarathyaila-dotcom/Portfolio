"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[var(--bg)]/70 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-medium tracking-tight">{profile.shortName}.</span>
          <span className="text-muted">— {profile.role}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative inline-flex items-center px-3 py-2 text-sm text-muted transition-colors hover:text-[var(--fg)]"
              >
                <span>{l.label}</span>
                <span className="absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 bg-[var(--fg)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-all hover:border-[var(--fg)] md:inline-flex"
        >
          <span>Let's talk</span>
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
        </a>
      </nav>
    </motion.header>
  );
}
