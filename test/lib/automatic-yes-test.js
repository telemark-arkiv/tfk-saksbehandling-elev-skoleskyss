'use strict'

const tap = require('tap')
const autoYes = require('../../lib/automatic-yes')
const autoYesTrueFolkeregistrert = require('../data/automatisk-ja-folkeregistrert-over.json')
const autoYesTrueDelt = require('../data/automatisk-ja-delt-over.json')
const autoYesTrueFerry = require('../data/automatisk-ja-baat.json')

tap.equal(autoYes(autoYesTrueFolkeregistrert), true, 'It returns yes for folkeregistert adresse if >= 6200')

tap.equal(autoYes(autoYesTrueDelt), true, 'It returns yes for delt adresse if folkeregistrert is >= 6200')

tap.equal(autoYes(autoYesTrueFerry), true, 'It returns yes for Boat/ferry')
