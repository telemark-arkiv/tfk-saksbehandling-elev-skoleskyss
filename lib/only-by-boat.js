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
  ],
  '3770': [
    'Tåtøyveien',
    'Søndre Tåtøy',
    'Steinsundveien',
    'Kirkholmen',
    'Lille Kirkholmen',
    'Furuholmen',
    'Nessundholmane',
    'Muffetangveien',
    'Leirdalsveien',
    'Søndre Bærøyveien',
    'Bærøytangen',
    'Østre Bærøy',
    'Bærøykjerringa',
    'Bærøyknausene',
    'Bratten',
    'Mellomkollen',
    'Skarholmane',
    'Sauøya',
    'Saltskjærholmen'
  ]
}

module.exports = function onlyByBoat (data) {
  var result = false

  if (zips.indexOf(data.POSTN) > -1) {
    result = true
  } else if (Object.keys(streets).indexOf(data.POSTN)) {
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
