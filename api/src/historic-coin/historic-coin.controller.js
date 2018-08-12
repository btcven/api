'use strict'
const historicCoinModel = require('../models/historic-coin.model')
const formatHistoric = require('../../../utils/formatHistoricCoin.utils')
const chalk = require('chalk')
const debug = require('debug')('btcven-api-v2:historic-coin')
require('mongoose-pagination')
 async function historicCoinQuery(req,res){
    let page = 1
    if (req.params.page) {
        page = req.params.page
    } else {
        page = 1
    }
    const itemsPerPage = 500
    try {
        const historicCoin = await historicCoinModel.find({},{_id:false,__v:false},{lean: true}).sort({date:1}).paginate(page,itemsPerPage)
        if (historicCoin) {
            res.status(200).send(formatHistoric(historicCoin))
        } else {
           debug('not found');
        }
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} ${error.message}`)
    }
}

module.exports = historicCoinQuery