'use strict'

module.exports = function getSvarbrevMal (item) {
  const resultat = item.saksbehandlingsResultat
  const bosted = item.bosted.bosted
  const grunnlag = item.grunnlag.grunnlag
  var mal = 'midlertidig-manuell'

  if (resultat.innvilget && !resultat.manuell) {
    mal = 'innvilget'
  }

  if (resultat.avslag && !resultat.manuell) {
    mal = 'avslag'
  }

  if (resultat.manuell) {
    if (bosted === 'hybel') {
      mal = 'midlertidig-hybel'
    }
    if (bosted === 'delt') {
      mal = 'midlertidig-delt'
    }
    if (grunnlag === 'Annet') {
      mal = 'midlertidig-annen'
    }
  }

  return mal
}
