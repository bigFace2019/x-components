import IForm from "./form.vue";
import IFormItem from "./form-item.vue";
import { App } from "vue";

// 导出Button组件
export { IForm, IFormItem };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(IForm.name, IForm);
    app.component(IFormItem.name, IFormItem);
  },
};
