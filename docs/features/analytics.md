---
title: Analytics
description: Trizlink records one row per click with country, device, referrer and browser, stores no visitor IP address, and reports refused visits alongside successful ones.
sidebar_position: 4
keywords: [click analytics, link analytics, referrer breakdown, country breakdown, unique clicks, analytics privacy]
---

Trizlink analytics are click reports built from one append-only row per visit. Every time somebody follows a
short link the edge writes a row, and the totals you see on a link are maintained by the database from those
rows — never by a caller, so nobody can inflate a counter, including you. You read them per link at
`/dashboard/links/<id>/analytics` and per workspace at `/dashboard/analytics`.

## On this page

- [What is recorded](#what-is-recorded)
- [The privacy model, and why it is built this way](#privacy)
- [The four breakdowns](#breakdowns)
- [Ranges and history](#ranges)
- [Refused visits are data too](#outcomes)
- [The other analytics surfaces](#other-surfaces)
- [What these numbers are not](#limits)
- [FAQ](#faq)

## What is recorded {#what-is-recorded}

One row per visit, carrying:

| Field | Notes |
|---|---|
| Time | When the visit happened |
| Country | ISO two-letter code, or empty |
| Device | `mobile`, `tablet` or `desktop` |
| Operating system and browser | Read from the user agent |
| Referrer host | The host only, never the full URL |
| Variant | Which A/B arm the visitor was sent down, when the link has a split |
| Visitor hash | A salted hash used to answer "same person again". Never an address |
| Unique | Whether this visitor was new to this link |
| Outcome | Redirected, or the reason it was refused |
| Source | Direct, QR scan, or widget |
| Campaign tags | The `utm_*` values on the short URL itself |
| Domain | Which host the visitor arrived on |

## The privacy model, and why it is built this way {#privacy}

**No visitor IP address is stored anywhere.** What is stored is a SHA-256 hash of a **secret salt**, the
address and the user agent, and the salt lives as a server-side function secret rather than in the database.

That last detail is the whole design, so it is worth spelling out. An unsalted hash of an IP address is not
anonymous: the entire IPv4 space is about four billion values, which any laptop can hash exhaustively in an
afternoon. Anyone who obtained the table could reverse every "hash" back to an address, and the column would
be an address book with extra steps. A salt they do not have makes that impossible. If the salt is ever
absent, Trizlink hashes nothing at all and every click simply counts as non-unique — a worse number, and not
a privacy problem.

**The country is read, never guessed.** It comes from the `cf-ipcountry` header the edge attaches. When that
header is missing the country is left empty rather than estimated, and the two placeholder values the edge
uses for "unknown" and for Tor are rejected rather than stored as if they were places. A geo-targeting rule
that cannot tell where somebody is simply does not match, which is the safe direction to fail: inventing a
country would silently send real visitors to the wrong page.

**Only the referrer host is kept**, never the full referring URL. A full referrer carries a query string, and
query strings carry session tokens. Keeping the host answers "where did this traffic come from" without
storing somebody else's secrets in our table.

## The four breakdowns {#breakdowns}

Country, device, referrer and browser, drawn as ranked bar lists with a table beneath each one. Six categories
in a pie chart cannot be compared by eye and their labels never fit, so there are no pie charts here.

Each carries its own caveat on the page, because each is unreliable in a different way:

- **Country** is resolved from the network address, which a VPN or a corporate proxy gets wrong.
- **Device** is read from what the browser says it is, which it may misreport.
- **Referrer** is missing from most clients, which is what "Direct" really means.
- **Browser** comes from the same self-description as the device.

Operating system is recorded on every click but is not currently surfaced as a breakdown.

## Ranges and history {#ranges}

The range selector offers today, 7, 14, 30 and 91 days. The comparison figure is measured against the window
that *ends* where the current one begins, so "against the previous 14 days" means exactly that and you can
derive it from what is on screen.

How far back you can look is a plan entitlement: **90 days** on Free, **365** on Pro, **730** on Team. The
91-day range refuses on Free, at the control that refused, with the reason. Pasting a longer range into the
URL does not work around it — the request is clamped to what your plan allows and you are told it was.

## Refused visits are data too {#outcomes}

A visit that did not end in a redirect still writes a row, tagged with why:

| Outcome | Meaning |
|---|---|
| `redirected` | The visitor reached the destination |
| `password` | They were asked for a password |
| `expired` | The link's date had passed |
| `capped` | The link's click ceiling was reached |
| `inactive` | The link was switched off |
| `sign_in` | The link required a Trizlink account |

Only redirected rows move a link's click total. The rest are what makes an error rate a real measurement
rather than an invented zero, and they answer questions a success-only log cannot: whether people are hitting
your password screen at all, or arriving at a link that stopped last week.

## The other analytics surfaces {#other-surfaces}

Beyond the overview, the workspace analytics area carries breakdowns, insights and alerts as separate views,
plus **custom dashboards** at `/dashboard/analytics/custom`, **funnels and attribution** at
`/dashboard/analytics/funnels`, **reports** at `/dashboard/analytics/reports` and **traffic alerts** at
`/dashboard/analytics/alerts`.

## What these numbers are not {#limits}

- **Not live.** Figures are fetched when you open the page and again when you reload or change the range.
  Nothing streams in behind you, and there is no realtime subscription anywhere in the product.
- **Not audited.** Click counts are best-effort here and everywhere: a bot inflates one, a link preview
  invents one, a privacy blocker removes one you really got. Strong enough to choose a morning over an
  evening; not strong enough to choose 09:00 over 10:00.
- **Not unlimited.** Tracked clicks per month are **50,000** on Free, **500,000** on Pro and **2,000,000** on
  Team. Past the allowance nothing new is recorded and every link keeps resolving, because a storage limit
  must not break somebody's live links.
- **Not per person.** There is no visitor profile, no cross-site identity and no way to ask who somebody was.
- **Not switched on everywhere by default.** A link can be set not to record clicks at all, and a custom
  domain has its own switch for the same thing.

## FAQ {#faq}

### Do you store my visitors' IP addresses?

No. A salted hash is stored so repeat visits can be recognised, and the salt is a server secret rather than a
database column, so the hash cannot be reversed back to an address.

### How is the country worked out?

It is read from a header the edge attaches, not inferred. When the header is absent the country is left empty
rather than guessed.

### Why do so many clicks say "Direct"?

Because most clients send no referrer at all. That is what Direct means here — not that somebody typed the
address.

### What is a unique click?

A click whose visitor hash had not been seen for that link before. If the hashing salt is unavailable, every
click counts as non-unique rather than being wrongly merged.

### Do QR scans appear here?

Yes, as clicks. They are only distinguishable as scans when **Count scans separately** is on for that link.
See [QR codes](./qr-codes.md#counting-scans).

### Why did my numbers stop rising?

Check the monthly tracked-click allowance for your plan. Past it, clicks stop being recorded while the links
themselves keep working.

### Can I export the raw click rows?

Not from the analytics pages, which show aggregates. The Links list exports the links matching your current
filters as a CSV, using the bulk importer's own columns so the file goes back in as it came out, and
**Settings → Danger zone** exports everything on your account.

## Related

- [Short links](./short-links.md)
- [Tracking and UTM](./tracking-and-utm.md)
- [QR codes](./qr-codes.md)
- [Custom domains](./custom-domains.md)
