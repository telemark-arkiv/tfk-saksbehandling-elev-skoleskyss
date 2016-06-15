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

  const innvilget = automaticYes(item)
  const avslag = automaticNo(item)

  manual = innvilget && avslag

  item.saksbehandlingsResultat = {
    innvilget: innvilget,
    avslag: avslag,
    manuell: manual
  }

  return callback(null, JSON.stringify(item))
})
