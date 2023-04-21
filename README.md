<h1 align="center"><a href="https://uphgs.com/tulip/" target="_blank">Tulip</a></h1>

<div align="center">
  <img src="https://img.shields.io/badge/npm-v1.0.0-alpha.2-orange">
  <img src="https://img.shields.io/badge/license-MIT-green">
</div>

<p align="center">一个 Vue3 UI 组件库。</p>

## 文档

[uphgs.com/tulip/](https://uphgs.com/tulip/)

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
