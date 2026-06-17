# Technical Notes

## Frontend Architecture

ShieldOps Security uses the Next.js App Router with a component-driven architecture. Pages compose marketing sections; sections consume typed data from `data/` and render security-specific components.

```
app/                    → Routes and page-level metadata
components/layout/      → Navbar, Footer
components/sections/    → Hero, ThreatDashboard, CTA, etc.
components/security/    → ThreatCard, SolutionCard, ContactForm
components/ui/          → Button, Card, Badge, form inputs
data/                   → Static content (threats, solutions, FAQs)
lib/utils.ts            → cn() className helper
```

## App Routing

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Home — all landing sections |
| `/solutions` | `app/solutions/page.tsx` | Service catalog |
| `/platform` | `app/platform/page.tsx` | Security workflow + dashboard |
| `/case-studies` | `app/case-studies/page.tsx` | Client success stories |
| `/security-report` | `app/security-report/page.tsx` | Sample executive report |
| `/contact` | `app/contact/page.tsx` | Consultation form |

Each route exports `metadata` for title and description.

## Data Structure

Content is centralized in typed TypeScript files:

```
data/
├── threats.ts          → Dashboard summary, threat cards, events
├── metrics.ts          → Security KPI cards
├── solutions.ts        → Eight service offerings
├── platform.ts         → Seven workflow steps
├── compliance.ts       → Six compliance/trust items
├── case-studies.ts     → Three case studies
├── testimonials.ts     → Three B2B testimonials
├── faqs.ts             → Six FAQ items
└── security-report.ts  → Trends, risks, recommendations, maturity
```

Import data in sections or pages — no API layer required for this portfolio build.

## Security UI Components

| Component | Used In | Purpose |
|-----------|---------|---------|
| `ThreatCard` | ThreatDashboard | Alert row with severity and status |
| `SecurityMetricCard` | SecurityMetrics | KPI with icon and trend |
| `SolutionCard` | Solutions | Service with benefits list |
| `ComplianceBadge` | Compliance | Framework trust badge |
| `CaseStudyCard` | CaseStudies | Full case study layout |
| `SecurityReportCard` | SecurityReport | Prioritized recommendation |
| `ContactForm` | Contact | Consultation request form |

## Styling

- **Tailwind CSS v4** with `@theme inline` in `app/globals.css`
- CSS variables for background, accents, and borders
- Custom utilities: `.grid-bg`, `.glow-cyan`, `.text-gradient-security`
- `tailwind.config.ts` for extended color tokens
- Dark theme only (professional cybersecurity standard)

## Animations

Framer Motion used sparingly:

- Hero fade-in on load
- Section `whileInView` reveals with staggered delays
- Threat dashboard container entrance
- No infinite decorative animations (SOC live indicator uses subtle ping only)

`prefers-reduced-motion` disables transitions in `globals.css`.

## Responsiveness

- Mobile-first breakpoints via Tailwind (`sm:`, `md:`, `lg:`)
- Collapsible mobile navigation
- Dashboard grid stacks on mobile (stats 2-col, threats full-width)
- Touch targets ≥ 44px on buttons and nav items
- Horizontal scroll only on threat trend chart (intentional, with `min-w`)

## Deployment

See [architecture/deployment.md](../architecture/deployment.md).

Production URL: **https://cybersecurity-website-umber.vercel.app/**

Configure `NEXT_PUBLIC_SITE_URL` in `.env.local` or Vercel environment variables.
