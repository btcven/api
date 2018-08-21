'use strict'
const superagent = require('superagent')
const chalk = require('chalk')
const debug = require('debug')('btcven-api-v2:coinmarketcap-service')
const coinmarketcap = async (coin) => {
    try {
        const dataCoin = await superagent.get(`https://api.coinmarketcap.com/v2/ticker/1/?convert=${coin}`)
        if (dataCoin) {
        const { data } = dataCoin.body
        return data.quotes
        }
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} coinmarketcap ${error}`)
        debug('error al conectar')
        throw Error(`Error: ${error}`)
    }
}
module.exports = coinmarketcap