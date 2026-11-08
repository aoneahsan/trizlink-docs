---
title: "Moving from Short.io to Trizlink"
description: "Move links off Short.io while its custom domains keep serving the old ones, and set device rules again. Short.io's prices and features, dated."
sidebar_label: "Short.io"
last_update:
  date: 2026-11-07
keywords: ["short.io alternative", "move from short.io", trizlink]
---

Short.io puts custom domains and click reports on every plan, the free one included. If five custom domains and commercial use on a free account is the reason you signed up, or you need deep links into installed apps and a 404 redirect on your own domain, Short.io is the better fit today. Trizlink suits someone who wants a password or an expiry date on a link without paying for it, and who wants the bio page and social drafts reading the same click reports as the links. Read [Trizlink and Short.io](https://trizlink.com/compare/short-io) for the full picture.

## Bringing Short.io links over {#steps}

1. **Decide which domain's links to move.** On Short.io every link lives on one of your domains. Trizlink links live at `trizlink.com/<code>` for now, so a move means new addresses, and the old ones must keep working where they are.
2. **Export from Short.io.** Its pricing page lists bulk import; check your account for the matching export before you build a list by hand.
3. **[Sign in with Google](/getting-started/create-account)** and keep the CSV open beside the [column list](/features/link-organization#import): `target_url` is required, and `custom_code`, `title`, `description`, `expires_at` and `password` are read if present.
4. **Put the Pro-only settings back.** On Short.io, passwords and expiry start at Pro. Here they are columns in the file, so add them where you want them before importing.
5. **Recreate device rules by hand.** If a link sent iPhones and Android phones to different places, set [device destinations](/features/short-links#targeting) on the new link. App deep links are not something Trizlink offers.

## What stays on Short.io {#stays}

- **Your custom domains and everything on them.** Trizlink can [prove you own a domain](/features/custom-domains#not-live) but cannot serve links from it yet, so the domain stays pointed at Short.io.
- **Short.io "posts".** They are its bio feature; rebuild one as a [bio page](/features/link-in-bio#blocks) if you used it.
- **Past clicks.** They stay in Short.io's reports.

## The facts, as of 7 November 2026 {#facts}

Prices and features as Short.io's own pages showed them that day, one source link per row. <a href="https://short.io" target="_blank" rel="noopener noreferrer nofollow">Check Short.io on its own site</a>. Its pages did not mention scheduled posts, a UTM builder or a phone app, so those rows are dropped.

| Plan | Price | Note | Source |
|---|---|---|---|
| Free | $0 a month | 5 custom domains, 1,000 branded links, 50,000 tracked clicks a month | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Hobby | $5 a month | As shown in the plan table; annual billing saves 17% | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Pro | $18 a month | As shown in the plan table | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Team | $48 a month | As shown in the plan table; unlimited users | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Enterprise | $148 a month | As shown in the plan table | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

| Feature | Trizlink | Short.io | Source |
|---|---|---|---|
| Short links with click reports | Yes | Yes | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A link-in-bio page | Yes | Yes (Called posts) | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Team members with roles | Yes | Yes (Unlimited users from Team) | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A free plan | Yes | Yes | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| QR codes | Yes | Yes | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Password on a link | Yes | Yes (From Pro) | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Links that expire | Yes | Yes (From Pro) | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Yes | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Bulk import from a file | Yes | Yes | <a href="https://short.io/pricing" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

Trizlink's own numbers are on [its pricing section](https://trizlink.com/#pricing).
