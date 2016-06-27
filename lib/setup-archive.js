'use strict'

const miss = require('mississippi')
const getSkoleAar = require('get-skole-aar')
const datePadding = require('./date-padding')
const generateArchiveTitleStart = require('./get-archive-title-start')
const getSvarbrevMal = require('./get-svarbrev-mal')

function generateTitle (item) {
  var title = []
  title.push(generateArchiveTitleStart(getSvarbrevMal(item)))
  title.push(getSkoleAar())
  title.push(item.skoleData.name)
  title.push(item.dsfData.NAVN)

  return title.join(' - ')
}

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var now = new Date()
  var archive = {}

  console.log(item._id + ': setup-archive')

  archive._id = item._id
  archive.title = generateTitle(item)
  archive.documentTitle = 'Søknad'
  archive.documentType = 'Søknad'
  archive.documentCategory = 'Søknad'
  archive.CALLBACK_STATUS_URL = item.CALLBACK_STATUS_URL
  archive.date = datePadding(now.getDate()) + '.' + datePadding(now.getMonth() + 1) + '.' + now.getFullYear()
  archive.year = now.getFullYear()
  archive.documentCreated = item.timeStamp

  archive.student = {
    id: item.korData.uid,
    firstName: item.dsfData['NAVN-F'],
    middleName: item.dsfData['NAVN-M'],
    lastName: item.dsfData['NAVN-S'],
    email: item.korData.MobilePhone,
    phone: item.korData.Email,
    fullName: item.dsfData.NAVN
  }

  archive.documents = []

  item.archive = archive

  return callback(null, JSON.stringify(item))
})
