import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import discoveryFeed from './src/plugins/discoveryFeed';
import { BLOG_DESCRIPTION, BLOG_PATH, BLOG_TITLE } from './src/data/blog';
import { OTHER_PLATFORMS, platformHref } from './src/data/platforms';

/**
 * Whether blog/ holds a post yet. Until it does, the blog stays off: an empty blog page would sit in sitemap.xml with
 * nothing on it, and a Blog link would point at it. The first post added to blog/ turns on the blog, its RSS and Atom
 * feeds, its sitemap entries, its place on /sitemap, /feed and /feed.xml, and the Blog links.
 */
const BLOG_DIR = fileURLToPath(new URL('./blog', import.meta.url));
const HAS_POSTS = existsSync(BLOG_DIR) && readdirSync(BLOG_DIR).some((name) => /\.mdx?$/.test(name));

// ---------------------------------------------------------------------------
// Trizlink — Documentation site config
// Maintained by the Trizlink team
// Product: https://trizlink.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://docs.trizlink.com';
const APP_URL = platformHref('web');
const PLAY_URL = platformHref('android');
const DISCOVERY_DESCRIPTION =
  'How Trizlink works, from the code: short links, bio pages, QR codes, click analytics that store no visitor IP address, and what is not switched on.';
/* Products speak as a team (owner-approved 2026-10-22): the site-wide JSON-LD names the
   Organization "The Trizlink team" as publisher and author; the owner stays its `founder`. */
const ORG_ID = `${SITE_URL}/#organization`;
const ORG_REF = { '@type': 'Organization', '@id': ORG_ID, name: 'The Trizlink team', url: APP_URL };

