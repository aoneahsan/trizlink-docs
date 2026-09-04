---
title: Browser extension
description: Trizlink does not offer a browser extension. Here is why, what to use instead to shorten a link quickly, and what would have to be true for one to ship.
sidebar_position: 14
keywords: [trizlink browser extension, chrome extension, shorten url quickly, no extension, public api alternative]
---

**Trizlink does not offer a browser extension.** There is no Chrome add-on, no Firefox add-on, and nothing to
install.

An earlier version of this page described one in detail. That extension was never published, and leaving a
tutorial for software nobody can install is worse than saying so plainly. This page stays at the same address
so that anything linking here still works, and answers the question honestly instead.

## On this page

- [Why there is not one](#why-not)
- [Three faster ways to shorten a link](#alternatives)
- [The permission problem](#permissions)
- [What would have to be true for one to ship](#what-it-would-take)
- [FAQ](#faq)

## Why there is not one {#why-not}

Trizlink is built by one developer, and the surfaces were chosen deliberately: web and Android first,
together, verified module by module. An extension is a third store, a third review process and a third
permission model. Shipping it half-finished would be worse than not shipping it, so it is **deferred until
the first two are complete — not cancelled, and not quietly dropped.**

There is a second, more specific reason the old one was not simply carried forward. It authenticated by
sending a raw Google token where the backend expected a different credential entirely, so its cloud mode never
worked at all. Any future extension would be a thin client of the [public API](./api-access.md) rather than a
port of that code.

## Three faster ways to shorten a link {#alternatives}

What an extension is actually for is removing a context switch: you are on a page, you want a short link to
it, and you do not want to copy the address into another tab. That is a real friction and it is worth
solving. It does not require an extension to solve.

### 1. The box on the home page

Paste an address into the box on [trizlink.com](https://trizlink.com). It validates as you type and previews
what the short link will look like. Pressing the button carries the destination through sign-in and opens the
create form with the URL already filled in, so you never navigate the dashboard to find it.

Be clear about what it does not do: it does not create the link from the home page. It gets you to the form
with the work already done.

### 2. The public API

This is the honest answer for anyone who wanted an extension for speed. A workspace-scoped key and a single
`POST /v1/links` creates a link, which means a shell alias, an editor command, a launcher action or a phone
shortcut can each do it in one step — from **outside** the browser as well as inside it. That is genuinely
faster than a toolbar button.

The API is on Pro and Team. See [Public API](./api-access.md).

### 3. Bulk import, when it is not one link

If you want an extension because you are making thirty links, the extension is the wrong tool anyway. Paste
or upload a CSV, map the columns, read the preview, and commit. The preview step is the point — a bad import
of 400 links is not fun to undo. See [Link organisation](./link-organization.md#import).

**Not an option, despite what you may have read elsewhere:** Trizlink does not register itself as an Android
share target, so it will not appear when you share a page from another app, and the app does not scan QR
codes.

## The permission problem {#permissions}

The reason link-shortening extensions are awkward is that the useful version needs to know the address of the
page you are on. Depending on how it is built, that can mean requesting access to **every site you visit** — a
permission that is trivially justified while writing the feature and very hard to justify to somebody reading
the install dialogue.

Narrower designs exist. An extension can ask for the active tab only when you click its icon, which is a much
smaller ask and covers the main use. But narrower designs do less: no context menu on a link you have not
opened, no automatic tagging, no reading the page title for you. Working out which trade is right is the
actual design problem, and it is not one to rush because a competitor has a toolbar button.

## What would have to be true for one to ship {#what-it-would-take}

1. Web and Android complete and verified, because that is the order that was chosen.
2. The public API stable enough to build against, since an extension would be a client of it rather than a
   second implementation.
3. A permission model narrow enough to justify to a store reviewer and to a reader.
4. **Something it can do that the API cannot.** If the answer is only *"it is in the toolbar"*, that is not
   enough.

The last point is the honest one. Convenience features are easy to justify while building and hard to justify
afterwards, when somebody is deciding whether to grant an extension access to every page they open. If one
ships, it will be because it earned that trade.

## FAQ {#faq}

### Is there a Trizlink browser extension?

No. Not for Chrome, not for Firefox, not for any browser. An earlier version of the product had an unpublished
one; it is deferred rather than cancelled.

### Will there ever be one?

Possibly. It is deferred until the web and Android surfaces are complete and until it can do something the API
cannot.

### What is the fastest way to shorten a link without one?

The public API. One `POST` from a shell alias, an editor command or a launcher action, which also works
outside the browser.

### Can I share a page to Trizlink from my phone?

No. The Android app is not registered as a share target.

### Was there ever a published extension?

No. One was built and never published.

### Why keep this page if the feature does not exist?

Because the address is linked from elsewhere, and answering the question is more useful than a 404. Removing a
page does not remove the question.

### Where should I ask for one?

Through the contact form at [trizlink.com/contact](https://trizlink.com/contact). A deferred item moves when
somebody explains what it is blocking.

## Related

- [Public API](./api-access.md)
- [Link organisation](./link-organization.md)
- [Short links](./short-links.md)
- [Utility tools](./utility-tools.md)
