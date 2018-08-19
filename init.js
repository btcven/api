/* ---------------------------------------------------- */
    /* Ejecute este script para importar el historico de ApibtcVenezuela remote*/
    // debe incluir la url del scraperr como parametro, tal cual lo muestra el siguiente ejemplo 
    // ejemplo : node init.js 'https://api.bitcoinvenezuela.com/historical/
/* ---------------------------------------------------- */
'use strict'
const recuvehistorical = require('./tools/recuveHistorical/index') 
const param = process.argv[2]
require('./config/mongo-db')()
.then(()=> recuvehistorical(param))
.catch((error) =>{throw new Error(error)})