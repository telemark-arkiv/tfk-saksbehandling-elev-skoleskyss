'use strict'

const miss = require('mississippi')
const automaticYes = require('./automatic-yes')
const automaticNo = require('./automatic-no')

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var manuell = true
  var result = 'manuell'

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

  if (innvilget && !manuell) {
    result = 'innvilget'
  }

  if (avslag && !manuell) {
    result = 'avslag'
  }

  if (manuell) {
    result = 'manuell'
  }

  item.CALLBACK_STATUS_MESSAGE += ' - ' + result

  return callback(null, JSON.stringify(item))
})
