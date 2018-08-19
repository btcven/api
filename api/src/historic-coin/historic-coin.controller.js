'use strict'
const chalk = require('chalk')
const debug = require('debug')('btcven-api-v2:historic-coin')
const  jsonfile = require('jsonfile')
  const  historicCoinQuery = (req,res) => {

jsonfile.readFile('historic.json', function(err, obj) {
    if (err) {
        debug("An error occured while reading JSON Object to File.")
    }
    res.status(200).send(obj)
})
}

module.exports = historicCoinQuery