# ShieldOps Security — Cybersecurity Website

A premium cybersecurity company website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Live Demo

**https://cybersecurity-website-umber.vercel.app/**

## Screenshots

Add screenshots to the `screenshots/` folder before publishing to GitHub:

| File | Description |
|------|-------------|
| [./screenshots/01-home-desktop.png](./screenshots/01-home-desktop.png) | Home page — desktop |
| [./screenshots/02-home-mobile.png](./screenshots/02-home-mobile.png) | Home page — mobile |
| [./screenshots/03-threat-dashboard.png](./screenshots/03-threat-dashboard.png) | Threat dashboard section |
| [./screenshots/04-solutions-page.png](./screenshots/04-solutions-page.png) | Solutions page |
| [./screenshots/05-security-report-page.png](./screenshots/05-security-report-page.png) | Security report page |
| [./screenshots/06-contact-page.png](./screenshots/06-contact-page.png) | Contact page |
| [./screenshots/07-lighthouse.png](./screenshots/07-lighthouse.png) | Lighthouse performance audit |

## Project Overview

ShieldOps Security is a fictional cybersecurity company website showcasing SOC monitoring, threat detection, vulnerability scanning, incident response, cloud security, and compliance reporting services.

The site presents complex security offerings in a format that resonates with both technical and business stakeholders — combining a live-style threat dashboard, security metrics, compliance badges, case studies, and consultation-focused CTAs.

## Business Goal

The website helps a cybersecurity company:

- Present technical services clearly to CTOs, CISOs, and IT managers
- Build trust with enterprise and SaaS buyers through compliance and case study content
- Convert visitors into security audit requests and consultation leads
- Demonstrate security expertise without overwhelming non-technical readers

## Key Features

- Premium dark cybersecurity aesthetic with green, cyan, and blue accents
- Interactive threat dashboard mockup (HTML/CSS components)
- Security metrics section with outcome-focused KPIs
- Solutions page covering eight core service areas
- Platform workflow page explaining the security operations pipeline
- Case studies page with three industry scenarios
- Security report page with trends, risk categories, and recommendations
- Contact page with consultation request form
- Compliance and trust badges (SOC 2, ISO 27001, GDPR, HIPAA-ready)
- Responsive desktop and mobile layout
- Reusable component architecture
- Conversion-focused CTA sections throughout
- Subtle Framer Motion animations

## Tech Stack

- **Next.js** — App Router, static generation, SEO metadata
- **TypeScript** — Type-safe components and data models
- **Tailwind CSS** — Utility-first styling with custom security theme
- **Framer Motion** — Subtle section reveals and hover interactions
- **Lucide React** — Consistent icon system
- **Vercel** — Production deployment

## Architecture

- [architecture/system-overview.md](./architecture/system-overview.md)
- [architecture/component-structure.md](./architecture/component-structure.md)
- [architecture/user-flow.md](./architecture/user-flow.md)
- [architecture/deployment.md](./architecture/deployment.md)

## What This Project Demonstrates

- B2B cybersecurity website development
- Complex service presentation for technical and business buyers
- Trust-focused UX design with compliance and social proof
- Security dashboard UI built with reusable components
- Responsive UI implementation (mobile-first)
- Reusable component architecture (`layout/`, `sections/`, `security/`, `ui/`)
- Product-focused design thinking for lead generation
- Frontend architecture suitable for real client projects

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and adjust `NEXT_PUBLIC_SITE_URL` if needed.

## Build

```bash
pnpm build
pnpm start
```

## Future Improvements

- Add real contact form backend
- Add CRM integration (HubSpot, Salesforce)
- Add CMS for security reports and blog content
- Add blog / security insights section
- Add demo booking integration (Calendly)
- Add analytics tracking (Plausible, GA4)
- Add downloadable security audit checklist
- Add multilingual pages (i18n)
- Add advanced SEO landing pages per service
- Add real security platform dashboard with live data

## Case Study

Full project case study: [docs/case-study.md](./docs/case-study.md)

## License

MIT — see [LICENSE](./LICENSE).
