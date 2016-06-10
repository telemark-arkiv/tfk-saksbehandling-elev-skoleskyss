'use strict'

const tap = require('tap')
const autoNo = require('../../lib/automatic-no')
const autoNoTrueFolkeregistrert = require('../data/automatisk-nei-folkeregistrert-under.json')
const autoNoTrueDelt = require('../data/automatisk-nei-delt-under.json')

tap.equal(autoNo(autoNoTrueFolkeregistrert), true, 'It returns true for folkeregistert adresse if < 5800')
tap.equal(autoNo(autoNoTrueDelt), true, 'It returns true for delt adresse if both < 5800')
