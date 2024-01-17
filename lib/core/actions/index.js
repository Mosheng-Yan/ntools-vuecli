const fs = require('fs')

const files = fs.readdirSync(__dirname).filter((filename) => {
  return filename.endsWith('.js') && filename !== 'index.js'
})

for (const file of files) {
  Object.assign(module.exports, require('./' + file))
}
