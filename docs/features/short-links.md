---
title: Short links
description: A Trizlink short link is a short address that resolves to a destination you can change, with optional passwords, expiry, click ceilings, geo and device targeting and A/B splits.
sidebar_position: 1
keywords: [short links, url shortener, custom short code, password protected link, link expiry, link targeting, ab split]
---

A Trizlink short link is a short address at `https://trizlink.com/<code>` that resolves to a destination you
control and can change later without reprinting anything. Every link records its own clicks, can be gated
behind a password or a sign-in, can stop working on a date or after a number of clicks, and can send different
visitors to different places based on country, device or an A/B split.

## On this page

- [The address](#the-address)
- [What the form offers](#the-form)
- [Two gates, not one](#gates)
- [Expiry and ceilings](#expiry)
- [Targeting, then the split](#targeting)
- [Campaign tags](#utm)
- [What a visitor actually gets back](#redirect-behaviour)
- [Limits](#limits)
- [FAQ](#faq)

## The address {#the-address}

The string Trizlink hands you, and the string it encodes into a QR code and writes into exports, is
`https://trizlink.com/<code>`. The longer form `https://trizlink.com/l/<code>` also resolves and is a
permanent part of the contract, but it is the explicit route rather than the address you share.

Codes match `^[A-Za-z0-9][A-Za-z0-9_-]{2,63}$`. A generated one is six characters from a 32-symbol lowercase
alphabet with `0`, `O`, `1`, `l` and `I` removed, because a code that needs a particular font to read is a
code that gets mistyped off a poster. Uniqueness is enforced on the lowercased form and is global across the
product, so `Spring26` and `spring26` cannot both exist — nobody could tell those apart out loud anyway.

## What the form offers {#the-form}

`/dashboard/links/new` is one page in ten sections. Only the first is required.

| Section | Holds |
|---|---|
| Destination | The URL to send people to |
| Short code | Your own code, or blank for a generated one, plus the domain |
| Security | Password, and "only signed-in people may follow this" |
| Expiry | A date, a click ceiling, and the message shown when either is reached |
| Targeting | Per-country rules and per-device destinations |
| A/B split | Two or more weighted variants |
| UTM | Default campaign tags applied to the destination |
| QR | Whether scans are counted separately |
| Pixels | Which of the workspace's tracking pixels fire on this link |
| Social card | Title, description and image for a link preview, with an X override |

Links also carry a title, a description, private notes, a folder and a label, and can be switched inactive
without being deleted.

## Two gates, not one {#gates}

A **password** and **require sign-in** look similar and defend against different things, which is why they are
separate switches.

- A **password** protects against the link being forwarded. The visitor lands on an entry page and gives the
  password before Trizlink resolves anything. The password is stored only as a hash, no client role can read
  that column, and it is checked on the server — a comparison performed in the page is a comparison the
  visitor can read.
- **Require sign-in** protects against anyone who does not have a Trizlink account at all. That visitor is
  sent to sign in and comes straight back, which is why it needs no screen of its own.

## Expiry and ceilings {#expiry}

A link can stop for two reasons: a date passes, or a click ceiling is reached. Both show your expiry message
if you wrote one.

Neither deletes the link. An expired link keeps showing its expiry page until you extend it, remove the
ceiling, or delete it yourself. Expiry is also checked **before** the password, because asking somebody for a
password to reach a link that has stopped working is a worse answer than telling them it stopped.

The ceiling is best-effort in the same way every click count is, so treat it as approximate rather than exact.

## Targeting, then the split {#targeting}

Rules are checked in order and the first match wins: country rules, then device destinations, then the A/B
split. Anything matching nothing falls through to the destination in the first section.

Targeting runs before the split on purpose. A geo rule is a statement about *where this visitor goes*; an A/B
arm is a statement about *which of two equivalent destinations*. Running the split first would send half the
traffic away from the country it was aimed at.

There is deliberately **no catch-all geo default**. A default arm would swallow the split, and a link with
both configured would run its experiment on nobody while looking perfectly configured.

A/B assignment is **sticky per visitor**: the same person following the same link twice lands on the same
arm. A random draw would re-roll on every click and the experiment would measure the coin toss rather than
the pages. Weights need not add up to 100.

## Campaign tags {#utm}

A link can carry default `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` and `utm_content` values,
merged into the destination at redirect time. Precedence has three layers, and it matters:

1. **A tag already written into the destination wins.** Somebody who put `?utm_source=paid` in the destination
   meant it, and replacing it would change where their own analytics attribute the visit.
2. **The link's own tags fill in whatever is absent.** That is what "default" means here.
3. **Tags on the short URL itself are what get recorded on the click** — a paid ad appends its own, and that
   is the marker attribution reads.

More: [Tracking and UTM](./tracking-and-utm.md).

## What a visitor actually gets back {#redirect-behaviour}

Three different answers, and the difference is deliberate.

| Situation | Status | Why |
|---|---|---|
| An ordinary link | **301** | A short link's destination is its identity, so the redirect is permanent and caches happily |
| Password, expiry, or sign-in required | **302** | The answer changes the moment somebody types the password or the owner extends the expiry, so it must not be cached |
| The link carries an active tracking pixel | **200** with an interstitial | The pixel's tags have to render on a page, which means a real response rather than a redirect |

The 302 is the one worth understanding. If a password screen were served as a permanent redirect, a visitor
whose browser cached it would keep being sent to the password page after you removed the password. Refusals
are temporary by nature, so they are answered temporarily.

Every one of those outcomes is recorded, including the refusals. See [Analytics](./analytics.md).

## Limits {#limits}

- Short links per workspace: **1,000** on Free, **50,000** on Pro, fair use on Team.
- Tracked clicks per month: **50,000**, **500,000**, **2,000,000**. Over the allowance nothing new is
  recorded and every link keeps resolving — a storage limit must not break somebody's live links.
- Click totals are maintained by the database from the click rows themselves. No caller writes them, which is
  why the number on the list and the number on the analytics page cannot disagree.
- There is no bulk edit of destinations; changes are per link, or through
  the [API](./api-access.md).

## FAQ {#faq}

### What does a short link look like?

`https://trizlink.com/<code>`, where the code is generated or chosen by you. The `/l/<code>` form resolves as
well but is not the address you are handed.

### Can I change the destination after sharing the link?

Yes, and the short address does not change. That is the main reason to use one.

### Can I reuse a code somebody deleted?

Yes, if nothing else has taken it since. Codes are unique among live links, not reserved forever.

### What happens when a link expires?

Visitors see an expiry page carrying your message, if you wrote one. Nothing is deleted, and the visit is
still recorded as a refused one.

### Does a password stop the click being counted?

No. A password prompt is recorded as an outcome of its own, so you can see that people are arriving and being
asked.

### Can two links share a code?

No. Codes are unique case-insensitively across the whole product, including across custom domains.

### Can I turn tracking off for one link?

Yes. A link can be set not to record clicks, and the redirect still works normally.

## Related

- [QR codes](./qr-codes.md)
- [Analytics](./analytics.md)
- [Custom domains](./custom-domains.md)
- [Link organisation](./link-organization.md)
