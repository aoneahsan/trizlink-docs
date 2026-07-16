# CLAUDE.md — trizlink-docs

Public Docusaurus documentation site for **TrizLink** (https://trizlink.com), a link-management platform.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`. (Est. 2026-06-19)

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
| Sibling project | `/home/ahsan/Documents/01-code/projects/trizlink/` (the app itself, PRIVATE) |
| Dev ports | start 5962 · serve 5963 |
| Content tracker | `docs/tracking/trizlink-docs-content-tracker.json` |

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

Dual-hosted (Firebase Hosting + GitHub Pages). See `DEPLOY.md`. **Deploy is user-only** — needs the Firebase project, GitHub Pages settings, and DNS for `docs.trizlink.com`.

## Package Manager Hierarchy: nvm → npm (global) → yarn (local)

`nvm` installs/updates Node + npm → `npm` installs global CLIs (incl. yarn) → `yarn` for all local work. Never `pnpm`. Only `yarn.lock` committed.

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

## CLAUDE.md + AGENTS.md Sync

Every rule lives in BOTH `CLAUDE.md` and `AGENTS.md`. Update one → update the other.

## Last Updated

2026-06-22 (site created; all real TrizLink features documented).


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)

<!-- RULE:main-context-model-workflow v2026-07-16 -->
## Main-Context + Skills + Model Workflow (IRON-SOLID — CRITICAL)
1. **NO default/built-in sub-agents** (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) for ANY work in
   this project — they cannot invoke /skills, which RULE #0 makes mandatory. Do ALL work (planning, implementation,
   review, exploration) in the MAIN context. A sub-agent is allowed ONLY when a CUSTOM agent exists in
   `.claude/agents/` for that exact job.
2. **Skills always:** before any task, scan the available-skills list and invoke EVERY relevant skill; if a needed
   skill is missing, download/enable/install it (or use the nearest installed equivalent and say so) — never
   proceed skill-less.
3. **Model workflow:** PLAN and REVIEW on **Fable 5**; EXECUTE the approved plan on **Opus 4.8**. Plans in
   `~/.claude/plans/`; multi-phase features keep a resumable tracker (`docs/features/<slug>/00-tracker.json`),
   resumed rather than re-planned from zero.

Global records (rules, policy, audit reports) live in the `ahsan-notebook` repo at
`static/assets/claude-code/`; the `~/.claude/…` paths are symlinks into it. Full text: `~/.claude/CLAUDE.md`.
(Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16.)
