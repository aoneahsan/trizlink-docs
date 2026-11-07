import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for the TrizLink documentation site.
 * Every entry maps to a real .md file under docs/.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/create-account',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/phone-app-view',
        'features/short-links',
        'features/link-in-bio',
        'features/qr-codes',
        'features/analytics',
        'features/custom-domains',
        'features/link-organization',
        'features/tracking-and-utm',
        'features/workspaces-and-teams',
        'features/social-media',
        'features/widgets',
        'features/ai-features-byok',
        'features/ai-levels-and-voice',
        'features/api-access',
        'features/utility-tools',
        'features/browser-extension',
        'features/theme-customizer',
        'features/sharing',
        'features/app-updates',
        'features/release-management',
        'features/page-tours-and-walkthrough',
        'features/referrals',
      ],
    },
    {
      type: 'category',
      label: 'Moving to Trizlink',
      collapsed: true,
      link: { type: 'doc', id: 'compare/index' },
      items: [
        { type: 'category', label: 'URL shortening', collapsed: true, items: ['compare/bitly', 'compare/rebrandly', 'compare/short-io', 'compare/tinyurl', 'compare/dub', 'compare/bl-ink', 'compare/cuttly', 'compare/t2m', 'compare/switchy', 'compare/yourls', 'compare/linkly'] },
        { type: 'category', label: 'Link in bio', collapsed: true, items: ['compare/linktree', 'compare/beacons', 'compare/taplink', 'compare/carrd', 'compare/milkshake', 'compare/campsite-bio', 'compare/lnk-bio', 'compare/bio-link', 'compare/hopp', 'compare/komi', 'compare/pillar'] },
        { type: 'category', label: 'Social media management', collapsed: true, items: ['compare/buffer', 'compare/planable', 'compare/hootsuite', 'compare/later', 'compare/sprout-social', 'compare/socialbee', 'compare/publer', 'compare/metricool', 'compare/zoho-social', 'compare/agorapulse', 'compare/sendible', 'compare/loomly', 'compare/vista-social', 'compare/pallyy', 'compare/mixpost'] },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: ['guides/faq'],
    },
    {
      type: 'category',
      label: 'About',
      collapsed: true,
      items: [
        'about/privacy-and-data',
        'about/changelog',
        'about/about-the-author',
      ],
    },
  ],
};

export default sidebars;
