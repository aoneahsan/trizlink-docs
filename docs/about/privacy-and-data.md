---
title: Privacy and data
description: What Trizlink stores, what it deliberately does not store, and why no visitor IP address exists in the database. A plain summary alongside the legal text.
sidebar_position: 1
keywords:
  - trizlink privacy
  - visitor privacy
  - salted hash
  - no ip stored
  - account deletion
  - session recording
---

This is a plain summary of what Trizlink holds and what it deliberately does not. It is not the legal
document: the [Privacy Policy](https://trizlink.com/privacy-policy) governs, alongside the
[Terms](https://trizlink.com/terms), [Cookie Policy](https://trizlink.com/cookie-policy),
[Data Security](https://trizlink.com/data-security) and
[Data Deletion](https://trizlink.com/data-deletion) pages. Where this page and the Privacy Policy differ, the
Privacy Policy wins.

Two groups of people appear below and they are not the same. **You** have an account. **Your visitors** do
not, and never agreed to anything with us — which is why the section about them is the strictest part of
this page.

## On this page

- [What is stored about you](#about-you)
- [What is stored about your visitors](#about-visitors)
- [Why there is no IP address anywhere](#no-ip)
- [Who else sees anything](#third-parties)
- [The Android app's permissions](#permissions)
- [Deleting your account](#deletion)
- [What this page does not claim](#limits)
- [FAQ](#faq)

## What is stored about you {#about-you}

| What | Detail |
|---|---|
| Profile | Your name, email address and avatar, from Google sign-in |
| Your content | Short links, bio pages and their blocks, folders, labels, collections, UTM templates, pixels, widgets, social drafts |
| Preferences | Notification settings, and your workspace choices |
| Session records | Which devices are signed in, so you can revoke one |

There is **no password**, because Google is the only way in and Trizlink never sees one.

[Appearance settings](../features/theme-customizer.md) are held in your browser rather than on your account,
so they are not in the list above at all.

If you add your own AI key, it is stored **on that device** and not on your account. What it does when you
use it is described in [AI assistance](../features/ai-features-byok.md#key-handling).

One reservation worth reading rather than discovering: the paid-plan terms reserve the right to use content
created on a **free** account to improve product features. Content on a paid plan is not used that way
without your consent. It is a right being reserved rather than a description of something running today, and
any change to it appears in the Privacy Policy first.

## What is stored about your visitors {#about-visitors}

When somebody follows one of your short links, one row is written. It holds:

| Field | Detail |
|---|---|
| Time | When the click happened |
| Country | A two-letter code, or nothing |
| Device | `mobile`, `tablet` or `desktop` |
| Operating system and browser | Read from the user agent |
| Referrer **host** | The host only — never the full referring URL |
| Variant | Which A/B arm they were sent down, if the link has a split |
| Visitor hash | A salted hash, described below |
| Outcome | Redirected, or the reason it was refused |
| Source | Direct, QR scan, or widget |
| Campaign tags | The `utm_*` values already on the short URL |

**The country is read, never guessed.** It comes from a header the edge attaches to the request. When that
header is absent the country is empty rather than inferred, and the two placeholder values the edge uses for
*unknown* and for Tor are rejected rather than stored as if they were countries. Guessing would put real
visitors in the wrong country in your reports and, with geo targeting on, send them to the wrong page.

**Only the referrer host is kept.** A full referrer carries a query string, and query strings carry session
tokens belonging to whatever site the visitor came from. Storing the host answers *where did this traffic
come from* without holding somebody else's secrets in our table.

There is no latitude, no longitude, no city, no postcode, no cross-site identity and no visitor profile.

## Why there is no IP address anywhere {#no-ip}

**No visitor IP address is stored.** The raw address is used to compute two things — the country, and a
hash — and then it is gone.

The hash is what identifies a repeat visitor, so that unique clicks mean something and an A/B arm stays
stable for the same person. It is `SHA-256` of a **secret salt**, the address and the user agent, and the
salt lives as a server-side function secret rather than as a column in the database.

That last detail is the whole design, and it is worth understanding rather than taking on trust. An
**unsalted** hash of an IP address is not anonymous: the entire IPv4 space is about four billion values,
which any laptop can hash exhaustively in an afternoon. Anybody who obtained the table could walk every
"hash" back to an address, and the column would be an address book with extra steps. A salt they do not
have makes that impossible.

If the salt is ever unavailable, Trizlink hashes nothing at all and every click counts as non-unique. That is
a worse number, and deliberately not a privacy problem.

## Who else sees anything {#third-parties}

Most providers Trizlink uses are processors: they act on our instruction and are not free to use your data
for their own purposes. The database and authentication, error reporting, file storage, push notifications
and update delivery are all in that category.

**One is not, and it is worth naming plainly. Microsoft Clarity records session interactions, and Microsoft
may use them for its own purposes.** Typed input is masked. That makes Clarity a genuine third-party share
rather than a processor, and it is the one place on this page where the honest answer is *yes*.

Trizlink does not sell your links or your analytics, and no collected data targets the house advertisements
the product shows — those are whatever is scheduled for a slot, with no reference to who is looking at it.

If you use [AI assistance](../features/ai-features-byok.md), the draft text you asked about reaches an AI
provider — OpenAI or Anthropic — through our own server. Nothing is sent unless you press the button.

## The Android app's permissions {#permissions}

The Android app declares **two** permissions: internet access, and an advertising-identifier permission that
no code in the app reads.

It has **no camera permission**, so it cannot scan anything. It has **no location permission**, so it cannot
read where you are — the country in your analytics comes from the network request, not from a device. It has
no access to your contacts, files, microphone, messages or call log, and no permission that could reach any
of them.

## Deleting your account {#deletion}

Request deletion at **Settings → Danger zone**. It is **scheduled with a 30-day window**, not immediate, and
you can cancel during it. The page shows what deletion will actually remove, counted from your own data,
before you confirm.

On the scheduled date the account, its workspaces and their content are removed. Aggregate click counts that
no longer identify anybody are retained.

The product also publishes a request path at
[trizlink.com/data-deletion](https://trizlink.com/data-deletion) and a canonical deletion page at
[trizlink.com/account-deletion](https://trizlink.com/account-deletion).

You can take your data with you first: the Links list exports the links matching your current filters as a
CSV, and the danger-zone page exports everything on your account.

## What this page does not claim {#limits}

- **It is a summary.** It does not list every provider, every retention period or any legal basis. The
  Privacy Policy does.
- **It does not promise that nothing leaves your device.** Trizlink is a hosted product; your links live on a
  server, and so does the AI request you asked for.
- **Analytics are best-effort.** Bots inflate a count, a link preview invents one, a privacy blocker removes
  one you really got. The figures are strong enough to choose a channel and not strong enough to audit.
- **A short link is public by nature.** Anybody with the address can follow it, and a password gate is a
  gate rather than encryption.

## FAQ {#faq}

### Do you store my visitors' IP addresses?

No. The address is used to work out the country and to compute a salted hash, then discarded. The salt is a
server secret, so the hash cannot be reversed back to an address.

### How do you know a visitor's country if you do not keep their address?

The edge attaches a country to the request before it reaches us. When it does not, the country is left empty
rather than guessed.

### Is anything genuinely shared with a third party?

Yes — Microsoft Clarity, which records session interactions with typed input masked and may use them for its
own purposes. Everything else is a processor acting on our instruction.

### Can the Android app see my camera or my location?

No. It declares neither permission. The only permissions are internet access and an advertising identifier
that no code reads.

### What happens to my data when I delete my account?

The account, its workspaces and their content are removed on the scheduled date, 30 days after you ask.
Aggregate counts that identify nobody are kept.

### Can I get my data out first?

Yes. Export your links as a CSV from the Links list, and everything on your account from Settings → Danger
zone.

### Does Trizlink sell my links or analytics?

No.

## Related

- [Analytics](../features/analytics.md)
- [Create your account](../getting-started/create-account.md)
- [AI assistance](../features/ai-features-byok.md)
- [FAQ](../guides/faq.md)
