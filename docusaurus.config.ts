import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// TrizLink — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// Product: https://trizlink.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://docs.trizlink.com';
const APP_URL = 'https://trizlink.com';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.trizlink.app';

const config: Config = {
  title: 'TrizLink Docs',
  tagline: 'Short links, link-in-bio pages, QR codes, and click analytics — documented.',
  favicon: 'img/favicon.svg',

  // Production URL — served from Firebase Hosting site `trizlink-docs` and
  // GitHub Pages (custom domain docs.trizlink.com).
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
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: `${SITE_URL}/` },
    },
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'TrizLink Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'apple-mobile-web-app-title', content: 'TrizLink Docs' },
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
        name: 'TrizLink Documentation',
        url: SITE_URL,
        description:
          'Documentation for TrizLink, a link-management platform for short links, link-in-bio pages, QR codes, and click analytics. Author: Ahsan Mahmood.',
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
        name: 'TrizLink',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url: APP_URL,
        sameAs: PLAY_URL,
        author: { '@type': 'Person', name: 'Ahsan Mahmood', url: 'https://aoneahsan.com' },
        description:
          'TrizLink is a link-management platform: branded short links, link-in-bio pages, QR codes, click analytics, workspaces, and a companion browser extension. Sign in with Google.',
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
          // fixed-path internal file docs/MANUAL-TASKS.md. Keep the path (the
          // global rule fixes it) but never publish it — this repo is public.
          // NOTE: `exclude` REPLACES the plugin defaults, so they are restated.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
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
      { name: 'description', content: 'Documentation for TrizLink — branded short links, link-in-bio pages, QR codes, and click analytics. Maintained by Ahsan Mahmood.' },
      { name: 'keywords', content: 'trizlink, url shortener, short links, link in bio, bio link, qr code generator, link analytics, branded links, custom domains, utm builder, link management, link shortener docs' },
      { name: 'author', content: 'Ahsan Mahmood' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'TrizLink Docs' },
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
      title: 'TrizLink',
      logo: {
        alt: 'TrizLink logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs' },
        { to: '/getting-started/quick-start', label: 'Quick Start', position: 'left' },
        { to: '/about/about-the-author', label: 'Author', position: 'right' },
        { href: APP_URL, label: 'Open TrizLink', position: 'right' },
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
            { label: 'Open TrizLink', href: APP_URL },
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
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus. TrizLink — trizlink.com.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'jsx', 'yaml', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
