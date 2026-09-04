---
title: Bio pages
description: A Trizlink bio page is one public address holding every link you would otherwise have to choose between, built from fifteen block types on three layouts, with drafts, passwords and view counts.
sidebar_position: 2
keywords: [bio page, link in bio page, landing page builder, page blocks, bio templates, custom slug, published pages]
---

A bio page is one public address holding every link you would otherwise have to choose between — the single
URL you put in a social profile that only allows one. You build it from blocks, publish it to a slug at
`trizlink.com/<slug>`, and it records its own views the same way a short link records its clicks.

## On this page

- [Layouts, not colour schemes](#layouts)
- [The fifteen blocks](#blocks)
- [Drafts, publishing and the address](#publishing)
- [Who can read it](#privacy)
- [Limits](#limits)
- [FAQ](#faq)

## Layouts, not colour schemes {#layouts}

There are three: **Minimal**, **Portfolio** and **Spotlight**. Each is a different arrangement of the page,
not a different palette — colour comes from whichever theme the visitor is already in, so a page still looks
like itself in light mode and in dark.

The page's own header — display name, tagline, location — belongs to the page rather than to a block, so it
survives deleting every block on it.

## The fifteen blocks {#blocks}

| Group | Blocks |
|---|---|
| Essentials | Link, Heading, Text, Image, Divider |
| Media | Video, Spotify, YouTube |
| Social | Social links, X feed, Instagram feed |
| Capture | Contact form, Email collection |
| Other | Countdown, Custom HTML |

Each block has its own property panel. A link block, for example, carries a title, a subtitle, a URL, an
icon, corner radius, a shadow toggle, a hover style, whether it opens in a new tab and whether its clicks are
counted. A countdown carries a target date, a display format and — because this is the question that actually
bites — whose timezone it counts in: the visitor's, yours, or UTC.

Blocks are rows in the database rather than a blob on the page, so one can be reordered, disabled or counted
without rewriting everything around it.

## Drafts, publishing and the address {#publishing}

A page is a draft until you publish it. Drafts are not public and do not count against your plan's page
allowance, so you can build several and publish the one that works.

The published address is `trizlink.com/<slug>`. That slug shares a single address space with short codes and
with public usernames, resolved in a fixed order: static pages first, then `/l/<code>`, then `/u/<username>`,
then your slug. The guard runs in both directions — a slug cannot take a name a live short link already
holds, and a short code cannot take a slug's. Without it a bio page could permanently shadow somebody's link,
which is a 200 showing the wrong page, and that is worse than an error.

Duplicating a page copies it as a draft with all its blocks. If every address derived from the name is
already taken, the copy is refused and says so rather than inventing a slug you did not choose.

## Who can read it {#privacy}

A stranger reaching your page has no account and is not going to make one to see a list of links, so the page
is served without the app shell and without a sign-in gate. It also carries **no theme control** — the page
belongs to whoever made it, and putting Trizlink's appearance panel on somebody else's page would be our
furniture in their room. It still honours whatever appearance the visitor's own system and stored preferences
set.

Public reads go through a single server-side function. No anonymous database policy exists on any bio table,
which is what stops a password gate from being walked around by reading the blocks directly, and what stops a
view count from being forged by a browser.

You can put a **password** on a page. As with short links, only a hash is stored, no client role can read it,
and it is compared on the server.

View counts work like click counts: an append-only row per view, with the totals on the page maintained by a
database trigger rather than by any caller.

### One limit worth knowing before you rely on it

A bio page is **not prerendered**. The 24 fixed marketing and legal pages are rendered to static HTML at build
time, but a bio page is your data and does not exist when the build runs. It sets its title and description in
the browser instead. That serves a person, and a crawler that runs JavaScript — and not one that does not. If
being indexed by every crawler matters to you, do not depend on the bio page alone for it.

## Limits {#limits}

- Published pages: **30** on Free, **100** on Pro, **500** on Team. Drafts are unlimited.
- Bio pages use the same workspace roles as links. There is no separate bio permission, deliberately: a bio
  page is workspace content governed by the same three verbs as everything else.
- Bio pages are always on `trizlink.com`. A custom domain can be pointed at one in its settings, but
  [custom domains do not serve traffic yet](./custom-domains.md#not-live).
- Blocks that embed a third party — Spotify, YouTube, a social feed — depend on that service being reachable
  from the visitor's network. Trizlink cannot make a blocked embed appear.

## FAQ {#faq}

### What is the difference between a bio page and a short link?

A short link is one address resolving to one destination. A bio page is one address showing a page of many
destinations. They share an address space, so a name can be one or the other, never both.

### How many templates are there?

Three: Minimal, Portfolio and Spotlight. They are layouts; colour follows the visitor's theme.

### Can I change my slug after publishing?

Yes, from the page's settings. The old address stops working immediately, so change it before you print it
rather than after.

### Do drafts count against my plan?

No. The allowance counts published pages only.

### Can I password-protect a bio page?

Yes. The visitor is asked before any block is sent, because the whole page is assembled server-side.

### Does a bio page show up in search results?

Possibly, and less reliably than a normal page. It is rendered in the browser rather than at build time, so
crawlers that do not run JavaScript see very little. Treat search traffic as a bonus, not the plan.

### Can I see which block a visitor pressed?

A link block carries a **Count clicks on this button** switch. Turning it off means that button is missing
from the page report; nothing else about the button changes.

## Related

- [Short links](./short-links.md)
- [Analytics](./analytics.md)
- [Widgets](./widgets.md)
- [Social publishing](./social-media.md)
