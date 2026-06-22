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
        'features/api-access',
        'features/utility-tools',
        'features/browser-extension',
        'features/theme-customizer',
        'features/sharing',
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
