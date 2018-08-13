'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const api = asyncify(express.Router())
const historicCoin = require('./historic-coin.controller')

api.get('/historical/:page?',historicCoin);

module.exports = api