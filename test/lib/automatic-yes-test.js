'use strict'

const tap = require('tap')
const autoYes = require('../../lib/automatic-yes')
const autoYesTrueFolkeregistrert = require('../data/automatisk-ja-folkeregistrert-over.json')
const autoYesTrueDelt = require('../data/automatisk-ja-delt-over.json')
const autoYesTrueFerry = require('../data/automatisk-ja-baat.json')
const autoYesFalseAge = require('../data/automatisk-ja-false-alder.json')
const autoYesFalseDistance = require('../data/automatisk-ja-false-distance.json')

tap.equal(autoYes(autoYesTrueFolkeregistrert), true, 'It returns yes for folkeregistert adresse if >= 6200')

tap.equal(autoYes(autoYesTrueDelt), true, 'It returns yes for delt adresse if folkeregistrert is >= 6200')

tap.equal(autoYes(autoYesTrueFerry), true, 'It returns yes for Boat/ferry')

tap.equal(autoYes(autoYesFalseAge), false, 'It returns false for age > 26')

tap.equal(autoYes(autoYesFalseDistance), false, 'It returns false for distance > 100 kilometers')
