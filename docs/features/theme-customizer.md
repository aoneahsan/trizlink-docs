---
title: Theme Customizer
description: The TrizLink theme customizer lets you set appearance, accent color, gray tone, border radius, and UI scaling on every page, signed in or out.
sidebar_position: 15
keywords: [theme customizer, dark mode, light mode, accent color, ui scaling, radix ui, appearance settings, cross-device sync]
---

The TrizLink theme customizer is a built-in settings panel, powered by Radix UI, that lets you adjust how the interface looks — appearance, accent color, gray tone, border radius, and UI scaling — from every page, whether you are signed in or not. Your choices take effect immediately and are remembered, so TrizLink looks the way you prefer each time you return. Preferences are stored locally in your browser and, once you sign in, sync to your account so they follow you across devices, while a boot loader prevents any flash of the wrong theme on load.

## What you can do

You can switch between light, dark, auto, and system appearance, pick an accent color, choose a gray tone, set the border radius for a sharper or softer look, and scale the whole interface up or down for comfort. Every option is available on every page and to every visitor, signed in or signed out. Because the customizer is built on Radix UI, the controls are consistent and accessible throughout the app.

## Use cases

- You prefer dark mode at night and let "system" appearance follow your operating system automatically.
- You set an accent color that matches your brand so the interface feels personal.
- You increase UI scaling for easier reading on a high-resolution display, or decrease it to fit more on screen.
- You adjust the border radius to get a crisper, more squared-off look across cards and buttons.
- You sign in on a new device and your saved appearance, accent, and scaling are already applied because they synced from your account.

## How it works

1. Open the theme customizer, available on every page of TrizLink.
2. Choose an appearance: light, dark, auto, or system.
3. Pick an accent color and a gray tone to set the overall palette.
4. Set the border radius and UI scaling to match your taste and screen.
5. TrizLink applies the changes instantly and saves them to your browser's local preferences.
6. When you sign in, your preferences sync to your account in Firestore, so they carry across your devices.

## Tips

- Use "system" appearance to let TrizLink follow your device's light or dark setting automatically as it changes through the day.
- Sign in if you use TrizLink on more than one device so your theme follows you instead of being set per browser.
- Adjust UI scaling for accessibility — larger scaling improves readability, smaller scaling fits more content on screen.
- Pair an accent color with a matching gray tone for a cohesive look rather than mixing clashing palettes.
- The boot loader on first paint is expected behavior; it waits for your theme to be ready so you do not see a flash of the wrong colors.

## FAQ

### Do I need an account to customize the theme?

No. The theme customizer works whether you are signed in or signed out, and your preferences are saved locally in your browser either way.

### What can I customize?

You can set appearance (light, dark, auto, or system), accent color, gray tone, border radius, and UI scaling.

### Are my preferences saved across devices?

When you are signed in, your preferences sync to your account in Firestore, so they follow you across devices. Signed out, they are saved locally in the browser you used.

### Why does a loader appear when the page first loads?

A boot loader shows briefly until your theme is ready. This prevents a flash of the wrong theme before your saved preferences are applied.

### What is "auto" or "system" appearance?

These let TrizLink follow your operating system's light or dark mode rather than forcing a fixed setting, so the app matches the rest of your device.

### Is the customizer available on every page?

Yes. It is available on every page of TrizLink, for signed-in and signed-out users alike.

### What is the customizer built on?

It is built on Radix UI, which provides consistent, accessible controls across the interface.

## Related

- [Link-in-bio pages](/features/link-in-bio)
- [Widgets](/features/widgets)
- [Sharing](/features/sharing)
- [Browser extension](/features/browser-extension)
