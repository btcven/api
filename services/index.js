const localbtc = require('./localbitcoins.service')
const coindesk = require('./coindesk.service')
const coinmarketcap = require('./coinmarketcap.service')
const construcObjet = require('../utils/construcObjectServ.utils')
const coinValue = async () => {
    try {
        const vef_btc = await localbtc()
        const UsdEurGbp = await coindesk('/v2/bpi/currentprice.json')
        const UsdEur = await coindesk('/v1/bpi/currentprice/eur.json')
        const { ARS } = await coindesk('/v1/bpi/currentprice/ars.json')
        const { XMR } = await coinmarketcap('XMR')
        const { ETH } = await coinmarketcap('ETH')
        const { LTC } = await coinmarketcap('LTC')
        return construcObjet(vef_btc,UsdEurGbp,XMR,ETH,LTC,ARS,UsdEur)
    } catch (error) {
        throw Error(error)
    }
}
module.exports = coinValue