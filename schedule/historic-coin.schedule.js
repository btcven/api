'use strict'
const cron = require('node-cron')
const chalk = require('chalk')
const coinValue = require('../services/index')
const HistoricCoinModel = require('../api/src/models/historic-coin.model')
const momentTimeZone = require('moment-timezone')
const savejsonfile = require('../utils/saveJsonFile.utils')
const workingEveryhour = async () => {
    try {
        let m1 = momentTimeZone().tz('America/Caracas')
        const coinvalue = await coinValue()
        const historicCoinModel = new HistoricCoinModel()
        historicCoinModel.date =  m1.format("YYYY-MM-DD")
        historicCoinModel.VEF_BTC = coinvalue.VEF_BTC
        historicCoinModel.USD_BTC = coinvalue.USD_BTC
        historicCoinModel.GBP_BTC = coinvalue.GBP_BTC
        historicCoinModel.EUR_BTC = coinvalue.EUR_BTC
        historicCoinModel.XMR_BTC = coinvalue.XMR_BTC
        historicCoinModel.ETH_BTC = coinvalue.ETH_BTC
        historicCoinModel.LTC_BTC = coinvalue.LTC_BTC
        historicCoinModel.VEF_LTC = coinvalue.VEF_LTC
        historicCoinModel.USD_LTC = coinvalue.USD_LTC
        historicCoinModel.GBP_LTC = coinvalue.GBP_LTC
        historicCoinModel.EUR_LTC = coinvalue.EUR_LTC
        historicCoinModel.XMR_LTC = coinvalue.XMR_LTC
        historicCoinModel.ETH_LTC = coinvalue.ETH_LTC
        historicCoinModel.ARS_LTC = coinvalue.ARS_LTC
        historicCoinModel.VEF_XMR = coinvalue.VEF_XMR
        historicCoinModel.USD_XMR = coinvalue.USD_XMR
        historicCoinModel.GBP_XMR = coinvalue.GBP_XMR
        historicCoinModel.EUR_XMR = coinvalue.EUR_XMR
        historicCoinModel.ETH_XMR = coinvalue.ETH_XMR
        historicCoinModel.LTC_XMR = coinvalue.LTC_XMR
        historicCoinModel.ARS_XMR = coinvalue.ARS_XMR
        historicCoinModel.VEF_ETH = coinvalue.VEF_ETH
        historicCoinModel.USD_ETH = coinvalue.USD_ETH
        historicCoinModel.GBP_ETH = coinvalue.GBP_ETH
        historicCoinModel.EUR_ETH = coinvalue.EUR_ETH
        historicCoinModel.XMR_ETH = coinvalue.XMR_ETH
        historicCoinModel.LTC_ETH = coinvalue.LTC_ETH
        historicCoinModel.ARS_ETH = coinvalue.ARS_ETH
        const historicSaveResult = await historicCoinModel.save()
        if (historicSaveResult) {
            console.log(`${chalk.green('[btven-coin-schedule]')} save succesfull historic ${m1}`)
            savejsonfile()
        } else {
            throw Error(`Not save historic coin`)
        }
    } catch (error) {
        throw Error(error)
    } 
}
const SaveDataDB = () => {
    workingEveryhour()
    cron.schedule('0 */6 * * *', () => {
        workingEveryhour()
    })
}

module.exports = SaveDataDB