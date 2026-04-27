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

export type Metric = { value: string; label: string; sub?: string };

export type CaseSection =
  | {
      kind: "intro";
      eyebrow: string;
      title: string;
      lede: string;
      meta: { label: string; value: string }[];
    }
  | {
      kind: "stats";
      title?: string;
      items: Metric[];
    }
  | {
      kind: "prose";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
    }
  | {
      kind: "quote";
      quote: string;
      attribution?: string;
    }
  | {
      kind: "list";
      eyebrow?: string;
      title: string;
      intro?: string;
      items: { title: string; body: string }[];
    }
  | {
      kind: "split";
      eyebrow?: string;
      title: string;
      left: { heading: string; items: string[] };
      right: { heading: string; items: string[] };
    }
  | {
      kind: "table";
      eyebrow?: string;
      title: string;
      columns: string[];
      rows: string[][];
    }
  | {
      kind: "principles";
      eyebrow?: string;
      title: string;
      items: { number: string; title: string; body: string }[];
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
  caseStudy?: CaseSection[];
};

export const projects: Project[] = [
  {
    slug: "form-studio",
    title: "Form Studio — From Form Builder to Intelligent Data Capture Platform",
    client: "Phenom",
    year: "2025",
    category: "Enterprise SaaS · AI · Platform Design",
    summary:
      "Reframed a fragmented form-building tool into Form Studio — an AI-native data capture platform that lets enterprise teams launch new business use cases in under a day instead of two weeks, while quietly shortening candidate apply time by 70%.",
    tags: ["Platform", "AI", "Enterprise UX", "0→1", "Service Design"],
    caseStudy: [
      {
        kind: "intro",
        eyebrow: "Case Study · 01",
        title:
          "Form Studio — From Form Builder to Intelligent Data Capture Platform",
        lede:
          "Every talent interaction generates a data requirement — from a lead-gen capture to a compliance declaration to an NPS pulse. Today, every one of those touch-points needs engineering. We reimagined the entire surface as an AI-native platform: schema-first for admins, copilot-assisted for configurators, and anticipatory for the candidate filling the form.",
        meta: [
          { label: "Role", value: "Senior Product Designer · UX Lead" },
          { label: "Team", value: "1 Design Lead · 2 PMs · 6 Engineers · 1 Researcher" },
          { label: "Timeline", value: "Q2 — Q3 2025 · 14 weeks" },
          { label: "Platform", value: "Web (Admin) · Web & Chatbot (Candidate)" },
        ],
      },
      {
        kind: "stats",
        title: "At a glance — what changed",
        items: [
          {
            value: "10d → <1d",
            label: "Use case onboarding",
            sub: "From multi-week engineering effort to self-serve in hours",
          },
          {
            value: "8h → <1h",
            label: "Form configuration time",
            sub: "AI copilot handles fields, validations and translations",
          },
          {
            value: "10m → 3m",
            label: "Candidate time to fill",
            sub: "Anticipatory delta-form for returning applicants",
          },
          {
            value: "85% → 95%+",
            label: "Apply conversion (target)",
            sub: "≈ 50K additional completed applies / month at scale",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Context",
        title: "Why this mattered",
        paragraphs: [
          "Phenom serves the entire talent lifecycle — Attraction, Hiring, Onboarding, Engagement, Development and Retention. Every stage generates structured input: lead-gen forms, job applications, compliance declarations, background-verification packets, onboarding checklists, NPS pulses, performance reviews, retention-risk surveys.",
          "Each new use case was being treated as a bespoke engineering project. Schemas were hand-coded, integration plumbing was rewritten, fields were configured by hand, translations were copy-pasted, and the form was hardcoded into a candidate journey. The result: roughly five to ten days to onboard a single use case and another eight hours to configure one form — for a platform expected to scale to dozens of new use cases per quarter.",
          "Meanwhile, the candidate filling the form had no idea any of this complexity existed. They just saw a long, repetitive form that asked for information the system already had. ~30% were returning applicants forced to start from scratch. ~15% abandoned mid-flow with no way to resume.",
        ],
      },
      {
        kind: "list",
        eyebrow: "The problem space",
        title: "Three personas, one broken seam",
        intro:
          "Before proposing anything, I framed the work around three distinct users — each blocked by a different layer of the same system.",
        items: [
          {
            title: "Admin / Product Team — cannot self-serve",
            body:
              "To add a new use case (e.g. CRM Event Registration), admins depend entirely on engineering to define entities, build integrations and embed the form. There is no predefined entity schema, no visibility into submissions, and no way to experiment without a sprint of engineering work.",
          },
          {
            title: "GPS / Customer Onboarding Team — drowning in manual setup",
            body:
              "Once a use case exists, the onboarding team configures every form by hand: steps, fields, validation rules, conditional logic, translations and confirmation pages. Templates are limited and generic, translations are repetitive, and trigger conditions are not in their control. Average build time: 5–8 hours per form.",
          },
          {
            title: "Candidate — repeats themselves, drops off, disappears",
            body:
              "End users face static, non context-aware forms that take 5–10 minutes. Returning candidates re-enter the same data. Drop-offs cannot resume. Re-engagement emails are generic and convert weakly. The friction compounds for frontline workers on mobile and for compliance-heavy flows.",
          },
        ],
      },
      {
        kind: "stats",
        title: "Where the time was going",
        items: [
          { value: "5.6 days", label: "Avg. days to onboard a new use case" },
          { value: "6.2 hrs", label: "Avg. configuration time per onboarding form" },
          { value: "4 — 8 hrs", label: "Range across BGV, Lead Gen, Compliance" },
          { value: "0", label: "Self-serve use cases shipped without engineering" },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Discovery",
        title: "Listening before designing",
        paragraphs: [
          "I ran four parallel research streams over three weeks — internal stakeholder interviews with the Platform, GPS and Apply teams; a quantitative review of 425 active customers and 9.4M monthly applies; structured customer feedback on apply experience; and a competitive teardown of ten form and low-code platforms.",
          "What emerged was less a UI problem and more a category problem. Phenom did not need a better form builder — it needed a different type of object. Customers were not asking for more fields and more drag-and-drop. They were asking for use cases: \"give me an Event Registration flow,\" \"give me a New-Hire Onboarding flow,\" \"give me a Background Verification flow.\" The unit of value was the business outcome, not the form.",
        ],
      },
      {
        kind: "quote",
        quote:
          "Our candidates often apply for similar roles, but the system makes them start from scratch every time. Even when we bring them back through remarketing, the form doesn't remember them — it feels repetitive and impersonal.",
        attribution: "Director of Talent Acquisition, Fortune 500 retail customer",
      },
      {
        kind: "list",
        eyebrow: "Competitive audit",
        title: "What modern platforms get right (and what they miss)",
        intro:
          "I audited Jotform, Typeform, Formstack, Fillout, Feathery, Monday.com, ClickUp Forms, Airtable, Plaid, Stripe, Booking.com, Gusto, TurboTax, ClearTax, Intercom and Paradox.ai — extracting patterns across creation, configuration and consumption.",
        items: [
          {
            title: "Intent-first creation (Jotform AI, Typeform Formless, Fillout)",
            body:
              "Best-in-class platforms let users describe what they want in a sentence — and the system scaffolds the form. Most stop at generation; none extend AI to editing, validation and publishing in one continuous loop.",
          },
          {
            title: "Workspaces ≠ use cases (Jotform, Typeform, Formstack)",
            body:
              "Existing tools organise by folders. Enterprise users think in business outcomes — Hiring, Lead Gen, Onboarding. Use Case as a first-class object aligns the IA with how customers actually plan work.",
          },
          {
            title: "Pre-wired entity binding (Fillout, Formstack, Salesforce)",
            body:
              "When a form is anchored to an entity, the integration layer disappears. Pick the object — Employee, Lead, Candidate — and the system maps fields, applies the schema and wires the destination automatically.",
          },
          {
            title: "Anticipatory prefill (Stripe, Plaid, Gusto, TurboTax, Booking.com)",
            body:
              "The strongest consumer flows in the world treat returning users with memory: identity verification → prefill → show only what's missing → estimate time → resume from where you left off. Almost no enterprise hiring platform does this today.",
          },
        ],
      },
      {
        kind: "table",
        eyebrow: "B2B vs B2C tension",
        title: "Two opposing form philosophies — we needed both",
        columns: ["Dimension", "B2C (Typeform / Jotform)", "B2B (Salesforce / ServiceNow)"],
        rows: [
          ["Primary goal", "Conversion speed — don't make them think", "Data integrity — ensure it's accurate"],
          ["Data model", "Flat string / text inputs", "Relational lookups to Account / User IDs"],
          ["Identity", "Anonymous guest users", "Role-based access control (RBAC)"],
          ["Logic", "Skip logic for navigation", "Business rules for validation & visibility"],
          ["Outcome", "Email notification", "Workflow trigger — approvals, SLAs"],
        ],
      },
      {
        kind: "principles",
        eyebrow: "Reframe",
        title: "From form builder to data capture platform",
        items: [
          {
            number: "01",
            title: "Schema-first, not field-first",
            body:
              "The Admin starts by selecting a product and a use case. The system provisions the entity, suggests a field schema, attaches recommended templates and sets default integrations. The form is the output, not the starting point.",
          },
          {
            number: "02",
            title: "Three layers of configuration, three personas",
            body:
              "Entity Level (Architect — defines schema). Product Level (Process Owner — defines business logic). Form Level (Designer — defines interface). Each layer surfaces only the controls that persona needs.",
          },
          {
            number: "03",
            title: "AI as a co-author, not a magic button",
            body:
              "An always-on copilot drafts the form from a use case, recommends required vs. optional fields, applies validation and compliance rules, manages translations and previews a performance score before publish.",
          },
          {
            number: "04",
            title: "Capture channel ≠ outreach channel",
            body:
              "We separated where data is captured (Web, Chatbot, WhatsApp, Voice Agent) from where the candidate is reached (Email, SMS, WhatsApp, Phone). The same use case can flow across channels without being rebuilt.",
          },
          {
            number: "05",
            title: "Anticipatory by default for the candidate",
            body:
              "If we already know it, we don't ask. Returning applicants see a delta-form with only what's missing. Drop-offs resume from where they left off. Visual nudges and time estimates lower the perceived cost of completion.",
          },
        ],
      },
      {
        kind: "split",
        eyebrow: "Solution architecture",
        title: "A three-layer platform",
        left: {
          heading: "Layer 1 · Data Capture Platform",
          items: [
            "Data schema definition with reusable entities",
            "Prefill + delta-capture engine",
            "Universal field mapping across products",
            "AI copilot for configuration & translations",
          ],
        },
        right: {
          heading: "Layer 2 · Workflow Orchestration",
          items: [
            "Trigger management across the talent lifecycle",
            "Channel selection logic per persona / stage",
            "Outreach via Email, SMS, Phone",
            "Generic, reusable form node inside Automation Engine",
          ],
        },
      },
      {
        kind: "split",
        eyebrow: "Solution architecture",
        title: "Layer 3 · Capture Channels",
        left: {
          heading: "Where candidates respond",
          items: [
            "Web Form — desktop & mobile",
            "Conversational Chatbot",
            "WhatsApp",
            "Voice Agent (Web & Phone)",
          ],
        },
        right: {
          heading: "What that unlocks",
          items: [
            "Frontline workers on WhatsApp & Voice",
            "Knowledge workers on structured Web forms",
            "Compliance flows across Web + Document upload",
            "One use case, many channels — no rebuild",
          ],
        },
      },
      {
        kind: "list",
        eyebrow: "Flow 01 · Admin",
        title: "Use case onboarding — a schema-first wizard",
        intro:
          "Instead of \"create a form, decide purpose later,\" the Admin walks through a guided flow that produces a fully-wired use case in under a day.",
        items: [
          {
            title: "1. Select context",
            body:
              "Admin chooses the product (CRM, HRM, CMS, ATS, ERM) and the use case (Event Registration, Onboarding, Lead Gen, BGV, NPS).",
          },
          {
            title: "2. Anchor to an entity",
            body:
              "Admin selects the target object (e.g. Employee). The system locks the form to that entity's schema — no more orphan fields.",
          },
          {
            title: "3. Auto-scaffold",
            body:
              "Required fields drop onto the canvas. \"Department\" auto-converts from a text input into a Lookup component connected to the Departments table. Integration is pre-wired.",
          },
          {
            title: "4. Recommend & publish",
            body:
              "AI suggests templates, default integrations and channel mix. Admin reviews, names the use case, and ships it as a workflow node — no engineering ticket.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Flow 02 · GPS / Configurator",
        title: "AI-assisted form configuration",
        intro:
          "The configurator no longer assembles a form field by field. They describe intent, then refine.",
        items: [
          {
            title: "Generate from use case",
            body:
              "The copilot drafts the full form — steps, fields, validations, translations — from the selected use case and customer context.",
          },
          {
            title: "Recommend required vs. optional",
            body:
              "Compliance and best-practice rules drive smart defaults. The configurator approves, edits or rejects per field.",
          },
          {
            title: "Inline edit with AI",
            body:
              "\"Make step 2 mobile-first,\" \"Add a consent checkbox for GDPR,\" \"Translate to Spanish and German.\" The copilot edits the live form.",
          },
          {
            title: "Performance preview",
            body:
              "Before publish, the system scores the form on length, friction, accessibility and expected drop-off — flagging issues the way Lighthouse flags page-speed.",
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Flow 03 · Candidate",
        title: "Anticipatory Apply — the delta form",
        intro:
          "On the candidate side, the platform's intelligence shows up as quietness. The form asks less, remembers more, and tells you what's left.",
        items: [
          {
            title: "Recognise returning applicants",
            body:
              "OTP-based verification matches the candidate to their profile (CRM, ATS, prior applications). Pre-filled data is shown for review before consent.",
          },
          {
            title: "Surface only the delta",
            body:
              "Fields the system already has — name, email, phone, resume, prior answers — are collapsed into a confirm-and-continue summary. The candidate only fills what's genuinely new.",
          },
          {
            title: "Save & resume gracefully",
            body:
              "Drop-offs are stored as drafts. On return — via email, web or chatbot — the candidate resumes from the exact step they left.",
          },
          {
            title: "Nudge with context, not noise",
            body:
              "Re-engagement emails show the percentage complete, estimated time remaining and a deep link straight into the saved form. Borrowed shamelessly from TurboTax, ClearTax, Gusto and Booking.com.",
          },
        ],
      },
      {
        kind: "table",
        eyebrow: "Impact",
        title: "Operational efficiency at scale",
        columns: ["Stage", "Current state", "With Form Studio"],
        rows: [
          ["Use case setup", "5 — 10 days · engineering led", "<1 day · self-serve"],
          ["API integration", "Manual per use case", "Pre-wired via entity binding"],
          ["Field definition", "Manual", "Predefined + AI suggested"],
          ["Form embedding", "Hardcoded into journey", "Reusable workflow node"],
          ["Form configuration", "5 — 8 hrs", "<1 hr with AI copilot"],
          ["Time to fill (candidate)", "5 — 7 min · 85% conversion", "<4 min · 95%+ projected"],
        ],
      },
      {
        kind: "stats",
        title: "Projected business impact",
        items: [
          {
            value: "+10%",
            label: "Apply conversion lift",
            sub: "≈ 50K additional submissions / month on a 500K base",
          },
          {
            value: "50%",
            label: "Drop-off recovery",
            sub: "Resume + personalised email nudges for incomplete applies",
          },
          {
            value: "0",
            label: "Engineering tickets per new use case",
            sub: "Fully self-serve onboarding once GA",
          },
          {
            value: "1 → many",
            label: "Channel reach per use case",
            sub: "Same flow on Web, Chatbot, WhatsApp, Voice",
          },
        ],
      },
      {
        kind: "principles",
        eyebrow: "Roadmap",
        title: "Phased rollout",
        items: [
          {
            number: "P1",
            title: "Foundation",
            body:
              "Use case onboarding UX · AI copilot for configuration · entity-anchored schemas · reusable workflow node.",
          },
          {
            number: "P2",
            title: "Intelligence",
            body:
              "Runtime adaptive forms · anticipatory delta-capture · analytics & optimisation feedback loop · performance score on publish.",
          },
          {
            number: "P3",
            title: "Platform",
            body:
              "Apply + simple-form unification · embedded forms inside other Phenom products · marketplace and extensibility for partners.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Reflections",
        title: "What I would carry forward",
        paragraphs: [
          "The hardest part of this project was not the interface — it was convincing a high-velocity engineering org that the unit of work should change from \"form\" to \"use case.\" Once that reframe landed, the IA, the wizard, the copilot and the candidate-facing delta-form all stopped looking like separate features and started looking like one platform.",
          "The second lesson was about restraint. AI made it tempting to remove the human from configuration entirely. We chose instead to make AI a co-author — drafting, suggesting, scoring — while leaving approval, naming and tone with the people who own the use case. The trust, and the adoption, came from that boundary.",
          "And the candidate-side work taught me something I keep coming back to: the most considered enterprise UX is the one the end user never notices. Anticipatory design is, at its best, an act of quiet hospitality.",
        ],
      },
    ],
  },
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
