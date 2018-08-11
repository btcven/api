const localbtc = require('./localbitcoins.service')
const coindesk = require('./coindesk.service')
const coinmarketcap = require('./coinmarketcap.service')
const coinValue = async () => {
    try {
        const timestamp = Math.round(new Date().getTime()/1000)
        const object = {}
        const VEF_BTC = await localbtc()
        const UsdEurGbp = await coindesk()
        const XMRjson = await coinmarketcap('XMR')
        const ETHjson = await coinmarketcap('ETH')
        const LTCjson = await coinmarketcap('LTC')
        object.timestamp = timestamp
        object.VEF_BTC = VEF_BTC
        object.USD_BTC = UsdEurGbp.USD.rate
        object.GBP_BTC = UsdEurGbp.GBP.rate
        object.EUR_BTC = UsdEurGbp.EUR.rate
        object.XMR_BTC = XMRjson.XMR.price
        object.ETH_BTC = ETHjson.ETH.price
        object.LTC_BTC = LTCjson.LTC.price
        return object
    } catch (error) {
        throw Error(error)
    }
}

module.exports = coinValue