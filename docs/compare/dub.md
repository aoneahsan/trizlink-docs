---
title: "Moving from Dub to Trizlink"
description: "Keep Dub's partner payouts, move the other links through its API and a CSV, and switch your scripts to Trizlink's API. Dub's prices, dated."
sidebar_label: "Dub"
last_update:
  date: 2026-11-07
keywords: ["dub alternative", "move from dub", trizlink]
---

Dub is a developer-first link platform, and its distinguishing part is partner and affiliate payouts tied to the links. A team running an affiliate programme through Dub, or building on its API with years of click retention, has no reason to leave. Trizlink is for the person who wants a free plan with a price visible before any trial ends, and a bio page and social drafts next to the links. [The comparison](https://trizlink.com/compare/dub) covers who each suits.

## Moving off Dub {#steps}

1. **Leave the partner programme where it is.** Payouts and the links tied to them are Dub's core, and nothing here replaces them. Move the other links.
2. **Pull the rest through Dub's API.** Dub is built API-first, so the links you want are reachable in code even if your plan has no export button. Write them to a CSV with a `target_url` column.
3. **Keep the passwords and expiry dates.** Dub supports both, and so does the [importer](/features/link-organization#import): fill `password` and `expires_at`, and each link arrives with them set.
4. **[Sign in](/getting-started/create-account) and import** at `/dashboard/links/bulk-import`. Up to 5,000 rows a file.
5. **Point your code at Trizlink's API, if you have Pro or Team.** It has [eighteen endpoints](/features/api-access#endpoints) for links, bio pages, analytics, domains, webhooks and social posts, with keys scoped per workspace.

## What stays on Dub {#stays}

- **dub.sh and custom-domain links.** They resolve on Dub. Trizlink cannot [serve a domain](/features/custom-domains#not-live) yet, only verify it.
- **Click history.** Dub's retention is its own; Trizlink keeps [90 days on Free, 365 on Pro, 730 on Team](/features/analytics#ranges), counted from the first click on the new link.
- **Partner and affiliate data.** It has no place to land here.

## The facts, as of 7 November 2026 {#facts}

Each row comes from Dub's own pricing page as read that day. <a href="https://dub.co" target="_blank" rel="noopener noreferrer nofollow">Check Dub on its own site</a>. The page did not state a bio page, scheduled posts, a free plan, bulk import, a UTM builder or a phone app, so those rows are omitted.

| Plan | Price | Note | Source |
|---|---|---|---|
| Business | Quote only |  | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Advanced | Quote only |  | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Enterprise | Quote only |  | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

| Feature | Trizlink | Dub | Source |
|---|---|---|---|
| Short links with click reports | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Team members with roles | Yes | Yes (10 users on Business) | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Password on a link | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Links that expire | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

Dub's plans run on trials; Trizlink's are priced on its [pricing section](https://trizlink.com/#pricing).
