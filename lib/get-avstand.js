'use strict'

module.exports = function getAvstand (item) {
  var avstand = ''

  if (item.bosted.bosted === 'folkeregistrert') {
    if (item['distance-see-dsf']) {
      avstand = item['distance-see-dsf'].data.distance
    }
  }

  if (item.bosted.bosted === 'delt') {
    if (item['distance-see-dsf'] && item['distance-see-delt']) {
      avstand = item['distance-see-dsf'].data.distance + ' og ' + item['distance-see-delt'].data.distance
    }
  }

  if (item.bosted.bosted === 'hybel') {
    if (item['distance-see-hybel']) {
      avstand = item['distance-see-hybel'].data.distance
    }
  }

  return avstand
}
