const fs = require('fs')
const { logStyle } = require('./log')

function fileExistsSync(filePath) {
  try {
    return fs.statSync(filePath).isFile()
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false
    }
    throw error
  }
}

module.exports = fileExistsSync

// 使用示例
