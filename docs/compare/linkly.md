---
title: "Moving from Linkly to Trizlink"
description: "Bring Linkly links across and rebuild their country and device rules by hand. Linkly's prices and features, dated."
sidebar_label: "Linkly"
last_update:
  date: 2026-11-07
keywords: ["linkly alternative", "move from linkly", trizlink]
---

Linkly tracks clicks, sells add-on packs for more clicks and links, and has a flat unlimited tier. Link rotators, geo and device redirect rules and public analytics pages are its strengths, and some people prefer buying a pack to moving up a tier. If 500 tracked clicks a month on a free account runs out fast, Trizlink's free plan tracks 50,000, and the links sit beside a bio page and a social calendar. [Trizlink and Linkly](https://trizlink.com/compare/linkly).

## Rules and all, from Linkly {#steps}

1. **Export your links.** Linkly gives full API access on its free plan, so even without an export button you can read your links in code and write them to a CSV.
2. **Note each link's rules before you import.** The CSV carries the destination, code, title, password and expiry. Geo and device rules do not travel in the file.
3. **[Sign in](/getting-started/create-account) and [import](/features/link-organization#import)** at `/dashboard/links/bulk-import`.
4. **Rebuild the rules on each link.** Trizlink has [country rules, device destinations and an A/B split](/features/short-links#targeting), checked in that order with the first match winning. There is no catch-all country default, so leave the main destination as the fallback.
5. **Check the UTM order.** A tag already in the destination wins over the link's own [default tags](/features/short-links#utm). If Linkly appended tags for you, look at one redirect before trusting the reports.

## What stays on Linkly {#stays}

- **Public analytics pages.** Trizlink reports are for the workspace.
- **Linkly addresses and custom domains.** They resolve on Linkly; Trizlink cannot [serve your domain](/features/custom-domains#not-live) yet.
- **The clicks counted so far.** History does not import.

## The facts, as of 7 November 2026 {#facts}

The rows come from Linkly's pricing page as it read that day. <a href="https://linklyhq.com" target="_blank" rel="noopener noreferrer nofollow">Check Linkly on its own site</a>. That page did not state a bio page, scheduled posts, team roles, bulk import or a phone app, so those rows are dropped.

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
| A free plan | Yes | Yes | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Yes (From Starter) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Password on a link | Yes | Yes (From Pro) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Links that expire | Yes | Yes (Time-limited links from Pro) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Yes (Full API access on Free) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| UTM builder | Yes | Yes (From Starter) | <a href="https://linklyhq.com/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

Weigh Linkly's add-on packs against the plans on Trizlink's [pricing section](https://trizlink.com/#pricing).
