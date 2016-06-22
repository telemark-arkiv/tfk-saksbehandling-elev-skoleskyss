'use strict'

module.exports = function getArchiveTitleStart (mal) {
  var title = 'Foreløpig svar – bussøknad skoleskyss'

  if (mal === 'innvilget') {
    title = 'Innvilget – bussøknad skoleskyss'
  }

  if (mal === 'avslag') {
    title = 'Avslag – bussøknad skoleskyss'
  }

  if (mal === 'midlertidig-hybel') {
    title = 'Hybel – bussøknad skoleskyss'
  }

  if (mal === 'midlertidig-delt') {
    title = 'Delt bosted – bussøknad skoleskyss'
  }

  if (mal === 'midlertidig-annen') {
    title = 'Dokumentasjon – bussøknad skoleskyss'
  }

  return title
}
