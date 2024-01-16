#!/usr/bin/env node
import fs from 'fs'
import { program } from 'commander'

program.name('nvc').usage('<command> [options]')

// 版本信息
const version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version
program.version(version)

program.showHelpAfterError()

program.parse(process.argv)
