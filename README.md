# Neal Chandra — Portfolio

React + TypeScript + Vite + Tailwind CSS. Built for GitHub Pages (with a Vercel path available too).

## Stack

- **React 18 + TypeScript** — components and typed content data
- **Vite** — dev server and build
- **Tailwind CSS** — styling, design tokens in `tailwind.config.js`
- **React Router** — client-side routing; every project and job has its own URL
  (`/projects/senior-design`, `/experience/eridu-ai`, etc.)

## Project structure

```
src/
  data/
    types.ts        ← TypeScript interfaces for Project and Experience
    projects.ts      ← all 26 projects (dates, overview, architecture, math, etc.)
    experience.ts     ← the 3 jobs, same paradigm
    skills.ts         ← the clickable skill vocabulary (grouped)
    contact.ts        ← name, email, links, resume path
    timeline.ts        ← combines projects + experience into year-grouped timeline data
  components/
    NavBar.tsx, Hero.tsx, Timeline.tsx, Footer.tsx, SkillChip.tsx
  pages/
    Home.tsx            ← landing page: hero + timeline (the centerpiece)
    ProjectDetail.tsx     ← /projects/:slug — Overview, What I Built, Architecture,
                            Technologies, Technical Challenges, Results, Relevant Math,
                            Lessons Learned (sections only render if that data exists)
    ExperienceDetail.tsx   ← /experience/:slug — same paradigm for jobs
    Skills.tsx              ← /skills — click a skill, see what used it
    NotFound.tsx
  App.tsx                    ← route table
  main.tsx                    ← entry point, wraps App in BrowserRouter
```

## Editing content

- **Add or edit a project**: edit `src/data/projects.ts`. Only `overview`, `whatIBuilt`,
  and `technologies` are required — `architecture`, `technicalChallenges`, `results`,
  `relevantMath`, and `lessonsLearned` are optional and simply don't render if omitted.
  Same for `url` (GitHub link) — leave it off if there isn't a public repo yet.
- **Add a job**: edit `src/data/experience.ts`, same idea.
- **Add/remove a skill tag**: edit `src/data/skills.ts`. A skill only shows up as
  clickable if at least one project or job lists it in its own `skills` array.
- **Timeline grouping** is automatic — it's derived from each item's `year` field,
  nothing to maintain by hand.
- **Resume**: drop a PDF at `public/resume.pdf` — the nav bar's Resume link already
  points there.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Type-checks with `tsc` first, then builds to `dist/`.

## Deploying to GitHub Pages

Two options, both included:

### Option A — GitHub Actions (automatic)

`.github/workflows/deploy.yml` builds and publishes to the `gh-pages` branch on every
push to `main`. In your repo settings, set Pages source to the `gh-pages` branch.
Nothing else to configure.

### Option B — manual, from your machine

```bash
npm run deploy
```

This runs `gh-pages -d dist` (the `gh-pages` npm package, already in devDependencies).

### Custom domain (nealc.dev)

`public/CNAME` already contains `nealc.dev` — GitHub Pages picks it up automatically
on deploy. You still need to point DNS at GitHub Pages yourself:

- **Apex domain** (`nealc.dev`): four `A` records pointing at GitHub Pages' IPs
  (185.199.108.153, .109.153, .110.153, .111.153)
- **`www` subdomain** (optional): a `CNAME` record pointing at `<username>.github.io`

If you are **not** using a custom domain (publishing to `<username>.github.io/<repo>/`
instead), delete `public/CNAME` and change `base: "/"` to `base: "/<repo>/"` in
`vite.config.ts`.

### Why there's a `public/404.html`

GitHub Pages is a static host — it doesn't know about React Router's client-side
routes. A direct link to `/projects/senior-design` would normally 404. `404.html`
redirects to `/` while stashing the real path; an inline script in `index.html`
restores it before React Router mounts. This is the standard
["spa-github-pages"](https://github.com/rafgraph/spa-github-pages) technique. If
you switch to Vercel or Netlify instead, you don't need this — `vercel.json` (SPA
rewrite) is already included for Vercel.

## Deploying to Vercel (alternative)

Import the repo in Vercel, framework preset "Vite," and it just works —
`vercel.json` already has the SPA rewrite rule. No need for the 404.html trick there.
# portfolio-site
