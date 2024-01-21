const axios = require('axios')
const semver = require('semver')
const { HttpsProxyAgent } = require('https-proxy-agent')
const inquirer = require('inquirer')
const {
  createSpinner,
  startSpinner,
  stopSpinner,
  logStyle,
} = require('../../utils/log')
const { REMOTEPACKAGE_URL } = require('../../config/repo-config')
const runPnpmAdd = require('../../utils/terminal')

const updateAction = async (name) => {
  // 配置代理
  const isHttpsProxyResult = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'isHttpsProxy',
      message: '是否配置代理？',
    },
  ])
  let HttpsProxy = ''
  if (isHttpsProxyResult.isHttpsProxy) {
    const httpsProxyResult = await inquirer.prompt([
      {
        type: 'input',
        name: 'HttpsProxy',
        message: '请输入代理地址：',
      },
    ])
    HttpsProxy = httpsProxyResult.HttpsProxy
  }

  const spinner = createSpinner('检查更新中...', 'toggle9')
  startSpinner(spinner)
  // const localPackage = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
  const localVersion = require('../../../package.json').version

  axios
    .get(REMOTEPACKAGE_URL, {
      // 'http://127.0.0.1:7890'
      httpsAgent: HttpsProxy ? new HttpsProxyAgent(HttpsProxy) : null,
    })
    .then((response) => {
      const remotePackage = response.data
      const remoteVersion = remotePackage.version
      // 比较版本号
      if (semver.eq(localVersion, remoteVersion)) {
        stopSpinner(spinner, true, '已经是最新版本')
        console.log(
          `本地版本：${logStyle(
            'block',
            localVersion
          )}，远程仓库版本：${logStyle('block', remoteVersion)}`
        )
      } else {
        stopSpinner(spinner, false, '本地版本和远程仓库版本不一致。')
        console.log(
          `本地版本：${logStyle(
            'block',
            localVersion
          )}，远程仓库版本：${logStyle('block', remoteVersion)}`
        )
        // 用户选择是否更新版本
        inquirer
          .prompt([
            {
              type: 'confirm',
              name: 'isUpdate',
              message: '是否更新版本？',
            },
          ])
          .then(async (answers) => {
            const spinner1 = createSpinner('更新中...')
            if (answers.isUpdate) {
              startSpinner(spinner1)
              await runPnpmAdd('npm', 'install', '-g', 'ntools-vuecli@latest')
              stopSpinner(spinner1, true, '更新成功')
              return
            }
            inquirer
              .prompt([
                {
                  type: 'confirm',
                  name: 'isUpdate',
                  message: '确定不更新吗？',
                },
              ])
              .then(async (answers) => {
                if (answers.isUpdate) {
                  stopSpinner(spinner1, false, '已取消更新')
                  return
                }
                const spinner2 = createSpinner('更新中...')
                startSpinner(spinner2)
                await runPnpmAdd('npm', 'install', '-g', 'ntools-vuecli@latest')
                stopSpinner(spinner2, true, '更新成功')
              })
          })
      }
    })
    .catch((error) => {
      logStyle('error', '获取远程仓库版本号失败，请检查网络连接或使用代理')
      console.error(error)
    })
}

module.exports = { updateAction }
