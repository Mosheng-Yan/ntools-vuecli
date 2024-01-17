import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = (fileURL) => {
  return path.dirname(fileURLToPath(fileURL))
}

const __filename = (fileURL) => {
  return fileURLToPath(fileURL)
}

export { __filename, __dirname }
