const { program } = require('commander')
const { createAction } = require('../actions/index')

const createCommands = () => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder, 比如：why create airbnb')
    .action(createAction)
}

module.exports = { createCommands }
