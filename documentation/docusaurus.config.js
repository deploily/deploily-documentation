



// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import { ProvidePlugin } from "webpack";


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Deploily',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'Deploily',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_name.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar', // Utilisez "docsSidebar" pour pointer vers la sidebar des documents
            position: 'left',
            label: 'Docs', // Ce sera le label affiché dans le menu
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/deploily',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started', // Lien vers la deuxième page
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Deploily Cloud',
                href: 'https://deploily.cloud',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/deploily',
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/deploily",
              }, {
                label: "LinkedIn",
                href: "https://www.linkedin.com/showcase/deploily",
              },
              {
                label: 'Transformatek',
                href: 'https://transformatek.dz',
              },
            ],
          },
        ],
        logo: {
          alt: "Company Logo",
          src: "/img/logo_name_white.png", // Replace with your actual logo path
          href: "/",
        },
        copyright: `Copyright © ${new Date().getFullYear()} Transformatek.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    "docusaurus-plugin-sass",
    // Add custom webpack config to make @stoplight/elements work
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve("process/browser"),
            }),
          ],
          resolve: {
            fallback: {
              buffer: require.resolve("buffer"),
              stream: false,
              path: false,
              process: false,
            },
          },
        };
      },
    }),
  ],
};

export default config;

