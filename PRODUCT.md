# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Rahul Tiwari for senior software engineering roles. They arrive from a resume link, LinkedIn, or GitHub, usually on a laptop between other candidates, sometimes on a phone. Their job: decide in under a minute whether this engineer is worth a conversation, then download the resume or reach out.

Secondary (confirmed present, not optimized for): peers and collaborators curious about BostonHome.

## Product Purpose

A personal portfolio for Rahul Tiwari, Senior Software Engineer (Boston, MA). It exists to turn a recruiter's skim into an outreach. Success is a contact-form submission, a resume download, or a LinkedIn/GitHub click.

## Positioning

An engineer whose work is measured in production outcomes, not tech lists: $5M/yr saved by a prescription-approval redesign, 23% fewer autoship cancellations ($3.6M revenue), fax OCR readability 20% to 99% ($1.5M saved), a founder-built rent-transparency product with real traction (114 rent reports, 4.4K page views, 1.1K visitors across 70+ Boston neighborhoods), and current work shipping CRM/field-service integrations and an AI voice-agent dispatch at TradeEngage. Full-stack across React/Next.js/TypeScript and Java/Spring Boot/Python/FastAPI/NestJS, with hands-on LLM integration (Anthropic Claude, OpenAI, Gemini, LLaMA, MCP servers).

## Operating Context

- Deployed on Vercel from the `rtspirit/rahul-tiwari-portfolio` GitHub repo, `main` branch, personal account. Independent of any employer's org or design system.
- Next.js 16 App Router, React 19, Tailwind CSS 4, framer-motion 12, react-icons, Vercel Speed Insights, Google Analytics via `NEXT_PUBLIC_GA_ID`.
- Contact form posts to Web3Forms (`https://api.web3forms.com/submit`, access key in `components/ContactForm.tsx`). Must keep working unchanged.
- Resume PDF served from `public/resume/Rahul-Tiwari-Resume.pdf`; replaced with the September 2026 version.
- Routes: `/` (single scrolling page), `/projects` (redirects to `/#projects`), `/projects/[slug]` (statically generated case-study pages).

## Capabilities and Constraints

Confirmed content (source: resume dated Sept 2026 and the owner's answers):

- Current: Senior Software Engineer, TradeEngage (remote), June 2026–present. Three case studies at resume level of detail only: (1) four CRM/field-service integrations (Housecall Pro, Jobber, ServiceMinder, Broccoli) on a config-driven registry with five shared capability contracts, OAuth2/PKCE + GraphQL, customer self-serve activation; (2) AI voice agent (Broccoli, Avoca) wired into referral dispatch with multi-provider fan-out and two-layer idempotency; (3) referral link analytics module serving customer dashboard and admin surface (conversion attribution, channel CTR, revenue-leak aging, delivery health). Also closed a bonus rule that double-paid 132 users (~$3.9k). Stack: Python, FastAPI, SQLAlchemy, Celery, PostgreSQL, React, TypeScript, TanStack Query, MUI.
- Founder & Lead Engineer, BostonHome (bostonhome.app), April 2026–present. Stack, listed without version numbers: Next.js frontend on Vercel, NestJS API on Railway, Prisma ORM, Supabase Postgres with PostGIS, Mapbox GL JS, MBTA transit layers, Google Gemini for market insights. Traction: 114 rent reports, 4.4K page views, 1.1K visitors, 70+ neighborhoods. ~40% faster API responses after moving off a GeoJSON CDN dependency; eliminated CLS.
- Software Engineer II, Chewy (Boston), Feb 2023–Sept 2025. Prescription approval workflow ($5M/yr savings), autoship clinic change (23% fewer cancellations, $3.6M revenue), org-wide MCP chatbot platform (Claude + OpenAI), LLaMA Figma-to-React tool, controlled substances + PDMP via Bamboo Health, fax OCR via AWS Textract (20%→99%, $1.5M), CI/CD with Terraform/Jenkins/EKS, Step Functions/Lambda/Kafka workflows.
- Software Engineer Co-op, Dispatch Technologies (Boston), Jan–Sept 2022. AccuWeather feature (+7% revenue per client), 20+ APIs in Go/Python/Node, AWS deploys, 35 Datadog/Loggly dashboards.
- Senior Systems Engineer, Infosys (Pune), Dec 2016–Nov 2020. Java 11/Spring MVC microservices, mentored 12 engineers, 300+ customer requirements, database maintenance SOPs for MySQL/PostgreSQL/DynamoDB that achieved 100% compliance across frequent audits, CD framework with GitHub Actions/Terraform/CodeDeploy.
- Education: Executive MS in Artificial Intelligence, University of the Cumberlands (expected Aug 2027); MS Information Systems, Northeastern (2021–2022); BE Information Technology, LNCT Bhopal (2012–2016).
- Links: linkedin.com/in/rtiwari27, github.com/rtspirit, bostonhome.app.

Constraints:

- No phone number or personal email on the page (contact goes through the form). Resume PDF carries them.
- Every number on the site must trace to the resume or the owner's answers. No invented testimonials, logos, or metrics.
- Chewy role title on the site is "Software Engineer II" everywhere; prior code hardcoded it in one place.
- Custom cursor is dropped (owner did not ask to keep it).

## Brand Commitments

- Name: Rahul Tiwari. Profile photo `public/images/profile_picture.png` stays in the hero.
- Voice: plain, specific, outcome-first. No hype adjectives.
- Explicitly not the TradeEngage design system or any employer branding.

## Evidence on Hand

- Resume PDF: `/Users/rahultiwari/Resume/Rahul Tiwari - Resume.pdf` (also .docx). Source of every claim above.
- BostonHome mockup: `public/images/bostonhome-dark-mockup.png` (1024×1024, dark UI render).
- Profile photo: `public/images/profile_picture.png` (1122×1402).
- `public/images/background.jpg` (4000×2525) is unreferenced; template SVGs in `public/` are unused.
- Absent: company logos, testimonials, screenshots of Chewy/TradeEngage work (internal). Do not fabricate.

## Product Principles

1. Proof before adjectives: lead with measured outcomes, name the mechanism behind each.
2. One-minute legibility: a recruiter should know who, what, and how to reach out within the first viewport.
3. Resume and contact are never more than one tap away, on every viewport.
4. Content is data: experience, projects, skills, education live in `lib/` so the next resume update is a data edit.
5. Zero regressions: form, analytics, static case-study routes keep working.
