const { program } = require('commander')
const { logStyle } = require('../../utils/log')

const packageJson = require('../../../package.json')
const version = packageJson.version
const description = packageJson.description
const repository = packageJson.repository.url

const homeOptions = () => {
  // Usage、nvc
  program
    .name('nvc')
    .usage('<command> [options]')
    .description(description)
    .action(() => {
      console.log()
      logStyle('info', '欢迎使用 nvc 脚手架工具！\n')
      console.log('这是一款专为简化项目初始化和配置流程而设计的工具。\n')
      console.log(`用法：${logStyle('block', 'nvc [command] [options]')}\n`)
      console.log(
        `请访问 ${logStyle('herf', repository)} 查看详细文档和更多用法。`
      )
    })
  // 版本信息
  program.version(version)
  // help
  program.on('--help', function () {
    console.log('')
    console.log('其他:')
    console.log(
      ` 请访问 ${logStyle('herf', repository)} 查看详细文档和更多用法。`
    )
  })

  program.showHelpAfterError()

  program.parse(process.argv)
}

module.exports = homeOptions
