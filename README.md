# Cross Flows Synergy — Marketing Website

> Where intelligence meets action.

A production-grade, dark-first marketing site for **Cross Flows Synergy** — a multi-product enterprise AI company.

Built with **React + Vite + TypeScript**, **Tailwind CSS (v4)**, **Framer Motion**, **React Router v6**, and **Lucide React**.

---

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

### Other scripts

```bash
npm run build      # Type-check + production build (output: dist/)
npm run preview    # Serve the production build locally
npm run lint       # tsc --noEmit (type check only)
```

---

## Pages

| Route                       | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| `/`                         | Home — hero, products teaser, industries, stats, video   |
| `/products`                 | Products overview (alternating sections per product)     |
| `/products/smarttalk`       | SmartTalk — voice AI                                     |
| `/products/driveflow`       | DriveFlow — drive-thru automation                        |
| `/products/learnmate`       | LearnMate — training & simulation                        |
| `/products/worksync`        | WorkSync — agentic workflow orchestration                |
| `/industries`               | 10 industries grid                                       |
| `/use-cases`                | 12 use cases, filterable by product + industry           |
| `/features`                 | 5 platform pillars (Technology, Languages, …, Security)  |
| `/blog`                     | Blog listing with category tabs and pagination           |
| `/blog/:slug`               | Individual blog post                                     |
| `/contact`                  | Contact form (validated, with success state)             |

---

## Project structure

```
src/
  components/        Shared UI (Navbar, Footer, VideoPlayer, etc.)
  data/              All content — products, industries, useCases, features, blog
  hooks/             Custom hooks (useScrollReveal, useCountUp, useScrollLock)
  lib/               Small utilities
  pages/             One file per route
    products/        Product subpages
  styles/
    globals.css      Tailwind v4 + brand tokens + base resets
  App.tsx            React Router routes
  main.tsx           Entry point
public/
  logo.png           Brand logo (also served as favicon)
brand_assets/        Source brand files (logo, brief)
```

---

## Brand system

The site uses CSS variables defined in `src/styles/globals.css`:

| Token                   | Hex / Value         | Usage                          |
| ----------------------- | ------------------- | ------------------------------ |
| `--color-bg`            | `#080B12`           | Near-black page background     |
| `--color-surface`       | `#0F1420`           | Cards / elevated surface       |
| `--color-surface-2`     | `#161D2E`           | Floating / modal layer         |
| `--color-accent`        | `#00D4FF`           | Electric cyan — primary CTA    |
| `--color-accent-warm`   | `#F5A623`           | Amber — secondary accent       |
| `--color-text-primary`  | `#F0F4FF`           | Headlines                      |
| `--color-text-muted`    | `#7A8BA6`           | Body / supporting copy         |
| `--color-border`        | `#1E2A3D`           | Subtle dividers                |

Typography:

- **Display / headings:** Syne (Google Fonts)
- **Body:** DM Sans (Google Fonts)
- **Mono / labels:** JetBrains Mono

---

## Video placeholders

Every `<VideoPlayer />` instance has an empty `src` for now. Each is marked with a `TODO` comment in the relevant page (`src/pages/Home.tsx`, `src/components/ProductPage.tsx`). Replace `src=""` with the real CDN URL before launch.

---

## Content data

All page content lives in `src/data/*.ts` — no inline strings in JSX. Edit those files to update copy, swap blog posts, or add a new use case.

---

## Animation system

Powered by Framer Motion. Patterns used throughout:

- Page enter: opacity + small upward slide (`y: 20 → 0`, `0.5s easeOut`)
- Section scroll-reveal with staggered children
- Card hover: lift (`y: -6`) with cyan-tinted shadow
- Hero headline: word-stagger reveal + rotating final word
- Animated count-up on `<StatBar />`
- Use Cases page: `AnimatePresence` + `layout` for filter transitions

Only `transform` and `opacity` are animated. `transition-all` is never used.

---

## Notes

- The contact form, demo CTA, and newsletter all `console.log` their payloads and show a success UI — no backend is wired up.
- The 404 route at `*` catches anything unmatched.
- Mobile-responsive at 375px, 768px, 1024px, 1280px+.

---

© 2025 Cross Flows Synergy. Built with care.
