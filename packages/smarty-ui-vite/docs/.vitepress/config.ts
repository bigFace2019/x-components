const sidebar = {
  "/": [
    { text: "大脸猫的博客", link: "/" },
    {
      text: "vue组件",
      children: [
        { text: "Button 按钮", link: "/components/button/" },
        { text: "tree ", link: "/components/tree/" },

      ],
    },
    { text: "utils" },
    { text: "可视化" },
    { text: "数据结构与算法" },
    { text: "react" },
    { text: "Typescript" },
    { text: "其他" },
  ],
};
const config = {
  title: "大脸猫的博客",
  description: "大脸猫的博客",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
};

export default config;
