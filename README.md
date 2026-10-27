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
- `legal/index.html`: terms and privacy
- `contact/index.html`: support email
- `privacy/` and `terms/`: redirects to the legal page anchors
- `assets/`: styles, fonts and images
- `scripts/check_links.py`: local link checker

## Deployment

The site is designed for GitHub Pages from the `main` branch root. The `.nojekyll` file keeps GitHub Pages from running Jekyll. For a custom domain, add a `CNAME` file with the domain and point DNS at GitHub Pages. All internal paths are relative, so the same files work on a project URL and on the custom domain.

The same repository can be deployed to Vercel as a static site. `vercel.json` selects the "Other" framework preset, skips dependency installation and runs a no-op build, so an existing Vercel project does not try to run a Next.js build after the static site replaces it.

## Notes

- Light and dark mode follow the operating system. There is no theme toggle and no JavaScript.
- The App Store links point to the universal Archivist app listing.
- Screenshots and documentation images are optimized WebP files derived from the previous Next.js site.
