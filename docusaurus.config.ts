import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Data Leaders Handbook',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://handbook.dataleadership.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ryanvarley', // Usually your GitHub org/user name.
  projectName: 'data-leaders-handbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ryanvarley/delivering-datascience/tree/main/book/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Data Leaders Handbook',
      logo: {
        alt: 'Brilliant People, Exceptional Teams Logo',
        src: 'img/logo2.png',
      },
      items: [
        {
          href: 'https://newsletter.ryanvarley.com',
          label: 'Newsletter',
          position: 'left',
        },
        {
          href: 'https://github.com/ryanvarley/data-leaders-handbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Socials',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/ryanvarley/',
            },
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/ryanvarley.bsky.social',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Brilliant People, Exceptional Teams Newsletter',
              to: 'https://newsletter.ryanvarley.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ryanvarley/data-leaders-handbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ryan Varley. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
