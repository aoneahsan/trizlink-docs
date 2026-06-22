# TrizLink Docs

Public documentation site for **[TrizLink](https://trizlink.com)** — a link-management platform for branded short links, link-in-bio pages, QR codes, and click analytics.

- **Live docs:** https://docs.trizlink.com
- **Product:** https://trizlink.com
- **Android app:** https://play.google.com/store/apps/details?id=com.trizlink.app
- **Built with:** [Docusaurus 3](https://docusaurus.io) + React + TypeScript
- **Author:** [Ahsan Mahmood](https://aoneahsan.com) ([aoneahsan@gmail.com](mailto:aoneahsan@gmail.com))

## What's here

A Diátaxis-style docs set covering every real TrizLink feature: short links, link-in-bio, QR codes, analytics, custom domains, link organization, tracking & UTM, workspaces & teams, social media, widgets, AI (bring-your-own-key), the API, utility tools, the browser extension, the theme customizer, and sharing — plus getting-started guides, an FAQ, and a privacy summary.

## Local development

This repo uses **yarn** for all local installs (never npm/pnpm). Package-manager hierarchy: `nvm` installs Node + npm → `npm` installs global CLIs (incl. yarn) → `yarn` for all local work.

```bash
yarn install      # install dependencies
yarn start        # local dev server on http://localhost:5962
yarn build        # production build → ./build
yarn serve        # preview the built site on http://localhost:5963
yarn typecheck    # tsc --noEmit
```

## Deployment

Dual-hosted: **Firebase Hosting** (site `trizlink-docs`) and **GitHub Pages** (custom domain `docs.trizlink.com`). Both serve the same `build/` output. See [`DEPLOY.md`](./DEPLOY.md). Deployment is a user-only step (needs the Firebase project / DNS).

## License

MIT. TrizLink the product is a separate, private codebase; this repo contains only the public documentation.
