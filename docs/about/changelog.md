---
title: Changelog
description: Notable changes to Trizlink and to this documentation site, latest first. Version 2.13.0 rebuilt the product on a new database and did not carry old data across.
sidebar_position: 2
keywords:
  - trizlink changelog
  - trizlink 2.13.0
  - trizlink rebuild
  - data reset
  - release notes
---

Notable changes to Trizlink and to the documentation on this site, latest first. The in-app *What's new* and
the Play Store release notes are the product's own record; this page is the version you can link to.

## On this page

- [2.13.0 — the rebuild](#v2-13-0)
- [Documentation, 2026-09-04](#docs-2026-09)
- [Documentation, 2026-06-22](#docs-2026-06)

## 2.13.0 — the rebuild {#v2-13-0}

**Released 2026-08-31.** The current version.

### Your Trizlink data was reset

**Trizlink was rebuilt on a new database. Links, bio pages, analytics history and settings from earlier
versions did not carry over, and signing in creates a fresh account.**

**Short links you had already shared no longer resolve.** That includes anything printed on a card, encoded
into a QR code, or posted somewhere you cannot edit.

This was deliberate, not a fault. It is stated here first, and plainly, because an unannounced wipe looks
exactly like a catastrophic bug — and a reader who concluded that would be right to.

Carrying the old codes across would have meant keeping a second database alive indefinitely, serving links
whose owners no longer have accounts. That was decided against rather than carried quietly forever.

**What you can do about it.** The old codes were not carried over either, so unless somebody else has taken
one since, the address is free. Create the link again, ask for the same code, and what is printed works
again.

### New, with no counterpart in the previous version

- **Funnels and segments.** The previous version had the services behind them and no way in — no page, no
  route, no component. This is the first build where you can use them.
- **Scheduled reports.**
- **Per-block click counts on a bio page** — which button people actually pressed, rather than only the page
  total.
- **One appearance control carrying every axis**, applied before the first paint. See
  [Theme control](../features/theme-customizer.md).

### Rebuilt — you had these before

- **Bio pages.** The layouts, the fifteen block types and the live preview are new.
- **Workspaces, teams and invitations.** Roles are on every plan; teams and the audit log are a Team-plan
  capability. See [Workspaces and teams](../features/workspaces-and-teams.md).
- **Custom domains, tracking pixels, UTM templates and webhooks.**
- **A public API** — a new API against a new database. See [Public API](../features/api-access.md).
- **Social publishing.** Composing and scheduling are rebuilt; **publishing does not deliver yet**. See
  [Social publishing](../features/social-media.md).
- **Traffic alerts.**

### True of the whole release

- Supabase and Postgres replace Firebase and Firestore, with row-level security on every table.
- The whole product works on a phone, not only on a desktop, and every screen is keyboard-operable and
  screen-reader labelled from 320px up.
- A Free plan of 1,000 short links, 30 bio pages, 30 members, 50,000 tracked clicks a month and 90 days of
  history, with no card. Pro and Team are the paid plans. See [Introduction](../intro.md#plans).
- Notifications are opt-in and off until you switch them on. Trizlink sends no marketing pushes.
- Product analytics include session recording through Microsoft Clarity, which masks anything you type into
  a field. See [Privacy and data](./privacy-and-data.md).

### Not in this release

- **No browser extension.** One was built and never published; it is **deferred, not cancelled**. See
  [Browser extension](../features/browser-extension.md).
- **Custom domains verify but do not serve yet.** See [Custom domains](../features/custom-domains.md).
- **Social publishing does not post.** The composer, previews, calendar and queue are built and the platform
  switch is off.

## Documentation, 2026-09-04 {#docs-2026-09}

Every page on this site was re-derived against the rebuilt application's own source, because
the previous version described a product that no longer existed. The corrections were substantial rather than
cosmetic — the stack, the plan set, the redirect behaviour, the analytics privacy model, three page subjects
that had changed shape entirely, and one that describes a feature which does not exist and says so.

## Documentation, 2026-06-22 {#docs-2026-06}

The documentation site launched at `docs.trizlink.com` with the first version of every page.

Those pages described Trizlink as it stood before the rebuild. They are superseded by the 2026-09-04
re-derivation above and are kept in this list as history, not as a description of the product.
