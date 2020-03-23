const {
  description
} = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "前端资料",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [{
        text: "preRead",
        link: "/preReading/"
      },
      {
        text: "questionBank",
        link: "/questionbank/"
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org"
      }
    ],
    sidebar: {
      // 预读班部分
      "/preReading/": [{
          title: "初探学堂😄",
          collapsable: false,
          children: [""]
        },
        {
          title: "css 🏮",
          collapsable: false,
          children: ["css/", "css/bfc"]
        }
      ],
      '/questionbank/': [
        '', 
        {
          title: '面试题',
          collapsable: false,
          children: ['base']
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
};