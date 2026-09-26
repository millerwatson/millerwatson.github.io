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

This uses React Router's `BrowserRouter`, so a static host needs to be
told to serve `index.html` for any path (Netlify: a `_redirects` file
with `/* /index.html 200`; Vercel and most others have an equivalent
"SPA fallback" setting) — otherwise a direct visit to `/projects/1` will
404.
