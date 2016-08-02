'use strict'

const fs = require('fs')
const miss = require('mississippi')

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var documentsForDistribution = item.distribution.documents || []
  var documentsIn = item.documentsIn || []

  if (item.errors.length > 0) {
    console.log(item._id + ': cleanup-documents')

    documentsForDistribution.forEach(function (doc) {
      fs.unlinkSync(doc.document)
    })

    documentsIn.forEach(function (doc) {
      fs.unlinkSync(doc.document)
    })
  }

  return callback(null, JSON.stringify(item))
})
