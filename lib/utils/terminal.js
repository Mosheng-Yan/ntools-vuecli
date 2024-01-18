const { exec } = require('child_process')
const { logStyle } = require('./log')

const runPnpmAdd = (...args) => {
  // args type is array
  // ...args type is string
  const command = args.join(' ')
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        logStyle('error', `执行'${command}'命令时出现错误: ${error}`)
        console.error(`'${command}'的错误输出: ${stderr}`)
        reject(error, stderr)
        return
      }

      logStyle('info', `执行'${command}'命令时的标准输出:`)
      console.log(stdout)

      if (!stderr && !error) {
        const [, , command, packageName] = process.argv
        // if (command.includes('pnpm add')) {
        if (command === 'add') {
          logStyle('success', `成功添加${packageName}依赖`)
        }
        resolve()
      }
    })
  })
}

module.exports = runPnpmAdd
