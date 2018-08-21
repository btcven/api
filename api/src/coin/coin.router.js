'use strict'
const express = require('express');
const api = express.Router()
const coinController = require('./coin.controller')
api.get('/',coinController)

module.exports = api