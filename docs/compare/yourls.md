---
title: "Moving from YOURLS to Trizlink"
description: "Pull links from your own YOURLS database into a Trizlink CSV, and keep the server up until traffic drops. YOURLS facts, dated."
sidebar_label: "YOURLS"
last_update:
  date: 2026-11-07
keywords: ["yourls alternative", "move from yourls", trizlink]
---

YOURLS is free, open-source software you install on your own server and domain. You control every row of data, you can write plugins, and there is no subscription at all; for someone who wants exactly that, it is the right tool. Trizlink is for the person who no longer wants to run a server, patch it and keep its certificate alive, and who wants a bio page, a team and social drafts to come with the shortener. See [Trizlink and YOURLS](https://trizlink.com/compare/yourls).

## Moving off your own YOURLS server {#steps}

1. **Query your own database.** YOURLS runs on your server, so the links are rows you already hold. Pull the destination and keyword for each link you want to keep.
2. **Turn the rows into a CSV.** Keyword goes in `custom_code` and destination in `target_url`; the [importer](/features/link-organization#import) also reads `title`. Five thousand rows a file.
3. **[Sign in to Trizlink with Google](/getting-started/create-account).** Nobody on your team needs a server login any more, only a Google account.
4. **Import, and watch for keywords that are taken.** Codes are unique across all of Trizlink and compared without case, so a short keyword like `go` may already belong to someone. Those rows are named at the check step; pick new codes for them.
5. **Leave the server running until traffic drops.** Your domain still points at YOURLS, and every old link depends on it.

## What stays on YOURLS {#stays}

- **Your domain and every link on it.** Trizlink can [verify the domain](/features/custom-domains#not-live) but cannot serve links on it yet, so the server keeps answering.
- **Plugins.** Whatever you wrote for YOURLS has no equivalent here.
- **Your click log.** It is in your database, and it stays there.

## The facts, as of 7 November 2026 {#facts}

YOURLS has no price list because it costs nothing; the rows below come from its own site as read that day. <a href="https://yourls.org" target="_blank" rel="noopener noreferrer nofollow">Check YOURLS on its own site</a>. Its pages did not state a bio page, scheduled posts, team roles, QR codes, passwords, expiry, bulk import, a UTM builder or a phone app. Plugins may add some of these, but the rows are left out because the site does not say so.

| Plan | Price | Note | Source |
|---|---|---|---|
| Self-hosted | $0 a month | Free and open source; you pay for your own hosting | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

| Feature | Trizlink | YOURLS | Source |
|---|---|---|---|
| Short links with click reports | Yes | Yes | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| A free plan | Yes | Yes | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Your own domain | Partly (You can prove you own it; serving links from it is not switched on) | Yes (It runs on your own domain) | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |
| Public API | Yes | Yes | <a href="https://yourls.org/" target="_blank" rel="noopener noreferrer nofollow">Source</a> |

Trizlink is a paid product past its free plan; the plans are on the [pricing section](https://trizlink.com/#pricing).
