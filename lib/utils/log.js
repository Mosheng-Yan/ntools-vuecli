const chalk = require('chalk')
const logSymbols = require('log-symbols')
const ora = require('ora')

const logStyle = (style, message) => {
  switch (style) {
    case 'info':
      console.log(logSymbols.info, chalk.blue(message))
      break
    case 'success':
      console.log(logSymbols.success, chalk.green(message))
      break
    case 'warning':
      console.log(logSymbols.warning, chalk.yellow(message))
      break
    case 'error':
      console.error(logSymbols.error, chalk.red.bold(message))
      break

    case 'block':
      return chalk.black.bgWhite(message)
    case 'herf':
      return chalk.white.bold.underline(message)
    default:
      console.log(message)
      break
  }
}

// createSpinner(text)：创建一个新的spinner，传入一个文本作为spinner的提示
function createSpinner(text, spinner = 'dots') {
  return ora({
    text: chalk.blue(text),
    // spinner颜色，不是文字颜色
    color: 'blue',
    spinner: spinner,
  })
}

// startSpinner(spinner)：开始一个spinner
function startSpinner(spinner) {
  spinner.start()
}

// stopSpinner(spinner, isSuccess, text)：停止一个spinner。传入一个布尔值表示操作是否成功，以及一个文本作为停止后的提示
function stopSpinner(
  spinner,
  isSuccess,
  text,
  successColor = 'green',
  failColor = 'red'
) {
  if (isSuccess) {
    spinner.succeed(chalk[successColor](text))
  } else {
    spinner.fail(chalk[failColor](text))
  }
}

module.exports = {
  logStyle,
  createSpinner,
  startSpinner,
  stopSpinner,
}
