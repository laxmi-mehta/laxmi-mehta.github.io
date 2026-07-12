# Laxmi Mehta — Portfolio

A story-driven portfolio built as one continuous journey: the page starts at
sunrise and slowly walks into a moonlit night as you scroll. Every section is
a scene along the way — meadow, journal, trail, workshop, lake.

**Live:** https://laxmi-mehta.github.io/Portfolio/

## Tech

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis smooth scroll

## Sections

| Scene | What it holds |
|---|---|
| Hero | Sunrise meadow, rotating role titles, resume |
| Story | About me, photo, quick facts |
| Education | SSC, HSC and B.Sc. IT |
| Journey | Work experience at Adhyay Infotech, ML roadmap, internships |
| Craft | Skill boards — backend, ML, frontend, tools |
| Work | Featured projects with stats, more projects grid |
| Contact | Night lake, links and a message form |

All content lives in `data/content.ts` — text, projects, skills, links.
Nothing else needs touching for content updates. Words wrapped in
`**double asterisks**` render highlighted.

## Branches

| Branch | Purpose |
|---|---|
| `main` | The old portfolio (kept as-is, still deployed on Netlify) |
| `story-driven-portfolio` | Source code of this new portfolio |
| `gh-pages` | Build output — what GitHub Pages actually serves |

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy

```bash
npm run build      # writes the static site to out/
cd out
git init -b gh-pages
git add -A
git commit -m "Deploy portfolio"
git push -f https://github.com/laxmi-mehta/Portfolio.git gh-pages
```

The site is served under `/Portfolio`, so the base path is set in
`next.config.mjs` and mirrored in `data/content.ts`.
