'use strict'

const tap = require('tap')
const onlyByBoat = require('../../lib/only-by-boat')
const trueZip = require('../data/only-by-boat-true-zip.json')
const trueStreet = require('../data/only-by-boat-true-street.json')
const falseZip = require('../data/only-by-boat-false-zip.json')
const falseStreet = require('../data/only-by-boat-false-street.json')

tap.equal(onlyByBoat(trueZip), true, 'It returns true for correct zip')

tap.equal(onlyByBoat(trueStreet), true, 'It returns true for correct street')

tap.equal(onlyByBoat(falseZip), false, 'It returns false for incorrect zip')

tap.equal(onlyByBoat(falseStreet), false, 'It returns false for incorrect street')
