module.exports = {
  title: 'XDSDK 文档中心',
  tagline: 'The tagline of my site',
  url: 'https://xindong.github.io',
  baseUrl: '/XDSDK-Doc/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xindong', // Usually your GitHub org/user name.
  projectName: 'XDSDK-Doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'XDSDK',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [{
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'XDSDK',
          position: 'left',
        },

        {
          href: 'https://github.com/xindong/XDSDK-Doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {}
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
