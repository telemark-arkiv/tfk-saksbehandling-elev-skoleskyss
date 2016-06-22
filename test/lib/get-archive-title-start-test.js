'use strict'

const tap = require('tap')
const getArchiveTitleStart = require('../../lib/get-archive-title-start')

tap.equal(getArchiveTitleStart('innvilget'), 'Innvilget – bussøknad skoleskyss', 'It returns Innvilget – bussøknad skoleskyss for innvilget')

tap.equal(getArchiveTitleStart('avslag'), 'Avslag – bussøknad skoleskyss', 'It returns Avslag – bussøknad skoleskyss for avslag')

tap.equal(getArchiveTitleStart('midlertidig-manuell'), 'Foreløpig svar – bussøknad skoleskyss', 'It returns Foreløpig svar – bussøknad skoleskyss for midlertidig-manuell')

tap.equal(getArchiveTitleStart('midlertidig-hybel'), 'Hybel – bussøknad skoleskyss', 'It returns Hybel – bussøknad skoleskyss for midlertidig-hybel')

tap.equal(getArchiveTitleStart('midlertidig-delt'), 'Delt bosted – bussøknad skoleskyss', 'It returns Delt bosted – bussøknad skoleskyss for midlertidig-delt')

tap.equal(getArchiveTitleStart('midlertidig-annen'), 'Dokumentasjon – bussøknad skoleskyss', 'It returns Dokumentasjon – bussøknad skoleskyss for midlertidig-annen')
