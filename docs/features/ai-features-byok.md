---
title: AI assistance
description: Trizlink's AI suggestions run on our key with a monthly allowance on every plan, and adding your own OpenAI or Anthropic key removes that limit — on Free as well as on Pro and Team.
sidebar_position: 11
keywords: [ai suggestions, bring your own key, byok, openai key, anthropic key, ai allowance, ai settings]
---

Trizlink's AI features are three optional suggestion panels that draft text you then edit. They run on our
own key, metered by a monthly allowance your plan sets. You can supply your own OpenAI or Anthropic key
instead, and doing so **removes the limit on every plan, including Free**.

## On this page

- [Where AI appears](#where)
- [The allowance](#allowance)
- [Bringing your own key](#byok)
- [What happens to your key](#key-handling)
- [Turning it off](#off)
- [Limits](#limits)
- [FAQ](#faq)

## Where AI appears {#where}

Three places, and nowhere else:

- **Bio page tagline.** *Suggest three* offers three options in your own words, sized for the platform you are
  putting the address on. Pick one and it lands in the field, editable like anything you typed.
- **Social composer draft.** One instruction, one first version, which you then rewrite.
- **Analytics insights.** A short read of the numbers already on the page. Each insight names the figure it
  came from, so you can check it — an insight you cannot verify is a horoscope.

Every one of them produces a draft you edit. None of them acts on your behalf, publishes anything, or changes
a link.

## The allowance {#allowance}

| | Free | Pro | Team |
|---|---|---|---|
| AI suggestions per month | 50 | 500 | 2,000 |

The count is shown **beside the button, before you press it** — a metered feature whose meter only appears in
the refusal is a feature that surprises everybody exactly once. When the allowance is spent, the panel says so
and points at the way out rather than failing.

If the allowance cannot be read at all, the surface shows no number rather than a confident zero, because
*"none left"* and *"we could not ask"* are different things to a reader.

AI is the only part of Trizlink that costs money **per request**, which is why it is the only line rationed
tightly. A row in a table costs nothing, so those limits are generous; a model call does not, so this one is
not.

## Bringing your own key {#byok}

Add a key from **Settings → AI**. Two providers are offered: **OpenAI** and **Anthropic**.

A key of your own replaces ours **for your requests only**, and while it is present **the allowance stops
applying entirely** — on Free as much as on Team. The reasoning is worth stating: a request you are paying
your provider for costs us nothing, so rationing it would be rent rather than a limit.

Your key sits **on top of** the house key, never instead of it. Remove it and suggestions keep working on
ours, back at your plan's allowance.

## What happens to your key {#key-handling}

This is the part most worth reading carefully, because the honest answer is more complicated than *"it never
leaves your device"*.

- **It is stored on the device you typed it into**, under a per-workspace, per-provider key in that browser's
  storage. It does not follow you to another browser or another machine, and you will need to add it again
  there.
- **It does travel** — as one request header, on the AI call it pays for, and on nothing else. It has to
  reach a model somewhere, and the prompts are ours and stay on the server, so the call is made from our edge
  rather than from your browser. That means one implementation per feature, and it means the output caps and
  the guarantee that your prompt is not stored survive when you bring your own key.
- **It is never written down.** Not to the database, not to a log line, not to an analytics event, not to an
  error report, not into a URL.

An earlier version of this product promised the key "is never uploaded". That stopped being true the moment
it had to reach a model, so the promise was changed rather than quietly kept. A security claim a product
cannot keep is worse than no claim at all, because the reader stops checking.

## Turning it off {#off}

**Settings → AI** has a switch that removes every suggestion button in the product. Off means off: the panels
are absent rather than present-and-broken, because a feature that cannot work should not offer a button that
fails.

## Limits {#limits}

- **What is sent is the text of the draft** — a tagline hint, a post instruction, or the figures already on
  the analytics page. Never your other analytics, never another workspace, never anybody else's data.
- **AI does not run unless you ask it to.** Nothing is generated in the background.
- No image generation. No hashtag generator. No performance forecast. Three text panels is the whole feature.
- Suggestions are drafts. They can be confidently wrong, and they are placed in an editable field for exactly
  that reason.
- Your own key is per device and per workspace, so a second browser is a second setup.

## FAQ {#faq}

### Do I need my own API key to use AI?

No. Suggestions work on the Free plan on our key, at the Free allowance of 50 a month. Your own key lifts
that ceiling.

### Does bringing my own key only help on paid plans?

No, and this is the point of the design. Your own key removes the monthly limit on **every** plan, Free
included.

### Which providers can I use?

OpenAI or Anthropic.

### Is my key sent anywhere?

To the provider, through our edge function, as one header on the AI request it pays for. It is not stored on
our side in any form and appears in no log, event or error report.

### Will my key sync to my other devices?

No. It is held on the device you entered it on. Add it again on another browser if you want it there.

### What does Trizlink send to the model?

The draft text you are working on, or the figures already displayed on the analytics page. Nothing else.

### Can I turn AI off completely?

Yes, from Settings → AI. Every suggestion button disappears.

## Related

- [Bio pages](./link-in-bio.md)
- [Social publishing](./social-media.md)
- [Analytics](./analytics.md)
- [Public API](./api-access.md)
