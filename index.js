#!/usr/bin/env node
const homeOptions = require('./lib/core/home/index.js')
const { addCommands } = require('./lib/core/commands/index.js')
const isProjectRoot = require('./lib/utils/isProjectRoot.js')

isProjectRoot()
addCommands()
homeOptions()
