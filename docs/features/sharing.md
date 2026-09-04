---
title: Sharing a link
description: One copy control with an honest fallback, and a per-link social card you control. Trizlink has no share modal and no native share sheet, and this page says so.
sidebar_position: 16
keywords: [copy link, share short link, social card, open graph tags, link preview, twitter card]
---

Sharing a Trizlink link means two things: getting the address into your clipboard, and controlling what other
people see when you paste it somewhere. Both are simple, and one of them is worth understanding properly,
because a link preview is the first thing most readers meet.

This page is short, and deliberately so — see [what is not here](#not-here).

## On this page

- [Copying a link](#copying)
- [The social card](#social-card)
- [The cache problem](#cache)
- [What is not here](#not-here)
- [FAQ](#faq)

## Copying a link {#copying}

Copy controls sit beside anything worth copying: a short link in the Links list, a domain's DNS values, a
widget's snippet, a webhook URL, a UTM template's tags, an API key at the moment it is minted.

They all go through one path, so they all behave the same way. The modern clipboard interface is used where
the browser offers it, a selection-based fallback is used where it does not, and where **neither** works the
control says the copy failed and shows you the value to select by hand. It never silently does nothing, which
is the failure mode a copy button usually has.

## The social card {#social-card}

When somebody pastes your short link into a chat app, a social network or a search result, the preview they
see comes from tags on the link. You set them per link, in the **Social card** section of the link form.

| Field | Notes |
|---|---|
| Title | What the card headlines |
| Description | The line under it |
| Image address | **1200 × 630** is the size that survives every platform's crop |
| Card shape | Large image · Small thumbnail · Player · App |
| Site account | The account the page belongs to |
| Author account | The person who wrote it, if that is somebody else |

Three things the form will tell you, and it is easier to read them here first:

- **An image much smaller than 1200 × 630 is refused outright by some platforms** rather than being scaled
  up.
- **Large image needs an image at least 300 px wide**, or X quietly falls back to the small card. Selecting
  large and setting no image gets you the small one without being told by the platform.
- **With no image set at all**, platforms use whatever the destination page declares, or show a text-only
  card. That is often fine; it is just not your choice.

X reads its own tags first and falls back to the general ones. There is a **Where X differs** block for when
it needs to say something different — leave it blank and there is nothing to keep in step.

## The cache problem {#cache}

Every platform caches what it read the first time somebody shared an address. **Changing these fields does not
change a card that is already out there.** The old one keeps being shown until that platform re-reads the
link, which can take days, and Trizlink cannot force it.

The practical consequence: set the card **before** you share the link widely, not after somebody tells you the
preview looks wrong. If a card is already wrong in the wild, most platforms have their own debugging tool that
will re-fetch on request — that is the only reliable lever, and it is theirs, not ours.

## What is not here {#not-here}

Being plain about the absences, because the shape of this feature is smaller than it sounds:

- **There is no share modal.** No panel of platform buttons for X, Facebook, WhatsApp, Telegram, Reddit and
  the rest. Copy the link and paste it where you want it.
- **There is no native share sheet**, on Android or anywhere else. The Android app does not register itself as
  a share target, so Trizlink will not appear when you share a page from another app.
- **There is no share action on a link card** beyond copying it.
- The one exception is the blog on the product site, where a post carries a small row: copy link, X, LinkedIn
  and email. That is a blog affordance, not a product-wide share contract.

## FAQ {#faq}

### How do I share a short link?

Copy it and paste it. There is no share dialog to open.

### Can I share to X or WhatsApp from inside Trizlink?

No. There is no in-app share panel. Copy the address and use the app you want.

### Does Trizlink appear in my phone's share sheet?

No. The Android app does not register as a share target.

### Why does my link preview look wrong after I fixed it?

Because the platform cached the old one when the link was first shared. It updates when that platform
re-reads the address, which can take days. Use that platform's own preview-debugging tool to force a re-fetch.

### What image size should I use?

1200 × 630. Smaller images are cropped unpredictably or refused, and an image under 300 px wide will not
produce a large card on X.

### What gets shown if I set no card at all?

Whatever the destination page declares, or a plain text card. It still works; you just are not choosing it.

### Is anything private ever exposed by a preview?

The card shows only what you put in those fields plus the destination page's own tags. Your workspace,
analytics and other links are not part of it.

## Related

- [Short links](./short-links.md)
- [QR codes](./qr-codes.md)
- [Widgets](./widgets.md)
- [Social publishing](./social-media.md)
