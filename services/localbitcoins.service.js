'use strict'
const superagent = require('superagent')
const chalk = require('chalk')
const debug = require('debug')('btcven-api-v2:btc-vef-service')

const btcVesPrice = async () => {
    try {
        // const BTC_VEF = await superagent.get('https://localbitcoins.com/bitcoincharts/VEF/orderbook.json')
        const BTC_VES = await superagent.get('https://localbitcoins.com/bitcoincharts/VES/orderbook.json')
        // const { asks : ARR_VEF } = BTC_VEF.body
        const { asks : ARR_VES } = BTC_VES.body
        if (/* ARR_VEF &&  */ARR_VES) {
          return ARR_VES
        }
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} Localbtc ${error}`)
        debug('error al conectar con localbtc')
        throw Error(`Error: ${error}`)
    }
}

module.exports = btcVesPrice