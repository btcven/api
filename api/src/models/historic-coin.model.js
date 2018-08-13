const mongoose = require('mongoose')
const {Schema} = mongoose

const historicCoinSchema = new Schema({
      date: {
        type: String,
        required: true
      },
      VEF_BTC: {
        type: Number,
        required: true
      },
      USD_BTC: {
        type: Number,
        required: true
      },
      GBP_BTC: {
        type: Number,
        required: true
      },
      EUR_BTC: {
        type: Number,
        required: true
      },
      XMR_BTC: {
        type: Number,
        required: true
      },
      ETH_BTC: {
        type: Number,
        required: true
      },
      LTC_BTC: {
        type: Number,
        required: true
      },
      VEF_LTC: {
        type: Number,
        required: true
      },
      USD_LTC: {
        type: Number,
        required: true
      },
      GBP_BTC: {
        type: Number,
        required: true
      },
      EUR_LTC: {
        type: Number,
        required: true
      },
      XMR_LTC: {
        type: Number,
        required: true
      },
      ETH_LTC: {
        type: Number,
        required: true
      },
      ARS_LTC: {
        type: Number,
        required: true
      },
      VEF_XMR: {
        type: Number,
        required: true
      },
      USD_XMR: {
        type: Number,
        required: true
      },
      GBD_XMR: {
        type: Number,
        required: true
      },
      EUR_XMR: {
        type: Number,
        required: true
      },
      ETH_XMR: {
        type: Number,
        required: true
      },
      LTC_XMR: {
        type: Number,
        required: true
      },
      ARS_XMR: {
        type: Number,
        required: true
      },
      VEF_ETH: {
        type: Number,
        required: true
      },
      USD_ETH: {
        type: Number,
        required: true
      },
      GBD_ETH: {
        type: Number,
        required: true
      },
      EUR_ETH: {
        type: Number,
        required: true
      },
      XMR_ETH: {
        type: Number,
        required: true
      },
      LTC_ETH: {
        type: Number,
        required: true
      },
      ARS_ETH: {
        type: Number,
        required: true
      }
      
})

const historicCoinModel = mongoose.model('historicCoin', historicCoinSchema)

module.exports = historicCoinModel