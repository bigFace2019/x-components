import IInput from "./input.vue";

import { App } from "vue";

// 导出Button组件
export { IInput };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(IInput.name, IInput);
  },
};
