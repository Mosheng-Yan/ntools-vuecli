const fs = require('fs')
const path = require('path')
const { logStyle } = require('../utils/log')

const isProjectRoot = () => {
  // 获取当前工作目录
  const cwd = process.cwd()

  // 检查当前目录下是否存在package.json文件
  const packageJsonPath = path.join(cwd, 'package.json')
  const isProjectRoot = fs.existsSync(packageJsonPath)

  if (!isProjectRoot) {
    // console.error('请在项目根目录下运行此命令！')
    logStyle('error', '请在项目根目录下运行此命令！')
    process.exit(1)
  }

  // 如果在项目根目录下，则继续执行命令
}

module.exports = isProjectRoot
