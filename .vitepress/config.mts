import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueMotion Docs",
  description: "The official documentation of Vuemotion",
  head: [["link", { rel: "icon", href: "/logo.svg", type: "image/svg" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Team", link: "/team" },
      { text: "Sponsor", link: "https://afdian.com/a/vuemotion" },
    ],

    editLink: {
      pattern: 'https://github.com/Bug-Duck/vuemotion-docs/edit/main/:path'
    },

    sidebar: [
      {
        text: "Tutorial",
        items: [
          { text: "Installation", link: "/installation" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Animation", link: "/animating" },
          { text: "CLI Tools", link: "/cli" },
          { text: "Work with VueRouter", link: "/router" },
        ],
      },
      {
        text: "API Reference",
        items: [
          { text: "Overview", link: "/apis/index" },

          {
            text: "@vue-motion/core",
            link: "/apis/vuemotion-core/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/lib",
            link: "/apis/vuemotion-lib/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/export",
            link: "/apis/vuemotion-export/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/utils",
            link: "/apis/vuemotion-utils/index",
            collapsed: true,
          },

          {
            text: "@vue-motion/extension-chart",
            link: "/apis/vuemotion-extension-chart/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-code",
            link: "/apis/vuemotion-extension-code/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-emoji",
            link: "/apis/vuemotion-extension-emoji/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-geometry",
            link: "/apis/vuemotion-extension-geometry/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-google-fonts",
            link: "/apis/vuemotion-extension-google-fonts/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-layout",
            link: "/apis/vuemotion-extension-layout/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-lights",
            link: "/apis/vuemotion-extension-lights/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-markdown",
            link: "/apis/vuemotion-extension-markdown/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-math",
            link: "/apis/vuemotion-extension-math/index",
            collapsed: true,
            items: [
              {
                text: "NumberPlane",
                link: "/apis/vuemotion-extension-math/numberPlane",
              },
              { text: "MathFunction", link: "/apis/vuemotion-extension-math/mathFunction"}
            ],
          },
          {
            text: "@vue-motion/extension-mindmap",
            link: "/apis/vuemotion-extension-mindmap/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-platform",
            link: "/apis/vuemotion-extension-platform/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-skia",
            link: "/apis/vuemotion-extension-skia/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-table",
            link: "/apis/vuemotion-extension-table/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-three",
            link: "/apis/vuemotion-extension-three/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-typst",
            link: "/apis/vuemotion-extension-typst/index",
            collapsed: true,
          },
          {
            text: "@vue-motion/extension-ui",
            link: "/apis/vuemotion-extension-ui/index",
            collapsed: true,
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Bug-Duck/vuemotion",
      },
      {
        icon: "x",
        link: "https://twitter.com/bugduckteam",
      },
      {
        icon: "discord",
        link: "https://discord.gg/PUVcpkv8"
      }
    ],

    footer: {
      message: "Released under the Apache-2.0 license",
      copyright: "Copyright © 2023-present BugDuck Team & Dromara Community",
    },

    logo: "logo.svg",
  },
});
