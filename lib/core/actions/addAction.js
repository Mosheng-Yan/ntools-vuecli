const { promisify } = require('util')
const { execSync } = require('child_process')
// const download = promisify(require('download-git-repo'))
const { AXIOS_REPO } = require('../../config/repo-config')

const addAction = async (projectName, others) => {
  if (projectName === 'axios') {
    try {
      console.log('下载中')
      await execSync(`git clone --branch ${projectName} ${AXIOS_REPO}`)
      console.log('下载完成')
    } catch (error) {
      console.log('下载失败', error)
    }
  }
}

module.exports = { addAction }
