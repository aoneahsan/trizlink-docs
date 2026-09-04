---
title: Widgets
description: Embed a Trizlink link, bio page or collection on any site in four shapes — inline, button, popup or QR — with a snippet generated from the widget rather than stored.
sidebar_position: 10
keywords: [embed widget, iframe embed, embed short link, embed bio page, popup widget, qr widget, embed snippet]
---

A widget is a piece of Trizlink you put on somebody else's page. It points at one thing — a short link, a bio
page or a collection — and renders in one of four shapes. You copy a snippet, paste it into a site, and the
widget's views and clicks are counted back in your workspace.

## On this page

- [The four shapes](#shapes)
- [What a widget can point at](#targets)
- [The snippet](#snippet)
- [What is counted](#counting)
- [Limits](#limits)
- [FAQ](#faq)

## The four shapes {#shapes}

| Shape | What you paste | Good for |
|---|---|---|
| **Inline** | An `<iframe>` with a width, height and corner radius | A block in a page's flow — a link list in a sidebar or a post |
| **Button** | A single `<a>` element | A call to action in existing copy, styled by the host page |
| **Popup** | A `<script>` tag with a position | A floating launcher on every page of a site |
| **QR** | An `<iframe>` rendering a scannable code | A screen people photograph — a slide, a display, a kiosk |

The inline and QR shapes are iframes and carry nothing of yours into the host page. The button is a plain
anchor, so it inherits the host site's own styling. The popup is the only one that loads a script.

## What a widget can point at {#targets}

Three kinds of target: a **short link**, a **bio page**, or a **collection** of links.

There is deliberately **no foreign key** from a widget to its target. A widget pointing at something that has
been deleted is a real state, and it says so on the page it is embedded in — rather than the widget silently
vanishing from a customer's site, or rendering the word `undefined`. A dangling target renders its own empty
state, which is the behaviour you want on a page you no longer control.

## The snippet {#snippet}

The snippet is **generated from the widget every time you look at it, never stored**.

That sounds like an implementation detail and is not. The previous version of this product stored the embed
code as a string, with a *"regenerate embed code"* button beside it — which is the shape of a bug: every field
that changes the snippet needs a writer, and the day one is missed, the customer's page keeps loading the old
one. Here there is nothing to regenerate, because there is nothing stored to go stale.

Each widget also has a public page at `trizlink.com/widget/<id>`, which is what the iframes load.

The panel offers a width, height, corner radius and button tone, plus two options: whether to show a QR code
alongside, and whether to show Trizlink branding. Copy the snippet with the button rather than retyping it —
the indentation in the block is part of what you paste.

```html
<!-- Trizlink widget -->
<iframe
  src="https://trizlink.com/widget/<id>?type=inline"
  width="100%"
  height="400"
  title="Your widget"
  loading="lazy"
  style="border: 0; border-radius: 8px;"
></iframe>
```

## What is counted {#counting}

Two events: a **view** when the widget loads, and a **click** when somebody follows something in it.

Both counters on the widget are maintained by the database from those event rows, and no browser holds the
grant to write them — the same arrangement that protects a link's click total. A widget nobody has loaded
reports zero and says so, rather than showing an estimate.

A widget view also records one **impression** for each short link it rendered, which is what makes a funnel
from *seen* to *clicked* possible rather than inferred.

Clicks that pass through a short link carry `?via=widget`, so widget traffic is separable from direct traffic
in [Analytics](./analytics.md).

## Limits {#limits}

- One widget points at one target. There is no multi-target widget.
- The inline and QR shapes are iframes, so the host page cannot restyle their insides. Use the button shape
  when you want the host site's own styling.
- The popup shape loads a script on the host page. Some sites will not allow that; the other three shapes do
  not need it.
- A widget is public. Anything embedded in it is readable by anyone who finds the widget URL, so do not point
  one at something you meant to keep private.
- The widget page does not carry the theme control. It inherits nothing from your dashboard.

## FAQ {#faq}

### Where do I manage widgets?

`/dashboard/widgets`. Each widget's detail panel carries its snippet and its counts.

### Do I need to regenerate the embed code after changing a widget?

No. The snippet is derived from the widget, so what you pasted keeps pointing at the current settings.
Dimensions are in the snippet itself, so a size change is the one case worth re-copying.

### What happens if I delete the link a widget points at?

The widget renders its own empty state on the host page. It does not disappear and it does not print an
error.

### Can I embed a widget on a site I do not control?

You can hand somebody the snippet. Whether their site accepts an iframe or a script is their decision, and
the popup shape is the one most likely to be blocked.

### Are widget views counted as link clicks?

No. A view is a view. When a visitor actually follows a link in the widget, that is a click, and it is marked
as coming from a widget.

### Does a widget work if the visitor is not signed in?

Yes. A widget is public and has no sign-in gate — it is meant for strangers on somebody else's page.

### Can I style the inline widget with my own CSS?

Not its contents; it is an iframe. You control its width, height and corner radius. The button shape is the
one that inherits your styling.

## Related

- [Short links](./short-links.md)
- [Bio pages](./link-in-bio.md)
- [QR codes](./qr-codes.md)
- [Analytics](./analytics.md)
