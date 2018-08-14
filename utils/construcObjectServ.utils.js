module.exports = (vef_btc,UsdEurGbp,XMR,ETH,LTC,ARS,UsdEur) =>{
    const timestamp = Math.round(new Date().getTime()/1000)
    const object = {}
    const usd_btc = UsdEurGbp.USD.rate_float
    const gbp_btc = UsdEurGbp.GBP.rate_float
    const eur_btc = UsdEurGbp.EUR.rate_float
    const ars_btc = ARS.rate_float
    const { price : xmr_btc } = XMR
    const { price : eth_btc } = ETH
    const { price : ltc_btc } = LTC
    const usd_vef = vef_btc/usd_btc
    const xve_eur = vef_btc/eur_btc
    const ars_usd = ars_btc/usd_btc
    const usd_eur = UsdEur.EUR.rate_float/UsdEur.USD.rate_float
    const onlyLtc = 1/ltc_btc
    const onlyEth = 1/eth_btc
    const onlyXmr = 1/xmr_btc

    object.timestamp = timestamp
    object.VEF_BTC = vef_btc
    object.USD_BTC = usd_btc
    object.GBP_BTC = gbp_btc
    object.EUR_BTC = eur_btc
    object.XMR_BTC = xmr_btc
    object.ETH_BTC = eth_btc
    object.LTC_BTC = ltc_btc
    object.ARS_BTC = ars_btc
    object.EUR_USD = usd_eur
    object.VEF_USD = usd_vef
    object.XVE_USD = usd_vef
    object.XVE_EUR = xve_eur
    object.ARS_USD = ars_usd
    object.XAR_USD = ars_usd
    object.VEF_LTC = vef_btc*onlyLtc
    object.USD_LTC = usd_btc*onlyLtc
    object.GBP_LTC = gbp_btc*onlyLtc
    object.EUR_LTC = eur_btc*onlyLtc
    object.XMR_LTC = xmr_btc*onlyLtc
    object.ETH_LTC = eth_btc*onlyLtc
    object.ARS_LTC = ars_btc*onlyLtc
    object.VEF_XMR = vef_btc*onlyXmr
    object.USD_XMR = usd_btc*onlyXmr
    object.GBP_XMR = gbp_btc*onlyXmr
    object.EUR_XMR = eur_btc*onlyXmr
    object.ETH_XMR = eth_btc*onlyXmr
    object.LTC_XMR = ltc_btc*onlyXmr
    object.ARS_XMR = ars_btc*onlyXmr
    object.VEF_ETH = vef_btc*onlyEth
    object.USD_ETH = usd_btc*onlyEth
    object.GBP_ETH = gbp_btc*onlyEth
    object.EUR_ETH = eur_btc*onlyEth
    object.XMR_ETH = xmr_btc*onlyEth
    object.LTC_ETH = ltc_btc*onlyEth
    object.ARS_ETH = ars_btc*onlyEth
    
    return object
}
