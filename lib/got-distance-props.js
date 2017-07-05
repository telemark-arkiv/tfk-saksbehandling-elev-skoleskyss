'use strict'

module.exports = (item, propName) => {
  let check = false

  if (item[propName] && item[propName].distanceValue) {
    check = true
  }
  return check
}
