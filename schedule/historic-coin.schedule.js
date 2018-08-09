'use strict'
const cron = require('node-cron')
const chalk = require('chalk')
const coinValue = require('../services/index')
const HistoricCoinModel = require('../api/src/models/historic-coin.model')
var moment = require('moment')
const workingEveryhour = async () => {
    try {
        const VEF_BTC = await coinValue.VEF_BTC
        const historicCoinModel = new HistoricCoinModel()
        historicCoinModel.VEF_BTC = VEF_BTC
        historicCoinModel.date =  moment().format("YYYY-MM-DD")
        const historicSaveResult = await historicCoinModel.save()
        if (historicSaveResult) {
            console.log(`${chalk.green('[btven-coin-schedule]')} save succesfull historic`)
        } else {
            throw Error(`Not save historic coin`)
        }
    } catch (error) {
        throw Error(error)
    } 
}
const SaveDataDB = () => {
    workingEveryhour()
    cron.schedule('* 6 * * *', () => {
        workingEveryhour()
    })
}

module.exports = SaveDataDB