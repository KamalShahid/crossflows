# CLAUDE.md — Cross Flows Synergy Frontend Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Fetch and analyze https://poly.ai/en** before building any page. Extract its layout patterns, section rhythm, navigation behavior, animation style, and content hierarchy. Mirror those structural decisions throughout this project.

---

## Project Identity

**Brand:** Cross Flows Synergy  
**Tagline:** "Where Intelligence Meets Action"  
**Brand voice:** Premium enterprise AI — authoritative, innovative, human-centered  
**Aesthetic direction:** Dark-first, precision-engineered. Deep charcoal/navy backgrounds. Electric cyan primary accent. Sharp, editorial typography. Fluid motion that feels purposeful, not decorative.

### Brand Color Tokens (CSS variables — use exclusively, never raw Tailwind palette)
```css
:root {
  --color-bg:          #080B12;   /* near-black base */
  --color-surface:     #0F1420;   /* card / elevated surface */
  --color-surface-2:   #161D2E;   /* floating / modal layer */
  --color-accent:      #00D4FF;   /* electric cyan — primary CTA, highlights */
  --color-accent-warm: #F5A623;   /* amber — secondary accent, tags */
  --color-text-primary:#F0F4FF;   /* headlines */
  --color-text-muted:  #7A8BA6;   /* body / supporting copy */
  --color-border:      #1E2A3D;   /* subtle dividers */
  --color-glow:        rgba(0, 212, 255, 0.15); /* used in box-shadows */
}
```

### Typography
- **Display / headings:** "Syne" (Google Fonts) — tight tracking (`letter-spacing: -0.03em`), bold weight
- **Body:** "DM Sans" (Google Fonts) — generous line-height (`1.75`), regular/medium weights
- **Mono / labels:** "JetBrains Mono" — used for stats, tags, code snippets
- Never use Inter, Roboto, Arial, or system fonts.

---

## Reference Site
**https://poly.ai/en** — fetch and parse before every new page build.  
Mirror these specific patterns:
- Sticky glass-blur navbar with mega-dropdown
- Full-viewport hero with animated text + abstract background
- Alternating left/right content + visual sections
- Horizontal enterprise logo strip
- Stats bar with animated counters
- Card grids with hover lift + glow
- Full-width video section with custom player UI
- Footer: multi-column with social icons + legal links

Do **not** copy poly.ai copy or branding. Structure and layout only.

---

## Architecture — Multi-Page React App

**Stack:** React + Vite + TypeScript + Tailwind CSS (Vite plugin) + Framer Motion

**File structure (mandatory):**
```
src/
  components/          # Shared UI (Navbar, Footer, VideoPlayer, SectionHeader, etc.)
  pages/               # One file per route
    Home.tsx
    Products.tsx
    products/
      SmartTalk.tsx
      DriveFlow.tsx
      LearnMate.tsx
      WorkSync.tsx
    Industries.tsx
    UseCases.tsx
    Features.tsx
    Blog.tsx
    BlogPost.tsx
    Contact.tsx
  hooks/               # useScrollReveal, useCountUp, useFilter
  data/                # All content lives here — never inline in JSX
    products.ts
    industries.ts
    useCases.ts
    features.ts
    blog.ts
  App.tsx              # React Router v6 route definitions
  main.tsx             # Entry point
  styles/
    globals.css        # CSS variables + base resets
```

---

## Pages & Routes

