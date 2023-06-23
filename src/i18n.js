const { readFileSync } = require('fs')

function Internationalization(lang = 'en') {
  lang = lang.split('-')[0]
  let raw = readFileSync('./src/commands/meta/i18n/' + lang + '.json', { encoding: 'utf-8' })
  return JSON.parse(raw)
}

module.exports = Internationalization
