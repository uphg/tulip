
# Tulip (alpha)

[![Vue](https://img.shields.io/badge/vue-%3E%3D%203.2.0-brightgreen)](https://vuejs.org/)
[![MIT](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

---

一个开箱即用的 Vue3 UI 组件库。

该项目目前处于 alpha 阶段，不建议用于生产版本，组件内容及 API 仍可能会在下个版本中变更。

## 文档

当前组件库文档：[uphgs.com/tulip/](https://uphgs.com/tulip/)

## 安装

使用 npm 安装

```sh
npm install tulip-ui
```

## 全局引入

```js
import 'tulip-ui/styles/index.css'
import { createApp } from 'vue'
import tulip from 'tulip-ui'

const app = createApp(App)
app.use(tulip)
```

## 按需引入

```js
import { createApp } from 'vue'
import { TuButton, TuInput, TuSpace } from 'tulip-ui'

import 'tulip-ui/styles/vars.css'
import 'tulip-ui/styles/base.css'
import 'tulip-ui/styles/button.css'
import 'tulip-ui/styles/input.css'
import 'tulip-ui/styles/space.css'

const app = createApp(App)

app.use(TuButton)
app.use(TuInput)
app.use(TuSpace)
```
