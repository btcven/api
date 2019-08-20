'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const api = asyncify(express.Router())
const reportLocalbtcV2 = require('./report-localbtc-v2.controller')

api.get('/v2/report-localbtc',reportLocalbtcV2)

module.exports = api