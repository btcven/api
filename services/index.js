const localbtc = require('./localbitcoins.service')
const coindesk = require('./coindesk.service')
const construcObjet = require('../utils/construcObjectServ.utils')
const computeBTCPrice = require('../utils/computeBTCPrice.utils')
const CoinMarketCap = require('coinmarketcap-api')
 // conection with coinmarketcap
const apiKey = process.env.CMC_API_KEY || '69150cc1-0ed4-4a46-ae52-69ed79620aac'
const client = new CoinMarketCap(apiKey)

const coinValue = async () => {
    try {
        // price localbtc calculator service
        const ARR_VES = await localbtc()
        // price coindesk calculator service
        const UsdEurGbp = await coindesk('/v2/bpi/currentprice.json')
        const UsdEur = await coindesk('/v1/bpi/currentprice/eur.json')
        const { ARS } = await coindesk('/v1/bpi/currentprice/ars.json')
        // price coinmarketcap calculator service
        const {data:{BTC:{quote:{XMR:{price:XMR}}}}} = await client.getQuotes({symbol: 'BTC', convert: 'XMR'})
        const {data:{BTC:{quote:{ETH:{price:ETH}}}}} = await client.getQuotes({symbol: 'BTC', convert: 'ETH'})
        const {data:{BTC:{quote:{LTC:{price:LTC}}}}} = await client.getQuotes({symbol: 'BTC', convert: 'LTC'})
        // price calculator utils and construct json response
        return construcObjet(computeBTCPrice(ARR_VES),UsdEurGbp,XMR,ETH,LTC,ARS,UsdEur)
    } catch (error) {
        throw Error(error)
    }
}
module.exports = coinValue