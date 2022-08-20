import { App } from "vue";
import { Button } from "./button";
import { Tree } from "./tree";
import { IInput } from './input'

import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import "uno.css";

// 导出单独组件
export { Button, SFCButton, JSXButton, Tree, IInput };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(Button.name, Button);
    app.component(Tree.name, Tree);

    app.component(IInput.name, IInput)
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
