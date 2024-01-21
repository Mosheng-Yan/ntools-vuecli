const fs = require('fs')
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const { AXIOS_REPO } = require('../../config/repo-config')
const {
  logStyle,
  createSpinner,
  startSpinner,
  stopSpinner,
} = require('../../utils/log')
const runPnpmAdd = require('../../utils/terminal')
const checkDep = require('../../utils/checkDep')

const spinner = createSpinner('正在下载axios模板...')
const addAction = async (projectName, others) => {
  if (projectName === 'axios') {
    try {
      if (fs.existsSync('./src/service')) {
        throw new Error(
          logStyle(
            'error',
            './src/service 文件夹已存在，无法下载新的包到该目录下'
          )
        )
      } else {
        startSpinner(spinner)
        await download(AXIOS_REPO, 'src', { clone: true })
        stopSpinner(spinner, true, '下载成功')
        // 检测是否有axios依赖 check
        const spinner1 = createSpinner('正在检测axios依赖...', 'toggle9')
        startSpinner(spinner1)
        const isAxiosDep = await checkDep('axios')
        if (isAxiosDep) {
          stopSpinner(spinner1, true, '已经安装了axios依赖')
        } else {
          stopSpinner(spinner1, false, '没有安装axios依赖')
          const spinner2 = createSpinner('正在下载axios依赖...', 'arrow3')
          setTimeout(() => {
            spinner2.color = 'yellow'
          }, 3000)
          setTimeout(() => {
            spinner2.color = 'red'
          }, 6000)
          startSpinner(spinner2)
          try {
            await runPnpmAdd('pnpm', 'add', projectName)
            stopSpinner(spinner2, true, '下载axios依赖成功')
          } catch (error) {
            console.log(error.message)
            stopSpinner(spinner2, false, '下载axios依赖失败')
          }
        }
      }
    } catch (error) {
      console.log(error.message)
      stopSpinner(spinner, false, '下载失败')
    }
  }
}

module.exports = { addAction }
