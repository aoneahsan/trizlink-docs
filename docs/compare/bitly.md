---
title: "Moving from Bitly to Trizlink"
description: "Move your links from Bitly to Trizlink with a CSV import, see what stays behind, and read the dated prices and features taken from Bitly's own pages."
sidebar_label: "Bitly"
last_update:
  date: 2026-11-07
keywords: ["bitly alternative", "move from bitly", trizlink]
---

The best-known link shortener, sold with QR codes and a link-in-bio page, priced by links per month. This page is for you if you are on Bitly now and want to see what moving takes. For who each product suits better, read [Trizlink and Bitly](https://trizlink.com/compare/bitly).

## Moving your links across {#steps}

1. **Get your list of links out of Bitly.** Look for an export in your Bitly account. This guide cannot promise one on your plan, so check there first. If there is no export, build the list by hand for the links you still use.
2. **[Create a Trizlink account](/getting-started/create-account).** Sign-in is with Google, and a workspace is made for you.
3. **Shape the list into a CSV.** The [importer](/features/link-organization#import) needs a `target_url` column and also reads `custom_code`, `title`, `description` and `expires_at`. A file can hold 5,000 rows and 2 MB.
4. **Run the import at `/dashboard/links/bulk-import`.** The file is parsed in your browser, and only the last step writes. Every refused row is named with its line number.
5. **Draw new QR codes for anything you print from now on.** See [QR codes](/features/qr-codes). Codes already printed keep pointing at Bitly.

## What does not come with you {#stays}

- **Your old short addresses.** They live on Bitly, so keep that account while people still click them. Trizlink cannot answer for an address on another company's domain.
- **Your click history.** Counting starts again from the first click on the new link. See [analytics](/features/analytics).
- **Your own domain, for now.** You can [add it and prove you own it](/features/custom-domains#not-live), and serving links from it is not switched on, so leave it where it works today.

## The facts, as of 7 November 2026 {#facts}

Prices and features come from Bitly's own pages, and each row links to the page we read. "Not stated" means those pages did not say. <a href="https://bitly.com" target="_blank" rel="noopener noreferrer nofollow">Check Bitly on its own site</a>.

| Plan | Price | Note | Source |
|---|---|---|---|
| Free | $0 a month | With ads; 5 links a month, 2 QR codes a month | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Core | $10 a month | Annual only, $120 a year; 100 links a month | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Growth | $29 a month | Billed yearly, $348 a year; 500 links a month | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Premium | $199 a month | Billed yearly, $2,388 a year; 3,000 links a month | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Enterprise | Quote only |  | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

| Feature | Trizlink | Bitly | Source |
|---|---|---|---|
| Short links with click reports | Yes | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A link-in-bio page | Yes | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Scheduled social posts | Partly (Drafts, calendar and queue work; publishing is switched off) | Not stated on the pages we checked |  |
| Team members with roles | Yes | Yes (Multiple users and group permissions on Enterprise) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A free plan | Yes | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes (From Growth) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Password on a link | Yes | Not stated on the pages we checked |  |
| Links that expire | Yes | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Yes (1,000 requests a month on Free) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Bulk import from a file | Yes | Yes (From Growth) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| UTM builder | Yes | Yes (From Core) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A phone app | Partly (Android only; no iOS app) | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

Trizlink's own prices are on the [pricing page](https://trizlink.com/#pricing).
