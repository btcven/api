const mongoose = require('mongoose')
const {Schema} = mongoose

const historicCoinSchema = new Schema({
      date: {
        type: String,
        required: true
      },
      VEF_BTC: {
        type: String,
        required: true
      },
      USD_BTC: {
        type: String,
        required: true
      },
      GBP_BTC: {
        type: String,
        required: true
      },
      EUR_BTC: {
        type: String,
        required: true
      },
      XMR_BTC: {
        type: String,
        required: true
      },
      ETH_BTC: {
        type: String,
        required: true
      },
      LTC_BTC: {
        type: String,
        required: true
      },
      VEF_LTC: {
        type: String,
        required: true
      },
      USD_LTC: {
        type: String,
        required: true
      },
      GBD_LTC: {
        type: String,
        required: true
      },
      EUR_LTC: {
        type: String,
        required: true
      },
      XMR_LTC: {
        type: String,
        required: true
      },
      ETH_LTC: {
        type: String,
        required: true
      },
      ARS_LTC: {
        type: String,
        required: true
      },
      VEF_XMR: {
        type: String,
        required: true
      },
      USD_XMR: {
        type: String,
        required: true
      },
      GBD_XMR: {
        type: String,
        required: true
      },
      EUR_XMR: {
        type: String,
        required: true
      },
      ETH_XMR: {
        type: String,
        required: true
      },
      LTC_XMR: {
        type: String,
        required: true
      },
      ARS_XMR: {
        type: String,
        required: true
      },
      VEF_ETH: {
        type: String,
        required: true
      },
      USD_ETH: {
        type: String,
        required: true
      },
      GBD_ETH: {
        type: String,
        required: true
      },
      EUR_ETH: {
        type: String,
        required: true
      },
      XMR_ETH: {
        type: String,
        required: true
      },
      LTC_ETH: {
        type: String,
        required: true
      },
      ARS_ETH: {
        type: String,
        required: true
      }
      
})

const historicCoinModel = mongoose.model('historicCoin', historicCoinSchema)

module.exports = historicCoinModel