---
title: Social publishing
description: Compose one post, preview it per network and queue it per account. Trizlink's social publishing is built and currently publishes nothing, and this page says why.
sidebar_position: 9
keywords: [social publishing, schedule posts, social composer, connected accounts, post queue, platform limits]
---

Social publishing is where you write one post, see how it will look on each network, and queue it against the
accounts you have connected. The composer, the per-platform previews, the calendar and the per-account queue
are all built.

**Nothing publishes today.** Read the next section before planning around this.

## On this page

- [What is not live yet](#not-live)
- [Which platforms exist](#platforms)
- [The composer](#composer)
- [The queue](#queue)
- [How your tokens are held](#tokens)
- [Limits](#limits)
- [FAQ](#faq)

## What is not live yet {#not-live}

Publishing is behind a platform switch, and that switch is **off**. It cannot be turned on until the outstanding
developer applications exist with the networks themselves — a product cannot post to somebody's account without
being a registered application there.

Two consequences worth stating plainly:

- With no application, no access token can exist, so every queued item stays pending and the interface says
  exactly that rather than pretending to send.
- **The switch fails closed on purpose**, and it is the only switch in the product that does. The others
  default to on, because a failed settings read should not take the platform down. This one defaults to off,
  because a wrong post published under somebody else's name is the one failure here that cannot be undone.

Everything else on this page describes what is built and what it will do. It is not a description of posts
going out today.

## Which platforms exist {#platforms}

Seven platforms are modelled. Four can be connected; three never had an integration at all.

| Platform | Connectable | Publishes | Text ceiling | Visible before the cut |
|---|---|---|---|---|
| X | Yes | **No** | 280 | 280 |
| Facebook Page | Yes | Yes | 63,206 | 477 |
| Instagram | Yes | Yes | 2,200 | 125 |
| LinkedIn | Yes | Yes | 3,000 | 210 |
| TikTok | No | No | 2,200 | 150 |
| YouTube | No | No | 5,000 | 157 |
| Pinterest | No | No | 500 | 50 |

**X connects and reads but will not publish**, and that is a decision rather than a bug. X's free developer
tier authenticates and reads; posting requires their paid tier, which this product does not take. Connecting
X is still useful — it is the account identity — but a publish path will refuse it until that changes.

**TikTok has no scheduling API at all**, so even as a connectable platform it could never accept a scheduled
post.

The two numbers in that table are different questions. The **text ceiling** is where the platform refuses the
post. **Visible** is where the feed truncates the caption. The second is the one that changes how you write.

## The composer {#composer}

One post, seven frames, seven different sets of rules. The preview is not decoration — it is where you find
out that 300 characters is comfortable on LinkedIn and twenty over on X.

You write one body and override it per platform where it matters: X takes its own text, Instagram takes a
first comment, LinkedIn takes an article URL rendered as a card. Media is checked against each platform's own
count, size and format rules before anything is queued.

A draft can be written with AI. That costs one of your monthly allowance, and the remaining count is shown
beside the button rather than discovered by running out. See [AI assistance](./ai-features-byok.md).

## The queue {#queue}

A post to three accounts is **three outcomes**, not one. Each account gets its own row with its own state,
attempts and error, because a single badge over three results is wrong in one direction or the other.

| State | Meaning |
|---|---|
| `pending` | Waiting for its moment |
| `processing` | Being sent |
| `completed` | The platform accepted it, and returned a permalink |
| `failed` | It did not go, with the reason |

Two states you will see on the page are **derived and never stored**: an item is *blocked* when the account it
targets cannot publish, and *overdue* when its moment has passed. Storing either is how a row reads "blocked"
for a week after the account was reconnected — there is always a writer for the failure and rarely one for the
recovery.

The sweep that sends queued items claims each one exactly once. Double-posting is the other failure a person
cannot undo.

## How your tokens are held {#tokens}

An access token is not "your data that you should be able to read back" — it is **a capability to act as you
on somebody else's platform**. So tokens live in their own table with **no client path at all**: no grant for
any signed-in role, no policy, nothing. Even a grant added by accident later would still be refused.

What the interface legitimately needs is the expiry and the scopes, and neither of those is the credential.
Those live on the account row, which you can read. Expiry warnings start **14 days** out, because warning
early is the entire point of the state existing.

## Limits {#limits}

- **Plan-gated to Pro and Team**, enforced server-side. Free has no social publishing.
- Connecting an account is a settings-level permission; writing a post rides the same capability as editing
  links. There is no separate publishing role.
- Per-platform rate ceilings apply on top of everything else, and they are the platforms' numbers, not ours.
- No analytics come back from the platforms. Trizlink records that a post was accepted and its permalink; how
  it performed is on the platform. To measure clicks, put a
  [short link](./short-links.md) in the post.

## FAQ {#faq}

### Can I schedule posts right now?

You can compose, preview and queue. Nothing is sent, because publishing is switched off until the developer
applications exist.

### Which networks will post when it is live?

Facebook Page, Instagram and LinkedIn. X can be connected but will not publish on the free developer tier the
product uses.

### Is Threads supported?

No. The seven platforms are X, Facebook Page, Instagram, LinkedIn, TikTok, YouTube and Pinterest, and only the
first four can be connected.

### Why is the switch off by default rather than on?

Because every other switch in the product fails open and this one must not. A settings read that hiccups
should never cause a post under somebody's name.

### Can Trizlink read my social account?

It holds the connection's token and its scopes. The token is never readable by any browser, including yours,
and the product does not pull your existing posts or your followers.

### What happens when a token expires?

The connection shows as expiring 14 days ahead and then expired. Queued items targeting it are shown as
blocked rather than failing silently, and reconnecting clears it.

### Does this cost anything?

It is part of Pro and Team. There is no separate charge, and no charge from us for a post.

## Related

- [Short links](./short-links.md)
- [AI assistance](./ai-features-byok.md)
- [Analytics](./analytics.md)
- [Sharing](./sharing.md)
