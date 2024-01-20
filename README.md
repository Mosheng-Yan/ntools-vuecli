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

  **注意：你需要选择使用TS来开发整个项目，因为由 nvc 生成的代码是TS代码**

- `nvc add axios` 添加由 TS 封装好的 axios 到项目

  **注意：需要确保网络通畅，当执行 `nvc add axios` 时，会在 github 的 [ntools-vuecli-temp](https://github.com/Mosheng-Yan/ntools-vuecli-temp) 的 axios 分支上下载代码到本地**

- `nvc view homeView` 添加 homeView 模块到项目
  
  如果您对自动生成路由有更高的要求，请使用 [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) 而不是 nvc，unplugin-vue-router 会像 nuxt 一样管理您项目中的路由结构
  **解释：**
  
  `nvc view homeView` 命令会在您项目的 src/views 中新建 homeView 目录
  
  并且会添加一下文件：
  
  homeView.vue（vue组件，homeView）
  
  homeView.api.ts（配合 `nvc add axios` 使用，homeView 组件所需的网络请求接口文件）
  
  homeView.meta.ts（homeView 组件自定义子路由信息文件）
  
  homeView.store.ts（homeView 组件状态管理文件）
