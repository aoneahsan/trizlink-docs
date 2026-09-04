# CLAUDE.md — trizlink-docs

**Last Updated:** 2026-09-03
**Mirror of `CLAUDE.md`** — identical except this header. Update one, update the other.

| Context Budget Last Verified | 2026-09-03 — CLAUDE.md **5.2 KB** / PENDING-TASKS.md **2.5 KB** with **2** open entries (`TASK-001`, `TASK-002`); measured with `wc -c`. Re-check due 2026-09-13 |
|---|---|

Public Docusaurus documentation site for **Trizlink** (https://trizlink.com), a link-management platform.

🔴 **STALE CONTENT — every page describes the OLD app as of 2026-06-22 (v2.0.1).** The product was rebuilt
from scratch and went live at `trizlink.com` on 2026-08-31 (`../trizlink/`, Supabase backend, Free/Pro/Team
plans, no browser extension, 18-endpoint public API at `api.trizlink.com`). The owner ruled on 2026-09-03:
**full re-derivation of all 23 pages against the rebuilt app's source** — `PENDING-TASKS.md` → `TASK-001`,
and the cross-repo plan in `../remaining-work.md` → C2. Until that lands, treat every product claim on this
site as unverified. 🔴 Derive from `../trizlink/src`, never from `../trizlink-old/` and never from memory.

Fleet law auto-loads from `~/.claude/rules/` at session start — **never restate a global rule here.** This
file carries only what is true of *this* repo.

## Identity

| Key | Value |
|---|---|
| Repo | `trizlink-docs` (PUBLIC — never commit secrets) |
| Type | Docusaurus 3 documentation site (classic preset + Mermaid) |
| Package manager | yarn (NEVER npm/pnpm) |
| Node | >=18 (`.nvmrc` = 22) |
| Author | Ahsan Mahmood ([aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)) |
| Live URL | https://docs.trizlink.com — **GitHub Pages only** (measured 2026-09-03: `server: GitHub.com`). ✅ `TASK-002` closed 2026-09-04: `DEPLOY.md` no longer offers Firebase, and the `firebase:deploy:preview` script is gone |
| Product (app) | https://trizlink.com · Android: https://play.google.com/store/apps/details?id=com.trizlink.app |
| Sibling projects | **`../trizlink/`** — the LIVE rebuilt app (PRIVATE, branch `redevelop-v1`): the ONLY source of truth for product facts · `../trizlink-old/` — the legacy app, read-only, **never** a source for these docs since 2026-08-31 · the kit records one level up (`../docs/PROJECT-CONTEXT.md`, `../remaining-work.md`) |
| Dev ports | start 5962 · serve 5963 |
| Content tracker | `docs/tracking/trizlink-docs-content-tracker.json` |
| Gitignore Last Verified | 2026-06-24 |

## Critical rules

| Rule | Detail |
|---|---|
| Public repo — no secrets | This is a PUBLIC repo. NEVER commit `.env`, API keys, Firebase config with secrets, or anything from the private `trizlink` app. |
| Yarn only | Never `npm install`/`pnpm add`. Only `yarn.lock`. |
| No dev server in agent runs | Per global rule, the agent does not run `yarn start`. Verify with `yarn build` + `yarn typecheck`. |
| Single source of truth | Every product fact MUST reflect the real `trizlink` app behaviour. No invented features, endpoints, or limits. Read the app source before documenting it. |
| Honest framing | Say what TrizLink does NOT do as clearly as what it does (Google-only sign-in, no auto-delete of expired links, AI is bring-your-own-key, custom domains need DNS). No fabricated stats, no hype ("best/#1/world's leading"). "Free" is a fact, not hype. |
| onBrokenLinks: throw | Internal doc links must resolve or the build fails. Cross-link only to pages that exist; otherwise use full external URLs (https://trizlink.com/...). |
| One commit per batch | One commit per docs batch — not per file. |

## Verification commands

```bash
yarn typecheck       # tsc --noEmit (must exit 0)
yarn build           # docusaurus build (must exit 0, must produce ./build)
yarn serve           # preview built site at :5963 (user-only)
```

## Structure

```
docs/
  intro.md
  getting-started/{create-account, quick-start}.md
  features/{short-links, link-in-bio, qr-codes, analytics, custom-domains,
            link-organization, tracking-and-utm, workspaces-and-teams,
            social-media, widgets, ai-features-byok, api-access,
            utility-tools, browser-extension, theme-customizer, sharing}.md
  guides/faq.md
  about/{privacy-and-data, changelog, about-the-author}.md
src/css/custom.css · src/pages/index.tsx
static/{robots.txt, llms.txt, humans.txt, CNAME, img/*}
docusaurus.config.ts · sidebars.ts
.github/workflows/deploy-pages.yml (GitHub Pages)
```

## Deployment

**GitHub Pages only** — a push to `main` runs `.github/workflows/deploy-pages.yml` and that IS the deploy.
See `DEPLOY.md`. 🔴 Never Firebase: the fleet docs-site rule allows one host, this repo has no
`firebase.json` and never had one, and the live host has always answered `server: GitHub.com`
(`DONE-002`, 2026-09-04).

**Committing and pushing this repo is NOT owner-only.** It is the docs site of an ordinary own production
product, so the agent commits and pushes it **directly** — owner directive 2026-08-17. Only a project the
owner has *marked* PRIVATE or CLIENT requires asking. Full law: `~/.claude/rules/docs-sites.md`.

<!-- The markers below are kept so the fleet writes that placed them stay no-ops. The prose each one guarded
     restated global law that auto-loads anyway, and was deleted on 2026-08-17. -->
<!-- RULE:main-context-model-workflow v2026-07-16 -->
