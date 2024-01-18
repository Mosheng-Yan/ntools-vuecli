const { program } = require('commander')
const { addAction } = require('../actions/index')

const addCommands = () => {
  program
    .command('add <project> [others...]')
    .description('clone a repository into a folder, 比如：why create airbnb')
    .action(addAction)
}

module.exports = { addCommands }
