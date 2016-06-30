'use strict'

const goorl = require('goorl')
const miss = require('mississippi')
const config = require('../config')
const jobKeys = [
  'distance-see-dsf',
  'distance-see-hybel',
  'distance-see-delt'
]

module.exports = miss.through((chunk, encoding, callback) => {
  var item = JSON.parse(chunk)
  var jobs = []

  console.log(item._id + ': ' + 'fix-long-urls')

  jobKeys.forEach((key) => {
    if (item[key]) {
      jobs.push({
        id: key,
        content: item[key]
      })
    }
  })

  const next = () => {
    if (jobs.length > 0) {
      const job = jobs.pop()
      const options = {
        key: config.GOOGLE_API_KEY,
        url: job.content.data.staticMapUrl
      }
      goorl(options, (error, url) => {
        if (error) {
          item.errors.push(error)
        } else {
          item[job.id].data.staticMapUrl = url
        }
        next()
      })
    } else {
      return callback(null, JSON.stringify(item))
    }
  }

  next()
})
