# Partha Sarathy Aila — Portfolio

A minimal, editorial portfolio for a Senior UI/UX Designer. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion** with subtle, premium animations.

## Tech

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS (custom `ink` palette, Instrument Serif + Inter via `next/font`)
- Framer Motion for entrance + hover micro-animations
- Auto light/dark via `prefers-color-scheme`
- Zero CMS, all content lives in `lib/data.ts` — easy to update from your PDF

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub and import in [Vercel](https://vercel.com/new) — zero config.

## Where to edit content

- `lib/data.ts` — profile bio, projects, experience, skills
- `components/*` — section layouts
- `app/globals.css` — colors, hairlines, grid background
- `tailwind.config.ts` — palette + typography scale

## Adding case studies from your PDF

When you share the PDF, drop project images into `public/work/<slug>/` and update each entry in `projects` inside `lib/data.ts` with a `cover` field. The Work grid is structured so we can either expand each row inline or scaffold dedicated `/work/[slug]` case-study pages.

## Structure

```
app/
  layout.tsx          # fonts + metadata
  page.tsx            # home composition
  globals.css         # design tokens
components/
  Nav.tsx
  Hero.tsx
  Marquee.tsx
  About.tsx
  Work.tsx            # row-based selected work, hover reveals summary
  Experience.tsx
  Skills.tsx
  Contact.tsx
  Footer.tsx
lib/
  data.ts             # single source of truth for content
public/
  favicon.svg
```
