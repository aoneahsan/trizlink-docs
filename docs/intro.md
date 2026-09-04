---
title: Introduction to Trizlink
description: Trizlink runs short links, bio pages and social posts out of one workspace, with a single analytics layer across all three. What it does, what it does not, and where the limits are.
sidebar_position: 0
slug: /intro
keywords:
  - trizlink
  - link management platform
  - url shortener
  - bio page
  - qr code
  - click analytics
---

Trizlink is a link-management platform that runs your short links, your bio page and your social posts out of
one workspace, so the numbers add up in a single view instead of living in three dashboards you reconcile by
hand. You shorten a URL once, share the short link, and read the clicks it earned. The same workspace holds
the bio page you put in a social profile, the QR code printed on a poster, and the campaign tags that tell
your own analytics where the traffic came from.

This documentation is written to be checked rather than sold. Where a capability is not live yet, the page
says so and stops. Where a number is soft, the page says why. Every product claim here was derived from the
running application on 2026-09-04.

## On this page

- [What Trizlink is for](#what-it-is-for)
- [The feature areas, and where each one stands](#feature-areas)
- [Plans](#plans)
- [How it works underneath](#how-it-works)
- [What Trizlink does not do](#what-it-does-not-do)
- [Next steps](#next-steps)

## What Trizlink is for {#what-it-is-for}

Most people arrive already carrying three tools: a shortener, a bio-link page, and whatever their social
scheduler reports. Nothing joins them, so the question *"which post actually drove the clicks"* never gets a
straight answer. Trizlink puts the three on one thread.

- **Short links.** Turn a long URL into `trizlink.com/<code>`, with an optional custom code, a password, an
  expiry date, a click ceiling, geo and device targeting, or an A/B split.
  See [Short links](./features/short-links.md).
- **Bio pages.** One address holding every link you would otherwise have to choose between, built from
  fifteen block types on three layouts. See [Bio pages](./features/link-in-bio.md).
- **QR codes.** Every short link can be drawn as a scannable code, derived from the URL rather than stored.
  See [QR codes](./features/qr-codes.md).
- **Analytics.** Clicks by country, device, referrer and browser, over a window your plan sets.
  See [Analytics](./features/analytics.md).
- **Workspaces.** Separate tenants with roles, so a client's links and numbers stay their own.
  See [Workspaces and teams](./features/workspaces-and-teams.md).

## The feature areas, and where each one stands {#feature-areas}

| Area | What it does | State |
|---|---|---|
| [Short links](./features/short-links.md) | Custom code, password, expiry, click ceiling, targeting, A/B split | Live |
| [Bio pages](./features/link-in-bio.md) | Fifteen block types, three layouts, one public address | Live |
| [QR codes](./features/qr-codes.md) | Scannable SVG for any short link, optional scan counting | Live |
| [Analytics](./features/analytics.md) | Four breakdowns, five ranges, refused visits recorded too | Live |
| [Custom domains](./features/custom-domains.md) | Add and verify your own domain | **Verification live; serving is not** |
| [Link organisation](./features/link-organization.md) | Folders, labels, collections, CSV import | Live |
| [Tracking and UTM](./features/tracking-and-utm.md) | Pixels, UTM templates, webhooks, conversion beacon | Live |
| [Workspaces and teams](./features/workspaces-and-teams.md) | Roles on every plan; teams and the audit log on Team | Live |
| [Social publishing](./features/social-media.md) | Compose, schedule, publish to connected accounts | Live, plan-gated |
| [Widgets](./features/widgets.md) | Embed a link or a bio page on another site | Live |
| [AI assistance](./features/ai-features-byok.md) | Suggestions, metered per month; your own key removes the limit | Live |
| [Public API](./features/api-access.md) | 18 endpoints at `api.trizlink.com/v1` | Live, plan-gated |
| [Utility tools](./features/utility-tools.md) | A directory of tools hosted on a separate site | Live |
| [Theme](./features/theme-customizer.md) | Eleven appearance axes | Live |
| [Sharing](./features/sharing.md) | Web share modal, native share sheet | Live |

## Plans {#plans}

Trizlink has three plans. The Free plan costs nothing and asks for no card; Pro and Team are paid.

| | Free | Pro | Team |
|---|---|---|---|
| Price, monthly | $0 | $6 | $18 |
| Price, annual | $0 | $5/month | $15/month |
| Short links | 1,000 | 50,000 | Fair use |
| Bio pages, published | 30 | 100 | 500 |
| Tracked clicks per month | 50,000 | 500,000 | 2,000,000 |
| Analytics history | 90 days | 365 days | 730 days |
| Custom domains | 1 | 5 | 25 |
| AI suggestions per month | 50 | 500 | 2,000 |
| Public API | — | Yes | Yes |
| Social publishing | — | Yes | Yes |
| Teams, custom roles, audit log | — | — | Yes |

Annual billing charges ten months for twelve, which is where the $5 and $15 figures come from. Payment is
handled at [aoneahsan.com/payment](https://aoneahsan.com/payment); there is no card form inside the product.

## How it works underneath {#how-it-works}

Trizlink is a web application with an Android build, backed by Supabase on Postgres. Every table carries
row-level security, so a query that forgets to filter by workspace returns nothing rather than somebody
else's rows. Signing in is Google only. On the web that is an ordinary OAuth redirect; on Android it opens
your **system browser** rather than an in-app view, so you are signing in to Google in a window Google
controls.

Short-link redirects are answered at the edge. Clicks are written by one server-side function and by nothing
a browser can reach, and the click totals on a link are maintained by a database trigger — a visitor cannot
increment your counter, and neither can you.

## What Trizlink does not do {#what-it-does-not-do}

- **There is no browser extension**, and none is planned. Shorten from the dashboard, the API, or the CSV
  importer.
- **Custom domains do not serve traffic yet.** Adding a domain and verifying ownership work today; a verified
  domain begins answering requests at cutover. [The custom domains page](./features/custom-domains.md) states
  the boundary in detail rather than describing a finished state.
- **There is no email-and-password sign-up.** Google is the only way in.
- **Expired links are not deleted.** An expired link shows an expiry page until you remove or extend it.
- **Analytics are not a live stream.** Numbers are read when you open the page and again when you reload.
- **Click counts are best-effort, here and everywhere.** Bots inflate a count, a link preview invents one, a
  privacy blocker removes one you actually got. Strong enough to choose a channel; not an audited figure.
- **The utility tools are a directory, not a feature.** They are hosted on a separate site and open in a new
  tab.
- **AI is metered, not free-standing.** Suggestions run on our key up to your plan's monthly allowance;
  supplying your own key removes that limit on every plan, Free included.
- **Your old data did not carry over.** Trizlink was rebuilt on a new database, so links, bio pages, analytics
  history and settings from earlier versions are gone and signing in creates a fresh account. Short links you
  had already shared no longer resolve, including ones printed on a card or encoded in a QR code. The codes
  were not carried over either, so unless someone else has taken one since, you can create the link again and
  ask for the same code — and what is printed works again. See the
  [changelog](./about/changelog.md).

## Next steps {#next-steps}

1. [Create your account](./getting-started/create-account.md) — sign in with Google and meet your first
   workspace.
2. [Quick start](./getting-started/quick-start.md) — a short link, its QR code, a bio page and your first
   analytics read.
3. Browse the feature pages above, or jump to the [FAQ](./guides/faq.md).
