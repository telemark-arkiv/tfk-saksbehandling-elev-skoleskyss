'use strict'

module.exports = item => {
  let avstand = ''

  if (item.bosted.bosted === 'folkeregistrert') {
    if (item['distance-see-dsf']) {
      avstand = item['distance-see-dsf'].distance
    }
  }

  if (item.bosted.bosted === 'delt') {
    if (item['distance-see-dsf'] && item['distance-see-delt']) {
      avstand = item['distance-see-dsf'].distance + ' og ' + item['distance-see-delt'].distance
    }
  }

  if (item.bosted.bosted === 'hybel') {
    if (item['distance-see-hybel']) {
      avstand = item['distance-see-hybel'].distance
    }
  }

  return avstand
}
