'use strict'

const tap = require('tap')
const fixFullName = require('../../lib/fix-full-name')
const names = require('../data/full-names.json')

names.forEach(function (item) {
  tap.equal(fixFullName(item.dsf), item.normal, item.dsf.NAVN + ' => ' + item.normal)
})
