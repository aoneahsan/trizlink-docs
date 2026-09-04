---
title: Tracking and UTM
description: Attach tracking pixels to Trizlink links, save UTM templates, receive webhooks on ten link and workspace events, and record conversions with a beacon that stores no visitor address.
sidebar_position: 7
keywords: [tracking pixel, utm template, campaign tags, webhook events, conversion beacon, meta pixel, google analytics 4]
---

Tracking in Trizlink is four separate things that share a purpose: **pixels** fire your ad platforms' own tags
when somebody follows a link, **UTM templates** save campaign tags you would otherwise retype, **webhooks**
tell your systems when something happens, and the **conversion beacon** tells Trizlink when a visit turned
into an outcome on your site.

They live under **Dashboard → Developers**: pixels and UTM templates share one page at
`/dashboard/tracking/pixels`, webhooks are at `/dashboard/tracking/webhooks`.

## On this page

- [Tracking pixels](#pixels)
- [What a pixel does to your redirect](#interstitial)
- [UTM templates](#utm)
- [Which campaign tag wins](#precedence)
- [Webhooks](#webhooks)
- [The conversion beacon](#beacon)
- [Limits](#limits)
- [FAQ](#faq)

## Tracking pixels {#pixels}

A pixel is your advertising platform's own tag, rendered by Trizlink when somebody follows a link that
carries it. Nine providers are supported, each validating the shape of its identifier so a mistyped one is
caught when you save it rather than by silence three weeks later.

| Provider | Identifier looks like |
|---|---|
| Meta | 15 or 16 digits |
| Google Analytics 4 | `G-` and ten characters |
| Google Ads | `AW-` and nine to eleven digits |
| TikTok | Twenty characters |
| X | `o` and five characters |
| LinkedIn Insight | Six to eight digits |
| Pinterest | Thirteen digits |
| Snapchat | A UUID |
| Custom | Whatever your provider issues, with your own tag markup |

Each pixel declares which of seven events it cares about: `page_view`, `link_click`, `bio_view`,
`conversion`, `signup`, `purchase` or `custom`. At least one is required, and most accounts start with page
views alone.

A pixel can be attached to individual links or set to attach to all of them. Pausing one keeps its settings
and stops it rendering. Declaring `bio_view` is what attaches a pixel to bio pages — those have no pixel
panel of their own, so the declaration *is* the attachment, and the pixel then renders on every bio page in
the workspace.

Two pixels with the same identifier in one workspace are refused, because they would fire the same tag twice
and double every conversion.

## What a pixel does to your redirect {#interstitial}

This is the consequence nobody expects, so it gets its own section.

**A link carrying an active pixel stops being a redirect.** Without one, following a short link returns a
`301` and the browser moves on. With one, it returns a `200` and a short interstitial page, because a tag has
to *render* somewhere and a redirect renders nothing.

That is a real trade. The pixel works; the visit costs an extra page load and stops being a permanent
redirect a browser can cache. Attach pixels to the links you are actually measuring, not to everything.

The three redirect behaviours side by side are on the [short links page](./short-links.md#redirect-behaviour).

## UTM templates {#utm}

A UTM template saves a set of campaign tags — a name, plus `source` and `medium` (both required) and
optionally `campaign`, `term` and `content` — so a recurring newsletter or ad set is tagged the same way every
time. Small spelling differences are what fragment a report into `newsletter` and `Newsletter`, and a saved
template is the cheapest fix for that.

**A template is a shortcut for typing, not a relationship.** A link does not store which template tagged it,
and a template does not store a usage count. "How many links carry these three values" is counted when you
read the page, by matching source, medium and campaign — which means a link you tagged by hand with the same
convention counts too. Deleting a template changes nothing about the links you already made.

## Which campaign tag wins {#precedence}

Three layers, and the order is deliberate:

1. **A tag already written into the destination URL wins.** If you put `?utm_source=paid` into the destination
   yourself, you meant it. Silently replacing it would move the visit in your own analytics.
2. **The link's default tags fill in whatever is absent.** That is what a default is.
3. **Tags on the short URL itself are what get recorded on the click.** A paid ad appends its own tags when it
   builds the click-through, and those are the marker attribution reads.

A destination Trizlink cannot parse is left untouched rather than dropped — the visitor still gets where they
were going, which beats failing over a query string.

## Webhooks {#webhooks}

Register an endpoint and Trizlink POSTs to it when something happens. Ten events exist:

| Group | Events |
|---|---|
| Links | `link.created`, `link.updated`, `link.deleted`, `link.clicked` |
| Bio pages | `bio.created`, `bio.updated`, `bio.viewed` |
| Workspace | `domain.verified`, `workspace.created`, `member.invited` |

Rules worth knowing before you build against it:

- The endpoint **must be `https://`**. Plain HTTP is refused at save time.
- Each endpoint subscribes to **at least one** event.
- Retries are configurable as **0, 1, 3 or 5** attempts.
- Every delivery is recorded as `pending`, `delivered` or `failed`, so a silent endpoint is visible rather
  than assumed.
- **There is no link-expiry event.** A link stopping because its date passed or its ceiling was reached
  produces a recorded click outcome, not a webhook. If you need to know, poll the link or watch for
  `link.updated` when you change it.

Log the payloads on your side while you wire it up so you can map the fields you receive to your own system.

## The conversion beacon {#beacon}

A pixel tells your ad platform something happened. Nothing tells *Trizlink*. The beacon closes that: a 1×1
GIF you place on your own confirmation or thank-you page, matched to the last short link that visitor
followed using the same salted fingerprint the click row already stores.

No cookie, no script, and — the part that matters — **the same image is returned whatever happens**. A beacon
that answered differently for a matched and an unmatched visitor would be an oracle: anyone could probe it to
find out who had clicked what. It answers identically, always, and records the match server-side or not at
all.

## Limits {#limits}

- Pixels, templates, webhooks and the beacon are workspace-scoped, and editing them needs a role that can
  manage the workspace's content.
- Trizlink does not host or proxy your ad platform's script. A custom pixel's markup is yours, and a blocked
  tag stays blocked.
- A tracking pixel changes the redirect's status code. See [above](#interstitial).
- Webhook payloads are not replayable from the dashboard; the delivery record tells you what happened, and
  retries are what the endpoint gets.

## FAQ {#faq}

### Where are UTM templates? I cannot find a page for them.

They share a page with pixels, at `/dashboard/tracking/pixels`, listed in the sidebar as **Pixels & UTM**.
There is no separate UTM route.

### Does adding a pixel slow my links down?

It changes what they do. A link with an active pixel returns an interstitial page instead of a redirect, so
the visitor sees one extra step. Without a pixel the redirect is unchanged.

### If I delete a UTM template, do my links lose their tags?

No. Tags are copied onto the link when you apply them; the template is only a way of typing them once.

### Why is my template's usage count different from what I expected?

Because it is counted by matching source, medium and campaign at read time rather than by tracking which
links used the template. Links tagged by hand with the same values are included.

### Do webhooks fire when a link expires?

No. Expiry is recorded as a click outcome, not an event. The ten events are listed above.

### Can a webhook endpoint be plain HTTP?

No. `https://` only.

### Does the conversion beacon set a cookie?

No. It matches on the same salted fingerprint the click row already carries, and stores nothing new about the
visitor. See [the analytics privacy model](./analytics.md#privacy).

## Related

- [Analytics](./analytics.md)
- [Short links](./short-links.md)
- [API access](./api-access.md)
- [Widgets](./widgets.md)
