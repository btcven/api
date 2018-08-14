'use strict'
const historicCoinModel = require('../api/src/models/historic-coin.model')
var fs = require('fs')
const formatHistoric = require('./formatHistoricCoin.utils')
const jsonfile = require('jsonfile')
const debug = require('debug')('btcven-api-v2:saveJsonFile-utils')
const chalk = require('chalk')
require('mongoose-pagination')
 async function historicCoinQuery(){
    try {
        const historicCoin = await historicCoinModel.find({},{_id:false,__v:false},{lean: true}).sort({date:1})
        if (historicCoin) {
            savejsonfile(historicCoin)
        } else {
           debug('not found')
        }
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} ${error.message}`)
    }
}
const savejsonfile = (historicCoin) => {
    var jsonData = formatHistoric(historicCoin)
    console.log(jsonData)
    var file = '../tmp/historic/data.json'
    jsonfile.writeFile('data.json', jsonData, function (err) {
        if (err) {
            debug("An error occured while writing JSON Object to File.")
        }else {
            debug("JSON file has been saved.")
        }
    })
}

module.exports = historicCoinQuery