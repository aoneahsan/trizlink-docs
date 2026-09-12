# AGENTS.md — trizlink-docs

**Last Updated:** 2026-09-12
**Mirror of `CLAUDE.md`** — identical except this header. Update one, update the other.

| Context Budget Last Verified | 2026-09-12 — CLAUDE.md **5.5 KB** / PENDING-TASKS.md **0.4 KB** with **0** open entries; measured with `wc -c`. Re-check due 2026-09-22 |
|---|---|

Public Docusaurus documentation site for **Trizlink** (https://trizlink.com), a link-management platform.

✅ **Every page describes the REBUILT app.** All 23 pages were re-derived from `../trizlink/src` on 2026-09-04
(`DONE-001`), the referrals page was added on 2026-09-05 (24 content pages), and the landing prose passed the
story system's GATE 4 the same day. 🔴 Derive from `../trizlink/src`, never from `../trizlink-old/` and never from
memory — the legacy tree is read-only reference material and has not been a source for these docs since 2026-08-31.

Fleet law auto-loads from `~/.claude/rules/` at session start — **never restate a global rule here.** This
file carries only what is true of *this* repo.

## Identity

| Key | Value |
|---|---|
| Repo | `trizlink-docs` (PUBLIC — never commit secrets) · branch `main` |
| Type | Docusaurus 3 documentation site (classic preset + Mermaid) + a local `discovery-feed` plugin emitting `feed.xml` |
| Package manager | yarn (NEVER npm/pnpm) |
| Node | >=18 (`.nvmrc` = 22) |
| Author | Ahsan Mahmood ([aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)) |
| Live URL | https://docs.trizlink.com — **GitHub Pages only** (`server: GitHub.com`; `DONE-002` removed the Firebase offer) |
| Product (app) | https://trizlink.com · Android: https://play.google.com/store/apps/details?id=com.trizlink.app (the rebuild's AAB is not yet uploaded — the listing still serves the old build) |
| Sibling projects | **`../trizlink/`** — the LIVE rebuilt app (PRIVATE, branch `redevelop-v1`): the ONLY source of truth for product facts · `../trizlink-old/` — legacy, read-only, never a source · the kit records one level up (`../docs/PROJECT-CONTEXT.md`, `../remaining-work.md`, `../what-this-project-consists-of.md`) |
| Dev ports | start 5962 · serve 5963 |
| Content tracker | `docs/tracking/trizlink-docs-content-tracker.json` |
| Search discovery | enrolled as surface `docs` of project `aoneahsan/trizlink`; findings land in `../trizlink/SEARCH-DISCOVERY-ISSUES.md`; the IndexNow key file is `static/5ec21df431ff3d1dbf8dd7052aad9671.txt` |
| Gitignore Last Verified | 2026-06-24 |

## Critical rules

| Rule | Detail |
|---|---|
| Public repo — no secrets | NEVER commit `.env`, API keys, or anything from the private `trizlink` app. `docs/MANUAL-TASKS.md` and `docs/DONE-TASKS.md` are excluded from the build (`docusaurus.config.ts` → `docs.exclude`) |
| Yarn only | Never `npm install`/`pnpm add`. Only `yarn.lock`. |
| No dev server in agent runs | Verify with `yarn typecheck` + `yarn build`; `yarn start`/`yarn serve` are the owner's. |
| Single source of truth | Every product fact reflects the rebuilt app's source. No invented features, endpoints or limits. Read `../trizlink/src` before documenting. |
| Honest framing | Say what Trizlink does NOT do as plainly as what it does: Google-only sign-in, no browser extension (deferred), custom-domain **serving** deferred, social publishing built-and-inert, AI metered with BYOK. No fabricated stats, no hype. |
| The spelling is **Trizlink** | Never `TrizLink` — the Story Bible (`../trizlink/docs/story/story-bible.md` §7) bans the camel-cased form. |
| Copy is a story surface | The landing prose is GATE-4 approved (2026-09-05). A change to it is a **proposal** under `D-STORY-PROPOSES`, never a silent edit. |
| onBrokenLinks: throw | Internal doc links must resolve or the build fails. |
| One commit per batch | One commit per docs batch — not per file. |

## Verification commands

```bash
yarn typecheck       # tsc --noEmit (single-config layout — correct here)
yarn build           # docusaurus build → ./build, incl. feed.xml from the discovery-feed plugin
```

## Structure

```
docs/
  intro.md
  getting-started/{create-account, quick-start}.md
  features/{short-links, link-in-bio, qr-codes, analytics, custom-domains, link-organization,
            tracking-and-utm, workspaces-and-teams, social-media, widgets, ai-features-byok,
            api-access, utility-tools, browser-extension, theme-customizer, sharing, referrals}.md
  guides/faq.md
  about/{privacy-and-data, changelog, about-the-author}.md
  MANUAL-TASKS.md · DONE-TASKS.md            (excluded from the build)
src/css/custom.css · src/pages/index.tsx · src/plugins/discoveryFeed.ts
static/{robots.txt, llms.txt, humans.txt, CNAME, 5ec21df431ff3d1dbf8dd7052aad9671.txt, img/*}
docusaurus.config.ts · sidebars.ts
.github/workflows/deploy-pages.yml (GitHub Pages)
```

## Deployment

**GitHub Pages only** — a push to `main` runs `.github/workflows/deploy-pages.yml` and that IS the deploy.
See `DEPLOY.md`. 🔴 Never Firebase: this repo has no `firebase.json` and never had one.

**Committing and pushing this repo is NOT owner-only.** It is the docs site of an ordinary own production
product, so the agent commits and pushes it **directly** — owner directive 2026-08-17. Read the push output and
quote any `Bypassed rule violations` line. Full law: `~/.claude/rules/docs-sites.md`.

<!-- The markers below are kept so the fleet writes that placed them stay no-ops. The prose each one guarded
     restated global law that auto-loads anyway, and was deleted on 2026-08-17. -->
<!-- RULE:main-context-model-workflow v2026-07-16 -->
