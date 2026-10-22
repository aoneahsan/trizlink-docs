---
title: AI assistance
description: Trizlink's AI runs on our credit at your plan's level, with monthly AI and voice allowances on every plan; your own Anthropic or OpenAI key lifts both, Free included.
sidebar_position: 11
keywords: [ai requests, bring your own key, byok, openai key, anthropic key, ai allowance, ai settings]
last_update:
  date: 2026-10-22
---

Trizlink's AI features are three optional suggestion panels and a voice recorder, each drafting text you then
edit. They run on our credit, at your plan's AI level and within its monthly allowances. You can add your own
Anthropic or OpenAI key, and doing so **lifts both limits on every plan, including Free**.

## On this page

- [Where AI appears](#where)
- [The allowance](#allowance)
- [Bringing your own key](#byok)
- [What happens to your key](#key-handling)
- [Turning it off](#off)
- [Limits](#limits)
- [FAQ](#faq)

## Where AI appears {#where}

Four features, and nowhere else:

- **Bio page tagline.** *Suggest three* offers three one-line options, each at most 160 characters. Pick one and
  it lands in the field, editable like anything you typed.
- **Social composer draft.** One instruction, one first version, which you then rewrite.
- **Analytics insights.** A short read of the numbers already on the page. Each insight names the figure it
  came from, so you can check it.
- **Voice.** A recording of up to 2 minutes becomes a proposal you check; nothing is written until you confirm
  it. How it works, and how long recordings are kept: [AI levels and voice](./ai-levels-and-voice.md).

Every one of them produces a draft you edit. None of them acts on your behalf, publishes anything, or changes
a link.

## The allowance {#allowance}

| | Free | Pro | Team |
|---|---|---|---|
| AI requests each month | 50 | 500 | 2,000 |

Your AI level and the voice allowance are on [AI levels and voice](./ai-levels-and-voice.md#does-my-plan-limit-ai).

The count is shown **beside the button, before you press it**. With your own key, no count appears. When the
allowance is spent, the panel says so and points at the way out rather than failing.

If the allowance cannot be read at all, the surface shows no number rather than a confident zero, because
*"none left"* and *"we could not ask"* are different things to a reader.

AI is the only part of Trizlink that can cost money **per request**, which is why it is the only line rationed
tightly. A row in a table costs nothing, so those limits are generous; a model call can cost money, so this one
is not.

## Bringing your own key {#byok}

Add a key from **Settings → AI**. Two providers are offered: **OpenAI** and **Anthropic**. An OpenAI key also
needs the model name, typed exactly as OpenAI names it.

A key of your own replaces our credit **for your requests only**, and while it is present **it lifts both
allowances, AI requests and voice requests** — on Free as much as on Team. The reasoning is worth stating: an
AI request your provider bills you for costs us nothing, so there is nothing to ration.

Your key sits **on top of** your plan, never instead of it. Remove it and your requests run on our credit
again, back at your plan's level and allowances.

## What happens to your key {#key-handling}

This is the part most worth reading carefully, because it changed: your key is now held on our server.

- **It is stored on our server, encrypted, against your account**, one key per provider. It follows you to
  every browser and device you sign in on, and it is shown back only as the provider and its last 4
  characters.
- **It travels to one place beyond our server** — the provider it belongs to, on the AI requests it pays for,
  and on nothing else. The prompts are ours and stay on the server, so the call is made there rather than from
  your browser. That means one implementation per feature. It also means the output caps hold when you bring
  your own key, and what you type for a draft or a tagline is still not stored.
- **It is written down once, sealed.** The database holds it encrypted (AES-256-GCM). It goes into no log line
  and no error report, and it is deleted when you remove it or delete your account.

An earlier version of this product promised the key "is never uploaded", and the next kept it in your browser
and sent it with each request. Neither is how it works now, so this page was changed rather than quietly kept.
A security claim a product cannot keep is worse than no claim at all, because the reader stops checking.

## Turning it off {#off}

**Settings → AI** has a switch that removes every suggestion button and every microphone in the product. Off
means off: the panels are absent rather than present-and-broken, because a feature that cannot work should not
offer a button that fails.

## Limits {#limits}

- **What is sent is only what the feature needs** — the brief and draft, the page's name and tagline, your
  workspace's click totals and busiest links, or a recording's transcripts. Trizlink adds no other workspace,
  no email address, password or payment details, and nobody else's data.
- **AI runs only where you open or press it.** Nothing runs in the background.
- No image generation. No hashtag generator. No performance forecast. Three text panels and a voice recorder
  are the whole feature.
- Suggestions are drafts. They can be confidently wrong, and they are placed in an editable field for exactly
  that reason.
- Your own key belongs to you, not to a workspace, so one setup covers your requests in every workspace and on
  every device.

## FAQ {#faq}

### Do I need my own API key to use AI?

No. AI works on the Free plan on our credit, at Spark, with 50 AI requests and 10 voice requests a month. Your
own key lifts both limits.

### Does bringing my own key only help on paid plans?

No, and this is the point of the design. Your own key lifts both monthly limits on **every** plan, Free
included.

### Which providers can I use?

OpenAI or Anthropic.

### Is my key sent anywhere?

To our server once, when you save it; then only to its provider, on the AI requests it pays for. It is stored
encrypted on our server against your account, and it appears in no log line or error report.

### Will my key sync to my other devices?

Yes. It is held against your account, not the device, so it works wherever you sign in.

### What does Trizlink send to the model?

Only what the feature needs. The full list is in the [privacy policy](https://trizlink.com/privacy-policy).

### Can I turn AI off completely?

Yes, from Settings → AI. Every suggestion button and every microphone disappears.

## Related

- [AI levels and voice](./ai-levels-and-voice.md)
- [Bio pages](./link-in-bio.md)
- [Social publishing](./social-media.md)
- [Analytics](./analytics.md)
- [Public API](./api-access.md)
- [Plans and pricing](https://trizlink.com/#pricing)
