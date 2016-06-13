'use strict'

module.exports = function (item, propName) {
  var check = false

  if (item[propName] && item[propName].data && item[propName].data.distanceValue) {
    check = true
  }
  return check
}
