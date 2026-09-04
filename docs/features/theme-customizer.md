---
title: Theme control
description: One panel, ten appearance axes, applied before the first paint from a single registry. Preferences are held on the device rather than synced to your account.
sidebar_position: 15
keywords: [theme control, dark mode, appearance settings, colour palette, ui density, reduced motion, custom cursor]
---

The theme control is one panel, reached from one icon, carrying every appearance setting Trizlink has. Ten
axes live in it, an eleventh is pre-painted alongside them, and all of them are applied before the page first
paints rather than after.

## On this page

- [The ten axes](#axes)
- [The eleventh, and why it is not in the panel](#sidebar)
- [Applied before the first paint](#prepaint)
- [Where your choices are kept](#storage)
- [Limits](#limits)
- [FAQ](#faq)

## The ten axes {#axes}

| Control | Values |
|---|---|
| Appearance | Light · Dark · System |
| Colour | Signal · Orchid · Citron |
| Corners | None · Small · Medium · Large · Full |
| Density | Compact · Comfortable · Spacious |
| Text size | Small · Medium · Large |
| Typeface | Grotesque · Plain · Mono |
| Panels | Solid · Translucent |
| Custom cursor | On · Off |
| Motion | System · Full · Reduced |
| Sound | On · Off |

The panel is available on every route, at every width, to signed-in and signed-out readers alike.

Two notes on specific axes. **Appearance and the resolved theme are different things**: `System` is a
preference, and a stylesheet cannot paint from *"system"* — it is resolved to light or dark once, centrally,
rather than at each place that needs it. And **Motion defaults to System**, which follows your operating
system's reduced-motion setting; `Reduced` forces it regardless.

A value stored outside an axis's allowed list is discarded rather than trusted, so an edited storage entry
falls back to the default instead of producing an unstyled page.

## The eleventh, and why it is not in the panel {#sidebar}

The dashboard sidebar's collapsed state is pre-painted exactly like an appearance axis, but it is deliberately
**not** a row in the theme panel: it already has a control, the button on the top bar. Two controls for one
piece of state is how the two end up disagreeing.

It is declared beside the appearance axes for a different reason. The sidebar width re-resolves the whole
shell's leading inset, so applying it after the first paint is not a flash — it is the entire page sliding
sideways under the reader.

## Applied before the first paint {#prepaint}

Every axis is stamped by a small blocking script before anything renders, and that script is **generated from
the same registry the panel iterates**. Adding an axis gives the panel a control and the first paint a value
in one change; they cannot disagree, because there is only one list.

The reason this matters is not dark mode, which is the axis everybody remembers. **Applying a colour late is a
flash. Applying density or text size late is a reflow** — the page paints, and then every spacing and font
size moves under the reader who has already started reading. That is the worse failure, and it is the one
people forget to design for.

Every component reads its values from those axes. A hardcoded colour, radius or font size anywhere would
simply be invisible to the control, which is why there are none.

## Where your choices are kept {#storage}

**On the device, in that browser's storage. They are not synced to your account.**

So your theme follows you between tabs and across visits in the same browser, and it does not follow you to a
different browser, a different machine, or the Android app. Set it again there — it is ten choices, and it
takes a moment.

This is worth being plain about because a settings panel is exactly where people assume an account sync
exists. There isn't one.

## Limits {#limits}

- **No custom colours.** Three palettes are offered, not a colour picker, so every combination stays legible
  in light and dark and passes contrast in both.
- **No per-workspace theme.** Appearance is yours, not the workspace's.
- **The theme does not apply to a public bio page you visit.** A bio page belongs to whoever made it, and
  Trizlink does not put its own appearance panel on somebody else's page. Your own system and stored
  preferences still apply to it; the control simply is not offered there.
- **No custom fonts.** Three families.
- Sound is off unless you turn it on, and it is limited to interface feedback.

## FAQ {#faq}

### Do I need an account to change the theme?

No. The control is on every page for signed-out readers too, and your choices are saved either way.

### Will my theme follow me to another device?

No. Preferences are stored per browser and are not synced to your account.

### What does "System" appearance do?

It follows your operating system's light or dark setting and changes with it, rather than fixing one.

### Why is dark mode not flashing on load any more?

Because the whole set of axes is stamped by a blocking script before the first paint, rather than applied by
the application after it mounts.

### Can I pick my own accent colour?

No. Three palettes are offered — Signal, Orchid and Citron — each checked in light and dark.

### Where is the sidebar toggle?

On the top bar, not in the theme panel. It is one state, so it gets one control.

### Does Reduced motion turn animation off completely?

It reduces motion throughout the interface. Leaving the axis on System honours whatever your operating system
already asks for, which is usually the right answer.

## Related

- [Bio pages](./link-in-bio.md)
- [Widgets](./widgets.md)
- [Sharing](./sharing.md)
- [Workspaces and teams](./workspaces-and-teams.md)
