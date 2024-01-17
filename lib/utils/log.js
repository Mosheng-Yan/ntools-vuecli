const chalk = require('chalk')
const logSymbols = require('log-symbols')

const logStyle = (style, message) => {
  switch (style) {
    case 'info':
      console.log(logSymbols.info, '', chalk.blue.bold(message))
      break
    case 'success':
      console.log(logSymbols.success, '', chalk.green.bold(message))
      break
    case 'warning':
      console.log(logSymbols.warning, '', chalk.yellow.bold(message))
      break
    case 'error':
      console.log(logSymbols.error, '', chalk.red.bold(message))
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

module.exports = logStyle
