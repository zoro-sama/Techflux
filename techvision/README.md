# TechVision Solutions — Premium Corporate Homepage

A ground-up rebuild of the TechVision marketing site with a sophisticated, premium design language.

## Stack

- **Vite 6 + React 19 + TypeScript** — modern, fast tooling
- **Tailwind CSS v4** — design tokens defined in `src/index.css` (`@theme`)
- **Framer Motion** — scroll reveals, counters, carousel, accordion, menu transitions
- **Lucide React** — iconography (brand/social icons are inline SVGs)

## Design system

| Token | Role |
| --- | --- |
| `ink-*` | Deep navy foundation (dark sections, nav, footer) |
| `ivory-*` | Warm off-white surfaces (light sections) |
| `gold-*` | Champagne accent (CTAs, highlights, italic serif accents) |
| `Fraunces` | Display serif for headlines and numerals |
| `Inter` | Body and UI text |

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # type-check + production build
npm run preview  # serve the production build
```

## Structure

```
src/
  index.css            # Tailwind v4 theme tokens + custom utilities
  App.tsx              # section composition
  lib/motion.tsx       # Reveal, CountUp, SectionHeading helpers
  components/          # Navbar, Hero, Marquee, Features, Process,
                       # Pricing, CaseStudies, Testimonials, Faq,
                       # About, Contact, Footer
```

All CTAs are visual-only at this stage (anchor links) — booking/contact
functionality is intentionally out of scope.
