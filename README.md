# Trizlink Docs

Public documentation site for **[Trizlink](https://trizlink.com)** — short links, link-in-bio pages, QR codes and
click analytics, in one workspace.

- **Live docs:** https://docs.trizlink.com
- **Product:** https://trizlink.com
- **Android app:** https://play.google.com/store/apps/details?id=com.trizlink.app
- **Built with:** [Docusaurus 3](https://docusaurus.io) + React + TypeScript
- **Author:** [Ahsan Mahmood](https://aoneahsan.com) ([aoneahsan@gmail.com](mailto:aoneahsan@gmail.com))

## What's here

Twenty-four pages derived from the product's own source: getting started, short links, link-in-bio, QR codes,
analytics, custom domains (verification works; serving is deferred), link organisation, tracking and UTM,
workspaces and teams, social media (built, not switched on), widgets, AI with your own key, the public API,
utility tools, the browser extension (there is none), the theme customiser, sharing, referrals, an FAQ, a privacy
summary, a changelog and the author page. Every page says what the product does not do as plainly as what it does.

## Local development

This repo uses **yarn** for all local installs (never npm or pnpm).

```bash
yarn install      # install dependencies
yarn start        # local dev server on http://localhost:5962
yarn build        # production build → ./build (also emits feed.xml)
yarn serve        # preview the built site on http://localhost:5963
yarn typecheck    # tsc --noEmit
```

## Deployment

**GitHub Pages only** (custom domain `docs.trizlink.com`). A push to `main` runs
`.github/workflows/deploy-pages.yml`, and that is the deploy. See [`DEPLOY.md`](./DEPLOY.md).

## License

MIT for this documentation. Trizlink the product is a separate, private codebase; this repo contains only the
public documentation.
