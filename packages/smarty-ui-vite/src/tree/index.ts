import Tree from "./tree.vue";
import { App } from "vue";

// 导出Button组件
export { Tree };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(Tree.name, Tree);
  },
};
