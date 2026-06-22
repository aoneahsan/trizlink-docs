---
title: Sharing
description: TrizLink sharing opens an in-app social share modal on the web and the OS share sheet on mobile, sharing only public URLs like short links and bio pages.
sidebar_position: 16
keywords: [share links, social sharing, share modal, copy link, web share, capacitor share, share short link, share qr code]
---

Sharing in TrizLink is a single, consistent contract for getting your public links in front of others: on the web, clicking Share opens an in-app share modal with social buttons plus copy-link, and on the native mobile app it opens your device's OS share sheet. The same Share action behaves predictably wherever you use it, so you never have to guess what happens when you click it. Only public URLs — like short links and public bio pages — are ever shared, never private workspace data, keeping the behavior safe by design.

## What you can do

You can share a short link, a public bio page, or a QR code's URL straight from the places you already work. On the web, the in-app modal gives you buttons for X, Facebook, LinkedIn, WhatsApp, Telegram, Reddit, and Email, plus a copy-link option for everything else. On the mobile app, the native OS share sheet hands the link to whatever apps you have installed. Share is wired into the home footer, the dashboard top bar, each link card, and the QR code display.

## Use cases

- You finish creating a short link and tap Share on its card to post it to LinkedIn or send it over WhatsApp.
- You want to send your public bio page to a contact and use the copy-link option to paste it into a chat.
- On your phone, you open the native share sheet to send a link to any installed app in one step.
- You share the URL behind a QR code directly, without first downloading and re-uploading the code image.
- You grab the Share action from the dashboard top bar to quickly distribute a link while reviewing your account.

## How it works

1. Click or tap Share from the home footer, dashboard top bar, a link card, or the QR code display.
2. On the web, an in-app share modal opens with social buttons and a copy-link option.
3. Pick a social platform — X, Facebook, LinkedIn, WhatsApp, Telegram, Reddit, or Email — or copy the link.
4. On the native mobile app, the OS share sheet opens instead, listing your installed apps.
5. Choose the destination and the public URL is handed off to share.
6. Only the public URL travels — short links and public bio pages — never private workspace data.

## Tips

- Use copy-link when your destination is not one of the listed social platforms; it works everywhere you can paste.
- Remember that only public URLs are shared, so you can share confidently without exposing private workspace details.
- On mobile, the native share sheet reaches every app you have installed, so install the apps you share to most.
- Share QR codes by their URL when a recipient is on a computer and cannot scan a code from their own screen.
- Look for the Share action in the most convenient spot for your task — the footer, the dashboard top bar, a link card, or the QR display.

## FAQ

### What happens when I click Share on the web?

An in-app share modal opens with social buttons for X, Facebook, LinkedIn, WhatsApp, Telegram, Reddit, and Email, plus a copy-link option.

### How is sharing different on mobile?

On the native mobile app, Share opens your device's OS share sheet instead of the in-app modal, so you can hand the link to any installed app.

### What exactly gets shared?

Only public URLs, such as short links and public bio pages. Private workspace data is never shared.

### Which social platforms are supported in the modal?

The web share modal includes X, Facebook, LinkedIn, WhatsApp, Telegram, Reddit, and Email, along with a copy-link button.

### Where can I find the Share action?

Share is available on the home footer, the dashboard top bar, each link card, and the QR code display.

### Can I share a QR code?

Yes. You can share the public URL behind a QR code directly from the QR code display, which is useful when the recipient cannot scan the code.

### Do I need a specific browser for sharing to work?

No. Because the web path uses an in-app modal rather than relying on a browser-only share API, it works consistently across browsers.

## Related

- [Short links](/features/short-links)
- [QR codes](/features/qr-codes)
- [Link-in-bio pages](/features/link-in-bio)
- [Browser extension](/features/browser-extension)
