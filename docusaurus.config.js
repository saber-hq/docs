// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Saber Documentation",
  tagline: "Saber: Solana AMM and DEX",
  url: "https://developer.saber.so",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "saber-hq", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/saber-hq/docs/tree/master/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-VESYSPS1RV",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentation",
        logo: {
          alt: "Saber Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "about/intro",
            position: "left",
            label: "About",
          },
          {
            type: "doc",
            docId: "getting-started/wallets",
            position: "left",
            label: "Learn",
          },
          {
            type: "doc",
            docId: "developing/overview",
            position: "left",
            label: "Develop",
          },
          {
            label: "Chat",
            href: "https://chat.saber.so/",
            position: "right",
          },
          {
            href: "https://github.com/saber-hq/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro",
                to: "/docs/about/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://chat.saber.so/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Saber_HQ",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Brand Assets",
                href: "https://brand.saber.so/",
              },
              {
                label: "GitHub",
                href: "https://github.com/saber-hq/docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Saber Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
      },
      image: "img/banner.png",
      metadata: [{ name: "twitter:card", content: "summary_large_image" }],
    }),
};

module.exports = config;