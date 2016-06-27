'use strict'

const miss = require('mississippi')
const getTemplatePath = require('tfk-saksbehandling-elev-skoleskyss-templates')
const datePadding = require('./date-padding')
const getSkoleAar = require('get-skole-aar')
const getSvarbrevMal = require('./get-svarbrev-mal')
const generateSammendrag = require('./generate-synopsis')

module.exports = miss.through(function (chunk, encoding, callback) {
  var item = JSON.parse(chunk)
  var document = {}
  const templateFilePath = getTemplatePath(getSvarbrevMal(item))
  const now = new Date()
  const date = datePadding(now.getDate()) + '.' + datePadding(now.getMonth() + 1) + '.' + now.getFullYear()

  console.log(item._id + ': setup-templates')

  document.data = {
    dato: date,
    datoSoknad: item.timeStamp,
    navn: item.dsfData.NAVN,
    adresse: item.dsfData.ADR || '',
    postnummer: item.dsfData.POSTN,
    poststed: item.dsfData.POSTS,
    sammendrag: generateSammendrag(item),
    skolear: getSkoleAar()
  }

  document.template = templateFilePath

  if (item.distribution.documentTemplates) {
    item.distribution.documentTemplates.push(document)
  } else {
    item.distribution.documentTemplates = [document]
  }

  return callback(null, JSON.stringify(item))
})
