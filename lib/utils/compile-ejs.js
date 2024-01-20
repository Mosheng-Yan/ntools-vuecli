const ejs = require('ejs')
const path = require('path')

const compile = (template, data) => {
  const templatePosition = `../templates/${template}`
  const templatePath = path.resolve(__dirname, templatePosition)

  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

module.exports = compile
