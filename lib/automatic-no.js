'use strict'

const gotProps = require('./got-props')

module.exports = function automaticNo (item) {
  var result = false

  if (gotProps(item, 'distance-see-dsf')) {
    if (item.grunnlag.grunnlag === 'Avstand' && item.bosted.bosted === 'folkeregistrert' && item['distance-see-dsf'].data.distanceValue < 5800) {
      result = true
    }
  }

  if (gotProps(item, 'distance-see-hybel')) {
    if (item.grunnlag.grunnlag === 'Avstand' && item.bosted.bosted === 'hybel' && item['distance-see-hybel'].data.distanceValue < 5800) {
      result = true
    }
  }

  if (gotProps(item, 'distance-see-dsf') && gotProps(item, 'distance-see-delt')) {
    if (item.grunnlag.grunnlag === 'Avstand' && item.bosted.bosted === 'delt') {
      if (item['distance-see-dsf'].data.distanceValue < 5800 && item['distance-see-delt'].data.distanceValue < 5800) {
        result = true
      }
    }
  }

  return result
}
