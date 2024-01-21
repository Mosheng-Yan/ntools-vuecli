# ntools-vuecli

辅助 Vue 项目 - 企业脚手架工具包

这是一款专为简化项目初始化和配置流程而设计的工具。

## 介绍

- 💡 不敢想象有多好用，快是唯一目的

- 📦 内置 axios

- ⚡️ 快速构建企业级 vue 项目

- 🛠️ 持续更新工具包

- 🦾 解决重复的、繁琐的项目配置

- <img src="./public/img/typescript.png" width="15" style="margin-right: 3;"> 提供完整的 TS 包支持

## 安装 [![NPM Version](https://img.shields.io/npm/v/ntools-vuecli.svg)](https://www.npmjs.com/package/ntools-vuecli)

```
npm install -g ntools-vuecli
```

## 使用

- ntools-vuecli 简写 nvc

- `pnpm create vue` 创建 vue 项目

  **注意：您需要选择使用 TS 来开发整个项目，因为由 nvc 生成的代码是 TS 代码**

  **解释：**

  为了获取最新的项目初始化模板文件，nvc 摒弃了内置项目初始化模板文件，您可以通过 `pnpm create vue` 或者其他方式自由下载项目初始化模板文件，这也是为什么 nvc 被称为辅助 Vue 项目的原因，它旨在简化开发中大量的重复的操作

- `nvc add axios` 添加由 TS 封装好的 axios 到项目

  **注意：需要确保网络通畅，当执行 `nvc add axios` 时，nvc 会在 github 的 [ntools-vuecli-temp](https://github.com/Mosheng-Yan/ntools-vuecli-temp) 的 axios 分支上下载代码到本地**

- `nvc list` 从远程仓库中获取所有可用模块

- `nvc view homeView` 添加 homeView 模块到项目

  如果您对自动生成路由有更高的要求，请使用 [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) 而不是 nvc，unplugin-vue-router 会像 Nuxt.JS 一样管理您项目中的路由结构，unplugin-vue-router 非常好用，比起动态路由方案而言，文件路由更容易维护，值的推荐

  **注意：在首次执行 `nvc view <cpn>` 命令时，nvc 会对您项目的 src/router/index.ts 文件做一部分修改，添加动态导入子路由代码，但不会破坏项目初始化原有代码，建议您不要修改这个文件**

  **解释：**

  `nvc view homeView` 命令会在您项目的 src/views 中新建 homeView 目录

  并且会添加以下文件：

  homeView.vue（vue 组件，homeView）

  homeView.api.ts（配合 `nvc add axios` 使用，homeView 组件所需的网络请求接口文件）

  homeView.meta.ts（homeView 组件自定义子路由信息文件）

  homeView.store.ts（homeView 组件状态管理文件）
  
- `nvc update` 更新 nvc

  **注意：需要确保网络通畅，不用担心，nvc 会提示您配置代理**

  nvc 在未来可能会频繁更新，确保您使用的是最新版本的 nvc