### `/` — Home
- Full-viewport hero: animated headline (word-stagger reveal), subheadline, two CTAs ("Book a Demo" → `/contact`, "Explore Products" → `/products`). Background: layered radial gradients + animated SVG mesh/particles suggesting data flow.
- Enterprise logo strip: "Trusted by leading enterprises" — 6–8 placeholder SVG logos, slow auto-scroll marquee.
- Products teaser: 4 cards (one per product) — icon, name, one-line description, hover glow + lift, links to product subpage.
- Industries strip: scrollable pill/tag row, all 10 industries.
- Animated stats bar: `"40+ Languages · 99.9% Uptime · 12 Use Cases · 10 Industries"` — numbers count up on scroll-enter.
- Use Cases bento grid: 3-column, 12 use cases with icons and hover reveal.
- Features overview: 5 icon cards (Technology, Languages, Integration, Data & Insights, Security).
- Video section: full-width dark panel, custom-styled HTML5 video player with poster, animated play button, caption overlay. `{/* TODO: Replace src with actual explainer video URL */}`
- Demo CTA section: bold headline + "Book a Demo" button + email input field.
- Footer.

### `/products` — Products Overview
- Hero: "Our Products" heading + one-paragraph intro.
- 4 full-width alternating sections (image/video left, copy right — then flip): product name, tagline, 3 bullet features, CTA linking to subpage.

### `/products/smarttalk` — SmartTalk
### `/products/driveflow` — DriveFlow
### `/products/learnmate` — LearnMate
### `/products/worksync` — WorkSync

Each product subpage must include:
1. Hero: product name, tagline, animated icon/SVG illustration, "Request a Demo" CTA.
2. Video section: custom player with poster image. `{/* TODO: Replace src */}`
3. Features list: 4–5 features with icons + short descriptions.
4. Use cases panel: chips/tags for applicable use cases, each linking to `/use-cases`.
5. Industries served: icon grid of relevant industries.
6. Animated mockup or screenshot placeholder (`https://placehold.co/1200x700`).
7. Bottom CTA banner: "See [Product] in action" + demo link.

### `/industries` — Industries
Grid of 10 cards:
1. Consumer Services · 2. Financial Services · 3. Real Estate · 4. Logistics & Supply Chain · 5. Education · 6. Travel · 7. Utilities · 8. Retail & Restaurants · 9. Clinics & Hospitals · 10. HR & Recruiting

Each card: industry icon (Lucide or custom SVG), name, one-line description, hover reveal showing linked products and use cases.

### `/use-cases` — Use Cases
Filterable grid of 12 use cases:
1. Customer Care · 2. Intelligent Routing · 3. Payment Automation · 4. Reservations Management · 5. Quick Answers · 6. Order Operations · 7. Troubleshooting / Issue Resolution · 8. Identity Verification · 9. Exam Simulator · 10. Lead Qualification · 11. Candidate Screening · 12. Drive-Thru Ordering

Filter bar at top: filter by Product OR Industry (multi-select pills). Animate card entrance with stagger on filter change. Each card: icon, title, 2-line description, product tags, industry tags.

### `/features` — Features
Five alternating full-width sections (poly.ai style):
1. **Technology** — AI engine architecture, sub-200ms latency, voice synthesis quality
2. **Languages** — 40+ languages, real-time translation, accent adaptation
3. **Integration** — REST APIs, webhooks, CRM/ERP connectors, pre-built templates
4. **Data & Insights** — Live dashboards, call analytics, sentiment tracking, exportable reports
5. **Security** — SOC2 Type II, end-to-end encryption, GDPR/HIPAA compliance

Each section: bold section number, heading, 2-paragraph copy, 3–4 bullet points with check icons, full-width image/illustration placeholder right or left.

### `/blog` — Blog Listing
- Category filter tabs: All, Product Updates, Industry Insights, Case Studies, Company News.
- 3-column card grid (responsive → 1 col mobile).
- Each card: `https://placehold.co/600x340` thumbnail, category tag (color-coded), title, 2-line excerpt, author avatar placeholder, date, read-time estimate.
- Pagination (simple prev/next).
- 6 placeholder blog posts seeded in `src/data/blog.ts`.

### `/blog/:slug` — Blog Post
- Reading layout: max-width 720px centered, large hero image, author + date bar, rich body text with headings, blockquotes styled with left accent border, inline code styled with mono font.
- Sidebar (desktop): table of contents, related posts.
- Bottom: "Share this post" (Twitter/X, LinkedIn copy links) + "More from the blog" 3-card strip.

