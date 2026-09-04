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

---

### DONE-001 — Re-derive all 23 pages against the rebuilt app (the site describes the OLD product)

**Found while working on:** the owner's audit of 2026-09-03 (`../DECISIONS-LOG.md` → `D-AUDIT-2026-09-03`).
Module R5 of the rebuild owed "docs site corrected" at cutover (2026-08-31); it never happened. Every page is
dated 2026-06-22 and documents v2.0.1 of the legacy app — a browser extension that the rebuild does not ship, no
Free/Pro/Team plans, mock DNS verification described as real, an API with no server.

**Ruled 2026-09-03: full re-derivation.** For each page in `docs/tracking/trizlink-docs-content-tracker.json`
(reset every row to `pending` first): read the rebuilt app's source for that feature (`../trizlink/src/routes`,
`src/content`, `supabase/functions`) **before** writing; trace every claim to a `file:line`; rewrite to the SEO
floor in the Bible's voice (`../trizlink/docs/story/`); state what it does NOT do. The specific corrections
already known, the acceptance probes and the prohibitions: **`../remaining-work.md` → C2**. The landing prose
is also story surface "Docs-site landing prose" and passes GATE 4.

**Applies when:** any session, one writer (`aoneahsan-ccca-docs-writer`, `EXCLUSIVE SCOPE` = this repo only).
**Priority: HIGH** — a public site making claims the product cannot meet. **Size:** 2–3 sessions.

**Closed 2026-09-04** — all 23 pages re-derived against the rebuilt app in three batches
(`b3ee6ad`, `1aa0076`, and this commit). ~25,700 words. Every claim traced to a `file:line` in `../trizlink/`;
the old app and the pages being replaced were never used as sources.

**What was actually wrong.** The site described a product that no longer exists. The stack was named as
Firebase and Firestore (it is Supabase and Postgres with row-level security), and `analytics.md` claimed six
times that figures update *"in real time through Firestore listeners"* — wrong twice over, since a grep for
`.channel(|realtime` across `src/services/` returns zero. **There is no realtime anywhere in this product.**
Beyond that: a Threads platform, a share modal and a native OS share sheet, AI image generation / hashtag
generation / performance forecasts, an "editor" role, a fourth bio template, an OS analytics breakdown, an
expiry webhook event, a QR download button, `/dashboard/tracking/utm-templates`, "powered by Radix UI",
"sync to your account in Firestore", free-text multi-tag labels, "40+ tools that run in your browser", and —
on the privacy page — a **camera permission** and an **approximate-location permission**, neither of which
the app holds. It declares `INTERNET` and `AD_ID`.

**`TrizLink` → `Trizlink`, everywhere.** Measured rather than assumed: the app catalogue carries `Trizlink`
89 times and `TrizLink` zero, and the Story Bible glossary bans the camel-case form.

**Three things the writer corrected against its own brief, each verified from source before acceptance:**
there are no custom roles (`WORKSPACE_ROLE_IDS` is a fixed four with a seeded 28-row capability matrix);
LinkedIn **is** supplied, the opposite of what the brief said; and the theme control has **ten** axes, not
eleven — `side` is pre-painted but deliberately absent from the panel because the top bar already controls it.

**Three defects found in the site itself, none of them content:**

1. A `headTags` canonical hardcoded to `${SITE_URL}/` is emitted on **every** page, so the whole site told
   search engines it was 25 duplicates of its home page — the one instruction that can remove a docs site
   from search with every build green. Removed; Docusaurus emits a correct per-page canonical already.
2. `docs/DONE-TASKS.md` (this file) shipped as a public page with a sitemap entry. Now excluded beside
   `MANUAL-TASKS.md`, with a note that every fixed-path internal file must be listed there.
3. `static/llms.txt` is hand-written and was never regenerated, so the file AI crawlers read still promised a
   browser extension, "40+ client-side tools" and BYOK-only AI. Rewritten, and it now carries an explicit
   "what Trizlink does not do" section.

Also replaced: the JSON-LD `offers: { price: '0' }`, which told every rich-result consumer the product is
free, with the real three-tier `AggregateOffer` (0 / 6 / 18 USD).

🔴 **All three were invisible to the content work and to every green build.** Each was found by grepping
`build/` rather than reading source — the artefact, not the generator.

**Verification, fresh:**

```
yarn typecheck                                   exit 0
yarn build (onBrokenLinks: throw)                exit 0, 25 pages
grep -ro 'TrizLink' docs/ --include=*.md         0
grep -roE '2\.0\.1|June 2026' docs/              0
grep -ric fileshub  (public repo)                0
build/DONE-TASKS.html                            absent
pages canonicalising to root                     1 of 25 (the home page, correctly)
```

**Not done, deliberately:** the landing page's *prose* at `src/pages/index.tsx` is a story surface and lands
after its GATE 4; only its false facts were corrected here.
