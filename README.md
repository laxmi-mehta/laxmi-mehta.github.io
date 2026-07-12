# Laxmi Mehta — Portfolio

A story-driven portfolio built as one continuous journey: the page starts at
sunrise and slowly walks into a moonlit night as you scroll. Every section is
a scene along the way — meadow, journal, trail, workshop, lake.

**Live:** https://laxmi-mehta.github.io/

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

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy

Just push to `main`. The GitHub Actions workflow in
`.github/workflows/deploy.yml` builds the site and publishes it to
GitHub Pages automatically.

## Older portfolio

My previous portfolio lives in its own repo
([laxmi-mehta/Portfolio](https://github.com/laxmi-mehta/Portfolio)) and stays
deployed at https://laxmi-mehta.netlify.app/.
