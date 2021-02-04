module.exports = {
  title: 'XDSDK 文档中心',
  tagline: 'The tagline of my site',
  url: 'https://xindong.github.io',
  baseUrl: '/XDSDK-Doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xindong', // Usually your GitHub org/user name.
  projectName: 'XDSDK-Doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'XDSDK 文档中心',
      logo: {
        alt: 'XDSDK 文档中心',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
