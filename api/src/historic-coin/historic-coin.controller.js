'use strict'
const historicCoinModel = require('../models/historic-coin.model')
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
const formatHistoric = historicCoin =>{
    let jsonVEF_BTC = {}
    let jsonUSD_BTC = {}
    let jsonGBP_BTC = {}
    let jsonEUR_BTC = {}
    let historicresult = {}
    historicCoin.map(  (historic,clave,arr) => {
        for (let propiedad in historic) {
            if (historic.hasOwnProperty(propiedad)) {
                if (propiedad === 'VEF_BTC') {
                    jsonVEF_BTC[historic.date] = historic.VEF_BTC
                    historicresult.VEF_BTC = jsonVEF_BTC
                }
                if (propiedad === 'USD_BTC') {
                    jsonUSD_BTC[historic.date] = historic.USD_BTC
                    historicresult.USD_BTC = jsonUSD_BTC
                }
                if (propiedad === 'GBP_BTC') {
                    jsonGBP_BTC[historic.date] = historic.GBP_BTC
                    historicresult.GBP_BTC = jsonGBP_BTC
                }
                if (propiedad === 'EUR_BTC') {
                    jsonEUR_BTC[historic.date] = historic.EUR_BTC
                    historicresult.EUR_BTC = jsonEUR_BTC
                }
            }
        }
    })
    return  historicresult
}
module.exports = historicCoinQuery