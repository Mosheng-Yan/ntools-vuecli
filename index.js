#!/usr/bin/env node
const homeOptions = require('./lib/core/home/index.js')
const { addCommands } = require('./lib/core/commands/index.js')
addCommands()
homeOptions()
