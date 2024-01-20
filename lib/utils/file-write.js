const fs = require('fs')
const path = require('path')
// const ncp = require('ncp')

function ensurePathExistsSync(pathName) {
  // 拿到目录
  const dirPath = path.dirname(pathName)
  if (!fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true }) // 如果是目录且不存在则创建，包含递归创建父级目录
    } catch (error) {
      if (error.code !== 'EEXIST') {
        throw error
      }
    }
  }
}

const writeToFile = async (content, path) => {
  ensurePathExistsSync(path)
  return fs.promises.writeFile(path, content)
}

module.exports = writeToFile
