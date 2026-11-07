---
title: "Moving from Dub to Trizlink"
description: "Move your links from Dub to Trizlink with a CSV import, see what stays behind, and read the dated prices and features taken from Dub's own pages."
sidebar_label: "Dub"
last_update:
  date: 2026-11-07
keywords: ["dub alternative", "move from dub", trizlink]
---

A developer-first link platform that pairs short links with partner and affiliate payouts. This page is for you if you are on Dub now and want to see what moving takes. For who each product suits better, read [Trizlink and Dub](https://trizlink.com/compare/dub).

## Moving your links across {#steps}

1. **Get your list of links out of Dub.** Look for an export in your Dub account. This guide cannot promise one on your plan, so check there first. If there is no export, build the list by hand for the links you still use.
2. **[Create a Trizlink account](/getting-started/create-account).** Sign-in is with Google, and a workspace is made for you.
3. **Shape the list into a CSV.** The [importer](/features/link-organization#import) needs a `target_url` column and also reads `custom_code`, `title`, `description` and `expires_at`. A file can hold 5,000 rows and 2 MB.
4. **Run the import at `/dashboard/links/bulk-import`.** The file is parsed in your browser, and only the last step writes. Every refused row is named with its line number.
5. **Draw new QR codes for anything you print from now on.** See [QR codes](/features/qr-codes). Codes already printed keep pointing at Dub.

## What does not come with you {#stays}

- **Your old short addresses.** They live on Dub, so keep that account while people still click them. Trizlink cannot answer for an address on another company's domain.
- **Your click history.** Counting starts again from the first click on the new link. See [analytics](/features/analytics).
- **Your own domain, for now.** You can [add it and prove you own it](/features/custom-domains#not-live), and serving links from it is not switched on, so leave it where it works today.

## The facts, as of 7 November 2026 {#facts}

Prices and features come from Dub's own pages, and each row links to the page we read. "Not stated" means those pages did not say. <a href="https://dub.co" target="_blank" rel="noopener noreferrer nofollow">Check Dub on its own site</a>.

| Plan | Price | Note | Source |
|---|---|---|---|
| Business | Quote only |  | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Advanced | Quote only |  | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Enterprise | Quote only |  | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

| Feature | Trizlink | Dub | Source |
|---|---|---|---|
| Short links with click reports | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A link-in-bio page | Yes | Not stated on the pages we checked |  |
| Scheduled social posts | Partly (Drafts, calendar and queue work; publishing is switched off) | Not stated on the pages we checked |  |
| Team members with roles | Yes | Yes (10 users on Business) | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A free plan | Yes | Not stated on the pages we checked |  |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Password on a link | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Links that expire | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Yes | <a href="https://dub.co/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Bulk import from a file | Yes | Not stated on the pages we checked |  |
| UTM builder | Yes | Not stated on the pages we checked |  |
| A phone app | Partly (Android only; no iOS app) | Not stated on the pages we checked |  |

Trizlink's own prices are on the [pricing page](https://trizlink.com/#pricing).
