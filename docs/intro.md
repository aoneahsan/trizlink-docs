---
title: Introduction to TrizLink
description: TrizLink is a free link-management platform for branded short links, link-in-bio pages, QR codes, and click analytics. Sign in with Google to start.
sidebar_position: 0
slug: /intro
keywords:
  - trizlink
  - link management platform
  - url shortener
  - link in bio
  - qr code generator
  - link analytics
---

TrizLink is a free, web-based link-management platform for creating branded short links, link-in-bio pages, and QR codes, and for reading the click analytics behind them. Instead of pasting long, fragile URLs everywhere, you shorten them once in TrizLink, share the short link, and watch where the clicks come from — by country, referrer, device, browser, and operating system. Everything is tied to your Google account, organized into workspaces, and reachable from the web app at [trizlink.com](https://trizlink.com), the [Android app](https://play.google.com/store/apps/details?id=com.trizlink.app), or the companion browser extension.

This documentation explains what each part of TrizLink does, how to use it, and where its limits are. It is written to be honest: where a feature needs something from you (DNS access for a custom domain, your own API key for AI, a connected social account), the docs say so plainly.

## What TrizLink is for

TrizLink brings the pieces of link sharing into one place so you do not need a separate URL shortener, a separate bio-link tool, a separate QR generator, and a separate analytics dashboard. The core jobs it handles:

- **Shorten and brand URLs** — turn a long link into a short one, optionally with a custom alias, a password, or an expiry date. See [Short links](/features/short-links).
- **Publish a link-in-bio page** — a single page that holds all your links, built with a drag-and-drop editor and published to a custom slug like `trizlink.com/yourname`. See [Link-in-bio pages](/features/link-in-bio).
- **Generate QR codes** — every short link gets a downloadable QR code for print or screens. See [QR codes](/features/qr-codes).
- **Measure clicks** — real-time, per-link and workspace-wide analytics. See [Analytics](/features/analytics).
- **Work as a team** — separate [workspaces and teams](/features/workspaces-and-teams) with admin, editor, and viewer roles.

## Who it is for

- **Creators and freelancers** who want one bio link plus tidy, trackable short links for each platform.
- **Marketers** who need [UTM templates, tracking pixels, and webhooks](/features/tracking-and-utm) on campaign links.
- **Small businesses and teams** that want shared link management with roles and [custom domains](/features/custom-domains).
- **Developers** who want to manage links [programmatically through an API](/features/api-access) or shorten links from a [browser extension](/features/browser-extension).

## The feature areas at a glance

| Area | What it does | Docs |
|---|---|---|
| Short links | Custom alias, password, expiry, QR, click stats | [Short links](/features/short-links) |
| Link-in-bio | Drag-and-drop bio pages with templates and a slug | [Link-in-bio](/features/link-in-bio) |
| QR codes | Downloadable QR for any link | [QR codes](/features/qr-codes) |
| Analytics | Clicks by country, referrer, device, browser, OS | [Analytics](/features/analytics) |
| Custom domains | Branded links on your own domain | [Custom domains](/features/custom-domains) |
| Organization | Labels, search, CSV bulk import | [Link organization](/features/link-organization) |
| Tracking | UTM templates, pixels, webhooks | [Tracking & UTM](/features/tracking-and-utm) |
| Workspaces & teams | Silos with admin/editor/viewer roles | [Workspaces & teams](/features/workspaces-and-teams) |
| Social media | Connect accounts, compose, schedule | [Social media](/features/social-media) |
| Widgets | Embed links or a bio on any site | [Widgets](/features/widgets) |
| AI (BYOK) | Captions, hashtags, forecasts with your own key | [AI features](/features/ai-features-byok) |
| API | Manage links programmatically | [API access](/features/api-access) |
| Utility tools | 40+ free, client-side tools | [Utility tools](/features/utility-tools) |
| Browser extension | Shorten the current tab | [Browser extension](/features/browser-extension) |
| Theme | Appearance, accent, radius, scaling | [Theme customizer](/features/theme-customizer) |
| Sharing | Web modal or native OS share sheet | [Sharing](/features/sharing) |

## How it works under the hood

TrizLink runs as a web app (with a mobile build via Capacitor) backed by Firebase and Firestore. Sign-in is Google-only — there is no email/password option. Your links, bio pages, analytics, and preferences are stored per account and per workspace, and many surfaces (click counts, activity feeds) update in real time. The utility tools run entirely in your browser, and AI features only run when you supply your own OpenAI or Anthropic API key.

## What TrizLink does not do

- It does not offer email/password sign-up — you sign in with Google.
- It does not auto-delete expired links; an expired link shows an "expired" page until you remove it.
- It does not include or pay for AI usage — AI is bring-your-own-key, billed by your provider.
- It does not host your custom domain's DNS; you point your domain to TrizLink yourself.

## Next steps

1. [Create your account](/getting-started/create-account) — sign in with Google and pick a workspace.
2. [Quick Start](/getting-started/quick-start) — make your first short link and bio page in about five minutes.
3. Browse the [Features](/features/short-links) section for the area you need, or jump to the [FAQ](/guides/faq).
