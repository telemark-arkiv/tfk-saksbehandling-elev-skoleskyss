'use strict'

const fs = require('fs')
const miss = require('mississippi')

module.exports = miss.through((chunck, encoding, callback) => {
  var item = JSON.parse(chunck)
  if (item.dsfError) {
    return callback(null, JSON.stringify(item))
  }

  var documentsToArchive = item.archive.documentsIn

  console.log(item._id + ': encode-documents-to-archive')

  item.documentsIn.forEach(function (doc) {
    var document = fs.readFileSync(doc.document)
    documentsToArchive.push({
      title: doc.title,
      data: document.toString('base64'),
      type: doc.type
    })
  })

  return callback(null, JSON.stringify(item))
})
