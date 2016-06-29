'use strict'

module.exports = function getNavnSkole (item) {
  var skolenavn = ''

  if (item.skoleData) {
    skolenavn = item.skoleData.name
  }

  if (item.skoleadresse && item.skoleadresse.skoleNavn) {
    skolenavn = item.skoleadresse.skoleNavn
  }

  return skolenavn
}
