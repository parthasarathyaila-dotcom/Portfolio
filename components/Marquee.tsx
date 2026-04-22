"use client";

const items = [
  "Product Design",
  "Design Systems",
  "Interaction",
  "AI · ML",
  "SaaS",
  "Mobile",
  "Prototyping",
  "Motion",
  "Research",
  "Brand",
];

export function Marquee() {
  return (
    <div className="hairline overflow-hidden py-8">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-2xl tracking-tight text-muted md:text-3xl">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-display italic">{it}</span>
            <span aria-hidden className="opacity-40">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
