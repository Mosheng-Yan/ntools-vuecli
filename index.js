#!/usr/bin/env node
const homeOptions = require('./lib/core/home/index.js')
const { addCommand, addViewCommand } = require('./lib/core/commands/index.js')
const isProjectRoot = require('./lib/utils/isProjectRoot.js')

isProjectRoot()
addCommand()
addViewCommand()
homeOptions()
