'use strict'

const gotDistanceProps = require('./got-distance-props')

module.exports = item => {
  let result = false

  if (gotDistanceProps(item, 'distance-see-dsf')) {
    if (item.grunnlag.grunnlag === 'Avstand' && item.bosted.bosted === 'folkeregistrert' && item['distance-see-dsf'].distanceValue < 5800) {
      result = true
    }
  }

  if (gotDistanceProps(item, 'distance-see-hybel')) {
    if (item.grunnlag.grunnlag === 'Avstand' && item.bosted.bosted === 'hybel' && item['distance-see-hybel'].distanceValue < 5800) {
      result = true
    }
  }

  if (gotDistanceProps(item, 'distance-see-dsf') && gotDistanceProps(item, 'distance-see-delt')) {
    if (item.grunnlag.grunnlag === 'Avstand' && item.bosted.bosted === 'delt') {
      if (item['distance-see-dsf'].distanceValue < 5800 && item['distance-see-delt'].distanceValue < 5800) {
        result = true
      }
    }
  }

  return result
}
