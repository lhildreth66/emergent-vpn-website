# Emergent VPN — Marketing Site PRD

## Original Problem Statement
Build a simple, professional static marketing website for Emergent VPN at emergentvpn.com. Three pages: Home, Privacy Policy, Account/Data Deletion Request. Modern dark theme matching the VPN app branding, mobile responsive, fast loading, SEO optimized, no login system. Include favicon, OG tags, sitemap.xml, robots.txt, Google Play CTA.

## User Choices (from ask_human)
- Google Play URL: `https://play.google.com/store/apps/details?id=com.emergentvpn`
- Logo / favicon: Generated text-based "EV" shield mark (SVG)
- Brand accent: Cyan / teal (#00E5FF)
- Scope: Only the 3 specified pages + FAQ section added on Home

## Architecture
- Stack: React 19 + react-router-dom v7 + Tailwind CSS + Shadcn UI (Accordion)
- Static SPA — no backend / no MongoDB usage
- Icons: @phosphor-icons/react
- Fonts: Outfit (display), IBM Plex Sans (body), JetBrains Mono (labels) — Google Fonts
- Design archetype: Tactical Minimalism / Swiss high-contrast — dark `#0A0A0A` background, cyan accents, sharp edges, bento grid for features

## User Personas
- **Privacy-conscious mobile user** — wants quick, trustworthy VPN protection
- **Public Wi-Fi traveler** — needs security on hostile networks
- **Compliance auditor / app store reviewer** — verifies privacy policy and account deletion flows

## Core Requirements (static)
- 3 routes: `/`, `/privacy`, `/delete-account`
- Mobile responsive (verified at 375px)
- Dark theme, cyan/teal accent
- SEO: `<title>`, `<meta description>`, canonical, Open Graph + Twitter card tags, JSON-LD SoftwareApplication schema
- `robots.txt`, `sitemap.xml`, `favicon.svg`, `og-image.svg`
- Google Play CTA in hero + header + support section
- Support email surfaced: emergentvpn@gmail.com
- data-testid attributes on all interactive elements (kebab-case)

## What's Been Implemented (2025-12-10)
- [x] Home page — Hero, Features (bento, 6 items), How It Works (4 steps), About, FAQ accordion (6 Q&As), Support CTA, Footer
- [x] Privacy Policy page — all required sections + Last Updated date
- [x] Delete Account page — email CTA with prefilled subject, data deleted vs. retained cards, 30-day processing notice
- [x] Sticky glass header with nav + Get the App CTA
- [x] Footer with Privacy / Data Deletion / Email / dynamic copyright year
- [x] EV shield SVG logo + favicon + og-image
- [x] robots.txt + sitemap.xml (3 URLs)
- [x] Open Graph + Twitter Card + JSON-LD structured data
- [x] Mobile responsive (375px verified)
- [x] testing_agent_v3 iteration 1 — 13/13 checks pass, 100% success

## Prioritized Backlog
### P1 — Recommended next
- Add an animated "What's protected vs. exposed" comparison block (conversion booster)
- Replace `emergentvpn.com` hardcoded URLs in sitemap/og with build-time env var when multi-env deploys are needed
- Add a `/pricing` or in-app subscription tiers page once monetization is finalized

### P2 — Nice to have
- Localization (i18n) — at minimum: EN / ES / FR
- Lighthouse audit + image optimization pass
- App Store / iOS button once iOS launch happens
- Cookie/consent banner if any analytics are added beyond the existing platform telemetry
- Blog / changelog subpath for product transparency posts

## Deployment Notes
- Custom domain `emergentvpn.com` to be connected via Emergent Deploy panel
- All SEO files (`robots.txt`, `sitemap.xml`, `favicon.svg`, `og-image.svg`) are served from `/app/frontend/public/`
