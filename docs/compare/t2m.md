---
title: "Moving from T2M to Trizlink"
description: "Move your links from T2M to Trizlink with a CSV import, see what stays behind, and read the dated prices and features taken from T2M's own pages."
sidebar_label: "T2M"
last_update:
  date: 2026-11-07
keywords: ["t2m alternative", "move from t2m", trizlink]
---

A shortener with a lifetime Basic tier and monthly plans that add domains, passwords, QR codes and an API. This page is for you if you are on T2M now and want to see what moving takes. For who each product suits better, read [Trizlink and T2M](https://trizlink.com/compare/t2m).

## Moving your links across {#steps}

1. **Get your list of links out of T2M.** Look for an export in your T2M account. This guide cannot promise one on your plan, so check there first. If there is no export, build the list by hand for the links you still use.
2. **[Create a Trizlink account](/getting-started/create-account).** Sign-in is with Google, and a workspace is made for you.
3. **Shape the list into a CSV.** The [importer](/features/link-organization#import) needs a `target_url` column and also reads `custom_code`, `title`, `description` and `expires_at`. A file can hold 5,000 rows and 2 MB.
4. **Run the import at `/dashboard/links/bulk-import`.** The file is parsed in your browser, and only the last step writes. Every refused row is named with its line number.
5. **Draw new QR codes for anything you print from now on.** See [QR codes](/features/qr-codes). Codes already printed keep pointing at T2M.

## What does not come with you {#stays}

- **Your old short addresses.** They live on T2M, so keep that account while people still click them. Trizlink cannot answer for an address on another company's domain.
- **Your click history.** Counting starts again from the first click on the new link. See [analytics](/features/analytics).
- **Your own domain, for now.** You can [add it and prove you own it](/features/custom-domains#not-live), and serving links from it is not switched on, so leave it where it works today.

## The facts, as of 7 November 2026 {#facts}

Prices and features come from T2M's own pages, and each row links to the page we read. "Not stated" means those pages did not say. <a href="https://t2mio.com" target="_blank" rel="noopener noreferrer nofollow">Check T2M on its own site</a>.

| Plan | Price | Note | Source |
|---|---|---|---|
| Basic | $5 one time | One payment; static QR codes, level 1 stats | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Standard | $9.99 a month | $89.91 a year on yearly billing | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Pro | $29.99 a month | $269.91 a year on yearly billing | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Premium | $89.99 a month | $809.91 a year on yearly billing; the API tiers | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

| Feature | Trizlink | T2M | Source |
|---|---|---|---|
| Short links with click reports | Yes | Yes | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A link-in-bio page | Yes | Not stated on the pages we checked |  |
| Scheduled social posts | Partly (Drafts, calendar and queue work; publishing is switched off) | Not stated on the pages we checked |  |
| Team members with roles | Yes | Yes (User seats on the Business plans) | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A free plan | Yes | Not stated on the pages we checked |  |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes (From Standard) | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Yes | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Password on a link | Yes | Yes (From Standard) | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Links that expire | Yes | Yes (From Standard) | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Yes (Premium) | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Bulk import from a file | Yes | Yes (From Standard) | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| UTM builder | Yes | Yes (From Standard) | <a href="https://t2mio.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A phone app | Partly (Android only; no iOS app) | Not stated on the pages we checked |  |

Trizlink's own prices are on the [pricing page](https://trizlink.com/#pricing).