const config: Config = {
  title: 'Trizlink Docs',
  /* Slot 4 — the approved product tagline (`src/content/site.ts`), adopted at GATE 4 on
     2026-09-05 so the docs hero says what every other surface says.
     🔴 IT NAMES SOCIAL PUBLISHING, WHICH IS BUILT AND SWITCHED OFF, so the landing page's
     lede qualifies it in the next breath and the limit band names it outright. That is only
     true ON THIS PAGE — which is exactly why the site-wide `description` below no longer
     derives from this string. Owner ruling, same gate: point the site-wide description at
     the honest text instead of amending the approved tagline. */
  tagline: 'Short links, bio pages and social publishing in one workspace, with the analytics that tie them together.',
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
    { tagName: 'meta', attributes: { name: 'yandex-verification', content: '72e7e442c9337d4c' } },
    // 🔴 NO HARDCODED CANONICAL HERE. A `headTags` entry is emitted on EVERY page, so
    // `href: ${SITE_URL}/` told search engines that every page in this site is a duplicate
    // of the home page — the one instruction that can remove a whole docs site from search
    // while every build stays green. Docusaurus already emits a correct per-page canonical
    // from `url` + `baseUrl`; this entry only ever competed with it. Removed 2026-09-04
    // (found during the TASK-001 re-derivation). Verify in `build/`, never in this file.
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'Trizlink documentation updates',
        href: `${SITE_URL}/feed.xml`,
      },
    },
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
          'Documentation for Trizlink, a link-management platform for short links, bio pages, QR codes, and click analytics.',
        inLanguage: 'en',
        publisher: ORG_REF,
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
          highPrice: '9.99',
          offerCount: '3',
          /* Monthly billing, per month. Team is priced by the seat, from three seats (plans.ts → `perSeat`,
             `minSeats`); saying "$8.99" without the unit would be a third of what three seats cost. Corrected
             2026-10-30 (search audit AI-05): these read $6 / $18, the old app's prices. */
          offers: [
            { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
            { '@type': 'Offer', name: 'Pro', price: '9.99', priceCurrency: 'USD',
              priceSpecification: { '@type': 'UnitPriceSpecification', price: '9.99', priceCurrency: 'USD', unitText: 'MONTH' } },
            { '@type': 'Offer', name: 'Team', price: '8.99', priceCurrency: 'USD',
              priceSpecification: { '@type': 'UnitPriceSpecification', price: '8.99', priceCurrency: 'USD', unitText: 'seat per month, from 3 seats' } },
          ],
        },
        url: APP_URL,
        sameAs: PLAY_URL,
        author: ORG_REF,
        description:
          'Trizlink is a link-management platform: branded short links, bio pages, QR codes, click analytics and shared workspaces. Sign in with Google. There is no browser extension yet; it is deferred, not cancelled.',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'The Trizlink team',
        url: APP_URL,
        founder: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
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
            'PACKAGES.md',
          ],
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/trizlink-docs/edit/main/',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: HAS_POSTS && {
          path: 'blog',
          routeBasePath: BLOG_PATH.slice(1),
          blogTitle: BLOG_TITLE,
          blogDescription: BLOG_DESCRIPTION,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
          postsPerPage: 10,
          showReadingTime: false,
          // A post's last update comes from git, like a doc's: shown under the post, and its sitemap lastmod.
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          // Every author and tag is defined once, in blog/authors.yml (and blog/tags.yml when a post uses one).
          onInlineAuthors: 'throw',
          onInlineTags: 'throw',
          onUntruncatedBlogPosts: 'throw',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: BLOG_TITLE,
            description: BLOG_DESCRIPTION,
            copyright: 'Made by the Trizlink team.',
            language: 'en-GB',
          },
        },
        theme: { customCss: './src/css/custom.css' },
        /* No changefreq or priority (search audit 2026-10-30): Google ignores both, and a constant one on every URL
           says nothing true. lastmod stays, from git, the day the page's words changed. */
        sitemap: {
          changefreq: null,
          priority: null,
          lastmod: 'date',
          // The blog's tag, author, archive and later list pages only repeat its posts; each post is listed once.
          ignorePatterns: ['/blog/tags/**', '/blog/authors/**', '/blog/archive', '/blog/page/**'],
          // The blog's own page has no git date: it takes the newest date among the posts it lists.
          createSitemapItems: async ({ defaultCreateSitemapItems, ...params }) => {
            const items = await defaultCreateSitemapItems(params);
            const blogUrl = `${SITE_URL}${BLOG_PATH}`;
            const newest = items
              .filter((item) => item.url.startsWith(`${blogUrl}/`) && item.lastmod)
              .map((item) => item.lastmod as string)
              .sort()
              .at(-1);
            return items.map((item) => (item.url === blogUrl && !item.lastmod && newest ? { ...item, lastmod: newest } : item));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [[discoveryFeed, { description: DISCOVERY_DESCRIPTION }]],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      /* 🔴 THE SITE-WIDE DEFAULT, AND IT DELIBERATELY DOES NOT DERIVE FROM `tagline`.
         Docusaurus reuses the tagline as a default description on every page that does not
         set its own — 22 of them — and the tagline names social publishing, which is built
         and switched off. On the landing page a lede qualifies it one paragraph later; on
         those 22 nothing does, and an unqualified claim in a search result is read by people
         who never reach the page that would have corrected them. Owner ruling 2026-09-05:
         repoint the description rather than amend an approved string. This is slot 2's text,
         which was written to be true on its own. */
      { name: 'description', content: DISCOVERY_DESCRIPTION },
      { name: 'keywords', content: 'trizlink, url shortener, short links, link in bio, bio link, qr code generator, link analytics, branded links, custom domains, utm builder, link management, link shortener docs' },
      { name: 'author', content: 'The Trizlink team' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Trizlink Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'The Trizlink team' },
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
        ...(HAS_POSTS ? [{ to: BLOG_PATH, label: 'Blog', position: 'left' as const }] : []),
        {
          type: 'dropdown',
          label: 'Get Trizlink',
          position: 'right',
          items: [
            ...OTHER_PLATFORMS.map((platform) => ({ label: platform.name, href: platform.href })),
            { label: 'All apps', to: '/apps' },
          ],
        },
        { href: 'https://github.com/aoneahsan/trizlink-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Get Trizlink',
          items: [
            ...OTHER_PLATFORMS.map((platform) => ({ label: platform.name, href: platform.href })),
            { label: 'All apps', to: '/apps' },
          ],
        },
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Create your account', to: '/getting-started/create-account' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'FAQ', to: '/guides/faq' },
            ...(HAS_POSTS ? [{ label: 'Blog', to: BLOG_PATH }] : []),
            { label: 'Sitemap', to: '/sitemap' },
            { label: 'Feed', to: '/feed' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Privacy policy', href: `${APP_URL}/privacy-policy` },
            { label: 'Docs source', href: 'https://github.com/aoneahsan/trizlink-docs' },
          ],
        },
        {
          title: 'The Trizlink team',
          items: [
            { label: 'About the team', to: '/about/about-the-author' },
            { label: 'Contact', href: `${APP_URL}/contact` },
            { label: 'support@trizlink.com', href: 'mailto:support@trizlink.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trizlink. Built with Docusaurus. Trizlink — trizlink.com.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'jsx', 'yaml', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
