---
title: Frequently asked questions
description: Short answers to what people actually ask about Trizlink — plans, sign-in, custom domains, the missing browser extension, AI metering, the API and what happened to old links.
sidebar_position: 1
keywords:
  - trizlink faq
  - trizlink pricing
  - is trizlink free
  - trizlink google sign in
  - trizlink browser extension
  - trizlink data reset
---

Short answers, each pointing at the page that owns the detail. If you are new, start with the
[Introduction](../intro.md).

Several answers here are *no*. That is the point of the page — the things Trizlink does not do are the
things worth knowing before you build a workflow on it.

## On this page

- [Plans and accounts](#plans)
- [My old links stopped working](#the-reset)
- [Links and bio pages](#links)
- [Custom domains](#domains)
- [Organising and teams](#teams)
- [Analytics and privacy](#analytics)
- [AI, the API and social](#developers)
- [Things Trizlink does not have](#not-there)

## Plans and accounts {#plans}

### Is Trizlink free?

There is a Free plan that costs nothing and asks for no card: 1,000 short links, 30 bio pages, 30 members,
50,000 tracked clicks a month and 90 days of analytics history. **Pro is $6 a month and Team is $18**, and
annual billing charges ten months for twelve. The full table is in the
[Introduction](../intro.md#plans).

### How do I sign in?

With Google, and only with Google. There is no email-and-password option, so the password-reset and
email-verification routes redirect to the sign-in page. See
[Create your account](../getting-started/create-account.md).

### Can I use Trizlink on my phone?

Yes, in a mobile browser or through the
[Android app](https://play.google.com/store/apps/details?id=com.trizlink.app).

### What is a workspace?

The tenant that owns your links, bio pages, domains and analytics. You can run several — one per client or
brand — under one account. See [Workspaces and teams](../features/workspaces-and-teams.md).

## My old links stopped working {#the-reset}

### Why do my old short links no longer resolve?

Because Trizlink was rebuilt on a new database, and links, bio pages, analytics history and settings from
earlier versions did not carry over. Signing in creates a fresh account. This was deliberate, and it is
covered properly in the [changelog](../about/changelog.md#v2-13-0).

### Can I get a printed link working again?

Usually, yes. The old codes were not carried over either, so unless somebody else has taken one since, the
address is free: create the link again and ask for the same code.

## Links and bio pages {#links}

### What does a short link look like?

`https://trizlink.com/<code>`. The longer `/l/<code>` form also resolves, but it is not the address you are
handed. See [Short links](../features/short-links.md).

### Can I change a destination after sharing the link?

Yes, and the short address does not change.

### What happens when a link expires?

Visitors see an expiry page carrying your message. **Expired links are not deleted** — you remove them when
you want to.

### Can I password-protect a link?

Yes, and separately you can require a Trizlink account. They defend against different things: a password
protects against forwarding, and requiring sign-in protects against anyone with no account at all.

### Can I download a link's QR code?

**No.** The code is drawn as an SVG in the page; save it through your browser or screenshot it. The only
control is the error-correction level. See [QR codes](../features/qr-codes.md).

### How many bio page templates are there?

Three — Minimal, Portfolio and Spotlight — and they are layouts rather than colour schemes. See
[Bio pages](../features/link-in-bio.md).

## Custom domains {#domains}

### Can I use my own domain for short links?

**Not yet.** You can add a domain and verify that you own it today. **Serving traffic on a verified domain is
not live**, and a verified domain does not answer requests until it is. See
[Custom domains](../features/custom-domains.md#not-live).

### Why was my apex domain rejected?

Because the setup requires a `CNAME`, and an apex domain cannot carry one. Use a subdomain such as
`links.example.com`.

## Organising and teams {#teams}

### Are there folders, or only labels?

Both, and a third thing. A **folder** is exclusive — a link lives in one. A **label** cuts across folders,
one per link. A **collection** is a shortlist a link can join without moving. See
[Link organisation](../features/link-organization.md).

### What roles can I give someone?

Owner, admin, member and viewer. There is no "editor" — the role that creates and edits links is called
member. Roles are on every plan, including Free.

### Do I need a paid plan to work with other people?

No. Members, roles and invitations are on Free, up to 30 members. **Teams and the audit log** are what the
Team plan adds.

### Can I import links from a spreadsheet?

Yes — up to 2 MB and 5,000 rows, in eight recognised columns. The file is parsed in your browser and never
uploaded, and a bad row is named with its line number rather than quietly repaired.

## Analytics and privacy {#analytics}

### What can I break clicks down by?

Country, device, referrer and browser. Operating system is recorded but not currently shown as a breakdown.
See [Analytics](../features/analytics.md).

### Are the numbers live?

No. They are fetched when you open the page and again when you reload or change the range. There is no
streaming feed.

### Are click counts exact?

No, and nobody's are. Bots inflate a count, a link preview invents one, a privacy blocker removes one you
really got. Strong enough to choose a channel; not an audited figure.

### Do you store my visitors' IP addresses?

**No.** The address is used to compute the country and a salted hash, then discarded — and the salt is a
server secret, so the hash cannot be walked back to an address. See
[Privacy and data](../about/privacy-and-data.md#no-ip).

### Is anything shared with a third party?

One thing: Microsoft Clarity, which records session interactions with typed input masked and may use them
for its own purposes. Everything else is a processor. Trizlink does not sell your links or analytics.

### How do I delete my account?

**Settings → Danger zone.** Deletion is scheduled with a 30-day window you can cancel inside.

## AI, the API and social {#developers}

### Do I need my own AI key?

No. Suggestions run on our key at your plan's monthly allowance — 50 on Free. **Your own key removes that
limit on every plan, Free included.** See [AI assistance](../features/ai-features-byok.md).

### What can the AI actually do?

Draft a bio tagline, draft a social post, and read the figures already on your analytics page. There is no
image generation and no hashtag generator.

### Is there an API?

Yes — 18 endpoints at `https://api.trizlink.com/v1`, on **Pro and Team**. Free has no API access and no key
allowance. See [Public API](../features/api-access.md).

### I have `links:write`, so why can I not delete a link?

Because deletion needs `links:delete` as well. A destructive permission is separate from the scope and is
never implied by write access.

### Can I schedule social posts?

You can compose, preview and queue them. **Nothing is published yet** — the platform switch is off until the
outstanding developer applications exist, and it fails closed on purpose, because a wrong post under
somebody's name cannot be undone. See [Social publishing](../features/social-media.md#not-live).

## Things Trizlink does not have {#not-there}

### Is there a browser extension?

**No**, and none is planned for now. The [browser extension page](../features/browser-extension.md) explains
why and gives three faster ways to shorten a link.

### Can I share to X or WhatsApp from inside Trizlink?

No. There is no in-app share panel and no native share sheet — Trizlink does not register as an Android
share target either. Copy the link and paste it. What you *can* control is the preview people see, on the
[sharing page](../features/sharing.md).

### Are the utility tools part of Trizlink?

No. That page is a directory of 48 tools hosted on ZTools, a separate product. Trizlink's own tools suite was
retired in July 2026. See [Utility tools](../features/utility-tools.md).

### Does my theme follow me to another device?

No. Appearance settings live in the browser you set them in, not on your account.

## Still stuck?

Browse the feature pages from the [Introduction](../intro.md), or use the
[contact page](https://trizlink.com/contact) on the product site.