### `/contact` — Contact
- Split layout: left 40% brand panel (tagline, contact email, phone placeholder, LinkedIn/social links), right 60% form.
- Form fields: Full Name, Company, Work Email, Phone, Product Interest (dropdown: all 4 products + "General"), Message (textarea).
- Validation: required fields, email format check.
- Animated submit button with loading spinner → success state ("We'll be in touch within 24 hours").
- No backend required — `console.log` the form data on submit, show success UI.

---

## Global Components

### `<Navbar />`
- Sticky, `backdrop-blur-md` + `bg-[var(--color-bg)]/80` on scroll.
- Logo (text wordmark "Cross Flows Synergy" with animated SVG mark) — left.
- Nav links center: Products (mega-dropdown), Industries, Use Cases, Features, Blog.
- Right: "Book a Demo" button (accent color, hover glow).
- Mega-dropdown for Products: 2-column grid showing all 4 products with icon + tagline.
- Mobile: hamburger → full-screen slide-in menu, all links, CTA at bottom.

### `<Footer />`
- 4 columns: Brand (logo + tagline + social icons) | Products | Company | Resources.
- Bottom bar: `© 2025 Cross Flows Synergy. All rights reserved.` + Privacy Policy + Terms of Service (placeholder `#` links).
- Subtle top border using `var(--color-border)`.

### `<VideoPlayer src pitch="..." poster="..." />`
- Custom dark-themed HTML5 video wrapper.
- Animated pulsing play button overlay.
- Progress bar with accent color.
- Props: `src` (video URL), `poster` (thumbnail), `caption` (optional overlay text).
- Fallback: if no `src`, show a styled placeholder with an animated "▶ Watch Demo" button.
- Used on: Home, all 4 product subpages.

### `<SectionHeader label="..." heading="..." subheading="..." />`
- Reusable section intro: small all-caps label in accent color, large display heading, optional muted subheading.

### `<AnimatedCounter value={number} suffix="+" />`
- Counts up from 0 to value when scrolled into viewport. Uses `useCountUp` hook.

---

## Animation System (Framer Motion — mandatory)

| Trigger | Animation |
|---|---|
| Page enter | `opacity: 0→1`, `y: 20→0`, `duration: 0.5`, `ease: "easeOut"` |
| Section scroll-enter | Staggered children, `delayChildren: 0.1`, `staggerChildren: 0.08` |
| Cards hover | `y: -6`, `boxShadow: 0 20px 60px var(--color-glow)` |
| Hero headline | Word-by-word reveal, `staggerChildren: 0.04` |
| Stats bar | Count-up on viewport entry |
| Filter change (Use Cases) | Cards `AnimatePresence` + layout animation |
| CTA button | Scale `1 → 1.04` on hover, glow pulse |
| Navbar on scroll | Background opacity transition |

- Animate **only** `transform` (x, y, scale) and `opacity`. Never animate width/height/color directly.
- Never use `transition-all` in Tailwind.
- Use `spring` easing for interactive elements, `easeOut` for scroll reveals.

---

## Dynamic Behavior Rules

- All content (products, industries, use cases, features, blog posts) lives in `src/data/*.ts`. Never hardcode strings inline in JSX.
- Filter state on `/use-cases` uses `useState` + derived filtered array — no libraries.
- Blog post routing: `useParams()` to get slug → find in `src/data/blog.ts`.
- Loading states: every async-like operation shows a skeleton loader (dark pulse animation).
- Error states: every data fetch shows a graceful error message, never a blank screen.

---

## Responsive Design

