'use strict'

const gotDistanceProps = require('./got-distance-props')
const onlyByBoat = require('./only-by-boat')

module.exports = function automaticYes (item) {
  const bostedListe = [
    'folkeregistrert',
    'delt'
  ]
  var result = false

  if (gotDistanceProps(item, 'distance-see-dsf')) {
    if (bostedListe.indexOf(item.bosted.bosted) > -1 && item['distance-see-dsf'].data.distanceValue >= 6200) {
      result = true
    }
  }

  if (item.bosted.bosted === 'folkeregistrert' && onlyByBoat(item.dsfData)) {
    result = true
  }

  return result
}
