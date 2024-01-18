const { exec } = require('child_process')
const { promisify } = require('util')
const execAsync = promisify(exec)
// 不要忘记检测依赖是异步的
const checkDep = async (depName) => {
  try {
    const { stdout } = await execAsync(`pnpm list ${depName}`)
    if (stdout.includes(depName)) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = checkDep
