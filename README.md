# Portfolio

A Vite + React portfolio with a homepage and a dedicated page per project
(`/projects/:id`), routed with React Router.

## Run it

```
npm install
npm run dev
```

## Where to edit

- `src/components/Header.jsx` — name, tagline, nav
- `src/components/Experience.jsx` — work history and skills
- `src/components/Footer.jsx` — contact links
- `src/data/projects.js` — the single source of truth for every project:
  title, description, tags, the `story` shown on its own page, and
  `demoLink` for the "Try it out" button. Add an entry and it shows up in
  the grid and gets a page automatically at `/projects/<id>`.
- `src/components/ProjectCard.jsx` — swap the generated thumbnail for a
  real image once you have one
- `src/pages/ProjectPage.jsx` — the per-project page layout
- `src/index.css` — color and font tokens

## Resume

`public/resume.pdf` is your actual resume. The header's "Resume" link
goes to `/resume`, an in-site page (`src/pages/ResumePage.jsx`) styled
like the rest of the site, with a "Download the PDF" button that saves
`public/resume.pdf`. Replace that PDF whenever you update your resume —
the page's own content lives in `src/data/resume.js` and needs updating
separately if the underlying facts change.

## Color scheme

Parchment/green is the default; a dark, deep-green palette kicks in
automatically when the visitor's OS/browser is set to dark mode
(`prefers-color-scheme: dark` in `src/index.css`). No toggle needed.

## Mascot

The little line-art creature next to your name in the header is a
jackalope (`src/components/JackalopeIcon.jsx`) — original SVG, easy to
swap for a fox or wolf silhouette if you'd rather.

## Deploying

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the
site and deploys it automatically on every push to `main` — no manual
`npm run build` + copy step needed.

One-time setup: in the repo, go to **Settings → Pages** and set
**Source** to **GitHub Actions** (not "Deploy from a branch"). Push to
`main` and the workflow handles the rest — you can watch it run under
the repo's **Actions** tab.

If you'd rather build and deploy by hand instead: run `npm run build`,
then push the *contents* of the resulting `dist/` folder (not `src/`
or `package.json`) to whatever branch/folder your Pages source is set
to serve from — pushing the raw source (as-is) won't work, since
browsers can't execute unbuilt `.jsx` files directly.

One more thing worth knowing: this uses React Router's `HashRouter`, so
URLs look like `millerwatson.github.io/#/projects/1` rather than
`millerwatson.github.io/projects/1`. It's a slightly less clean URL, but
it means GitHub Pages (which has no server-side rewrite for single-page
apps) can serve every route — including direct visits and refreshes —
with zero extra config.
