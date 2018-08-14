'use strict'
const chalk = require('chalk')
const debug = require('debug')('btcven-api-v2:historic-coin')
require('mongoose-pagination')
const  jsonfile = require('jsonfile')
 async function historicCoinQuery(req,res){

jsonfile.readFile('historic.json', function(err, obj) {
    if (err) {
        debug("An error occured while reading JSON Object to File.")
    }
    console.dir(obj)
    res.status(200).send(obj)
})
}

module.exports = historicCoinQuery