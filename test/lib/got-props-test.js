'use strict'

const tap = require('tap')
const gotProps = require('../../lib/got-props')
const propsOk = require('../data/automatisk-ja-delt-over.json')
const propsMissing = require('../data/props-missing.json')

tap.equal(gotProps(propsOk, 'distance-see-dsf'), true, 'It returns true for props ok')

tap.equal(gotProps(propsMissing, 'distance-see-delt'), false, 'It returns false for props missing, top level')

tap.equal(gotProps(propsMissing, 'distance-see-hybel'), false, 'It returns true for props missing, middle level')

tap.equal(gotProps(propsMissing, 'distance-see-dsf'), false, 'It returns true for props missing, low level')
