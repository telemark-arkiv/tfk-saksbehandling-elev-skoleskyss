'use strict'

const miss = require('mississippi')
const getTemplatePath = require('tfk-saksbehandling-elev-skoleskyss-templates')
const datePadding = require('./date-padding')
const getSkoleAar = require('get-skole-aar')
const getSvarbrevMal = require('./get-svarbrev-mal')
const generateSammendrag = require('./generate-synopsis')
const generateBakgrunn = require('./generate-bakgrunn')
const getNavnSkole = require('./get-navn-skole')
const getAvstand = require('./get-avstand')
const fixFullName = require('./fix-full-name')

module.exports = miss.through(function (chunk, encoding, callback) {
  var item = JSON.parse(chunk)
  var document = {}
  const templateFilePath = getTemplatePath(getSvarbrevMal(item))
  const now = new Date()
  const then = new Date(parseInt(item.timeStamp, 10))
  const date = datePadding(now.getDate()) + '.' + datePadding(now.getMonth() + 1) + '.' + now.getFullYear()
  const ourDate = datePadding(then.getDate()) + '.' + datePadding(then.getMonth() + 1) + '.' + then.getFullYear()

  console.log(item._id + ': setup-templates')

  document.data = {
    dato: date,
    datoSoknad: ourDate,
    navn: fixFullName(item.dsfData),
    adresse: item.dsfData.ADR || '',
    postnr: item.dsfData.POSTN,
    poststed: item.dsfData.POSTS,
    bakgrunn: generateBakgrunn(item),
    sammendrag: generateSammendrag(item),
    navnSkole: getNavnSkole(item),
    avstand: getAvstand(item),
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
