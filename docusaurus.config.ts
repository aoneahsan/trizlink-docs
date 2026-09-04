import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// Trizlink — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// Product: https://trizlink.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://docs.trizlink.com';
const APP_URL = 'https://trizlink.com';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.trizlink.app';

const config: Config = {
  title: 'Trizlink Docs',
  tagline: 'Short links, bio pages, QR codes, and click analytics — documented.',
  favicon: 'img/favicon.svg',

  // Production URL — served by GitHub Pages only (custom domain docs.trizlink.com).
  // 🔴 Never Firebase: `DEPLOY.md` and the fleet docs-site rule both say one host.
  url: SITE_URL,
  baseUrl: '/',

  // GitHub metadata (drives OG tags + edit-this-page links + deploy)
  organizationName: 'aoneahsan',
  projectName: 'trizlink-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags. JSON-LD payloads (WebSite, Organization,
  // SoftwareApplication) help Google Rich Results, Perplexity, ChatGPT, and
  // Claude extract structured entity data when citing this documentation.
  headTags: [
    // 🔴 NO HARDCODED CANONICAL HERE. A `headTags` entry is emitted on EVERY page, so
    // `href: ${SITE_URL}/` told search engines that every page in this site is a duplicate
    // of the home page — the one instruction that can remove a whole docs site from search
    // while every build stays green. Docusaurus already emits a correct per-page canonical
    // from `url` + `baseUrl`; this entry only ever competed with it. Removed 2026-09-04
    // (found during the TASK-001 re-derivation). Verify in `build/`, never in this file.
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'Trizlink Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'apple-mobile-web-app-title', content: 'Trizlink Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#2563eb' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Trizlink Documentation',
        url: SITE_URL,
        description:
          'Documentation for Trizlink, a link-management platform for short links, bio pages, QR codes, and click analytics. Author: Ahsan Mahmood.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Trizlink',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android',
        // 🔴 THE REAL PLAN SET, NOT `price: '0'`. A bare zero-price Offer told every rich-result
        // consumer this product is free; it has a Free tier and two paid ones, and
        // `00-house-rules.md` forbids stating anywhere that there is no paid tier. Figures come
        // from ../trizlink/src/content/plans.ts and must move with it.
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '0',
          highPrice: '18',
          offerCount: '3',
          offers: [
            { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
            { '@type': 'Offer', name: 'Pro', price: '6', priceCurrency: 'USD' },
            { '@type': 'Offer', name: 'Team', price: '18', priceCurrency: 'USD' },
          ],
        },
        url: APP_URL,
        sameAs: PLAY_URL,
        author: { '@type': 'Person', name: 'Ahsan Mahmood', url: 'https://aoneahsan.com' },
        description:
          'Trizlink is a link-management platform: branded short links, bio pages, QR codes, click analytics and shared workspaces. Sign in with Google. There is no browser extension.',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
        founder: { '@type': 'Person', name: 'Ahsan Mahmood' },
      }),
    },
  ],

  i18n: { defaultLocale: 'en', locales: ['en'] },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: 'warn' },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // `docs/` is BOTH the published content dir and the home of the
          // fixed-path internal files docs/MANUAL-TASKS.md and docs/DONE-TASKS.md.
          // Keep the paths (the global rules fix them) but never publish them —
          // this repo is public.
          // 🔴 EVERY fixed-path internal file added to docs/ must be listed here.
          // DONE-TASKS.md was created on 2026-09-04 and shipped as a public page
          // (build/DONE-TASKS.html, and one entry in sitemap.xml) until it was
          // caught by grepping the BUILD OUTPUT rather than reading this list.
          // NOTE: `exclude` REPLACES the plugin defaults, so they are restated.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
            'DONE-TASKS.md',
          ],
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/trizlink-docs/edit/main/',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
        sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: 'date' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      { name: 'description', content: 'Documentation for Trizlink — branded short links, bio pages, QR codes, and click analytics. Maintained by Ahsan Mahmood.' },
      { name: 'keywords', content: 'trizlink, url shortener, short links, link in bio, bio link, qr code generator, link analytics, branded links, custom domains, utm builder, link management, link shortener docs' },
      { name: 'author', content: 'Ahsan Mahmood' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Trizlink Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
    },
    navbar: {
      title: 'Trizlink',
      logo: {
        alt: 'Trizlink logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs' },
        { to: '/getting-started/quick-start', label: 'Quick Start', position: 'left' },
        { to: '/about/about-the-author', label: 'Author', position: 'right' },
        { href: APP_URL, label: 'Open Trizlink', position: 'right' },
        { href: PLAY_URL, label: 'Android app', position: 'right' },
        { href: 'https://github.com/aoneahsan/trizlink-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Create your account', to: '/getting-started/create-account' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'FAQ', to: '/guides/faq' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Open Trizlink', href: APP_URL },
            { label: 'Android app (Google Play)', href: PLAY_URL },
            { label: 'Privacy policy', href: `${APP_URL}/privacy-policy` },
            { label: 'Docs source', href: 'https://github.com/aoneahsan/trizlink-docs' },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus. Trizlink — trizlink.com.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'jsx', 'yaml', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
