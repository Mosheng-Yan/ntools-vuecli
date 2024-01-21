const { program } = require('commander')
const {
  addAction,
  addViewAction,
  updateAction,
  listAction,
} = require('../actions/index')

// TODO: 下载模板先缓存到本地，下次创建模板时，直接从本地读取

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

const updateCommand = () => {
  program
    .command('update [others...]')
    .description('更新 nvc')
    .action(updateAction)
}

const listCommand = () => {
  program
    .command('list [others...]')
    .description('列出所有可下载模板')
    .action(listAction)
}

module.exports = { addCommand, addViewCommand, updateCommand, listCommand }
