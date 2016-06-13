'use strict'

const gotProps = require('./got-props')

module.exports = function automaticYes (item) {
  const bostedListe = [
    'folkeregistrert',
    'delt'
  ]
  var result = false

  if (gotProps(item, 'distance-see-dsf')) {
    if (bostedListe.indexOf(item.bosted.bosted) > -1 && item['distance-see-dsf'].data.distanceValue >= 6200) {
      result = true
    }
  }

  return result
}
