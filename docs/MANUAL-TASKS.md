# Manual / User-Only Tasks — Trizlink Docs

> The ONE place for everything only you (the human) can do. Fixed path: `docs/MANUAL-TASKS.md`.
> Global spec: `~/.claude/rules/manual-tasks.md`. Excluded from the published site (see
> `docusaurus.config.ts` → `docs.exclude`) because this repo is public.
> Last updated: 2026-09-12

## ⏳ Pending manual tasks

| # | Task | Why only you | Status |
|---|------|--------------|--------|
| — | Nothing pending. The Search Console sitemap submission for this site (runner finding `fnd-sitemap-not-submitted-a072dac01e`, 2026-09-08) is being attempted by the agent through the Search Console API first, by your ruling of 2026-09-12 (`../../DECISIONS-LOG.md` → `D-AUDIT-2026-09-12`, R6). A row appears here only if that call is refused. | | |

## ✅ Completed manual tasks

| # | Task | Resolution | Date |
|---|------|-----------|------|
| 1 | **Add DNS.** `CNAME docs → aoneahsan.github.io` on `trizlink.com` | Done — the zone moved to Cloudflare on 2026-08-28 carrying the `docs` CNAME; `curl -sI https://docs.trizlink.com/` answers `server: GitHub.com` (measured 2026-09-03 and 2026-09-12). Moved on that evidence at the 2026-09-12 audit | 2026-08-28 |
| 2 | **Configure GitHub Pages.** Source = GitHub Actions, custom domain `docs.trizlink.com`, HTTPS enforced | Done — every push to `main` deploys (`Deploy to GitHub Pages` runs green, last 2026-09-05) and the site serves over HTTPS at the custom domain. Moved on that evidence at the 2026-09-12 audit | before 2026-09-03 |
