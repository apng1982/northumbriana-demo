import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Northumbriana',
  tagline: 'Northumberland\'s Culture and Heritage',
  favicon: 'img/favicon.ico',

  // TODO - This will need updating when deployed to prod
  url: 'https://your-docusaurus-site.example.com',
  // TODO - This will probs need updating to / when deployed to prod
  baseUrl: '/northumbriana-demo/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'northumbriana', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.

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
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Northumbriana',
      logo: {
        alt: 'Northumbriana',
        src: 'img/logo.png',
      },
      items: [
        {to: '/contact', label: 'Contact Us', position: 'right'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'External Links',
          items: [
            {
              label: 'The Northumbrian Small Pipes',
              to: 'https://www.nspipes.co.uk',
            },
            {
              label: 'Morpeth Music Society',
              to: 'https://www.morpeth-musoc.org.uk/',
            },
            {
              label: 'Morpeth Chantry Bagpipe Museum',
              to: 'https://www.bagpipemuseum.org.uk/',
            },
            {
              label: 'The Northumbrian Pipers\' Society',
              to: 'https://www.northumbrianpipers.org.uk/',
            },
            {
              label: 'Mid-Northumberland Chorus',
              to: 'https://midnorthumberlandchorus.org.uk/index.html',
            },
            {
              label: 'Language Society (Sister Site)',
              to: 'https://northumbrianlanguagesociety.co.uk/',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Morpeth Gathering on Facebook',
              href: 'https://www.facebook.com/morpeth.gathering',
            },
            {
              label: 'Morpeth Antiquarian Society on Facebook',
              href: 'https://www.facebook.com/MorpethAntiquarians',
            },
            {
              label: 'Language Society on Facebook',
              href: 'https://www.facebook.com/profile.php?id=100066714247623',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
