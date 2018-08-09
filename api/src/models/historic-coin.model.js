const mongoose = require('mongoose')
const {Schema} = mongoose

const historicCoinSchema = new Schema({
      VEF_BTC: {
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