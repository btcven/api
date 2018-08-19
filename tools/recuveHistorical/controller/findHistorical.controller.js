'use strict'
const historicCoinModel = require('../../../models/historic-coin.model')
const debug = require('debug')('btcven-api-v2:saveJsonFile-utils')
const chalk = require('chalk')
 async function historicCoinQuery(){
    try {
        const historicCoin = await historicCoinModel.find({},{_id:false,__v:false},{lean: true}).sort({date:1})
        if (historicCoin) {
            return historicCoin
        } else {
           debug('not found')
        }
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} ${error.message}`)
    }
}
module.exports = historicCoinQuery