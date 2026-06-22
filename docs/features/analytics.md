---
title: Analytics
description: Track per-link and workspace-wide clicks in TrizLink with breakdowns by country, referrer, device, browser, and OS, plus top links, updating in real time.
sidebar_position: 4
keywords: [link analytics, click tracking, real time analytics, geography breakdown, referrer source, device analytics, top performing links]
---

TrizLink analytics are real-time click reports that show how your short links perform, both for a single link and across your whole workspace. They include clicks over time plus breakdowns by country and geography, referrer source, device type, browser, and operating system, along with a list of your top-performing links. The data updates live through Firestore listeners, so figures change as clicks happen. You view per-link analytics at `/dashboard/links/:id/analytics` and platform-wide analytics at `/dashboard/analytics`, giving you both a detailed and a big-picture view of your traffic.

## What you can do

You can open any link's analytics to see its clicks over time and how they break down by country, referrer, device, browser, and operating system, or open the workspace-wide analytics for the same dimensions across all links. A top-performing links list highlights what is getting the most traffic, and everything updates in real time as clicks arrive.

## Use cases

- **Measure a campaign.** Watch a campaign link's clicks over time to see when traffic spikes and how long interest lasts.
- **Understand your audience.** Use the country and device breakdowns to learn where visitors are and what they use to reach you.
- **Find your best links.** Check the top-performing links list to see which links deserve more promotion.
- **Compare referrer sources.** See which referrers send the most clicks so you can focus your sharing where it works.
- **Monitor live.** Keep the analytics open during a launch or post to watch clicks update in real time.

## How it works

1. Sign in with Google and open the dashboard.
2. For one link, go to the Links page and open that link's analytics at `/dashboard/links/:id/analytics`.
3. Review its clicks over time and the breakdowns by country, referrer, device, browser, and OS.
4. For the whole workspace, open `/dashboard/analytics`.
5. Read the platform-wide breakdowns and the top-performing links list.
6. Leave the page open during active sharing to see figures update in real time via Firestore listeners.

## Tips

- Open per-link analytics to diagnose a specific link, and workspace analytics to see overall trends.
- Use the referrer breakdown to decide where to keep sharing and where to stop.
- Check the device, browser, and OS breakdowns to confirm your destination works well for your actual audience.
- Watch analytics live during a launch, since updates arrive in real time rather than on a delay.
- Remember that QR scans count as clicks, so the same breakdowns apply to scanned links.

## FAQ

### What dimensions can I break clicks down by?

Clicks can be broken down by country and geography, referrer source, device type, browser, and operating system, alongside clicks over time.

### Where do I find analytics for a single link?

Per-link analytics live at `/dashboard/links/:id/analytics`, reachable by opening a link from the dashboard Links page.

### Where do I find workspace-wide analytics?

Platform-wide analytics are at `/dashboard/analytics`, showing the same breakdowns aggregated across all your links.

### How current is the data?

Analytics update in real time through Firestore listeners, so the numbers change as clicks happen rather than on a refresh schedule.

### What is the top-performing links list?

It is a ranked list of your links by activity, so you can quickly see which ones are getting the most clicks.

### Do QR code scans show up in analytics?

Yes. A QR code encodes the short link URL, so scans are counted as clicks and appear in the same analytics with the same breakdowns.

### Is analytics included for free?

Yes. TrizLink is a free platform and analytics are part of it. You sign in with Google to access your dashboard.

## Related

- [Short links](/features/short-links)
- [Tracking and UTM](/features/tracking-and-utm)
- [QR codes](/features/qr-codes)
- [Custom domains](/features/custom-domains)
