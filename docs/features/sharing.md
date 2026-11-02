---
title: Share a link
description: Share your referral link from Referrals, copy a short link, and set the preview a social platform may show.
sidebar_position: 16
last_update:
  date: 2026-10-31
keywords: [share referral link, copy short link, social card, link preview]
---

import Head from '@docusaurus/Head';

<Head>
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Share a link',
      description: 'Share your referral link from Referrals, copy a short link, and set the preview a social platform may show.',
      url: 'https://docs.trizlink.com/features/sharing',
      inLanguage: 'en',
      author: { '@type': 'Organization', name: 'The Trizlink team', url: 'https://trizlink.com' },
      dateModified: '2026-10-31',
      about: { '@type': 'SoftwareApplication', name: 'Trizlink', url: 'https://trizlink.com' },
    })}
  </script>
</Head>

*By The Trizlink team*

## How do I share my referral link?

Open **Dashboard → Referrals** and press **Share** beside your referral link. On the web, Share opens a dialog
with **Share on X**, **Share on LinkedIn**, **Share on Email** and **Copy link**. In the Android app, it opens your phone's system share
sheet. The link in either path is your referral link, not a short link from your Links list.

You can also press **Copy link** beside the referral link and paste it yourself. If clipboard access fails, the
link stays visible in the field for you to select.

## What happens when I press Share on the web?

Choose **Share on X** or **Share on LinkedIn** to open that site's sharing page; **Share on Email** starts a
message with your referral link in its body. Press **Copy link** to copy the address and close the dialog.
The dialog's open state is in the page address, so a refresh can reopen it; closing it clears that state.
No message goes out automatically.

Only those destinations appear. For another destination, copy the address and paste it in the app you want
to use. The web button always opens this dialog, so the available actions are visible before you pick a
service or close the dialog without sending anything.

## What happens when I press Share on Android?

Android opens the system share sheet with the referral link. Pick a destination there. Available destinations
depend on the apps installed on your phone.

Dismiss the sheet to stay on Referrals. Nothing is sent when you close it; the referral link remains in its
field, ready for you to copy or share again when you choose a destination.

Trizlink does not appear as a destination when you share a page *from* another Android app. This action
sends your referral link out; it does not make Trizlink a share target.

## How do I share a short link?

Copy its address from **Links** and paste it where you want it. Short link cards have a copy control, but no
product-wide share dialog. The Referrals Share control applies to the referral link on that page.

The Social card fields below affect how a platform may preview that short link after you paste it, but they
do not add a share button to the link card or choose a destination for you. An image is optional.

## How do I set a short link's preview?

Open the link form's **Social card** section. When a public short link has saved Social card content, its
short-link response can carry Open Graph and X tags drawn from these fields:

| Field | What it controls |
|---|---|
| Title and description | The headline and supporting text |
| Page type | The kind of page described by the tags |
| Image address | The image a platform may use; **1200 × 630** is the form's recommendation, not a guarantee |
| Where X differs | Choose **Large image**, **Small thumbnail**, **Player** or **App**; set X-specific title, description and image if needed |
| Site and author accounts | The X accounts associated with the page and its author |

When you leave an X-specific title, description or image blank, the short-link response uses the general
field, while the platform still decides which of the supplied tags appear in its own preview. For an eligible
public link, the redirect depends on the fields present. A short link
with neither a pixel nor saved Social card content returns a 301 redirect to its destination; a platform may
follow it and fetch that destination's tags. A pixel link with blank Social fields returns a 200 HTML
redirect page with pixel markup and no Social tags. A platform may follow that page too, but fetching the
destination's tags depends on the platform. Trizlink copies no destination tags. If neither image field is
set, the short-link response emits no image tag.
The form warns when **Large image** is selected without an image in either place.

The tags are served on eligible public short links at the shared Trizlink address. Password-protected,
sign-in-gated, expired, inactive and click-capped links do not expose the card fields; custom-domain serving
is unavailable. The final card belongs to the platform that reads the tags, so the form preview cannot
promise that every chat app or social network will draw the same image and text.

## Why does an old preview still appear?

The platform showing the card may have cached the tags it read earlier. Changing the Social card fields
cannot replace a preview already held by that platform. Set the fields before sharing the short link widely.
If an old card persists and the platform offers a preview or refresh tool, use it to ask for a new fetch, then
check the resulting card on that platform before you share the link again.

Caches keep copies. Trizlink can save the fields you set on the short link. It cannot tell another platform
when to discard a card that platform has already stored and shown to somebody else.

## Where can I read more?

Choose by question. The pages below cover the short-link address and redirect, when a short link earns its
place, the current plan limits, how Trizlink handles data, and the main site; each has a separate job.

- [Short links](./short-links.md) covers the address and redirect.
- [The comparison with a generic shortener](https://trizlink.com/blog/trizlink-vs-generic-shorteners) explains when a short link earns its place.
- [Plans and pricing](https://trizlink.com/#pricing) lists the current plan limits.
- [Privacy Policy](https://trizlink.com/privacy-policy) explains how Trizlink handles data.
- [Trizlink](https://trizlink.com) is the main site.

**[Open Referrals](https://trizlink.com/dashboard/referrals)**
