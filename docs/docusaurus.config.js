// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IFCNodes - Dynamo Package for IFC Processing',
  tagline: 'Powerful IFC Processing for Dynamo Visual Programming',
  favicon: 'img/favicon.ico',

  url: 'https://BasselHarby.github.io',
  baseUrl: '/IFCNodes/',

  organizationName: 'BasselHarby',
  projectName: 'IFCNodes',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: '7moc_sPqEzMutEHo3U3wFQyRuoZrTYJvBydLXKh8-l0',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'IFCNodes is a Dynamo package for loading, querying, filtering, and visualizing IFC files. Features include clash detection, AI-powered chat, geometry extraction, and more.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'IFC, Dynamo, BIM, Revit, IFC processing, building information modeling, openBIM, buildingSMART, AEC, architecture, engineering, construction',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'IFCNodes - Dynamo Package for IFC Processing',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: 'Powerful IFC processing nodes for Dynamo. Load, query, filter, and visualize IFC/BIM models with AI-powered chat functionality.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
  ],

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
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'IFCNodes',
        logo: {
          alt: 'IFCNodes Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/BasselHarby/IFCNodes',
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
                to: '/getting-started',
              },
              {
                label: 'Node Reference',
                to: '/nodes/ifc-reader',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/BasselHarby/IFCNodes',
              },
              {
                label: 'Dynamo Forum',
                href: 'https://forum.dynamobim.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IFCNodes. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      },
    ],
  ],
};

export default config;