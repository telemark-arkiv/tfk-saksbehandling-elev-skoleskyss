'use strict'

const onlyByBoat = require('./only-by-boat')

function isAutomaticInnvilget (item) {
  return item.saksbehandlingsResultat.innvilget && !item.saksbehandlingsResultat.manuell
}

function isInnvilgetByBoat (item) {
  return onlyByBoat(item.dsfData) && item.bosted.bosted !== 'hybel'
}

module.exports = function generateBakgrunn (item) {
  var bakgrunn = ''

  if (isAutomaticInnvilget(item)) {
    if (isInnvilgetByBoat(item)) {
      bakgrunn = 'Vedtaket er fattet med bakgrunn i opplæringslovens § 7-2, hvor det står at elever i videregående opplæring har rett til fri skoleskyss med ferge. Skolekortet ditt vil også være gyldig på reiser med buss til skolen (gjelder ikke Telemarksekspressen).'
    } else {
      bakgrunn = 'Vedtaket er fattet med bakgrunn i opplæringslovens § 7-2, hvor det står at elever i videregående opplæring som bor mer enn 6 kilometer fra skolen har rett til skoleskyss. Vi har beregnet din avstand til .'
      bakgrunn += item['distance-see-dsf'].data.distance
    }
  }

  return bakgrunn
}
