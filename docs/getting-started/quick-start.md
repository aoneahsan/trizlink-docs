---
title: Quick start
description: Create your first Trizlink short link, draw its QR code, publish a bio page and read the click breakdowns, with the limits of each step stated as you go.
sidebar_position: 2
keywords:
  - trizlink quick start
  - create short link
  - first bio page
  - shorten url
  - read click analytics
---

This walks you from a signed-in account to a working short link, a scannable QR code, a published bio page and
your first analytics read. It takes about five minutes and assumes you have already
[created your account](./create-account.md).

## On this page

- [1. Create a short link](#step-1)
- [2. Draw its QR code](#step-2)
- [3. Publish a bio page](#step-3)
- [4. Read the clicks](#step-4)
- [5. What to set up next](#step-5)
- [FAQ](#faq)

## 1. Create a short link {#step-1}

1. Go to **Dashboard → Links** and press **New link**, which opens the full-page form at
   `/dashboard/links/new`.
2. Paste your destination URL.
3. Leave the short code blank to get a generated one, or type your own.
4. Save.

The address you copy is `https://trizlink.com/<code>`. The form has ten sections — Destination, Short code,
Security, Expiry, Targeting, A/B split, UTM, QR, Pixels and Social card — and every one after the first two is
optional, so a link with only a destination is a complete link.

A generated code is six characters drawn from a 32-symbol alphabet with `0`, `O`, `1`, `l` and `I` removed,
because a short link's job is to survive being read off a poster and typed into a different device. Codes are
unique case-insensitively across the whole product, so `Spring26` and `spring26` cannot both exist.

Full field reference: [Short links](../features/short-links.md).

## 2. Draw its QR code {#step-2}

Open the link's **QR** section. The code is drawn from the short URL as an SVG, and nothing about it is
stored — which is what stops it from ever disagreeing with the link.

The one control is the error-correction level: **L**, **M** (the default), **Q** or **H**. Higher correction
survives more damage and makes the code denser.

There is **no download button**. Save the code the way you save any image in your browser, or screenshot it.
More, including what counting scans costs you: [QR codes](../features/qr-codes.md).

## 3. Publish a bio page {#step-3}

1. Go to **Dashboard → Bio pages** and create a page.
2. Pick a layout: **Minimal**, **Portfolio** or **Spotlight**. These are three different shapes, not three
   colour schemes — colour comes from whichever theme the visitor is in.
3. Add blocks. There are fifteen types, from a plain link button to a countdown, an email capture form or an
   embedded video.
4. Set the slug. The page publishes to `trizlink.com/<slug>`.
5. Press **Publish**.

A page stays a draft until you publish it, and drafts do not count against your plan's page allowance. Your
slug shares one address space with short codes, so a name already used by a link is refused rather than
quietly shadowing it. Detail: [Bio pages](../features/link-in-bio.md).

## 4. Read the clicks {#step-4}

Open `/dashboard/analytics` for the workspace, or a single link's analytics from the Links list.

You get clicks over time plus four breakdowns: **country**, **device**, **referrer** and **browser**. The
range selector offers today, 7, 14, 30 and 91 days, and the 91-day range needs a plan whose history window
reaches that far.

Two things to know before you read a number:

- **This is not a live feed.** Figures are fetched when you open the page and again when you reload or change
  the range. Nothing streams in behind you.
- **Click counts are best-effort, here and everywhere.** Bots inflate a count, a link preview invents one, a
  privacy blocker removes one you really got. Treat the shape as reliable and the last digit as not.

Detail, including exactly what is stored per click: [Analytics](../features/analytics.md).

## 5. What to set up next {#step-5}

- Add a domain you own, and verify it — [Custom domains](../features/custom-domains.md). Read that page's
  limits section first: verification works today, serving does not.
- Group links with folders and labels, or import a spreadsheet —
  [Link organisation](../features/link-organization.md).
- Tag campaigns, attach a pixel, or receive webhooks —
  [Tracking and UTM](../features/tracking-and-utm.md).
- Invite people and give them roles — [Workspaces and teams](../features/workspaces-and-teams.md).

## FAQ {#faq}

### Do I need to install anything?

No. Trizlink runs in a browser. The
[Android app](https://play.google.com/store/apps/details?id=com.trizlink.app) is optional, and there is no
browser extension.

### How long do short links last?

Indefinitely, unless you set an expiry date or a click ceiling. Neither deletes the link — an expired link
shows an expiry page until you extend or remove it.

### Can I change a link's destination later?

Yes. Edit the link; the short address stays the same while the destination changes. That is one reason the
redirect is answered fresh rather than cached forever by every visitor.

### Are there limits on links and clicks?

Yes. The Free plan allows 1,000 short links and 50,000 tracked clicks a month; Pro allows 50,000 links and
500,000 clicks; Team is fair use on links with 2,000,000 clicks. Going over the click allowance stops new
clicks being recorded — it never stops your links working.

### Why is my new link's analytics page empty?

Because it has no history yet. A link created a minute ago has nothing to show, and the page says so rather
than drawing a chart of zeroes.

### Where does everything live after setup?

Under **Dashboard**: Links, Bio pages, Analytics, Social, Developers (API keys, webhooks, pixels, widgets,
tools), Workspace and Account.
