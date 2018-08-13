module.exports = historicCoin => {
    let jsonVEF_BTC = {}
    let jsonUSD_BTC = {}
    let jsonGBP_BTC = {}
    let jsonEUR_BTC = {}
    let jsonXMR_BTC = {}
    let jsonETH_BTC = {}
    let jsonLTC_BTC = {}
    let jsonVEF_LTC = {}
    let jsonUSD_LTC = {}
    let jsonGBP_LTC = {}
    let jsonEUR_LTC = {}
    let jsonXMR_LTC = {}
    let jsonETH_LTC = {}
    let jsonARS_LTC = {}
    let jsonVEF_XMR = {}
    let jsonUSD_XMR = {}
    let jsonGBP_XMR = {}
    let jsonEUR_XMR = {}
    let jsonETH_XMR = {}
    let jsonLTC_XMR = {}
    let jsonARS_XMR = {}
    let jsonVEF_ETH = {}
    let jsonUSD_ETH = {}
    let jsonGBP_ETH = {}
    let jsonEUR_ETH = {}
    let jsonXMR_ETH = {}
    let jsonLTC_ETH = {}
    let jsonARS_ETH = {}
    let historicresult = {}
    historicCoin.map( historic => {
        for (let propiedad in historic) {
            if (historic.hasOwnProperty(propiedad)) {
                if (propiedad === 'VEF_BTC') {
                    jsonVEF_BTC[historic.date] = historic.VEF_BTC
                    historicresult.VEF_BTC = jsonVEF_BTC
                }
                if (propiedad === 'USD_BTC') {
                    jsonUSD_BTC[historic.date] = historic.USD_BTC
                    historicresult.USD_BTC = jsonUSD_BTC
                }
                if (propiedad === 'GBP_BTC') {
                    jsonGBP_BTC[historic.date] = historic.GBP_BTC
                    historicresult.GBP_BTC = jsonGBP_BTC
                }
                if (propiedad === 'EUR_BTC') {
                    jsonEUR_BTC[historic.date] = historic.EUR_BTC
                    historicresult.EUR_BTC = jsonEUR_BTC
                }
                if (propiedad === 'XMR_BTC') {
                    jsonXMR_BTC[historic.date] = historic.XMR_BTC
                    historicresult.XMR_BTC = jsonXMR_BTC
                }
                if (propiedad === 'ETH_BTC') {
                    jsonETH_BTC[historic.date] = historic.ETH_BTC
                    historicresult.ETH_BTC = jsonETH_BTC
                }
                if (propiedad === 'LTC_BTC') {
                    jsonLTC_BTC[historic.date] = historic.LTC_BTC
                    historicresult.LTC_BTC = jsonLTC_BTC
                }
                if (propiedad === 'VEF_LTC') {
                    jsonVEF_LTC[historic.date] = historic.VEF_LTC
                    historicresult.VEF_LTC = jsonVEF_LTC
                }
                if (propiedad === 'USD_LTC') {
                    jsonUSD_LTC[historic.date] = historic.USD_LTC
                    historicresult.USD_LTC = jsonUSD_LTC
                }
                if (propiedad === 'GBP_LTC') {
                    jsonGBP_LTC[historic.date] = historic.GBP_LTC
                    historicresult.GBP_LTC = jsonGBP_LTC
                }
                if (propiedad === 'EUR_LTC') {
                    jsonEUR_LTC[historic.date] = historic.EUR_LTC
                    historicresult.EUR_LTC = jsonEUR_LTC
                }
                if (propiedad === 'XMR_LTC') {
                    jsonXMR_LTC[historic.date] = historic.XMR_LTC
                    historicresult.XMR_LTC = jsonXMR_LTC
                }
                if (propiedad === 'ETH_LTC') {
                    jsonETH_LTC[historic.date] = historic.ETH_LTC
                    historicresult.ETH_LTC = jsonETH_LTC
                }
                if (propiedad === 'ARS_LTC') {
                    jsonARS_LTC[historic.date] = historic.ARS_LTC
                    historicresult.ARS_LTC = jsonARS_LTC
                }
                if (propiedad === 'VEF_XMR') {
                    jsonVEF_XMR[historic.date] = historic.VEF_XMR
                    historicresult.VEF_XMR = jsonVEF_XMR
                }
                if (propiedad === 'USD_XMR') {
                    jsonUSD_XMR[historic.date] = historic.USD_XMR
                    historicresult.USD_XMR = jsonUSD_XMR
                }
                if (propiedad === 'GBP_XMR') {
                    jsonGBP_XMR[historic.date] = historic.GBP_XMR
                    historicresult.GBP_XMR = jsonGBP_XMR
                }
                if (propiedad === 'EUR_XMR') {
                    jsonEUR_XMR[historic.date] = historic.EUR_XMR
                    historicresult.EUR_XMR = jsonEUR_XMR
                }
                if (propiedad === 'ETH_XMR') {
                    jsonETH_XMR[historic.date] = historic.ETH_XMR
                    historicresult.ETH_XMR = jsonETH_XMR
                }
                if (propiedad === 'LTC_XMR') {
                    jsonLTC_XMR[historic.date] = historic.LTC_XMR
                    historicresult.LTC_XMR = jsonLTC_XMR
                }
                if (propiedad === 'ARS_XMR') {
                    jsonARS_XMR[historic.date] = historic.ARS_XMR
                    historicresult.ARS_XMR = jsonARS_XMR
                }
                if (propiedad === 'VEF_ETH') {
                    jsonVEF_ETH[historic.date] = historic.VEF_ETH
                    historicresult.VEF_ETH = jsonVEF_ETH
                }
                if (propiedad === 'USD_ETH') {
                    jsonUSD_ETH[historic.date] = historic.USD_ETH
                    historicresult.USD_ETH = jsonUSD_ETH
                }
                if (propiedad === 'GBP_ETH') {
                    jsonGBP_ETH[historic.date] = historic.GBP_ETH
                    historicresult.GBP_ETH = jsonGBP_ETH
                }
                if (propiedad === 'EUR_ETH') {
                    jsonEUR_ETH[historic.date] = historic.EUR_ETH
                    historicresult.EUR_ETH = jsonEUR_ETH
                }
                if (propiedad === 'XMR_ETH') {
                    jsonXMR_ETH[historic.date] = historic.XMR_ETH
                    historicresult.XMR_ETH = jsonXMR_ETH
                }
                if (propiedad === 'LTC_ETH') {
                    jsonLTC_ETH[historic.date] = historic.LTC_ETH
                    historicresult.LTC_ETH = jsonLTC_ETH
                }
                if (propiedad === 'ARS_ETH') {
                    jsonARS_ETH[historic.date] = historic.ARS_ETH
                    historicresult.ARS_ETH = jsonARS_ETH
                }
            }
        }
    })
    return  historicresult
}