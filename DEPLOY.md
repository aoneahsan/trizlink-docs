# Deploying TrizLink Docs

The docs site is **dual-hosted**: Firebase Hosting and GitHub Pages both serve the same `build/` output at `docs.trizlink.com`. Pick whichever you prefer as the live target (or run both — they are idempotent). **All deploy steps are user-only** — they need the Firebase project, GitHub Pages settings, and DNS access.

## Build

```bash
yarn install
yarn build        # → ./build  (includes CNAME, robots.txt, llms.txt, sitemap.xml)
```

## Option A — Firebase Hosting (site `trizlink-docs`)

Prerequisites (one-time, done by the owner):

1. Create or pick a Firebase project, then a Hosting **site** named `trizlink-docs`.
2. Map the hosting target:
   ```bash
   npx -y firebase-tools@latest target:apply hosting trizlink-docs trizlink-docs --project <firebase-project-id>
   ```
   (Update `.firebaserc` `projects.default` to your real Firebase project id.)
3. Deploy:
   ```bash
   yarn firebase:deploy
   ```
4. Add the custom domain `docs.trizlink.com` to the `trizlink-docs` site in the Firebase console and follow its DNS instructions.

## Option B — GitHub Pages (custom domain)

1. In the repo: **Settings → Pages → Source = "GitHub Actions"**.
2. Push to `main` — the workflow `.github/workflows/deploy-docs.yml` builds and deploys.
3. The custom domain comes from `static/CNAME` (`docs.trizlink.com`), copied into `build/` automatically. Confirm it under **Settings → Pages → Custom domain**.

## DNS

Point `docs.trizlink.com` at whichever host you chose:

- **Firebase Hosting:** the A/AAAA (or CNAME) records Firebase shows for the custom domain.
- **GitHub Pages:** a `CNAME` record for `docs.trizlink.com` → `aoneahsan.github.io` (and enable "Enforce HTTPS").

Do not point the same hostname at both hosts at once — choose one as the authoritative A/CNAME target.

## After deploy

- Submit `https://docs.trizlink.com/sitemap.xml` in Google Search Console + Bing Webmaster Tools.
- Verify `robots.txt`, `llms.txt`, and the JSON-LD render in `view-source`.
