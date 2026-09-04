# Pending tasks — trizlink-docs

**Last Updated:** 2026-09-03
**Fixed path.** Global spec: `~/.claude/rules/pending-tasks.md`. Open work only, ≤ 8 KB. Owner-only work is
`docs/MANUAL-TASKS.md`. On completion: rename `TASK-` → `DONE-` **and move** the entry to `docs/DONE-TASKS.md`.

## ⏳ Open

### TASK-001 — Re-derive all 23 pages against the rebuilt app (the site describes the OLD product)

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

## ✅ Done

Completed entries live in `docs/DONE-TASKS.md`. Nothing is deleted.
