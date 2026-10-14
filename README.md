# Portfolio 2026

A personal portfolio site built with [Astro](https://astro.build) and Tailwind CSS, statically generated and hosted on GitHub Pages.

> **Note:** The site is intentionally unstyled — layout and structure only. A designer will own the visual treatment.

## Prerequisites

- [Node.js](https://nodejs.org) 22 or newer
- npm (bundled with Node)

## Run locally

```bash
# Install dependencies (first time only)
npm install

# Start the dev server with autoreload
npm run dev
```

The site is served at [http://localhost:4321](http://localhost:4321). Edits to pages, components, and styles hot-reload automatically.

### Production build check

```bash
npm run build     # outputs static site to dist/
npm run preview   # serves the dist/ build locally
```

## Deploy to GitHub Pages

**Deploying is just: push to `main`.**

The GitHub workflow at `.github/workflows/deploy.yml` builds the site and deploys it automatically on every push to `main` (and can be triggered manually from the Actions tab).

### One-time setup

1. **Set your site URL** — in `astro.config.mjs`, replace `USERNAME` in the `site` value with your GitHub username (e.g. `https://ashdev.github.io`).
2. **Enable Pages from Actions** — on GitHub, go to your repo's **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The site will be live at your GitHub Pages URL.

> If you ever move this site to a project repo (e.g. `username.github.io/portfolio`), also set `base: '/portfolio'` in `astro.config.mjs` — internal links already use `import.meta.env.BASE_URL` and will adapt automatically.

## Adding a project

1. Create a page at `src/pages/projects/<slug>.astro` — copy an existing project page; they're thin wrappers around the shared `ProjectLayout` component (embedded video at top, then your content).
2. Add an entry to the `projects` array in `src/data/projects.ts` with a matching `slug`, `title`, `thumbnail`, and `featured` flag.
3. Drop a thumbnail image into `public/images/`.

Featured projects (first 3 with `featured: true`) appear on the homepage; all projects are listed at `/projects`.

## Project structure

```
├── .github/workflows/deploy.yml   # GitHub Pages deploy workflow
├── public/                        # Static assets (images, favicon) served as-is
├── src/
│   ├── components/                # ProjectCard, ProjectLayout
│   ├── data/projects.ts           # Single source of truth for all projects
│   ├── layouts/BaseLayout.astro   # Top bar, footer, <head>
│   ├── pages/                     # File-based routes (index, projects/*)
│   └── styles/global.css          # Tailwind entry point
└── astro.config.mjs               # site/base config + Tailwind plugin
```