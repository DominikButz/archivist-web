# AGENTS.md

Instructions for working on the Archivist marketing site.

## What this project is

Static marketing site for the Archivist app for iPhone, iPad and Mac. Plain HTML and CSS, no build step, no JavaScript, no analytics. The repository root is the deployed site.

Two hosts serve the same files from `main`:

- GitHub Pages: https://archivist.timepod.dev (primary, custom domain)
- Vercel: https://www.archivist-app.com (legacy, still live until the apps switch to the new domain)

## Hard constraints

- No JavaScript. Not for a theme toggle, not for analytics, not for anything.
- Dark mode comes from `prefers-color-scheme` in `assets/css/styles.css`. Do not add a manual switcher.
- No build tooling. No npm project, no bundler, no CSS preprocessor.
- Keep all internal links relative (`../documentation/`, not `/documentation/`). GitHub Pages serves the site from a subpath, so root-absolute paths break there.
- No em dashes in user facing prose. Use commas, colons or separate sentences.
- Never modify `/Users/Dominik/Documents/Programmieren/WebApps/archivist-web-old`. That is the old Next.js project and is reference only. Only this repository may be overwritten.

## Structure

```
index.html                  Home page, feature sections, App Store links
documentation/index.html    Feature documentation with screenshots
legal/index.html            Legal overview linking to both documents
terms/index.html            Terms, wrapped in <article class="longArticle"> for the app
privacy/index.html          Privacy policy, same wrapper for the app
contact/index.html          Support email
404.html                    Custom not found page
assets/css/styles.css       All styling, responsive rules, dark mode
assets/fonts/               Self hosted Instrument Sans and Instrument Serif (woff2)
assets/img/                 Screenshots, app store badges, Open Graph image
scripts/check_links.py      Link, asset, anchor, metadata and alt text checker
sitemap.xml                 Sitemap, URLs point at archivist.timepod.dev
robots.txt                  Allow all, sitemap reference
manifest.webmanifest        Web app manifest
.nojekyll                   Stops GitHub Pages from running Jekyll
vercel.json                 Static Vercel configuration
```

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Stop the server when done, for example with `kill $(lsof -t -iTCP:8000 -sTCP:LISTEN)`.

## Checks before committing

```sh
python3 scripts/check_links.py
npx --yes html-validate index.html documentation/index.html legal/index.html contact/index.html 404.html privacy/index.html terms/index.html
```

The link checker covers internal links, assets, anchors, page titles, meta descriptions and image alt text. It also checks that `terms/` and `privacy/` keep the `<article class="longArticle">` wrapper the app webview reads. Run both, and fix errors rather than suppressing them.

Also check for layout problems when touching CSS: no horizontal overflow at 320, 390, 768 and 1440 px, in both light and dark mode.

## Updating content

- Feature copy lives in `index.html`. Long form details and screenshots live in `documentation/index.html`.
- Terms text lives in `terms/index.html`, privacy text in `privacy/index.html`. `legal/index.html` is an overview that links to both and keeps the `#terms` and `#privacy` anchors.
- The iOS and macOS apps load `/terms/` and `/privacy/` in a webview, fetch the HTML and extract `<article class="longArticle">`. Keep that exact wrapper with the full document inside and no nested `</article>`. Without it the webview shows a blank page.
- Contact is `archivist-support@timepod.dev`. There is no contact form.
- The App Store URL is `https://apps.apple.com/hk/app/archivist/id6466692005?l=en-GB`. Keep it identical everywhere.
- The canonical, Open Graph and sitemap URLs point at `https://archivist.timepod.dev/`. If the domain moves, update `index.html`, the other page heads, `sitemap.xml` and `robots.txt` together.
- Screenshots are WebP files in `assets/img/`. Each section uses a `-sm` variant for narrow viewports and a full size variant for wide ones, in light and dark. When replacing a screenshot, replace both variants for both modes.
- App details can be checked in the Xcode project at `/Users/Dominik/Documents/Programmieren/Xcode Projects/Dr. Archiver`. Read only, do not change the app from here.

## Deployment

Both hosts deploy from `main` on push. Vercel builds automatically through its GitHub integration. GitHub Pages rebuilds automatically as well, usually within a minute or two.

```sh
git add -A
git commit -m "feat: ..."
git push origin main
```

`vercel.json` sets `framework: null`, an empty install command and a no-op build command. This stops the Vercel project from trying to run the old Next.js build. Do not remove those settings.

To verify a change on Vercel before pushing to production, deploy a temporary anonymous copy first:

```sh
npx --yes vercel deploy --temporary --yes --verify
```

Check the returned URL, then push to `main`. The command creates a `.vercel/` folder, which is gitignored.

### Custom domain

`archivist.timepod.dev` is served by GitHub Pages, with DNS pointed at GitHub Pages. Keep the canonical, Open Graph, sitemap and robots URLs on that host. The Vercel deployment at `www.archivist-app.com` is legacy and will be shut down once the apps point at the new domain.

## Verifying a deploy

```sh
for path in / /documentation/ /legal/ /contact/ /privacy/ /terms/ /assets/css/styles.css /assets/img/og.png /sitemap.xml; do
  printf '%-28s ' "$path"
  curl -s -o /dev/null -w "%{http_code} %{content_type}\n" "https://archivist.timepod.dev$path"
done
```

All should return 200. Vercel and GitHub Pages both redirect extensionless paths to the trailing slash form and serve `404.html` for unknown paths.

## Commit style

Semantic prefixes, for example `feat:`, `fix:`, `docs:`. Keep messages short and factual.
