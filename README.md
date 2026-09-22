# rahultiwari portfolio

Personal portfolio for Rahul Tiwari, published as a changelog: every role is a dated release, every entry a shipped outcome with its measured delta.

Built with Next.js (App Router), React, Tailwind CSS 4 and framer-motion. Deployed on Vercel from `main`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Update content

All copy lives in `lib/` so a resume update is a data edit:

| File | What it holds |
| --- | --- |
| `lib/releases.ts` | Roles as releases. Each entry has a kind (`added`, `improved`, `fixed`), text, optional metrics and an optional case-study link. The first release renders as the latest, flooded green. |
| `lib/projects.ts` | Case studies served at `/projects/[slug]`. Keep slugs stable; they are linked from the releases and indexed. |
| `lib/skills.ts` | The Skillset section. |
| `lib/education.ts` | The Education section, tagged by completion month. |
| `lib/site.ts` | Name, title, intro line, resume path and external links. |

Replace `public/resume/Rahul-Tiwari-Resume.pdf` when the resume changes.

Metric values animate on scroll. Digits count in; any prefix or suffix (`$`, `~`, `%`, `K`, `+`) stays fixed, so write them exactly as they should read.

## Environment

- `NEXT_PUBLIC_GA_ID` enables Google Analytics. Without it nothing is loaded.
- The contact form posts to Web3Forms; the public access key is in `components/ContactForm.tsx`.

## Design record

`PRODUCT.md` holds product truth. `DESIGN.md` documents the visual system. Both are maintained with the Impeccable skill.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
