/* ---------------------------------------------------- */
    /* Utilice este archivo como arranque del Back-End para solo utilizar 
    Only Service VEF_BTC */
/* ---------------------------------------------------- */
'use strict'
const api = require('./app')
const chalk = require('chalk')
const scheduleCoin = require('./schedule/coin.schedule')
const port = process.env.PORT || 3000
// Conexion con redisDB
require('./config/redis-db').initRedisDB
.then((redisClient)=> scheduleCoin(redisClient))
.catch((error) =>{throw new Error(error)})
// Inicio del server
api.listen(port, () => console.log(`${chalk.green('[btven-api-v2]')} server listening on port ${port}`))