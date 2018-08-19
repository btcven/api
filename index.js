/* ---------------------------------------------------- */
    /* Utilice este archivo como arranque del Back-End para utilizar 
    Todas las funcionalidades Proyecto*/
/* ---------------------------------------------------- */
'use strict'
const api = require('./app')
const chalk = require('chalk')
const scheduleCoin = require('./schedule/coin.schedule')
const SaveDataDB = require('./schedule/historic-coin.schedule')
const port = process.env.PORT || 9300
// Conexion con mongoDB
require('./config/mongo-db')()
.then(()=> SaveDataDB())
.catch((error) =>{throw new Error(error)})
// Conexion con redisDB
// require('./config/redis-db').initRedisDB
// .then((redisClient)=> scheduleCoin(redisClient))
// .catch((error) =>{throw new Error(error)})
// Inicio del server
api.listen(port, () => console.log(`${chalk.green('[btven-api-v2]')} server listening on port ${port}`))
