'use strict'

const tap = require('tap')
const gotDistanceProps = require('../../lib/got-distance-props')
const propsOk = require('../data/automatisk-ja-delt-over.json')
const propsMissing = require('../data/props-missing.json')

tap.equal(gotDistanceProps(propsOk, 'distance-see-dsf'), true, 'It returns true for props ok')

tap.equal(gotDistanceProps(propsMissing, 'distance-see-delt'), false, 'It returns false for props missing, top level')

tap.equal(gotDistanceProps(propsMissing, 'distance-see-hybel'), false, 'It returns true for props missing, middle level')

tap.equal(gotDistanceProps(propsMissing, 'distance-see-dsf'), false, 'It returns true for props missing, low level')
