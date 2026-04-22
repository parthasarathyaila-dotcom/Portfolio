export const profile = {
  name: "Partha Sarathy Aila",
  shortName: "Partha",
  role: "Senior UI/UX Designer",
  location: "Hyderabad, India",
  email: "hello@parthasarathyaila.design",
  linkedin: "https://www.linkedin.com/in/parthasarathyaila/",
  available: true,
  intro:
    "I design thoughtful interfaces and end-to-end product experiences — turning complex problems into calm, considered software people actually enjoy using.",
  about: [
    "I'm a Senior UI/UX Designer currently at IMImobile, with a Bachelor of Fine Arts from Sri Venkateshwara College of Fine Arts. My practice sits at the intersection of craft, systems thinking and emerging technology.",
    "I challenge conventional wisdom because innovation rarely fosters through convention. I'm drawn to ambitious problems where design can move the needle — from communication platforms to AI-assisted tooling.",
    "Outside of shipping work, I'm a perpetual student of typography, motion and the small details that make products feel alive.",
  ],
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  summary: string;
  tags: string[];
  cover?: string;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    slug: "communications-platform",
    title: "Reimagining a CPaaS Workspace",
    client: "IMImobile",
    year: "2024",
    category: "SaaS · Product Design",
    summary:
      "Redesigned the customer-engagement workspace from the ground up — unifying messaging channels, automation flows and analytics under a single calmer information architecture.",
    tags: ["Product", "Design System", "SaaS"],
    comingSoon: true,
  },
  {
    slug: "ai-assistant",
    title: "An AI Companion for Support Teams",
    client: "Confidential",
    year: "2024",
    category: "AI · Interaction",
    summary:
      "Designed conversational and ambient surfaces for an AI assistant that drafts replies, summarises threads and surfaces context for support agents.",
    tags: ["AI", "Conversation", "0→1"],
    comingSoon: true,
  },
  {
    slug: "design-system",
    title: "A Cross-Product Design System",
    client: "IMImobile",
    year: "2023",
    category: "Design System",
    summary:
      "Built the foundations, components and motion principles that power six product lines — cutting design debt and shipping velocity in half.",
    tags: ["Tokens", "Components", "Documentation"],
    comingSoon: true,
  },
  {
    slug: "mobile-banking",
    title: "A Calmer Mobile Banking Experience",
    client: "Fintech Client",
    year: "2023",
    category: "Mobile · Fintech",
    summary:
      "Reframed everyday money tasks around intent rather than features — a quiet, accessible interface for first-time digital banking users.",
    tags: ["Mobile", "Fintech", "Accessibility"],
    comingSoon: true,
  },
];

export const experience = [
  {
    role: "Senior UI/UX Designer",
    company: "IMImobile",
    period: "Present",
    blurb:
      "Leading design across the customer-engagement product suite — strategy, systems and shipping.",
  },
  {
    role: "UI/UX Designer",
    company: "Earlier studios & products",
    period: "Prior",
    blurb:
      "Worked across SaaS, mobile and brand projects — bridging visual craft with product thinking.",
  },
  {
    role: "B.F.A, Applied Arts",
    company: "Sri Venkateshwara College of Fine Arts",
    period: "Education",
    blurb:
      "Foundations in typography, composition, illustration and visual communication.",
  },
];

export const skills = {
  craft: [
    "Product Design",
    "Interaction Design",
    "Design Systems",
    "Prototyping",
    "Information Architecture",
    "User Research",
    "Visual Design",
    "Motion",
  ],
  tools: [
    "Figma",
    "Framer",
    "Principle",
    "Protopie",
    "Adobe CC",
    "Notion",
    "Linear",
    "Webflow",
  ],
  domains: ["SaaS", "AI / ML", "Fintech", "Communications", "Mobile", "Enterprise"],
};
