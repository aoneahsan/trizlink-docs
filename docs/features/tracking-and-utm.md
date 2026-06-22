---
title: Tracking and UTM
description: Track TrizLink campaigns with reusable UTM templates, image-beacon tracking pixels for conversions, and webhooks that POST link event notifications.
sidebar_position: 7
keywords: [utm templates, utm parameters, tracking pixels, conversion tracking, webhooks, link events, campaign tracking, link notifications]
---

Tracking and UTM in TrizLink is a group of three campaign-tracking tools — UTM templates, tracking pixels, and webhooks — that help you attribute traffic and react to link activity. UTM templates save reusable parameter sets you apply to links, tracking pixels fire image beacons to record events and impressions, and webhooks send POST notifications to your own endpoints when link events occur. All three live under `/dashboard/tracking`, and TrizLink is free to use with Google sign-in.

## What you can do

You can build and store reusable UTM parameter sets, then apply them to links so every campaign URL carries consistent `campaign`, `source`, `medium`, and `content` tagging. You can create image-beacon tracking pixels that fire to record events or impressions for conversion tracking. And you can register webhook endpoints that receive POST notifications carrying link metadata whenever link events happen, such as a click, a creation, or an expiration.

## Use cases

- **Standardize campaign tagging.** Save a UTM template for a recurring newsletter so every link uses the same source and medium, keeping your analytics reports clean.
- **Measure conversions.** Place a tracking pixel on a thank-you or confirmation page to record when a visitor completes an action after following your link.
- **Notify another system.** Point a webhook at your own backend so it learns about link clicks, creations, or expirations and can update records automatically.
- **Run consistent A/B content tags.** Use the `content` UTM field from a saved template to label variants without retyping every parameter.
- **Trigger downstream automation.** Use webhook POSTs as the signal that kicks off a workflow in a tool you already run, using the link metadata in the payload.

## How it works

1. Open the tracking area under `/dashboard/tracking` and choose UTM templates, pixels, or webhooks depending on what you need.
2. For UTM templates, go to `/dashboard/tracking/utm-templates` and save a reusable set of `campaign`, `source`, `medium`, and `content` values, then apply the template to links.
3. For tracking pixels, go to `/dashboard/tracking/pixels` and create an image-beacon pixel; place it where you want events or impressions recorded.
4. The pixel fires when the page or beacon loads, recording the event for conversion tracking.
5. For webhooks, go to `/dashboard/tracking/webhooks` and register the endpoint URL that should receive notifications.
6. When a configured link event occurs — such as a click, creation, or expiration — TrizLink sends a POST request with link metadata to your registered endpoint.

## Tips

- Keep UTM values lowercase and consistent (for example `source=newsletter`, not `Newsletter`) so reports don't split the same channel into separate rows.
- Name UTM templates after the channel or campaign they serve so the right one is obvious when you apply it.
- Test a tracking pixel on a low-traffic page first to confirm it fires before relying on it for conversion data.
- Make sure your webhook endpoint returns quickly and can accept POST requests, so notifications aren't held up.
- Log incoming webhook payloads on your side while you set things up, so you can confirm the link metadata you receive matches what you expect.
- Reuse one UTM template across many links instead of hand-typing parameters, which prevents small spelling differences from fragmenting your data.

## FAQ

### What is a UTM template?

A UTM template is a saved, reusable set of UTM parameters — `campaign`, `source`, `medium`, and `content` — that you apply to links from `/dashboard/tracking/utm-templates`. It keeps your campaign tagging consistent so traffic is attributed the same way every time.

### How does a tracking pixel record a conversion?

A tracking pixel is an image beacon you create at `/dashboard/tracking/pixels` and place on a page. When that page loads, the pixel fires, which records the event or impression — for example, marking that someone reached a confirmation page after clicking your link.

### What triggers a webhook?

Webhooks fire on link events such as a click, a link creation, or a link expiration. When a configured event happens, TrizLink sends a POST request containing link metadata to the endpoint you registered at `/dashboard/tracking/webhooks`.

### What is in a webhook payload?

A webhook notification is delivered as a POST request that includes link metadata describing the event. Log the payload on your endpoint during setup so you can map the fields you receive to your own system.

### Do I need all three tools?

No. UTM templates, tracking pixels, and webhooks are independent. Use only the ones that fit your workflow — for example, UTM templates for clean attribution without setting up pixels or webhooks at all.

### Do UTM parameters replace my analytics?

No. UTM parameters tag your destination URLs so your analytics tools can attribute the traffic. They complement TrizLink's own click analytics rather than replacing them.

### Does any of this cost extra?

No. TrizLink is free to use; UTM templates, tracking pixels, and webhooks are all available under `/dashboard/tracking` once you sign in with Google.

## Related

- [Analytics](/features/analytics)
- [Short links](/features/short-links)
- [Link organization](/features/link-organization)
- [API access](/features/api-access)
