'use strict'

const zips = [
  '3780',
  '3781',
  '3783'
]

const streets = {
  '3950': [
    'Skolelia',
    'Postvegen',
    'Sandøyvegen',
    'Søndre Maiens veg',
    'Nordre Maiens veg',
    'Dåpan',
    'Sandvegen',
    'Sundet',
    'Brønnane',
    'Sofiebakken',
    'Rotstien'
  ]
}

module.exports = data => {
  let result = false

  if (zips.indexOf(data.POSTN) > -1) {
    result = true
  } else if (Object.keys(streets).indexOf(data.POSTN) > -1) {
    const address = data.ADR
    const possibleStreets = streets[data.POSTN]

    if (possibleStreets) {
      possibleStreets.forEach(function (street) {
        if (address.toLowerCase().startsWith(street.toLocaleLowerCase())) {
          result = true
        }
      })
    }
  }

  return result
}
