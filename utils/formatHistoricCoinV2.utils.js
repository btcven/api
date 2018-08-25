module.exports = historicCoin => {
    let jsonBTCVES = {}
    let jsonBTCUSD = {}
    let jsonBTCGBP = {}
    let jsonBTCEUR = {}
    let jsonBTCXMR = {}
    let jsonBTCETH = {}
    let jsonBTCLTC = {}
    let jsonBTCARS = {}
    let jsonLTCVES = {}
    let jsonLTCUSD = {}
    let jsonLTCGBP = {}
    let jsonLTCEUR = {}
    let jsonLTCXMR = {}
    let jsonLTCETH = {}
    let jsonLTCARS = {}
    let jsonLTCBTC = {}
    let jsonXMRVES = {}
    let jsonXMRUSD = {}
    let jsonXMRGBP = {}
    let jsonXMREUR = {}
    let jsonXMRETH = {}
    let jsonXMRLTC = {}
    let jsonXMRARS = {}
    let jsonXMRBTC = {}
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
                if (propiedad === 'BTCVES') {
                    if (historic.BTCVES) {
                        jsonBTCVES[historic.date] = historic.BTCVES
                        historicresult.BTCVES = jsonBTCVES
                    }
                }
                if (propiedad === 'BTCUSD') {
                    if (historic.BTCUSD) {
                        jsonBTCUSD[historic.date] = historic.BTCUSD
                        historicresult.BTCUSD = jsonBTCUSD
                    }
                }
                if (propiedad === 'BTCGBP') {
                    if (historic.BTCGBP) {
                        jsonBTCGBP[historic.date] = historic.BTCGBP
                        historicresult.BTCGBP = jsonBTCGBP
                    }
                }
                if (propiedad === 'BTCEUR') {
                    if (historic.BTCEUR) {
                        jsonBTCEUR[historic.date] = historic.BTCEUR
                        historicresult.BTCEUR = jsonBTCEUR
                    }
                }
                if (propiedad === 'BTCXMR') {
                    if (historic.BTCXMR) {
                        jsonBTCXMR[historic.date] = historic.BTCXMR
                        historicresult.BTCXMR = jsonBTCXMR
                    }
                }
                if (propiedad === 'BTCETH') {
                    if (historic.BTCETH) {
                        jsonBTCETH[historic.date] = historic.BTCETH
                        historicresult.BTCETH = jsonBTCETH
                    }
                }
                if (propiedad === 'BTCLTC') {
                    if (historic.BTCLTC) {
                        jsonBTCLTC[historic.date] = historic.BTCLTC
                        historicresult.BTCLTC = jsonBTCLTC
                    }
                }
                if (propiedad === 'BTCARS') {
                    if (historic.BTCARS) {
                        jsonBTCARS[historic.date] = historic.BTCARS
                        historicresult.BTCARS = jsonBTCARS
                    }
                }
                if (propiedad === 'LTCVES') {
                    if (historic.LTCVES) {
                        jsonLTCVES[historic.date] = historic.LTCVES
                        historicresult.LTCVES = jsonLTCVES
                    }
                }
                if (propiedad === 'LTCUSD') {
                    if (historic.LTCUSD) {
                        jsonLTCUSD[historic.date] = historic.LTCUSD
                        historicresult.LTCUSD = jsonLTCUSD
                    }
                }
                if (propiedad === 'LTCGBP') {
                    if (historic.LTCGBP) {
                        jsonLTCGBP[historic.date] = historic.LTCGBP
                        historicresult.LTCGBP = jsonLTCGBP
                    }
                }
                if (propiedad === 'LTCEUR') {
                    if (historic.LTCEUR) {
                        jsonLTCEUR[historic.date] = historic.LTCEUR
                        historicresult.LTCEUR = jsonLTCEUR
                    }
                }
                if (propiedad === 'LTCXMR') {
                    if (historic.LTCXMR) {
                        jsonLTCXMR[historic.date] = historic.LTCXMR
                        historicresult.LTCXMR = jsonLTCXMR
                    }
                }
                if (propiedad === 'LTCETH') {
                    if (historic.LTCETH) {
                        jsonLTCETH[historic.date] = historic.LTCETH
                        historicresult.LTCETH = jsonLTCETH
                    }
                }
                if (propiedad === 'LTCARS') {
                    if (historic.LTCARS) {
                        jsonLTCARS[historic.date] = historic.LTCARS
                        historicresult.LTCARS = jsonLTCARS
                    }
                }
                if (propiedad === 'LTCBTC') {
                    if (historic.LTCBTC) {
                        jsonLTCBTC[historic.date] = historic.LTCBTC
                        historicresult.LTCBTC = jsonLTCBTC
                    }
                }
                if (propiedad === 'XMRVES') {
                    if (historic.XMRVES) {
                        jsonXMRVES[historic.date] = historic.XMRVES
                        historicresult.XMRVES = jsonXMRVES
                    }
                }
                if (propiedad === 'XMRUSD') {
                    if (historic.XMRUSD) {
                        jsonXMRUSD[historic.date] = historic.XMRUSD
                        historicresult.XMRUSD = jsonXMRUSD
                    }
                }
                if (propiedad === 'XMRGBP') {
                    if (historic.XMRGBP) {
                        jsonXMRGBP[historic.date] = historic.XMRGBP
                        historicresult.XMRGBP = jsonXMRGBP
                    }
                }
                if (propiedad === 'XMREUR') {
                    if (historic.XMREUR) {
                        jsonXMREUR[historic.date] = historic.XMREUR
                        historicresult.XMREUR = jsonXMREUR
                    }
                }
                if (propiedad === 'XMRETH') {
                    if (historic.XMRETH) {
                        jsonXMRETH[historic.date] = historic.XMRETH
                        historicresult.XMRETH = jsonXMRETH
                    }
                }
                if (propiedad === 'XMRLTC') {
                    if (historic.XMRLTC) {
                        jsonXMRLTC[historic.date] = historic.XMRLTC
                        historicresult.XMRLTC = jsonXMRLTC
                    }
                }
                if (propiedad === 'XMRARS') {
                    if (historic.XMRARS) {
                        jsonXMRARS[historic.date] = historic.XMRARS
                        historicresult.XMRARS = jsonXMRARS
                    }
                }
                if (propiedad === 'XMRBTC') {
                    if (historic.XMRBTC) {
                        jsonXMRBTC[historic.date] = historic.XMRBTC
                        historicresult.XMRBTC = jsonXMRBTC
                    }
                }
                if (propiedad === 'ETHVES') {
                    if (historic.ETHVES) {
                        jsonETHVES[historic.date] = historic.ETHVES
                        historicresult.ETHVES = jsonETHVES
                    }
                }
                if (propiedad === 'ETHUSD') {
                    if (historic.ETHUSD) {
                        jsonETHUSD[historic.date] = historic.ETHUSD
                        historicresult.ETHUSD = jsonETHUSD
                    }
                }
                if (propiedad === 'ETHGBP') {
                    if (historic.ETHGBP) {
                        jsonETHGBP[historic.date] = historic.ETHGBP
                        historicresult.ETHGBP = jsonETHGBP
                    }
                }
                if (propiedad === 'ETHEUR') {
                    if (historic.ETHEUR) {       
                        jsonETHEUR[historic.date] = historic.ETHEUR
                        historicresult.ETHEUR = jsonETHEUR
                    }
                }
                if (propiedad === 'ETHXMR') {
                    if (historic.ETHXMR) {   
                        jsonETHXMR[historic.date] = historic.ETHXMR
                        historicresult.ETHXMR = jsonETHXMR
                    }
                }
                if (propiedad === 'ETHLTC') {
                    if (historic.ETHLTC) {
                        jsonETHLTC[historic.date] = historic.ETHLTC
                        historicresult.ETHLTC = jsonETHLTC
                    }
                }
                if (propiedad === 'ETHARS') {
                    if (historic.ETHARS) {
                        jsonETHARS[historic.date] = historic.ETHARS
                        historicresult.ETHARS = jsonETHARS
                    }
                }
                if (propiedad === 'ETHBTC') {
                    if (historic.ETHBTC) {
                        jsonETHBTC[historic.date] = historic.ETHBTC
                        historicresult.ETHBTC = jsonETHBTC
                    }
                }
            }
        }
    })
    return  historicresult
}