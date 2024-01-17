#!/usr/bin/env node
const homeOptions = require('./lib/core/home/index.js')
const { createCommands } = require('./lib/core/commands/index.js')
createCommands()
homeOptions()
