const mongoose = require('mongoose')
const {Schema} = mongoose

const historicCoinSchema = new Schema({
      date: {
        type: String,
        required: true,
        unique: true
      },
      BTCVEF: {
        type: Number,
        default: ''
      },
      BTCUSD: {
        type: Number,
        default: ''
      },
      BTCGBP: {
        type: Number,
        default: ''
      },
      BTCEUR: {
        type: Number,
        default: ''
      },
      BTCXMR: {
        type: Number,
        default: ''
      },
      BTCETH: {
        type: Number,
        default: ''
      },
      BTCLTC: {
        type: Number,
        default: ''
      },
      BTCARS: {
        type: Number,
        default: ''
      },
      LTCVEF: {
        type: Number,
        default: ''
      },
      LTCUSD: {
        type: Number,
        default: ''
      },
      LTCGBP: {
        type: Number,
        default: ''
      },
      LTCEUR: {
        type: Number,
        default: ''
      },
      LTCXMR: {
        type: Number,
        default: ''
      },
      LTCETH: {
        type: Number,
        default: ''
      },
      LTCARS: {
        type: Number,
        default: ''
      },
      LTCBTC: {
        type: Number,
        default: ''
      },
      XMRVEF: {
        type: Number,
        default: ''
      },
      XMRUSD: {
        type: Number,
        default: ''
      },
      XMRGBP: {
        type: Number,
        default: ''
      },
      XMREUR: {
        type: Number,
        default: ''
      },
      XMRETH: {
        type: Number,
        default: ''
      },
      XMRLTC: {
        type: Number,
        default: ''
      },
      XMRARS: {
        type: Number,
        default: ''
      },
      XMRBTC: {
        type: Number,
        default: ''
      },
      ETHVEF: {
        type: Number,
        default: ''
      },
      ETHUSD: {
        type: Number,
        default: ''
      },
      ETHGBP: {
        type: Number,
        default: ''
      },
      ETHEUR: {
        type: Number,
        default: ''
      },
      ETHXMR: {
        type: Number,
        default: ''
      },
      ETHLTC: {
        type: Number,
        default: ''
      },
      ETHARS: {
        type: Number,
        default: ''
      },
      ETHBTC: {
        type: Number,
        default: ''
      }
      
})

const historicCoinModel = mongoose.model('historicCoin', historicCoinSchema)

module.exports = historicCoinModel