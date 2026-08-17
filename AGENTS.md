# AGENTS.md — trizlink-docs

**Last Updated:** 2026-08-17
**Mirror of `CLAUDE.md`** — identical except this header. Update one, update the other.

| Context Budget Last Verified | 2026-08-17 — CLAUDE.md 4,150 B / no PENDING-TASKS.md; re-check due 2026-08-27 |
|---|---|

Public Docusaurus documentation site for **TrizLink** (https://trizlink.com), a link-management platform.

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
| Live URL | https://docs.trizlink.com (Firebase Hosting site `trizlink-docs` + GitHub Pages, custom domain) |
| Product (app) | https://trizlink.com · Android: https://play.google.com/store/apps/details?id=com.trizlink.app |
| Sibling project | `../trizlink-old/` — the shipped app (PRIVATE), inside the `trizlink-project-root/` rebuild kit |
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
firebase.json + .firebaserc (Firebase Hosting target `trizlink-docs`)
.github/workflows/deploy-docs.yml (GitHub Pages)
```

## Deployment

Dual-hosted (Firebase Hosting + GitHub Pages). See `DEPLOY.md`. Deploying needs the Firebase project, the
GitHub Pages settings and DNS for `docs.trizlink.com`.

**Committing and pushing this repo is NOT owner-only.** It is the docs site of an ordinary own production
product, so the agent commits and pushes it **directly** — owner directive 2026-08-17. Only a project the
owner has *marked* PRIVATE or CLIENT requires asking. Full law: `~/.claude/rules/docs-sites.md`.

<!-- The markers below are kept so the fleet writes that placed them stay no-ops. The prose each one guarded
     restated global law that auto-loads anyway, and was deleted on 2026-08-17. -->
<!-- RULE:main-context-model-workflow v2026-07-16 -->
