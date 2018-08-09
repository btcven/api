'use strict'
const api = require('./api/app')
const chalk = require('chalk')
const scheduleCoin = require('./schedule/coin.schedule')
const SaveDataDB = require('./schedule/historic-coin.schedule')
const port = process.env.PORT || 3000
// Conexion con mongoDB
require('./config/mongo-db')()
.then(()=> SaveDataDB())
.catch((error) =>{throw new Error(error)})
// Conexion con redisDB
require('./config/redis-db').initRedisDB
.then((redisClient)=> scheduleCoin(redisClient))
.catch((error) =>{throw new Error(error)})
// Inicio del server
api.listen(port, () => console.log(`${chalk.green('[btven-api-v2]')} server listening on port ${port}`))
