# skypsi-web — the SkyPSI website

This repo is the SkyPSI website. It is published at **https://skypsi.com** via GitHub Pages.

## How an update goes live

1. Edit the files (the homepage is `index.html` at the repo root).
2. Commit and push to the **`main`** branch.
3. GitHub Pages rebuilds and publishes automatically, usually within a minute.

That push is the entire deploy. There is no separate build or release step.

## For an AI agent updating this site

- The homepage is `index.html` at the repo root. Change it, commit, push to `main`, done.
- Keep the **`CNAME`** file (contents: `skypsi.com`). It maps the custom domain; deleting it breaks the site.
- Keep **`.nojekyll`** (disables GitHub's Jekyll step so files or folders with a leading underscore are served as-is).
- The current page is a deliberate brandless teaser. Replace it when the brand is ready.
- HTTPS is automatic (GitHub provisions and renews the certificate). Don't disable it.
- DNS is already set (apex points to GitHub Pages, www redirects to the apex). You do not need to touch DNS to change the page.

## Bring your own tooling

- Right now it's plain static HTML/CSS with no build step: edit and push.
- You can introduce a static site generator (Astro, Eleventy, Hugo, a Next export, etc.). If you do, make sure the built static output is what lands on the branch/path Pages serves (root of `main`, or switch Pages to a `/docs` folder or a GitHub Actions build). Keep `CNAME` and `.nojekyll` in the published output.

## Brand assets

Colors, type, logos, and voice live in the private **`skypsi-website`** repo under `assets/brand/` (guidelines in `brand-guidelines.md`, machine-readable tokens in `tokens.css` / `tokens.json`). Pull tokens and logos from there when building the real site so the site and the brand never drift.

## Local preview

It's static. Open `index.html` directly, or run `python3 -m http.server` in the repo and open the local URL.
