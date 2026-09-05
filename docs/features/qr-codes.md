---
title: QR codes
description: Every Trizlink short link can be drawn as a QR code, derived from the address each time rather than stored, with four error-correction levels and optional separate scan counting.
sidebar_position: 3
keywords: [qr code, short link qr, error correction level, scan tracking, printed qr code]
---

A Trizlink QR code is a scannable image of a short link, drawn from the address itself every time it is
displayed. Nothing about it is stored on the link, which is the point: a stored image would go stale the
moment you changed the code, and a printed poster would then point at nothing.

## On this page

- [How it is produced](#how-it-works)
- [Error correction](#error-correction)
- [Counting scans](#counting-scans)
- [Downloading it](#download)
- [What this does not include](#not-included)
- [Printing advice](#printing)
- [FAQ](#faq)

## How it is produced {#how-it-works}

Open a link from the Links list, or the **QR** section of the link form. The code is rendered as an SVG in the
page, encoding `https://trizlink.com/<code>` exactly as you would share it. It resolves like any other QR
code, because it is any other QR code — there is no Trizlink redirector in the middle beyond the short link
you already made.

Because it is derived rather than saved, it can never disagree with the link, and a code you printed last
year keeps working as long as the short link does.

## Error correction {#error-correction}

Four levels, selectable beside the code:

| Level | Character |
|---|---|
| **L** | Smallest |
| **M** | Default |
| **Q** | Tolerant |
| **H** | Most tolerant |

Higher correction survives more damage and makes the code denser. Pick **H** for anything that will be
printed on a curved surface, laminated, or stuck somewhere it can be scuffed; **L** or **M** is fine on a
screen.

If the address is too long to encode at any version, the panel says so rather than drawing something broken.
A short link never will be; a very long code on a very long custom domain eventually could.

## Counting scans {#counting-scans}

By default a scan is indistinguishable from a tap, because it is the same URL either way.

The link form has a **Count scans separately** switch. Turning it on appends `?qr=1` **inside the encoded
address**, so the redirect can tell a scan from a click and report the two apart. Leaving it off keeps the
encoded address byte-identical to the short link itself.

That trade is worth stating plainly: the marker is what makes scan counting possible, and it is also a
difference between what the QR code contains and what you copied to your clipboard. Decide before you print,
because a printed code carrying the wrong choice cannot be changed.

Scans that are counted show up alongside clicks in [Analytics](./analytics.md), with the same country, device,
referrer and browser breakdowns.

## Downloading it {#download}

Two buttons under the code, and both draw the file in your browser from the short URL — nothing is uploaded
and nothing is held server-side.

- **PNG** is 1,024 pixels square, which is enough for a poster or a print shop. The quiet zone around it is
  painted white deliberately: a transparent PNG placed on a dark background is a code no scanner will read,
  and that is a failure you would only find after printing.
- **SVG** scales to any size without softening. Use it if a designer is placing the code, or if it is going
  on anything larger than a page.

The file is named for the link and the error-correction level you had selected, so two codes for the same
link at different levels do not overwrite each other in your downloads folder. Whichever you take, it is the
code you were looking at — the file is serialised from what is on screen rather than encoded a second time,
so a printed code cannot differ from the one you approved.

## What this does not include {#not-included}

- **There is no appearance customisation.** No colours, no logo in the middle, no rounded modules. Error
  correction is the only control.
- **There is no batch export.** One code, one link, one panel.
- **A QR code cannot be attached to something that is not a short link.** If you need a code for an arbitrary
  URL, the [tools directory](./utility-tools.md) points at a standalone generator hosted on a separate site.

## Printing advice {#printing}

- Save at a size larger than you need. An SVG scales without loss, so export or screenshot generously.
- Leave the quiet zone alone. The white margin drawn around the code is part of the code.
- Keep the contrast high and do not invert it. Some scanners cope; enough do not.
- Test the actual printed piece with a phone before you order a thousand of them.

## FAQ {#faq}

### Does every short link have a QR code?

Yes. It is derived from the address, so every link already has one whether you have looked at it or not.

### Can I download the QR code as a PNG or SVG file?

Not from a button in the product. Save the rendered image through your browser, or screenshot it. This is a
real gap rather than a hidden setting.

### Can I change its colours or add my logo?

No. The only control is the error-correction level.

### Do scans appear in my analytics?

Yes, as clicks. They are only reported *as scans* when **Count scans separately** is switched on for that
link, which changes what the code encodes.

### Will I see who scanned it?

No. You see the same aggregate breakdowns as any click — country, device, referrer, browser — and never a
person. No visitor address is stored anywhere. See [Analytics](./analytics.md#privacy).

### The code stopped scanning after I reprinted it smaller. Why?

A denser code needs more physical size. Raise the error-correction level, or print it larger, and test the
piece itself rather than the screen.

## Related

- [Short links](./short-links.md)
- [Analytics](./analytics.md)
- [Utility tools](./utility-tools.md)
