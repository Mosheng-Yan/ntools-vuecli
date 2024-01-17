import { program } from 'commander'
import {
  VERSION,
  DESCRIPTION,
  REPOSITORY,
} from '../../config/constant.config.js'
import logStyle from '../../utils/log.js'

const homeOptions = () => {
  // Usage、nvc
  program
    .name('nvc')
    .usage('<command> [options]')
    .description(DESCRIPTION)
    .action(() => {
      console.log()
      logStyle('info', '欢迎使用 nvc 脚手架工具！\n')
      console.log('这是一款专为简化项目初始化和配置流程而设计的工具。\n')
      console.log(`用法：${logStyle('block', 'nvc [command] [options]')}\n`)
      console.log(
        `请访问 ${logStyle('herf', REPOSITORY)} 查看详细文档和更多用法。`
      )
    })

  // 版本信息
  program.version(VERSION)

  // help
  program.on('--help', function () {
    console.log('')
    console.log('其他:')
    console.log(
      ` 请访问 ${logStyle('herf', REPOSITORY)} 查看详细文档和更多用法。`
    )
  })

  program.showHelpAfterError()

  program.parse(process.argv)
}

export default homeOptions
