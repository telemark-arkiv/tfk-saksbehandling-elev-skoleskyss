'use strict'

const miss = require('mississippi')
const createPdfFromTemplate = require('tfk-template-to-pdf')
const uuid = require('uuid')
const config = require('../config')

module.exports = miss.through(function (chunck, encoding, callback) {
  var item = JSON.parse(chunck)
  var documents = item.documents || []
  var documentsForDistribution = item.distribution.documents || []
  var templates = item.documentTemplates || []
  var options = {
    templateData: '',
    templateFilepath: '',
    documentFilepath: '',
    pdfServiceUrl: config.PDF_SERVICE_URL
  }
  var jobsToDo = templates.length
  var jobsDone = 0

  item.CALLBACK_STATUS_MESSAGE = 'Svarbrev produsert'

  function areWeDoneYet () {
    jobsDone++
    if (jobsToDo === jobsDone) {
      return callback(null, JSON.stringify(item))
    }
  }

  console.log(item._id + ': generate-documents')

  if (templates) {
    templates.forEach(function (document) {
      var prefix = document.distribution ? config.DISTRIBUTION_DIRECTORY_PATH : config.JOB_DIRECTORY_PATH
      var documentPath = prefix + '/' + uuid.v4() + '.pdf'
      options.templateData = document.data
      options.templateFilepath = document.template
      options.documentFilepath = documentPath

      createPdfFromTemplate(options, function (error, data) {
        if (error) {
          item.errors.push(error.toString())
          areWeDoneYet()
        } else {
          const doc = {
            title: document.archiveTitle,
            offTitle: document.archiveOffTitle,
            type: document.archiveType,
            document: documentPath,
            distribution: document.distribution
          }
          documents.push(doc)
          if (document.distribution) {
            documentsForDistribution.push(doc)
          }
          areWeDoneYet()
        }
      })
    })
  } else {
    return callback(null, JSON.stringify(item))
  }
})
