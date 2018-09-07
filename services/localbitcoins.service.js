'use strict'
const superagent = require('superagent')
const stats = require('stats-lite')
const chalk = require('chalk')
const debug = require('debug')('btcven-api-v2:btc-vef-service')
const jsonfile = require('jsonfile')
const btcVefPrice = async () => {
    try {
        // const BTC_VEF = await superagent.get('https://localbitcoins.com/bitcoincharts/VEF/orderbook.json')
        const BTC_VES = await superagent.get('https://localbitcoins.com/bitcoincharts/VES/orderbook.json')
        // const { asks : ARR_VEF } = BTC_VEF.body
        const { asks : ARR_VES } = BTC_VES.body
        if (/* ARR_VEF &&  */ARR_VES) {
          return computeBTCPrice(/* ARR_VEF, */ARR_VES)
        }
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} Localbtc ${error}`)
        debug('error al conectar con localbtc')
        throw Error(`Error: ${error}`)
    }
}
 const  computeBTCPrice = (/* ARR_VEF, */ARR_VES) => {
    let ARR_DEF = 0
    const ves_filter = ARR_VES.filter(([price, volume]) => price<100000000)
    /* const arr_ves = ves_filter.map(([price, volume]) => [price*100000,volume*100000])
    const arrayVES = ARR_VEF.filter(([price, volume]) => price<100000000)
    const arrayVEF = ARR_VEF.filter(([price, volume]) => price>1000000000)
    if (ARR_VEF) {
        if (arrayVES) {
          const arrayResultVES = arrayVES.map(([price, volume]) => [price*100000,volume*100000])
          const arrJoinVes = arrayResultVES.concat(arrayVEF)
          ARR_DEF = arrJoinVes.concat(arr_ves)
        }
        else{
          ARR_DEF = arr_ves.concat(arrayVEF)
        }
    } else {
        ARR_DEF = ARR_VES
    }
 */
    
    /* jsonfile.writeFile('report.json', ARR_DEF , err => {
      if (err) {
          console.log("An error occured while writing JSON Object to File.")
      }else {
          console.log("JSON file has been saved.")
      }
    }) */


    const floatData = ves_filter.map(([price, volume]) => [parseFloat(price), parseFloat(volume)])
    const percentile = stats.percentile(floatData.map(([price, volume]) => price), 0.075)
    const /* arrPorcentile */[fiat, btc] = floatData
      .filter(([price, volume]) => volume / price >= 0.00001)
      .filter(([price, volume]) => price >= percentile)
      .map(([price, volume]) => [volume, volume / price])
      .reduce(
        ([accFiatVolume, accBtcVolume], [currentFiatVolume, currentBtcVolume]) =>
          accBtcVolume >= 1
            ? [accFiatVolume, accBtcVolume]
            : [accFiatVolume + currentFiatVolume, accBtcVolume + currentBtcVolume],
      )
      console.log(fiat/btc)
    return {
      BTCVES : fiat/btc,
      BTCVEF : (fiat/btc)*100000
    }


    /* jsonfile.writeFile('reportPorcentile.json', arrPorcentile , err => {
      if (err) {
          console.log("An error occured while writing JSON Object to File.")
      }else {
          console.log("JSON file has been saved.")
      }
    }) */
  }

module.exports = btcVefPrice