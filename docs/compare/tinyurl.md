---
title: "Moving from TinyURL to Trizlink"
description: "Move your links from TinyURL to Trizlink with a CSV import, see what stays behind, and read the dated prices and features taken from TinyURL's own pages."
sidebar_label: "TinyURL"
last_update:
  date: 2026-11-07
keywords: ["tinyurl alternative", "move from tinyurl", trizlink]
---

One of the oldest shorteners, with paid tiers for branded domains, editing and bulk links. This page is for you if you are on TinyURL now and want to see what moving takes. For who each product suits better, read [Trizlink and TinyURL](https://trizlink.com/compare/tinyurl).

## Moving your links across {#steps}

1. **Get your list of links out of TinyURL.** Look for an export in your TinyURL account. This guide cannot promise one on your plan, so check there first. If there is no export, build the list by hand for the links you still use.
2. **[Create a Trizlink account](/getting-started/create-account).** Sign-in is with Google, and a workspace is made for you.
3. **Shape the list into a CSV.** The [importer](/features/link-organization#import) needs a `target_url` column and also reads `custom_code`, `title`, `description` and `expires_at`. A file can hold 5,000 rows and 2 MB.
4. **Run the import at `/dashboard/links/bulk-import`.** The file is parsed in your browser, and only the last step writes. Every refused row is named with its line number.
5. **Draw new QR codes for anything you print from now on.** See [QR codes](/features/qr-codes). Codes already printed keep pointing at TinyURL.

## What does not come with you {#stays}

- **Your old short addresses.** They live on TinyURL, so keep that account while people still click them. Trizlink cannot answer for an address on another company's domain.
- **Your click history.** Counting starts again from the first click on the new link. See [analytics](/features/analytics).
- **Your own domain, for now.** You can [add it and prove you own it](/features/custom-domains#not-live), and serving links from it is not switched on, so leave it where it works today.

## The facts, as of 7 November 2026 {#facts}

Prices and features come from TinyURL's own pages, and each row links to the page we read. "Not stated" means those pages did not say. <a href="https://tinyurl.com" target="_blank" rel="noopener noreferrer nofollow">Check TinyURL on its own site</a>.

| Plan | Price | Note | Source |
|---|---|---|---|
| Pro | $9 a month | $108 a year; 125 links a month, 3 branded domains | <a href="https://tinyurl.com/app/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Bulk 50K | $69 a month | $828 a year; 50,000 links a month | <a href="https://tinyurl.com/app/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Enterprise | Quote only |  | <a href="https://tinyurl.com/app/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

| Feature | Trizlink | TinyURL | Source |
|---|---|---|---|
| Short links with click reports | Yes | Yes | <a href="https://tinyurl.com/app/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A link-in-bio page | Yes | Not stated on the pages we checked |  |
| Scheduled social posts | Partly (Drafts, calendar and queue work; publishing is switched off) | Not stated on the pages we checked |  |
| Team members with roles | Yes | Not stated on the pages we checked |  |
| A free plan | Yes | Not stated on the pages we checked |  |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes | <a href="https://tinyurl.com/app/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Not stated on the pages we checked |  |
| Password on a link | Yes | Not stated on the pages we checked |  |
| Links that expire | Yes | Yes | <a href="https://tinyurl.com/app/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Not stated on the pages we checked |  |
| Bulk import from a file | Yes | Yes (Bulk 50K plan) | <a href="https://tinyurl.com/app/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| UTM builder | Yes | Not stated on the pages we checked |  |
| A phone app | Partly (Android only; no iOS app) | Not stated on the pages we checked |  |

Trizlink's own prices are on the [pricing page](https://trizlink.com/#pricing).
