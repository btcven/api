const createArrayForCrypto = obj => {
    let arrayBTCVEF = []
    let arrayBTCVES = []
    let arrayBTCUSD = []
    let arrayBTCGBP = []
    let arrayBTCEUR = []
    let arrayBTCXMR = []
    let arrayBTCETH = []
    let arrayBTCLTC = []
    let arrayBTCARS = []
    let arrayLTCVEF = []
    let arrayLTCVES = []
    let arrayLTCUSD = []
    let arrayLTCGBP = []
    let arrayLTCEUR = []
    let arrayLTCXMR = []
    let arrayLTCETH = []
    let arrayLTCARS = []
    let arrayLTCBTC = []
    let arrayXMRVEF = []
    let arrayXMRVES = []
    let arrayXMRUSD = []
    let arrayXMRGBP = []
    let arrayXMREUR = []
    let arrayXMRETH = []
    let arrayXMRLTC = []
    let arrayXMRARS = []
    let arrayXMRBTC = []
    let arrayETHVEF = []
    let arrayETHVES = []
    let arrayETHUSD = []
    let arrayETHGBP = []
    let arrayETHEUR = []
    let arrayETHXMR = []
    let arrayETHLTC = []
    let arrayETHARS = []
    let arrayETHBTC = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key]
            if (key === 'VEF_BTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayBTCVEF.push({'BTCVEF':Number(valor),date:key})
                    }
                }
            }
            if (key === 'VES_BTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayBTCVES.push({'BTCVES':Number(valor),date:key})
                    }
                }
            }
            if (key === 'USD_BTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayBTCUSD.push({'BTCUSD':Number(valor),date:key})
                    }
                }
            }
            if (key === 'GBP_BTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayBTCGBP.push({'BTCGBP':Number(valor),date:key})
                    }
                }
            }
            if (key === 'XMR_BTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayBTCXMR.push({'BTCXMR':Number(valor),date:key})
                    }
                }
            }
            if (key === 'ETH_BTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayBTCETH.push({'BTCETH':Number(valor),date:key})
                    }
                }
            }
            if (key === 'LTC_BTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayBTCLTC.push({'BTCLTC':Number(valor),date:key})
                    }
                }
            }
            if (key === 'EUR_BTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayBTCEUR.push({'BTCEUR':Number(valor),date:key})
                    }
                }
            }
            if (key === 'ARS_BTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayBTCARS.push({'BTCARS':Number(valor),date:key})
                    }
                }
            }
            if (key === 'VEF_LTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayLTCVEF.push({'LTCVEF':Number(valor),date:key})
                    }
                }
            }
            if (key === 'VES_LTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayLTCVES.push({'LTCVES':Number(valor),date:key})
                    }
                }
            }
            if (key === 'USD_LTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayLTCUSD.push({'LTCUSD':Number(valor),date:key})
                    }
                }
            }
            if (key === 'GBP_LTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayLTCGBP.push({'LTCGBP':Number(valor),date:key})
                    }
                }
            }
            if (key === 'EUR_LTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayLTCEUR.push({'LTCEUR':Number(valor),date:key})
                    }
                }
            }
            if (key === 'XMR_LTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayLTCXMR.push({'LTCXMR':Number(valor),date:key})
                    }
                }
            }
            if (key === 'ETH_LTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayLTCETH.push({'LTCETH':Number(valor),date:key})
                    }
                }
            }
            if (key === 'ARS_LTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayLTCARS.push({'LTCARS':Number(valor),date:key})
                    }
                }
            }
            if (key === 'BTC_LTC') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayLTCBTC.push({'LTCBTC':Number(valor),date:key})
                    }
                }
            }
            if (key === 'VEF_XMR') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayXMRVEF.push({'XMRVEF':Number(valor),date:key})
                    }
                }
            }
            if (key === 'VES_XMR') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayXMRVES.push({'XMRVES':Number(valor),date:key})
                    }
                }
            }
            if (key === 'USD_XMR') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayXMRUSD.push({'XMRUSD':Number(valor),date:key})
                    }
                }
            }
            if (key === 'GBP_XMR') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayXMRGBP.push({'XMRGBP':Number(valor),date:key})
                    }
                }
            }
            if (key === 'EUR_XMR') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayXMREUR.push({'XMREUR':Number(valor),date:key})
                    }
                }
            }
            if (key === 'ETH_XMR') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayXMRETH.push({'XMRETH':Number(valor),date:key})
                    }
                }
            }
            if (key === 'LTC_XMR') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayXMRLTC.push({'XMRLTC':Number(valor),date:key})
                    }
                }
            }
            if (key === 'ARS_XMR') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayXMRARS.push({'XMRARS':Number(valor),date:key})
                    }
                }
            }
            if (key === 'BTC_XMR') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayXMRBTC.push({'XMRBTC':Number(valor),date:key})
                    }
                }
            }
            if (key === 'VES_ETH') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayETHVES.push({'ETHVES':Number(valor),date:key})
                    }
                }
            }
            if (key === 'USD_ETH') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayETHUSD.push({'ETHUSD':Number(valor),date:key})
                    }
                }
            }
            if (key === 'GBP_ETH') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayETHGBP.push({'ETHGBP':Number(valor),date:key})
                    }
                }
            }
            if (key === 'EUR_ETH') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayETHEUR.push({'ETHEUR':Number(valor),date:key})
                    }
                }
            }
            if (key === 'XMR_ETH') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayETHXMR.push({'ETHXMR':Number(valor),date:key})
                    }
                }
            }
            if (key === 'LTC_ETH') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayETHLTC.push({'ETHLTC':Number(valor),date:key})
                    }
                }
            }
            if (key === 'ARS_ETH') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayETHARS.push({'ETHARS':Number(valor),date:key})
                    }
                }
            }
            if (key === 'BTC_ETH') {
                for (const key in element) {
                    if (element.hasOwnProperty(key)) {
                        const valor = element[key]
                        arrayETHBTC.push({'ETHBTC':Number(valor),date:key})
                    }
                }
            }
        }
    }
    
    return {
        arrayBTCVEF,
        arrayBTCVES,
        arrayBTCUSD,
        arrayBTCGBP,
        arrayBTCEUR,
        arrayBTCXMR,
        arrayBTCETH,
        arrayBTCLTC,
        arrayBTCARS,
        arrayLTCVEF,
        arrayLTCVES,
        arrayLTCUSD,
        arrayLTCGBP,
        arrayLTCEUR,
        arrayLTCXMR,
        arrayLTCETH,
        arrayLTCARS,
        arrayLTCBTC,
        arrayXMRVEF,
        arrayXMRVES,
        arrayXMRUSD,
        arrayXMRGBP,
        arrayXMREUR,
        arrayXMRETH,
        arrayXMRLTC,
        arrayXMRARS,
        arrayXMRBTC,
        arrayETHVEF,
        arrayETHVES,
        arrayETHUSD,
        arrayETHGBP,
        arrayETHEUR,
        arrayETHXMR,
        arrayETHLTC,
        arrayETHARS,
        arrayETHBTC,
    }
}
module.exports = createArrayForCrypto