- Mobile-first: base styles → `md:` (768px) → `lg:` (1024px) → `xl:` (1280px).
- Mental test at: 375px, 768px, 1280px, 1440px.
- Navigation: hamburger on `< md`, full nav on `≥ md`.
- Product subpage mockup images: `aspect-video` + `object-cover`.
- Blog grid: 1 col mobile → 2 col tablet → 3 col desktop.
- Use Cases grid: 1 col → 2 col → 3 col.
- No fixed `px` widths on layout containers — use `max-w-*` + `w-full`.

---

## Content & Copy

- Write compelling, realistic placeholder marketing copy for all sections. Do NOT use lorem ipsum.
- Tone: confident, enterprise-grade, human-centered. Avoid jargon overload.
- Every product needs: a 1-line tagline, a 2-sentence description, and 4 feature bullet points.
- Every industry card needs a 1-line description of how Cross Flows Synergy serves it.
- Every use case card needs a 2-line explanation of how the AI handles it.
- Blog posts: generate 6 realistic post titles, excerpts, and metadata in `src/data/blog.ts`.

---

## Video Placeholders
Every video section must have:
```tsx
{/* TODO: Replace src with actual [ProductName] video URL before launch */}
<VideoPlayer
  src=""   {/* ← paste video URL here */}
  poster="https://placehold.co/1920x1080/080B12/00D4FF?text=Cross+Flows+Synergy"
  caption="See [ProductName] in action"
/>
```

---

## Brand Assets
- Check `brand_assets/` folder before designing. If a logo, color guide, or style guide exists there, use it exactly. Do not invent brand colors if a palette file is present.
- If `brand_assets/` is empty or absent, use the color tokens and typography defined in this file.

---

## Anti-Generic Guardrails
- **Colors:** Only use the CSS variables defined above. Never default Tailwind `blue-*`, `indigo-*`, `purple-*`.
- **Shadows:** Layered, color-tinted: `0 4px 24px rgba(0,212,255,0.08), 0 1px 4px rgba(0,0,0,0.4)`. Never flat `shadow-md`.
- **Typography:** Syne for display, DM Sans for body — always. No exceptions.
- **Gradients:** Layer multiple radial gradients. Add SVG grain filter for depth on hero sections.
- **Every clickable element:** must have `hover:`, `focus-visible:`, and `active:` states. No exceptions.
- **Images:** Always wrap with gradient overlay `bg-gradient-to-t from-black/60`. Apply `mix-blend-multiply` color treatment.
- **Depth system:** Base surface (`--color-bg`) → Elevated (`--color-surface`) → Floating (`--color-surface-2`). Never flatten all elements to the same z-plane.
- **Spacing:** Use Tailwind spacing scale consistently — do not mix random values.

---

## Hard Rules
- Do not add sections or pages not listed above without explicit user confirmation.
- Do not use `transition-all` anywhere.
- Do not use default Tailwind blue/indigo/purple as primary color.
- Do not hardcode any content data inline in JSX/TSX — always extract to `src/data/`.
- Do not build a single-page static HTML file — this is a multi-page React Router app.
- Do not use lorem ipsum — write real placeholder copy.
- Do not ship any page without mobile-responsive layout verified at 375px.
- Do not use `any` TypeScript types — all data shapes must be fully typed with interfaces in `src/data/*.ts`.

---

## Deliverables Checklist
- [ ] All 7 main pages + 4 product subpages routed and built
- [ ] `<Navbar />` with mega-dropdown + mobile hamburger menu
- [ ] `<Footer />` with 4-column layout
- [ ] `<VideoPlayer />` component with placeholder on all product pages + home
- [ ] Framer Motion animations on hero, scroll reveals, cards, counters, filters
- [ ] `src/data/` files fully populated: products, industries, useCases, features, blog
- [ ] Use Cases page with working filter by product + industry
- [ ] Blog listing + `[slug]` post template
- [ ] Contact form with validation + success state
- [ ] All breakpoints responsive (375px, 768px, 1280px, 1440px)
- [ ] TypeScript throughout — no `any` types
- [ ] `README.md` with `npm install` + `npm run dev` instructions
