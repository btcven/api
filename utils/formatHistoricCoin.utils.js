module.exports = historicCoin => {
    let jsonBTCVEF = {}
    let jsonBTCVES = {}
    let jsonBTCUSD = {}
    let jsonBTCGBP = {}
    let jsonBTCEUR = {}
    let jsonBTCXMR = {}
    let jsonBTCETH = {}
    let jsonBTCLTC = {}
    let jsonBTCARS = {}
    let jsonLTCVEF = {}
    let jsonLTCVES = {}
    let jsonLTCUSD = {}
    let jsonLTCGBP = {}
    let jsonLTCEUR = {}
    let jsonLTCXMR = {}
    let jsonLTCETH = {}
    let jsonLTCARS = {}
    let jsonLTCBTC = {}
    let jsonXMRVEF = {}
    let jsonXMRVES = {}
    let jsonXMRUSD = {}
    let jsonXMRGBP = {}
    let jsonXMREUR = {}
    let jsonXMRETH = {}
    let jsonXMRLTC = {}
    let jsonXMRARS = {}
    let jsonXMRBTC = {}
    let jsonETHVEF = {}
    let jsonETHVES = {}
    let jsonETHUSD = {}
    let jsonETHGBP = {}
    let jsonETHEUR = {}
    let jsonETHXMR = {}
    let jsonETHLTC = {}
    let jsonETHARS = {}
    let jsonETHBTC = {}
    let historicresult = {}
    historicCoin.map( historic => {
        for (let propiedad in historic) {
            if (historic.hasOwnProperty(propiedad)) {
                if (propiedad === 'BTCVEF') {
                    if (historic.BTCVEF) {
                        jsonBTCVEF[historic.date] = historic.BTCVEF
                        historicresult.VEF_BTC = jsonBTCVEF
                    }
                }
                if (propiedad === 'BTCVES') {
                    if (historic.BTCVEF) {
                        jsonBTCVES[historic.date] = historic.BTCVES
                        historicresult.VES_BTC = jsonBTCVES
                    }
                }
                if (propiedad === 'BTCUSD') {
                    if (historic.BTCUSD) {
                        jsonBTCUSD[historic.date] = historic.BTCUSD
                        historicresult.USD_BTC = jsonBTCUSD
                    }
                }
                if (propiedad === 'BTCGBP') {
                    if (historic.BTCGBP) {
                        jsonBTCGBP[historic.date] = historic.BTCGBP
                        historicresult.GBP_BTC = jsonBTCGBP
                    }
                }
                if (propiedad === 'BTCEUR') {
                    if (historic.BTCEUR) {
                        jsonBTCEUR[historic.date] = historic.BTCEUR
                        historicresult.EUR_BTC = jsonBTCEUR
                    }
                }
                if (propiedad === 'BTCXMR') {
                    if (historic.BTCXMR) {
                        jsonBTCXMR[historic.date] = historic.BTCXMR
                        historicresult.XMR_BTC = jsonBTCXMR
                    }
                }
                if (propiedad === 'BTCETH') {
                    if (historic.BTCETH) {
                        jsonBTCETH[historic.date] = historic.BTCETH
                        historicresult.ETH_BTC = jsonBTCETH
                    }
                }
                if (propiedad === 'BTCLTC') {
                    if (historic.BTCLTC) {
                        jsonBTCLTC[historic.date] = historic.BTCLTC
                        historicresult.LTC_BTC = jsonBTCLTC
                    }
                }
                if (propiedad === 'BTCARS') {
                    if (historic.BTCARS) {
                        jsonBTCARS[historic.date] = historic.BTCARS
                        historicresult.ARS_BTC = jsonBTCARS
                    }
                }
                if (propiedad === 'LTCVEF') {
                    if (historic.LTCVEF) {
                        jsonLTCVEF[historic.date] = historic.LTCVEF
                        historicresult.VEF_LTC = jsonLTCVEF
                    }
                }
                if (propiedad === 'LTCVES') {
                    if (historic.LTCVES) {
                        jsonLTCVES[historic.date] = historic.LTCVES
                        historicresult.VES_LTC = jsonLTCVES
                    }
                }
                if (propiedad === 'LTCUSD') {
                    if (historic.LTCUSD) {
                        jsonLTCUSD[historic.date] = historic.LTCUSD
                        historicresult.USD_LTC = jsonLTCUSD
                    }
                }
                if (propiedad === 'LTCGBP') {
                    if (historic.LTCGBP) {
                        jsonLTCGBP[historic.date] = historic.LTCGBP
                        historicresult.GBP_LTC = jsonLTCGBP
                    }
                }
                if (propiedad === 'LTCEUR') {
                    if (historic.LTCEUR) {
                        jsonLTCEUR[historic.date] = historic.LTCEUR
                        historicresult.EUR_LTC = jsonLTCEUR
                    }
                }
                if (propiedad === 'LTCXMR') {
                    if (historic.LTCXMR) {
                        jsonLTCXMR[historic.date] = historic.LTCXMR
                        historicresult.XMR_LTC = jsonLTCXMR
                    }
                }
                if (propiedad === 'LTCETH') {
                    if (historic.LTCETH) {
                        jsonLTCETH[historic.date] = historic.LTCETH
                        historicresult.ETH_LTC = jsonLTCETH
                    }
                }
                if (propiedad === 'LTCARS') {
                    if (historic.LTCARS) {
                        jsonLTCARS[historic.date] = historic.LTCARS
                        historicresult.LTC_ARS = jsonLTCARS
                    }
                }
                if (propiedad === 'LTCBTC') {
                    if (historic.LTCBTC) {
                        jsonLTCBTC[historic.date] = historic.LTCBTC
                        historicresult.BTC_LTC = jsonLTCBTC
                    }
                }
                if (propiedad === 'XMRVEF') {
                    if (historic.XMRVEF) {
                        jsonXMRVEF[historic.date] = historic.XMRVEF
                        historicresult.VEF_XMR = jsonXMRVEF
                    }
                }
                if (propiedad === 'XMRVES') {
                    if (historic.XMRVES) {
                        jsonXMRVES[historic.date] = historic.XMRVES
                        historicresult.VES_XMR = jsonXMRVES
                    }
                }
                if (propiedad === 'XMRUSD') {
                    if (historic.XMRUSD) {
                        jsonXMRUSD[historic.date] = historic.XMRUSD
                        historicresult.USD_XMR = jsonXMRUSD
                    }
                }
                if (propiedad === 'XMRGBP') {
                    if (historic.XMRGBP) {
                        jsonXMRGBP[historic.date] = historic.XMRGBP
                        historicresult.GBP_XMR = jsonXMRGBP
                    }
                }
                if (propiedad === 'XMREUR') {
                    if (historic.XMREUR) {
                        jsonXMREUR[historic.date] = historic.XMREUR
                        historicresult.EUR_XMR = jsonXMREUR
                    }
                }
                if (propiedad === 'XMRETH') {
                    if (historic.XMRETH) {
                        jsonXMRETH[historic.date] = historic.XMRETH
                        historicresult.ETH_XMR = jsonXMRETH
                    }
                }
                if (propiedad === 'XMRLTC') {
                    if (historic.XMRLTC) {
                        jsonXMRLTC[historic.date] = historic.XMRLTC
                        historicresult.LTC_XMR = jsonXMRLTC
                    }
                }
                if (propiedad === 'XMRARS') {
                    if (historic.XMRARS) {
                        jsonXMRARS[historic.date] = historic.XMRARS
                        historicresult.ARS_XMR = jsonXMRARS
                    }
                }
                if (propiedad === 'XMRBTC') {
                    if (historic.XMRBTC) {
                        jsonXMRBTC[historic.date] = historic.XMRBTC
                        historicresult.BTC_XMR = jsonXMRBTC
                    }
                }
                if (propiedad === 'ETHVEF') {
                    if (historic.ETHVEF) {
                        jsonETHVEF[historic.date] = historic.ETHVEF
                        historicresult.VEF_ETH = jsonETHVEF
                    }
                }
                if (propiedad === 'ETHVES') {
                    if (historic.ETHVES) {
                        jsonETHVES[historic.date] = historic.ETHVES
                        historicresult.VES_ETH = jsonETHVES
                    }
                }
                if (propiedad === 'ETHUSD') {
                    if (historic.ETHUSD) {
                        jsonETHUSD[historic.date] = historic.ETHUSD
                        historicresult.USD_ETH = jsonETHUSD
                    }
                }
                if (propiedad === 'ETHGBP') {
                    if (historic.ETHGBP) {
                        jsonETHGBP[historic.date] = historic.ETHGBP
                        historicresult.GBP_ETH = jsonETHGBP
                    }
                }
                if (propiedad === 'ETHEUR') {
                    if (historic.ETHEUR) {       
                        jsonETHEUR[historic.date] = historic.ETHEUR
                        historicresult.EUR_ETH = jsonETHEUR
                    }
                }
                if (propiedad === 'ETHXMR') {
                    if (historic.ETHXMR) {   
                        jsonETHXMR[historic.date] = historic.ETHXMR
                        historicresult.XMR_ETH = jsonETHXMR
                    }
                }
                if (propiedad === 'ETHLTC') {
                    if (historic.ETHLTC) {
                        jsonETHLTC[historic.date] = historic.ETHLTC
                        historicresult.LTC_ETH = jsonETHLTC
                    }
                }
                if (propiedad === 'ETHARS') {
                    if (historic.ETHARS) {
                        jsonETHARS[historic.date] = historic.ETHARS
                        historicresult.ARS_ETH = jsonETHARS
                    }
                }
                if (propiedad === 'ETHBTC') {
                    if (historic.ETHBTC) {
                        jsonETHBTC[historic.date] = historic.ETHBTC
                        historicresult.BTC_ETH = jsonETHBTC
                    }
                }
            }
        }
    })
    return  historicresult
}