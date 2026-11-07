---
title: "Moving from Linkly to Trizlink"
description: "Move your links from Linkly to Trizlink with a CSV import, see what stays behind, and read the dated prices and features taken from Linkly's own pages."
sidebar_label: "Linkly"
last_update:
  date: 2026-11-07
keywords: ["linkly alternative", "move from linkly", trizlink]
---

A click-tracking shortener with a free plan, capacity add-on packs and a flat unlimited tier. This page is for you if you are on Linkly now and want to see what moving takes. For who each product suits better, read [Trizlink and Linkly](https://trizlink.com/compare/linkly).

## Moving your links across {#steps}

1. **Get your list of links out of Linkly.** Look for an export in your Linkly account. This guide cannot promise one on your plan, so check there first. If there is no export, build the list by hand for the links you still use.
2. **[Create a Trizlink account](/getting-started/create-account).** Sign-in is with Google, and a workspace is made for you.
3. **Shape the list into a CSV.** The [importer](/features/link-organization#import) needs a `target_url` column and also reads `custom_code`, `title`, `description` and `expires_at`. A file can hold 5,000 rows and 2 MB.
4. **Run the import at `/dashboard/links/bulk-import`.** The file is parsed in your browser, and only the last step writes. Every refused row is named with its line number.
5. **Draw new QR codes for anything you print from now on.** See [QR codes](/features/qr-codes). Codes already printed keep pointing at Linkly.

## What does not come with you {#stays}

- **Your old short addresses.** They live on Linkly, so keep that account while people still click them. Trizlink cannot answer for an address on another company's domain.
- **Your click history.** Counting starts again from the first click on the new link. See [analytics](/features/analytics).
- **Your own domain, for now.** You can [add it and prove you own it](/features/custom-domains#not-live), and serving links from it is not switched on, so leave it where it works today.

## The facts, as of 7 November 2026 {#facts}

Prices and features come from Linkly's own pages, and each row links to the page we read. "Not stated" means those pages did not say. <a href="https://linklyhq.com" target="_blank" rel="noopener noreferrer nofollow">Check Linkly on its own site</a>.

| Plan | Price | Note | Source |
|---|---|---|---|
| Free | $0 a month | 100 links a month, 500 clicks a month, 1 custom domain | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Starter | $15 a month | Annual only; 250 links and 2,000 clicks a month | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Pro | $32 a month | Billed annually; 1,000 links, 10,000 clicks, 3 custom domains | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Business | $107 a month | Billed annually; 5,000 links, 50,000 clicks, 10 custom domains | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Unlimited | $833 a month | Billed annually; unlimited links and clicks | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

| Feature | Trizlink | Linkly | Source |
|---|---|---|---|
| Short links with click reports | Yes | Yes | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A link-in-bio page | Yes | Not stated on the pages we checked |  |
| Scheduled social posts | Partly (Drafts, calendar and queue work; publishing is switched off) | Not stated on the pages we checked |  |
| Team members with roles | Yes | Not stated on the pages we checked |  |
| A free plan | Yes | Yes | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Yes (From Starter) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Password on a link | Yes | Yes (From Pro) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Links that expire | Yes | Yes (Time-limited links from Pro) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Yes (Full API access on Free) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Bulk import from a file | Yes | Not stated on the pages we checked |  |
| UTM builder | Yes | Yes (From Starter) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A phone app | Partly (Android only; no iOS app) | Not stated on the pages we checked |  |

Trizlink's own prices are on the [pricing page](https://trizlink.com/#pricing).
