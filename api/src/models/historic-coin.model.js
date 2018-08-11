const mongoose = require('mongoose')
const {Schema} = mongoose

const historicCoinSchema = new Schema({
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
      date: {
        type: String,
        required: true
      }
})

const historicCoinModel = mongoose.model('historicCoin', historicCoinSchema)

module.exports = historicCoinModel