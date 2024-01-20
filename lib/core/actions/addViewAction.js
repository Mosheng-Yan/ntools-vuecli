const path = require('path')
const fs = require('fs')
const compile = require('../../utils/compile-ejs')
const writeToFile = require('../../utils/file-write')
const { logStyle } = require('../../utils/log')
const fileExistsSync = require('../../utils/fileExistsSync')

const isFileExists = async (result, path) => {
  if (fileExistsSync(path)) {
    logStyle('error', `创建失败：${path} 已存在`)
  } else {
    await writeToFile(result, path)
    logStyle('success', `创建成功：${path}`)
  }
}

const addViewAction = async (name, dest) => {
  const compResult = await compile('vue-component.ejs', {
    name,
    lowerName: name.toLowerCase(),
  })
  const compPath = path.resolve(dest, `${name}.vue`)

  isFileExists(compResult, compPath)

  const apiResult = await compile('vue-api.ejs')
  const apiPath = path.resolve(dest, `${name}.api.ts`)
  isFileExists(apiResult, apiPath)

  const storeResult = await compile('vue-store.ejs')
  const storePath = path.resolve(dest, `${name}.store.ts`)
  isFileExists(storeResult, storePath)

  const metaResult = await compile('vue-meta.ejs', { name })
  const metaPath = path.resolve(dest, `${name}.meta.ts`)
  isFileExists(metaResult, metaPath)

  // TODO: 只创建一次
  // 获取项目中的路由文件
  const projectRouterPath = path.resolve(dest, '../../router/index.ts')
  let projectRouterBuffer = ''
  try {
    projectRouterBuffer = fs.readFileSync(projectRouterPath)
  } catch (error) {
    projectRouterBuffer = Buffer.from('')
    // console.error(`Error reading file: ${error.message}`)
  }
  // 获取本地的路由文件
  const localRouterPath = path.resolve(
    __dirname,
    '../../templates/vue-router.ejs'
  )
  let localRouterBuffer = ''
  try {
    localRouterBuffer = fs.readFileSync(localRouterPath)
  } catch (error) {
    console.error(`Error reading file: ${error.message}`)
  }

  const areFilesEqual = Buffer.compare(projectRouterBuffer, localRouterBuffer)
  if (areFilesEqual !== 0) {
    const routerResult = await compile('vue-router.ejs')
    const routerPath = path.resolve('src/router', `index.ts`)
    await writeToFile(routerResult, routerPath)
    logStyle(
      'warning',
      `请注意：nvc 用于初始化的src/router/index.ts 不存在，正在创建，仅在首次创建中...`
    )
    logStyle('success', `创建成功：${routerPath}`)
  }
}

module.exports = { addViewAction }
