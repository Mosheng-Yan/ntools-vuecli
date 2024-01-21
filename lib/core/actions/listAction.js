const { Octokit } = require('@octokit/rest')
const { createSpinner, startSpinner, stopSpinner } = require('../../utils/log')

const listAction = async (name) => {
  const octokit = new Octokit()
  const spinner = createSpinner('正在获取远程仓库所有可用模块...')
  startSpinner(spinner)
  try {
    const result = await octokit.request('GET /repos/{owner}/{repo}/branches', {
      owner: 'Mosheng-Yan',
      repo: 'ntools-vuecli-temp',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    const branches = result.data
      .map((item) => item.name)
      .filter((item) => item !== 'main')
    stopSpinner(spinner, true, branches)
  } catch (error) {
    stopSpinner(spinner, false, '网络可能有问题')
    console.log(error)
  }
}

module.exports = { listAction }
