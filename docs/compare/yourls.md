---
title: "Moving from YOURLS to Trizlink"
description: "Move your links from YOURLS to Trizlink with a CSV import, see what stays behind, and read the dated prices and features taken from YOURLS's own pages."
sidebar_label: "YOURLS"
last_update:
  date: 2026-11-07
keywords: ["yourls alternative", "move from yourls", trizlink]
---

A free, open-source shortener you install on your own server and domain. This page is for you if you are on YOURLS now and want to see what moving takes. For who each product suits better, read [Trizlink and YOURLS](https://trizlink.com/compare/yourls).

## Moving your links across {#steps}

1. **Get your list of links out of YOURLS.** Look for an export in your YOURLS account. This guide cannot promise one on your plan, so check there first. If there is no export, build the list by hand for the links you still use.
2. **[Create a Trizlink account](/getting-started/create-account).** Sign-in is with Google, and a workspace is made for you.
3. **Shape the list into a CSV.** The [importer](/features/link-organization#import) needs a `target_url` column and also reads `custom_code`, `title`, `description` and `expires_at`. A file can hold 5,000 rows and 2 MB.
4. **Run the import at `/dashboard/links/bulk-import`.** The file is parsed in your browser, and only the last step writes. Every refused row is named with its line number.
5. **Draw new QR codes for anything you print from now on.** See [QR codes](/features/qr-codes). Codes already printed keep pointing at YOURLS.

## What does not come with you {#stays}

- **Your old short addresses.** They live on YOURLS, so keep that account while people still click them. Trizlink cannot answer for an address on another company's domain.
- **Your click history.** Counting starts again from the first click on the new link. See [analytics](/features/analytics).
- **Your own domain, for now.** You can [add it and prove you own it](/features/custom-domains#not-live), and serving links from it is not switched on, so leave it where it works today.

## The facts, as of 7 November 2026 {#facts}

Prices and features come from YOURLS's own pages, and each row links to the page we read. "Not stated" means those pages did not say. <a href="https://yourls.org" target="_blank" rel="noopener noreferrer nofollow">Check YOURLS on its own site</a>.

| Plan | Price | Note | Source |
|---|---|---|---|
| Self-hosted | $0 a month | Free and open source; you pay for your own hosting | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

| Feature | Trizlink | YOURLS | Source |
|---|---|---|---|
| Short links with click reports | Yes | Yes | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A link-in-bio page | Yes | Not stated on the pages we checked |  |
| Scheduled social posts | Partly (Drafts, calendar and queue work; publishing is switched off) | Not stated on the pages we checked |  |
| Team members with roles | Yes | Not stated on the pages we checked |  |
| A free plan | Yes | Yes | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes (It runs on your own domain) | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Not stated on the pages we checked |  |
| Password on a link | Yes | Not stated on the pages we checked |  |
| Links that expire | Yes | Not stated on the pages we checked |  |
| Public API | Yes | Yes | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Bulk import from a file | Yes | Not stated on the pages we checked |  |
| UTM builder | Yes | Not stated on the pages we checked |  |
| A phone app | Partly (Android only; no iOS app) | Not stated on the pages we checked |  |

Trizlink's own prices are on the [pricing page](https://trizlink.com/#pricing).
