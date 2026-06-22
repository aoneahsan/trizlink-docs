---
title: Browser Extension
description: The TrizLink browser extension for Chrome and Firefox shortens the current tab's URL from your toolbar, with custom aliases, recent links, and QR codes.
sidebar_position: 14
keywords: [trizlink extension, chrome extension, firefox extension, shorten url, manifest v3, browser toolbar, custom alias, chrome identity]
---

The TrizLink browser extension is a Chrome and Firefox add-on, built on Manifest V3 with the WXT framework, that lets you shorten the URL of the current tab directly from your browser toolbar. Open the popup on any page and the current URL is already filled in, ready to become a short link in a single click — with optional aliases, QR codes, and a searchable list of recent links. Signing in syncs your links to your TrizLink account, and the extension uses Chrome Identity for sign-in rather than the Firebase Auth SDK.

## What you can do

From the toolbar popup you can shorten the page you are on, optionally set a custom alias, and immediately copy or display a QR code for the new link. You can browse, search, open, copy, and delete your recent links without leaving the popup, and you can sign in to keep everything synced to your account. The options page gives you broader control over your account, active workspace, feature toggles, popup size, and how many recent links to show.

## Use cases

- While reading an article, you click the toolbar icon and instantly create a short link to share it.
- You set a memorable custom alias for a page you share often, so the link is easy to recognize.
- You need a QR code for the current page on the spot — the popup can display one without opening another tool.
- You revisit and reuse a link you created earlier by searching your recent links in the popup.
- You switch the active workspace from the options page so new links land in the right place for the project you are working on.

## How it works

1. Install the TrizLink extension in Chrome or Firefox and pin it to your toolbar.
2. On first run, a welcome modal asks for your preferences, including auto-copy, QR display, and notifications.
3. Sign in with Chrome Identity to sync your shortened links to your TrizLink account.
4. Open the popup on any page; the current tab's URL is auto-filled, and you can add an optional custom alias of 3–20 characters.
5. Click "Shorten URL" to create the short link, then copy it, view its QR code, or find it in your recent links list.
6. Adjust account, workspace, feature toggles, popup size, and recent-links limit from the options page whenever you like.

## Tips

- Pin the extension so the one-click shorten action is always within reach in your toolbar.
- Turn on auto-copy in the welcome modal or options page if you usually paste the new short link right away.
- Use custom aliases (3–20 characters) for links you share repeatedly so they are easier to remember and recognize.
- Sign in early so your links sync to your account and appear across your devices, not just in the extension.
- Set the recent-links limit on the options page to match how many past links you want quick access to.

## FAQ

### Which browsers are supported?

The extension works in Chrome and Firefox. It is built on Manifest V3 using the WXT framework.

### How does sign-in work?

Sign-in uses Chrome Identity rather than the Firebase Auth SDK. Signing in syncs your shortened links to your TrizLink account.

### Does the popup fill in the URL automatically?

Yes. When you open the popup on a page, the current tab's URL is auto-filled so you can shorten it right away.

### Can I set a custom alias?

Yes. You can add an optional custom alias between 3 and 20 characters before creating the short link.

### What can I do with recent links?

The popup keeps a recent-links list where you can search, open, copy, and delete links, so you can reuse or clean them up quickly.

### What does the options page control?

The options page covers your account, workspace selection, feature toggles, popup size, and the recent-links limit.

### What happens on first run?

A welcome modal appears asking for your preferences around auto-copy, QR display, and notifications, so the extension behaves the way you want from the start.

## Related

- [Short links](/features/short-links)
- [QR codes](/features/qr-codes)
- [Workspaces and teams](/features/workspaces-and-teams)
- [Sharing](/features/sharing)
