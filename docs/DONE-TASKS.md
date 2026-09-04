# Done tasks — trizlink-docs

**Last Updated:** 2026-09-04
Completed `PENDING-TASKS.md` entries, moved here with their date and evidence. 🔴 Nothing is deleted, and a
number is never reused: the next id is one past the highest that has ever existed in either file.

---

### DONE-002 — `DEPLOY.md` offers Firebase Hosting; the docs-site rule is GitHub Pages only

**Found while working on:** the same audit. `DEPLOY.md` describes the site as "dual-hosted" on Firebase Hosting
and GitHub Pages; the fleet rule (`~/.claude/rules/docs-sites.md`) is **GitHub Pages only, never Firebase**, and
the live site serves from GitHub (`server: GitHub.com`, 2026-09-03). Remove Option A and the `firebase:deploy`
script, any `.firebaserc` / `firebase.json` in this repo, and the "dual-hosted" sentence; keep the Pages workflow
and the CNAME. Also tick-ready: `docs/MANUAL-TASKS.md` rows 1–2 are done in practice (the owner moves them).

**Priority: LOW. Size:** 0.1 session, best folded into TASK-001's first commit.

**Closed 2026-09-04.** `DEPLOY.md` rewritten: GitHub Pages is the only documented host and a push to `main`
is the deploy. The `firebase:deploy:preview` script is removed from `package.json`; `README.md`,
`CLAUDE.md`/`AGENTS.md` and the `docusaurus.config.ts` comment no longer say "dual-hosted".

🔴 **The claim was never true, which is why the option is deleted rather than deprecated.** This repo has no
`firebase.json` and no `.firebaserc` — checked, not assumed — so "Option A" documented a deploy that could
not run, and the same file then warned against pointing one hostname at two hosts. The live host has
answered `server: GitHub.com` throughout.

**Verification:** `grep -rn Firebase` over the repo's own files returns only the two deliberate refusals (the
new "never Firebase" notes) and the pre-existing public-repo secrets warning. `yarn typecheck && yarn build`
green with `onBrokenLinks: throw`.
