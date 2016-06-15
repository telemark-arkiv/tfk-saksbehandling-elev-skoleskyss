'use strict'

const tap = require('tap')
const getSvarbrevMal = require('../../lib/get-svarbrev-mal')
const svarbrevInnvilget = require('../data/svarbrev-innvilget.json')
const svarbrevAvslag = require('../data/svarbrev-avslag.json')
const svarbrevManuell = require('../data/svarbrev-manuell.json')
const svarbrevManuellHybel = require('../data/svarbrev-manuell-hybel.json')
const svarbrevManuellDelt = require('../data/svarbrev-manuell-delt.json')
const svarbrevManuellAnnen = require('../data/svarbrev-manuell-annen.json')

tap.equal(getSvarbrevMal(svarbrevInnvilget), 'innvilget', 'It returns innvilget for innvilget')

tap.equal(getSvarbrevMal(svarbrevAvslag), 'avslag', 'It returns avslag for avslag')

tap.equal(getSvarbrevMal(svarbrevManuell), 'midlertidig-manuell', 'It returns midlertidig-manuell for midlertidig-manuell')

tap.equal(getSvarbrevMal(svarbrevManuellHybel), 'midlertidig-hybel', 'It returns midlertidig-hybel for midlertidig-hybel')

tap.equal(getSvarbrevMal(svarbrevManuellDelt), 'midlertidig-delt', 'It returns midlertidig-delt for midlertidig-delt')

tap.equal(getSvarbrevMal(svarbrevManuellAnnen), 'midlertidig-annen', 'It returns midlertidig-annen for midlertidig-annen')
