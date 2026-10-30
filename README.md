# Archivist website

Static website for the Archivist app for iPhone, iPad and Mac.

There is no build step. The repository is the site.

## Local preview

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Checks

```sh
python3 scripts/check_links.py
```

The script checks internal links, assets, anchors, page titles, meta descriptions and image alt text.

## Structure

- `index.html`: home page
- `documentation/index.html`: documentation
- `legal/index.html`: legal overview with links to the two documents
- `terms/index.html`: terms and conditions, also read by the app webview
- `privacy/index.html`: privacy policy, also read by the app webview
- `contact/index.html`: support email
- `assets/`: styles, fonts and images
- `scripts/check_links.py`: local link checker

## Deployment

The site is deployed to GitHub Pages from the `main` branch root and served at https://archivist.timepod.dev. The `.nojekyll` file keeps GitHub Pages from running Jekyll. All internal paths are relative, so the same files work on a project URL and on the custom domain.

The same repository can be deployed to Vercel as a static site. `vercel.json` selects the "Other" framework preset, skips dependency installation and runs a no-op build, so an existing Vercel project does not try to run a Next.js build after the static site replaces it.

## Notes

- Light and dark mode follow the operating system. There is no theme toggle and no JavaScript.
- The App Store links point to the universal Archivist app listing.
- The iOS and macOS apps load `/terms/` and `/privacy/` in a webview and read the `<article class="longArticle">` element from the HTML. Keep that exact wrapper and put the full text inside it.
- Screenshots and documentation images are optimized WebP files derived from the previous Next.js site.
