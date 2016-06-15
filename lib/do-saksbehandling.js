'use strict'

const miss = require('mississippi')
const automaticYes = require('./automatic-yes')
const automaticNo = require('./automatic-no')

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var manuell = true

  console.log(item._id + ': ' + item.dsfData.NAVN)
  console.log(item._id + ': do-saksbehandling')

  const innvilget = automaticYes(item)
  const avslag = automaticNo(item)

  manuell = innvilget && avslag || !innvilget && !avslag

  item.saksbehandlingsResultat = {
    innvilget: innvilget,
    avslag: avslag,
    manuell: manuell
  }

  return callback(null, JSON.stringify(item))
})
