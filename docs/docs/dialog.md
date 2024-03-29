# Dialog 弹框

Dialog 弹出对话框组件

## 基本用法

用函数调用的方式快捷打开

::: demo

dialog/base

:::

## Dialog 属性 & useDialog Options 参数

| 名称         | 说明                   | 类型                                                    | 默认值      |
| ------------ | ---------------------- | ------------------------------------------------------- | ----------- |
| title        | 标题                   | `string`                                                | `undefined` |
| content      | 内容                   | `string`                                                | `undefined` |
| status       | 状态                   | `'success' \|'warning' \|'info' \|'error'`              | `undefined` |
| confirm-text | 确认按钮文本内容       | `string`                                                | `undefined` |
| cancel-text  | 取消按钮文本内容       | `string`                                                | `undefined` |
| on-close     | 点击右上角关闭按钮触发 | `(e: MouseEvent) => boolean \| Promise<boolean> \| any` | `undefined` |
| on-confirm   | 点击确认按钮触发       | `(e: MouseEvent) => boolean \| Promise<boolean> \| any` | `undefined` |
| on-cancel    | 点击取消按钮触发       | `(e: MouseEvent) => boolean \| Promise<boolean> \| any` | `undefined` |


<script setup lang="ts">
import DialogBase from '../examples/dialog/base.vue'
</script>
