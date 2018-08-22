'use strict'
const cron = require('node-cron')
const chalk = require('chalk')
const coinValue = require('../services/index')
const HistoricCoinModel = require('../models/historic-coin.model')
const momentTimeZone = require('moment-timezone')
const savejsonfile = require('../utils/saveJsonFile.utils')
const debug = require('debug')('btcven-api-v2:historic-coin-schedule')
const workingEveryhour = async () => {
    try {
        let m1 = momentTimeZone().tz('America/Caracas')
        const coinvalue = await coinValue()
        const historicCoinModel = new HistoricCoinModel()
        historicCoinModel.date =  m1.format("YYYY-MM-DD")
        historicCoinModel.BTCVEF = coinvalue.BTCVEF
        historicCoinModel.BTCVES = coinvalue.BTCVES
        historicCoinModel.BTCUSD = coinvalue.BTCUSD
        historicCoinModel.BTCGBP = coinvalue.BTCGBP
        historicCoinModel.BTCEUR = coinvalue.BTCEUR
        historicCoinModel.BTCXMR = coinvalue.BTCXMR
        historicCoinModel.BTCETH = coinvalue.BTCETH
        historicCoinModel.BTCLTC = coinvalue.BTCLTC
        historicCoinModel.BTCARS = coinvalue.BTCARS
        historicCoinModel.LTCVEF = coinvalue.LTCVEF
        historicCoinModel.LTCVES = coinvalue.LTCVES
        historicCoinModel.LTCUSD = coinvalue.LTCUSD
        historicCoinModel.LTCGBP = coinvalue.LTCGBP
        historicCoinModel.LTCEUR = coinvalue.LTCEUR
        historicCoinModel.LTCXMR = coinvalue.LTCXMR
        historicCoinModel.LTCETH = coinvalue.LTCETH
        historicCoinModel.LTCARS = coinvalue.LTCARS
        historicCoinModel.LTCBTC = coinvalue.LTCBTC
        historicCoinModel.XMRVEF = coinvalue.XMRVEF
        historicCoinModel.XMRVES = coinvalue.XMRVES
        historicCoinModel.XMRUSD = coinvalue.XMRUSD
        historicCoinModel.XMRGBP = coinvalue.XMRGBP
        historicCoinModel.XMREUR = coinvalue.XMREUR
        historicCoinModel.XMRETH = coinvalue.XMRETH
        historicCoinModel.XMRLTC = coinvalue.XMRLTC
        historicCoinModel.XMRARS = coinvalue.XMRARS
        historicCoinModel.XMRBTC = coinvalue.XMRBTC
        historicCoinModel.ETHVEF = coinvalue.ETHVEF
        historicCoinModel.ETHVES = coinvalue.ETHVES
        historicCoinModel.ETHUSD = coinvalue.ETHUSD
        historicCoinModel.ETHGBP = coinvalue.ETHGBP
        historicCoinModel.ETHEUR = coinvalue.ETHEUR
        historicCoinModel.ETHXMR = coinvalue.ETHXMR
        historicCoinModel.ETHLTC = coinvalue.ETHLTC
        historicCoinModel.ETHARS = coinvalue.ETHARS
        historicCoinModel.ETHBTC = coinvalue.ETHBTC
        const historicSaveResult = await historicCoinModel.save()
        if (historicSaveResult) {
            console.log(historicSaveResult)
            console.log(`${chalk.green('[btven-coin-schedule]')} save succesfull historic ${m1}`)
            savejsonfile()
        } else {
            throw Error(`Not save historic coin`)
        }
    } catch (error) {
        if (error.code === 11000) {
            debug('ERROR: elemento existe')
            savejsonfile()
          } else {
            debug('ERROR: al save historic', error)
            throw Error(error)
          }
    } 
}
const SaveDataDB = () => {
    workingEveryhour()
    cron.schedule('0 */6 * * *', () => {
        workingEveryhour()
    })
}

module.exports = SaveDataDB