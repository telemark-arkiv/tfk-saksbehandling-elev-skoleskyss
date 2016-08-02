'use strict'

const miss = require('mississippi')
const getTemplatePath = require('tfk-saksbehandling-elev-skoleskyss-templates')
const generateSammendrag = require('./generate-synopsis')

module.exports = miss.through((chunk, encoding, callback) => {
  var item = JSON.parse(chunk)
  var document = {}
  const templateFilePath = getTemplatePath('soknad')

  console.log(item._id + ': setup-templates-archive')

  document.data = {
    sammendrag: generateSammendrag(item)
  }

  document.template = templateFilePath

  if (item.documentInTemplates) {
    item.documentInTemplates.push(document)
  } else {
    item.documentInTemplates = [document]
  }

  return callback(null, JSON.stringify(item))
})
