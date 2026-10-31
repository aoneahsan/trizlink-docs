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

## Deploy — publish the built tree

GitHub Pages serves the `gh-pages` branch at `/` in legacy branch mode. A push to `main` records source only.
After `yarn typecheck` and `yarn build`, inspect the built page at phone and desktop widths. Then fetch
`gh-pages`, add a temporary detached worktree at `o/gh-pages`, and copy `build/` into it with
`rsync -a --delete --exclude=.git build/ <worktree>/`. Confirm `CNAME` and `.nojekyll`, commit the generated
tree, and push `HEAD:gh-pages` normally. Do not use Docusaurus deploy or force-push. Request a Pages build with
`gh api -X POST repos/aoneahsan/trizlink-docs/pages/builds`, then verify the live page and served assets.
The domain remains `docs.trizlink.com`, with **Enforce HTTPS** on.

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
