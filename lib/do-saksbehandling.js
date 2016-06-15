'use strict'

const miss = require('mississippi')
const config = require('../config')
const automaticYes = require('./automatic-yes')
const automaticNo = require('./automatic-no')

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var manual = true

  console.log(item._id + ': ' + item.dsfData.NAVN)
  console.log(item._id + ': do-saksbehandling')

  const yes = automaticYes(item)
  const no = automaticNo(item)

  manual = yes && no

  item.saksbehandlingsResultat = {
    ja: yes,
    nei: no,
    manuell: manual
  }

  return callback(null, JSON.stringify(item))
})
