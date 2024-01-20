const { program } = require('commander')
const { addAction, addViewAction } = require('../actions/index')

const addCommand = () => {
  program
    .command('add <packageModule> [others...]')
    .description('添加模块，比如：nvc add axios')
    .action(addAction)
}

const addViewCommand = () => {
  program
    .command('view <cpn> [others...]')
    .description('创建view，比如：nvc view homeView')
    .action((name) => {
      addViewAction(name, `src/views/${name}`)
    })
}

module.exports = { addCommand, addViewCommand }
