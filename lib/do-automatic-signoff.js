'use strict'

module.exports = function doAutomaticSignoff (item) {
  var signoff = false

  if (item.saksbehandlingsResultat.manuell === false) {
    signoff = true
  }

  if (item.duplikatSoknad) {
    signoff = true
  }
  return signoff
}
