---
title: "Moving from Bitly to Trizlink"
description: "Export your Bitly links, rename the columns and import them into Trizlink. Why bit.ly addresses and printed codes stay put. Bitly's prices, dated."
sidebar_label: "Bitly"
last_update:
  date: 2026-11-07
keywords: ["bitly alternative", "move from bitly", trizlink]
---

Bitly is the shortener most people already know, and it sells QR codes and a link-in-bio page beside the links, priced by how many links you make a month. If you print codes on packaging and need GTIN support, or your team works through its Shopify, Canva and HubSpot integrations, Bitly is doing a job Trizlink does not try to do. If five links a month on a free account is the wall you keep hitting, Trizlink's free plan starts at 1,000 short links and 30 bio pages, with the social drafts in the same workspace. The side-by-side is on [trizlink.com](https://trizlink.com/compare/bitly).

## Moving your Bitly links {#steps}

1. **Find out whether your plan can export.** Bitly lists bulk import from its Growth plan, so look in your account before planning anything. No export means copying out, by hand, the links that still get clicked; the dead ones can stay behind.
2. **[Sign in to Trizlink with Google](/getting-started/create-account).** You land in a workspace called My Workspace, ready to take links.
3. **Rename the columns.** Whatever Bitly calls the long URL becomes `target_url`, the back-half you chose becomes `custom_code`, and the link's title goes in `title`. The [importer](/features/link-organization#import) reads 5,000 rows and 2 MB per file, so split a big account into several files.
4. **Expect a few codes to bounce.** Codes are unique across all of Trizlink and compared without case, so a back-half somebody else already holds cannot be yours. The check step at `/dashboard/links/bulk-import` names each refused row by line number before anything is written.
5. **Keep printed codes pointing at Bitly.** A code on a box cannot be redirected from here. For anything you print next, [download a new code](/features/qr-codes#download) as SVG for the designer or a 1,024-pixel PNG for the print shop.

## What stays on Bitly {#stays}

- **Every bit.ly address already out in the world.** It resolves on Bitly's domain, and Trizlink cannot answer for it. Keep the account open while those links still get traffic.
- **The click counts behind them.** Your Trizlink links start from zero; [analytics](/features/analytics) counts from the first click.
- **A branded domain.** You can [add it here and prove you own it](/features/custom-domains#not-live), but serving links on it is not switched on, so leave it on Bitly for now.

## The facts, as of 7 November 2026 {#facts}

Every price and feature below was read on Bitly's own pricing page that day, and each row links to it. <a href="https://bitly.com" target="_blank" rel="noopener noreferrer nofollow">Check Bitly on its own site</a> before you decide. Bitly's pages did not say whether it schedules social posts or puts passwords on links, so those rows are left out.

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
| Team members with roles | Yes | Yes (Multiple users and group permissions on Enterprise) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A free plan | Yes | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes (From Growth) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Links that expire | Yes | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Yes (1,000 requests a month on Free) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Bulk import from a file | Yes | Yes (From Growth) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| UTM builder | Yes | Yes (From Core) | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A phone app | Partly (Android only; no iOS app) | Yes | <a href="https://bitly.com/pages/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

Trizlink's plans and prices: [pricing](https://trizlink.com/#pricing).
