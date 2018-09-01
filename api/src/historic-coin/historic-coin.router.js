'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const api = asyncify(express.Router())
const historicCoin = require('./historic-coin.controller')
const historicCoinV2 = require('./historic-coin-v2.controller')

api.get('/historical/index.php',historicCoin)
api.get('/historical',historicCoin)
api.get('/v2/historical',historicCoinV2)

module.exports = api