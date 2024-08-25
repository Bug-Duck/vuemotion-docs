import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueMotion Documentation",
  description: "The official documentation of Vuemotion",
  head: [['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Basic',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Bug-Duck/vuemotion',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/bugduckteam',
      },
    ],

    footer: {
      message: 'Released under the Apache-2.0 license',
      copyright: 'Copyright © 2023-present BugDuck Team & Dromara Community',
    },

    logo: 'logo.svg',
  }
})
