import chalk from 'chalk'
import logSymbols from 'log-symbols'

const logStyle = (style, message) => {
  switch (style) {
    case 'info':
      console.log(logSymbols.info, '', chalk.blue(message))
      break
    case 'success':
      console.log(logSymbols.success, '', chalk.green(message))
      break
    case 'warning':
      console.log(logSymbols.warning, '', chalk.yellow(message))
      break
    case 'error':
      console.log(logSymbols.error, '', chalk.red(message))
      break

    default:
      console.log(message)
      break
  }
}

export default logStyle
