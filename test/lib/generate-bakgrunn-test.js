'use strict'

const tap = require('tap')
const generateBakgrunn = require('../../lib/generate-bakgrunn')
const expectedTextDistance = 'Vedtaket er fattet med bakgrunn i opplæringslovens § 7-2, hvor det står at elever i videregående opplæring som bor mer enn 6 kilometer fra skolen har rett til skoleskyss. Vi har beregnet din avstand til 10,71 km.'
const expectedTextBoat = 'Vedtaket er fattet med bakgrunn i opplæringslovens § 7-2, hvor det står at elever i videregående opplæring har rett til fri skoleskyss med ferge. Skolekortet ditt vil også være gyldig på reiser med buss til skolen (gjelder ikke Telemarksekspressen).'
const automatiskJaBaat = require('../data/automatisk-ja-baat.json')
const automatiskJaAvstand = require('../data/automatisk-ja-folkeregistrert-over.json')
const automatiskManuellAlder = require('../data/automatisk-ja-false-alder.json')

tap.equal(generateBakgrunn(automatiskJaBaat), expectedTextBoat, 'It returns text for boat')

tap.equal(generateBakgrunn(automatiskJaAvstand), expectedTextDistance, 'It returns text for distance')

tap.equal(generateBakgrunn(automatiskManuellAlder), '', 'It returns empty for manual')
