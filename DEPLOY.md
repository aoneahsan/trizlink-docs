# Deploying TrizLink Docs

The docs site is served by **GitHub Pages, and only GitHub Pages**, at `https://docs.trizlink.com`.

🔴 **This is a fleet rule, not a preference** (`~/.claude/rules/docs-sites.md`): a docs site is GitHub Pages,
never Firebase. Until 2026-09-04 this file offered Firebase Hosting as "Option A" and called the site
"dual-hosted". It never was — the live host has answered `server: GitHub.com` since the site went up, the
repo has no `firebase.json` and no `.firebaserc`, and pointing one hostname at two hosts is exactly what the
old version of this file then warned you not to do. The option is removed rather than deprecated, because a
second documented path is a second thing that can be chosen by mistake.

## Build

```bash
yarn install
yarn build        # → ./build  (includes CNAME, robots.txt, llms.txt, sitemap.xml)
```

## Deploy — push to `main`

1. In the repo: **Settings → Pages → Source = "GitHub Actions"** (one-time).
2. Push to `main`. The workflow `.github/workflows/deploy-pages.yml` builds and deploys.
3. The custom domain comes from `static/CNAME` (`docs.trizlink.com`), copied into `build/` automatically.
   Confirm it under **Settings → Pages → Custom domain**, with **Enforce HTTPS** on.

There is no manual deploy command and no second target. A push to `main` is the deploy.

## DNS

`docs.trizlink.com` is a `CNAME` to `aoneahsan.github.io`. It is the only record this site needs.

## After deploy

- `curl -sI https://docs.trizlink.com | grep -i '^server:'` → `GitHub.com`. Anything else means the DNS
  moved, not that the build failed.
- Submit `https://docs.trizlink.com/sitemap.xml` in Google Search Console + Bing Webmaster Tools.
- Verify `robots.txt`, `llms.txt`, and the JSON-LD render in `view-source`.

## What an agent must never do here

Deploy this site to Firebase · add a `firebase.json`, `.firebaserc` or a `firebase:*` script · commit a
secret to this **public** repo · edit `docs/MANUAL-TASKS.md` (the owner ticks those, and it is deliberately
excluded from the build — `docusaurus.config.ts`).
