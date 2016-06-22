'use strict'

const miss = require('mississippi')
const getSkoleAar = require('get-skole-aar')
const config = require('../config')

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)

  console.log(item._id + ': ' + item.dsfData.NAVN)
  console.log(item._id + ': setup-item')

  item.errors = []
  item.CALLBACK_STATUS_MESSAGE = config.CALLBACK_STATUS_MESSAGE
  item.distribution = {
    '_id': item._id,
    CALLBACK_STATUS_URL: item.CALLBACK_STATUS_URL,
    documentCreated: item.timeStamp,
    documents: [],
    documentTemplates: [],
    sendCopyToGuardian: false,
    recipientPersonalIdNumber: item.korData.uid,
    recipientName: item.dsfData.NAVN,
    svarUtTitle: 'Svar på søknad om skoleskyss'
  }

  return callback(null, JSON.stringify(item))
})
