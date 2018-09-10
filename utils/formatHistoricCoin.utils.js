module.exports = historicCoin => {
    let jsonBTCVEF = {}
    let jsonBTCUSD = {}
    let jsonBTCEUR = {}
    let jsonBTCLTC = {}
    let jsonBTCARS = {}
    let jsonLTCVEF = {}
    let jsonLTCUSD = {}
    let jsonLTCEUR = {}
    let jsonLTCARS = {}
    let jsonLTCBTC = {}
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
                if (propiedad === 'BTCUSD') {
                    if (historic.BTCUSD) {
                        jsonBTCUSD[historic.date] = historic.BTCUSD
                        historicresult.USD_BTC = jsonBTCUSD
                    }
                }
                if (propiedad === 'BTCEUR') {
                    if (historic.BTCEUR) {
                        jsonBTCEUR[historic.date] = historic.BTCEUR
                        historicresult.EUR_BTC = jsonBTCEUR
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
                if (propiedad === 'LTCUSD') {
                    if (historic.LTCUSD) {
                        jsonLTCUSD[historic.date] = historic.LTCUSD
                        historicresult.USD_LTC = jsonLTCUSD
                    }
                }
                if (propiedad === 'LTCEUR') {
                    if (historic.LTCEUR) {
                        jsonLTCEUR[historic.date] = historic.LTCEUR
                        historicresult.EUR_LTC = jsonLTCEUR
                    }
                }
                if (propiedad === 'LTCARS') {
                    if (historic.LTCARS) {
                        jsonLTCARS[historic.date] = historic.LTCARS
                        historicresult.ARS_LTC = jsonLTCARS
                    }
                }
                if (propiedad === 'LTCBTC') {
                    if (historic.LTCBTC) {
                        jsonLTCBTC[historic.date] = historic.LTCBTC
                        historicresult.BTC_LTC = jsonLTCBTC
                    }
                }
            }
        }
    })
    return  historicresult
}