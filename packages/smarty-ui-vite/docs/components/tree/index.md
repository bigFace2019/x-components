# Tree 

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
    <div>
        <h3>实战 7：树形控件 —— Tree</h3>

        <Tree
            :data="data"
            show-checkbox
            @on-toggle-expand="handleToggleExpand"
            @on-check-change="handleCheckChange"
        ></Tree>
    </div>
</template>
<script>


export default {
    
    data () {
        return {
            data: [
                {
                    title: 'parent 1',
                    expand: true,
                    children: [
                        {
                            title: 'parent 1-1',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-1-1'
                                },
                                {
                                    title: 'leaf 1-1-2'
                                }
                            ]
                        },
                        {
                            title: 'parent 1-2',
                            children: [
                                {
                                    title: 'leaf 1-2-1'
                                },
                                {
                                    title: 'leaf 1-2-1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleToggleExpand (data) {
            console.log(data);
        },
        handleCheckChange (data) {
            console.log(data);
        }
    }
}
</script>
```

:::

## 图标按钮222

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
  <div class="flex flex-row">
    <SButton icon="edit" plain></SButton>
    <SButton icon="delete" plain></SButton>
    <SButton icon="share" plain></SButton>
    <SButton round plain icon="search">搜索</SButton>
  </div>
</template>
```
