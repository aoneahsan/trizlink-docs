---
title: Widgets
description: Create embeddable TrizLink widgets that display a list of your links or a bio page inside an iframe on any external website, with configurable appearance.
sidebar_position: 10
keywords: [embeddable widgets, iframe widget, embed links, embed bio page, website widget, link list widget, widget appearance, embed on blog]
---

A widget in TrizLink is an embeddable iframe that displays a list of your links or a bio page on any external website. You configure how it looks, copy its embed code, and drop it into a site or blog so your links appear there without rebuilding the page. Each widget is managed at `/dashboard/widgets` and renders at `trizlink.com/widget/:widgetId`. TrizLink is free to use with Google sign-in.

## What you can do

You can create a widget that shows either a list of your links or one of your bio pages, then configure its appearance — size, theme, and how many items it displays. The widget is embedded as an iframe, so it works on most external websites, blogs, and site builders that allow custom HTML. Once embedded, it pulls from TrizLink and renders at its own widget URL, letting you surface your links anywhere you can paste embed code.

## Use cases

- **Add your links to a blog.** Embed a widget in a sidebar or footer so readers always see your current links without you editing each post.
- **Put a bio page on your own site.** Display your TrizLink bio page inside your existing homepage instead of sending visitors elsewhere.
- **Show a curated link list.** Limit the widget to a set number of items to feature only your most important links.
- **Match your site's look.** Set the widget's theme and size so it blends into the page rather than standing out awkwardly.
- **Keep an embed current automatically.** Because the widget pulls from TrizLink, the embedded list reflects your links without you touching the host site again.

## How it works

1. Open `/dashboard/widgets` to create and manage your widgets.
2. Choose what the widget displays — a list of your links or a bio page.
3. Configure appearance: size, theme, and the item limit that controls how many entries show.
4. Save the widget; it is assigned an ID and renders at `trizlink.com/widget/:widgetId`.
5. Copy the iframe embed code for the widget.
6. Paste the embed code into any external website that accepts custom HTML, and the widget appears on that page.

## Tips

- Set an item limit that fits the space on your host page so the widget doesn't overflow its container.
- Match the widget theme to your site's light or dark style for a cleaner fit.
- Preview the widget URL at `trizlink.com/widget/:widgetId` before embedding to confirm it looks right.
- Make sure your host platform allows iframe embeds; some restricted site builders block custom HTML.
- Choose a size that stays responsive within your layout, and test it on both desktop and mobile widths.
- Use a link-list widget where you update links often, so the embed stays current without editing the host page.

## FAQ

### What can a widget display?

A widget can display either a list of your links or one of your bio pages. You pick which when you create the widget at `/dashboard/widgets`.

### How is a widget embedded?

A widget is embedded as an iframe. You copy its embed code from the dashboard and paste it into any external website that accepts custom HTML, and the widget renders inline on that page.

### Where does the widget actually render?

Each widget renders at `trizlink.com/widget/:widgetId`, where `:widgetId` is the ID assigned when you save it. The iframe you embed points to that URL.

### What appearance options can I configure?

You can configure size, theme, and the item limit that sets how many entries the widget shows. These let you fit the widget to your host page's space and style.

### Will the embedded widget stay up to date?

Yes. Because the widget pulls from TrizLink, the embedded list or bio reflects your TrizLink content without you re-editing the host page each time something changes.

### Can I use a widget anywhere?

You can embed a widget on most external sites and blogs that allow custom HTML or iframe code. Platforms that block custom HTML or iframes won't be able to host it.

### Does creating widgets cost anything?

No. TrizLink is free to use; creating, configuring, and embedding widgets are part of the platform once you sign in with Google.

## Related

- [Link in bio](/features/link-in-bio)
- [Sharing](/features/sharing)
- [Short links](/features/short-links)
- [Social media](/features/social-media)
