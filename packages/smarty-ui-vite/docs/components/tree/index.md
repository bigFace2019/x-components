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


