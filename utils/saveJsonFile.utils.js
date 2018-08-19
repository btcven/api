'use strict'
const historicCoinModel = require('../models/historic-coin.model')
const formatHistoric = require('./formatHistoricCoin.utils')
const jsonfile = require('jsonfile')
const debug = require('debug')('btcven-api-v2:saveJsonFile-utils')
const chalk = require('chalk')
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
const savejsonfile = historicCoin => {
    jsonfile.writeFile('historic.json', formatHistoric(historicCoin), err => {
        if (err) {
            console.log("An error occured while writing JSON Object to File.")
        }else {
            console.log("JSON file has been saved.")
        }
    })
}

module.exports = historicCoinQuery