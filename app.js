'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const json2xls = require('json2xls')
const app = express()
const cors = require('cors')

app.use(json2xls.middleware)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
//configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE')
    next()
  })
// cargar rutas 
let coin_routes = require('./api/src/coin/coin.router')
let historic_coin_routes = require('./api/src/historic-coin/historic-coin.router')
let report_routes = require('./api/src/report/report.router')
// ruta base
app.use(coin_routes)
app.use(historic_coin_routes)
app.use(report_routes)

module.exports = app