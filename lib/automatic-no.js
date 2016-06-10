'use strict'

module.exports = function automaticNo (item) {
  var result = false

  if (item.grunnlag.grunnlag === 'Avstand' && item.bosted.bosted === 'folkeregistrert' && item['distance-see-dsf'].data.distanceValue < 5800) {
    result = true
  }

  if (item.grunnlag.grunnlag === 'Avstand' && item.bosted.bosted === 'hybel' && item['distance-see-hybel'].data.distanceValue < 5800) {
    result = true
  }

  if (item.grunnlag.grunnlag === 'Avstand' && item.bosted.bosted === 'delt') {
    if (item['distance-see-dsf'].data.distanceValue < 5800 && item['distance-see-delt'].data.distanceValue < 5800) {
      result = true
    }
  }

  return result
}
