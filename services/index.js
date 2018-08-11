const localbtc = require('./btc-vef.service')
const btcUsdEurGbp = require('./btc-usd_ eur_gbp.service')
const coinValue = async () => {
    try {
        const timestamp = Math.round(new Date().getTime()/1000)
        const object = {}
        const VEF_BTC = await localbtc()
        const UsdEurGbp = await btcUsdEurGbp()
        object.timestamp = timestamp
        object.VEF_BTC = VEF_BTC
        object.USD_BTC = UsdEurGbp.USD.rate
        object.GBP_BTC = UsdEurGbp.GBP.rate
        object.EUR_BTC = UsdEurGbp.EUR.rate
        return object
    } catch (error) {
        throw Error(error)
    }
}

module.exports = coinValue