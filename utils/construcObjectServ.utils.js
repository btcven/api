// Construct object for response
module.exports = (btcVefVES,UsdEurGbp,btcxmr,btceth,btcltc,ARS,UsdEur) =>{
    const btcvef = btcVefVES.BTCVEF
    const btcves = btcVefVES.BTCVES
    const timestamp = Math.round(new Date().getTime()/1000)
    const object = {}
    const btcusd = UsdEurGbp.USD.rate_float
    const btcgbp = UsdEurGbp.GBP.rate_float
    const btceur = UsdEurGbp.EUR.rate_float
    const btcars = ARS.rate_float
    const vefusd = btcvef/btcusd
    const vesusd = btcves/btcusd
    const eurxve = btcvef/btceur
    const eurves = btcves/btceur
    const usdars = btcars/btcusd
    const eurusd = UsdEur.EUR.rate_float/UsdEur.USD.rate_float
    const onlyLtc = 1/btcltc
    const onlyEth = 1/btceth
    const onlyXmr = 1/btcxmr

    object.timestamp = timestamp
    object.BTCVEF = btcvef
    object.BTCVES = btcves
    object.BTCUSD = btcusd
    object.BTCGBP = btcgbp
    object.BTCEUR = btceur
    object.BTCXMR = btcxmr
    object.BTCETH = btceth
    object.BTCLTC = btcltc
    object.BTCARS = btcars
    object.USDEUR = eurusd
    object.USDVEF = vefusd
    object.USDVES = vesusd
    object.USDXVE = vefusd
    object.EURXVE = eurxve
    object.EURVES = eurves
    object.USDARS = usdars
    object.USDXAR = usdars
    object.LTCVEF = btcvef*onlyLtc
    object.LTCVES = btcves*onlyLtc
    object.LTCUSD = btcusd*onlyLtc
    object.LTCGBP = btcgbp*onlyLtc
    object.LTCEUR = btceur*onlyLtc
    object.LTCXMR = btcxmr*onlyLtc
    object.LTCETH = btceth*onlyLtc
    object.LTCARS = btcars*onlyLtc
    object.LTCBTC = onlyLtc
    object.XMRVEF = btcvef*onlyXmr
    object.XMRVES = btcves*onlyXmr
    object.XMRUSD = btcusd*onlyXmr
    object.XMRGBP = btcgbp*onlyXmr
    object.XMREUR = btceur*onlyXmr
    object.XMRETH = btceth*onlyXmr
    object.XMRLTC = btcltc*onlyXmr
    object.XMRARS = btcars*onlyXmr
    object.XMRBTC = onlyXmr
    object.ETHVEF = btcvef*onlyEth
    object.ETHVES = btcves*onlyEth
    object.ETHUSD = btcusd*onlyEth
    object.ETHGBP = btcgbp*onlyEth
    object.ETHEUR = btceur*onlyEth
    object.ETHXMR = btcxmr*onlyEth
    object.ETHLTC = btcltc*onlyEth
    object.ETHARS = btcars*onlyEth
    object.ETHBTC = onlyEth
    
    
    return object
}
