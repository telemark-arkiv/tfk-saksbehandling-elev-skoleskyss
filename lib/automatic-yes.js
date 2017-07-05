'use strict'

const getAge = require('get-age')
const getBirthdateFromId = require('birthdate-from-id')
const gotDistanceProps = require('./got-distance-props')
const onlyByBoat = require('./only-by-boat')

module.exports = item => {
  const fodselsnummer = item.dsfData.FODT.toString() + item.dsfData.PERS.toString()
  const bostedListe = [
    'folkeregistrert',
    'delt'
  ]
  let result = false

  if (gotDistanceProps(item, 'distance-see-dsf')) {
    if (bostedListe.indexOf(item.bosted.bosted) > -1 && item['distance-see-dsf'].distanceValue >= 6200) {
      result = true
    }
  }

  if (item.bosted.bosted === 'folkeregistrert' && onlyByBoat(item.dsfData)) {
    result = true
  }

  if (gotDistanceProps(item, 'distance-see-dsf')) {
    if (bostedListe.indexOf(item.bosted.bosted) > -1 && item['distance-see-dsf'].distanceValue > 100000) {
      result = false
    }
  }

  if (getAge(getBirthdateFromId(fodselsnummer)) >= 26) {
    result = false
  }

  return result
}
