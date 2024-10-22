// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Королевство Гендальфа',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gendalf-portfolio-site.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'taZik616', // Usually your GitHub org/user name.
  projectName: 'gendalf-portfolio-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'ru'],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: 'en-GB',
  //       label: 'English',
  //     },
  //     ru: {
  //       label: 'Русский',
  //     },
  //   },
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/taZik616/gendalf-portfolio-site/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/taZik616/gendalf-portfolio-site/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/site-link-image.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'typescript, it, development, react, react native, graphql, personal blog, portfolio',
        },
      ],
      navbar: {
        title: 'Королевство Гендальфа',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Документы',
          },
          {to: '/blog', label: 'Блог', position: 'left'},
          {
            href: 'https://github.com/taZik616/gendalf-portfolio-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документы',
            items: [
              {
                label: 'Введение',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Контакты',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/taZik616',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/Gendalf_616',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gendalf Kingdom, built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
