const localbtc = require('./localbitcoins.service')
const coindesk = require('./coindesk.service')
// const coinmarketcap = require('./coinmarketcap.service')
const construcObjet = require('../utils/construcObjectServ.utils')
const computeBTCPrice = require('../utils/computeBTCPrice.utils')
const CoinMarketCap = require('coinmarketcap-api')
 
const apiKey = process.env.CMC_API_KEY || '69150cc1-0ed4-4a46-ae52-69ed79620aac'
const client = new CoinMarketCap(apiKey)

const coinValue = async () => {
    try {
        const ARR_VES = await localbtc()
        const UsdEurGbp = await coindesk('/v2/bpi/currentprice.json')
        const UsdEur = await coindesk('/v1/bpi/currentprice/eur.json')
        const { ARS } = await coindesk('/v1/bpi/currentprice/ars.json')
        const {data:{BTC:{quote:{XMR:{price:XMR}}}}} = await client.getQuotes({symbol: 'BTC', convert: 'XMR'})
        const {data:{BTC:{quote:{ETH:{price:ETH}}}}} = await client.getQuotes({symbol: 'BTC', convert: 'ETH'})
        const {data:{BTC:{quote:{LTC:{price:LTC}}}}} = await client.getQuotes({symbol: 'BTC', convert: 'LTC'})
        return construcObjet(computeBTCPrice(ARR_VES),UsdEurGbp,XMR,ETH,LTC,ARS,UsdEur)
    } catch (error) {
        throw Error(error)
    }
}
module.exports = coinValue