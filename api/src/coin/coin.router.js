'use strict'
const express = require('express');
const api = express.Router()
const coinController = require('./coin.controller')
api.get('/coin',coinController)

module.exports = api