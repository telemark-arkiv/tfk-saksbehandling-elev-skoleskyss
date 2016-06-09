'use strict'

module.exports = function automaticYes (item) {
  const bostedListe = [
    'folkeregistrert',
    'delt'
  ]
  var result = false

  if (bostedListe.indexOf(item.bosted.bosted) > -1 && item['distance-see-dsf'].data.distanceValue >= 6200) {
    result = true
  }

  return result
}
