'use strict'
const superagent = require('superagent')
const stats = require('stats-lite')
const chalk = require('chalk')
const debug = require('debug')('btcven-api-v2:btc-vef-service')
const btcVefPrice = async () => {
    try {
        const localBTC = await superagent.get('https://localbitcoins.com/bitcoincharts/VEF/orderbook.json')
        const { asks } = localBTC.body
        if (asks) {
          return computeBTCPrice(asks)
        }
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} Localbtc ${error}`)
        debug('error al conectar con localbtc')
        throw Error(`Error: ${error}`)
    }
}
 const  computeBTCPrice = (data) => {
   
    const arrayVES = data.filter(([price, volume]) => price<100000000)
    const arrayVEF = data.filter(([price, volume]) => price>1000000000)
    const arrayResultVES = arrayVES.map(([price, volume]) => [price*100000,volume])
    const _data = arrayResultVES.concat(arrayVEF)
    const floatData = _data.map(([price, volume]) => [parseFloat(price), parseFloat(volume)])
    const percentile = stats.percentile(floatData.map(([price, volume]) => price), 0.075)
    const [fiat, btc] = floatData
      .filter(([price, volume]) => volume / price >= 0.00001)
      .filter(([price, volume]) => price >= percentile)
      .map(([price, volume]) => [volume, volume / price])
      .reduce(
        ([accFiatVolume, accBtcVolume], [currentFiatVolume, currentBtcVolume]) =>
          accBtcVolume >= 1
            ? [accFiatVolume, accBtcVolume]
            : [accFiatVolume + currentFiatVolume, accBtcVolume + currentBtcVolume],
      )

    return fiat / btc
  }

module.exports = btcVefPrice