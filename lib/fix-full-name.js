'use strict'

const capitalize = require('capitalize')

module.exports = function fixFullName (item) {
  var name = capitalize.words(item['NAVN-F'].toLowerCase())

  if (item['NAVN-M'] && item['NAVN-M'] !== '') {
    name += ' ' + capitalize.words(item['NAVN-M'].toLowerCase())
  }

  name += ' ' + capitalize.words(item['NAVN-S'].toLowerCase())

  return name
}
