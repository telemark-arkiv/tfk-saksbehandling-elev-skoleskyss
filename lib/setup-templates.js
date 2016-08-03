'use strict'

const miss = require('mississippi')
const getTemplatePath = require('tfk-saksbehandling-elev-skoleskyss-templates')
const generateArchiveTitleStart = require('./get-archive-title-start')
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
  var documentIn = {
    distribution: false,
    template: getTemplatePath('soknad'),
    archiveType: 'Dokument inn'
  }
  var documentOut = {
    distribution: true,
    template: getTemplatePath(getSvarbrevMal(item)),
    archiveType: 'Dokument ut'
  }
  const now = new Date()
  const then = new Date(parseInt(item.timeStamp, 10))
  const date = datePadding(now.getDate()) + '.' + datePadding(now.getMonth() + 1) + '.' + now.getFullYear()
  const ourDate = datePadding(then.getDate()) + '.' + datePadding(then.getMonth() + 1) + '.' + then.getFullYear()
  const documentOutTitleStart = generateArchiveTitleStart(getSvarbrevMal(item))
  const skoleAar = getSkoleAar()
  const skoleNavn = item.skoleData.name
  const elevNavn = item.dsfData.NAVN
  const data = {
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

  console.log(item._id + ': setup-templates')

  documentIn.data = data
  documentOut.data = data

  documentIn.archiveTitle = `Bussøknad skoleskyss - ${skoleAar} - ${skoleNavn} - ${elevNavn}`
  documentIn.archiveOffTitle = `Bussøknad skoleskyss - ${skoleAar} - ${skoleNavn}`

  documentOut.archiveTitle = `${documentOutTitleStart} - ${skoleAar} - ${skoleNavn} - ${elevNavn}`
  documentOut.archiveOffTitle = `${documentOutTitleStart} - ${skoleAar} - ${skoleNavn}`

  if (item.documentTemplates) {
    item.documentTemplates.push(documentIn)
    item.documentTemplates.push(documentOut)
  } else {
    item.documentTemplates = [documentIn, documentOut]
  }

  return callback(null, JSON.stringify(item))
})
