'use strict'
const express = require('express');
const api = express.Router()
const coinController = require('./coin.controller')
const coinV2Controller = require('./coin-v2.controller')

api.get('/',coinController)
api.get('/v2',coinV2Controller)

module.exports = api