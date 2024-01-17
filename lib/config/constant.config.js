import fs from 'fs'
import path from 'path'
import { __dirname } from '../utils/getPath.js'

// package.json文件
const packageJsonPath = path.join(
  __dirname(import.meta.url),
  '../../',
  'package.json'
)

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

const VERSION = packageJson.version
const DESCRIPTION = packageJson.description
const REPOSITORY = packageJson.repository.url

export { VERSION, DESCRIPTION, REPOSITORY }
