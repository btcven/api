const joinCryptos =  (obj,objDB) => {
    object = {}
    arr = []
    obj.arrayBTCUSD.map(  element_ => {

        const _objDB =  objDB.find(element => element.date == element_.date)

        if (!_objDB) {

                object.date = element_.date
                object.BTCUSD = element_.BTCUSD

                const btcvef =  obj.arrayBTCVEF.find(element => element.date == element_.date)
                if (btcvef) {
                    object.BTCVEF = btcvef.BTCVEF
                } else {
                    object.BTCVEF = ''
                }
                const btcves =  obj.arrayBTCVES.find(element => element.date == element_.date)
                if (btcves) {
                    object.BTCVES = btcves.BTCVES
                } else {
                    object.BTCVES = ''
                }
                const btcusd =  obj.arrayBTCUSD.find(element => element.date == element_.date)
                if (btcusd) {
                    object.BTCUSD = btcusd.BTCUSD
                } else {
                    object.BTCUSD = ''
                }
                const btcgbp =  obj.arrayBTCGBP.find(element => element.date == element_.date)
                if (btcgbp) {
                    object.BTCGBP = btcgbp.BTCGBP
                } else {
                    object.BTCGBP = ''
                }
                const btceur =  obj.arrayBTCEUR.find(element => element.date == element_.date)
                if (btceur) {
                    object.BTCEUR = btceur.BTCEUR
                } else {
                    object.BTCEUR = ''
                }
                const btcxmr =  obj.arrayBTCXMR.find(element => element.date == element_.date)
                if (btcxmr) {
                    object.BTCXMR = btcxmr.BTCXMR
                } else {
                    object.BTCEUR = ''
                }
                const btceth =  obj.arrayBTCETH.find(element => element.date == element_.date)
                if (btceth) {
                    object.BTCETH = btceth.BTCETH
                } else {
                    object.BTCEUR = ''
                }
                const btcltc =  obj.arrayBTCLTC.find(element => element.date == element_.date)
                if (btcltc) {
                    object.arrayBTCLTC = btcltc.arrayBTCLTC
                } else {
                    object.BTCEUR = ''
                }
                const btcars =  obj.arrayBTCARS.find(element => element.date == element_.date)
                if (btcars) {
                    object.BTCARS = btcars.BTCARS
                } else {
                    object.BTCARS = ''
                }
                const ltcvef =  obj.arrayLTCVEF.find(element => element.date == element_.date)
                if (ltcvef) {
                    object.LTCVEF = ltcvef.LTCVEF
                } else {
                    object.LTCARS = ''
                }
                const ltcusd =  obj.arrayLTCUSD.find(element => element.date == element_.date)
                if (ltcusd) {
                    object.LTCUSD = ltcusd.LTCUSD
                } else {
                    object.LTCARS = ''
                }
                const ltcgbp =  obj.arrayLTCGBP.find(element => element.date == element_.date)
                if (ltcgbp) {
                    object.LTCGBP = ltcgbp.LTCGBP
                } else {
                    object.LTCARS = ''
                }
                const ltceur =  obj.arrayLTCEUR.find(element => element.date == element_.date)
                if (ltceur) {
                    object.LTCEUR = ltceur.LTCEUR
                } else {
                    object.LTCEUR = ''
                }
                const ltcxmr =  obj.arrayLTCXMR.find(element => element.date == element_.date)
                if (ltcxmr) {
                    object.LTCXMR = ltcxmr.LTCXMR
                } else {
                    object.LTCEUR = ''
                }
                const ltceth =  obj.arrayLTCETH.find(element => element.date == element_.date)
                if (ltceth) {
                    object.yLTCETH = ltceth.yLTCETH
                } else {
                    object.LTCEUR = ''
                }
                const ltcars =  obj.arrayLTCARS.find(element => element.date == element_.date)
                if (ltcars) {
                    object.LTCARS = ltcars.LTCARS
                } else {
                    object.LTCARS = ''
                }
                const ltcbtc =  obj.arrayLTCBTC.find(element => element.date == element_.date)
                if (ltcbtc) {
                    object.LTCBTC = ltcbtc.LTCBTC
                } else {
                    object.LTCBTC = ''
                }
                const xmrvef =  obj.arrayXMRVEF.find(element => element.date == element_.date)
                if (xmrvef) {
                    object.XMRVEF = xmrvef.XMRVEF
                } else {
                    object.LTCUSD = ''
                }
                const xmrusd =  obj.arrayXMRUSD.find(element => element.date == element_.date)
                if (xmrusd) {
                    object.XMRUSD = xmrusd.XMRUSD
                } else {
                    object.XMRUSD = ''
                }
                const xmrgbp =  obj.arrayXMRGBP.find(element => element.date == element_.date)
                if (xmrgbp) {
                    object.XMRGBP = xmrgbp.XMRGBP
                } else {
                    object.XMRGBP = ''
                }
                const xmreur =  obj.arrayXMREUR.find(element => element.date == element_.date)
                if (xmreur) {
                    object.XMREUR = xmreur.XMREUR
                } else {
                    object.XMREUR = ''
                }
                const xmreth =  obj.arrayXMRETH.find(element => element.date == element_.date)
                if (xmreth) {
                    object.XMRETH = xmreth.XMRETH
                } else {
                    object.XMRETH = ''
                }
                const xmrltc =  obj.arrayXMRLTC.find(element => element.date == element_.date)
                if (xmrltc) {
                    object.XMRLTC = xmrltc.XMRLTC
                } else {
                    object.XMRLTC = ''
                }
                const xmrars =  obj.arrayXMRARS.find(element => element.date == element_.date)
                if (xmrars) {
                    object.XMRARS = xmrars.XMRARS
                } else {
                    object.XMRARS = ''
                }
                const xmrbtc =  obj.arrayXMRBTC.find(element => element.date == element_.date)
                if (xmrbtc) {
                    object.XMRBTC = xmrbtc.XMRBTC
                } else {
                    object.XMRBTC = ''
                }
                const ethvef =  obj.arrayETHVEF.find(element => element.date == element_.date)
                if (ethvef) {
                    object.ETHVEF = ethvef.ETHVEF
                } else {
                    object.ETHVEF = ''
                }
                const ethusd =  obj.arrayETHUSD.find(element => element.date == element_.date)
                if (ethusd) {
                    object.ETHUSD = ethusd.ETHUSD
                } else {
                    object.ETHUSD = ''
                }
                const ethgbp =  obj.arrayETHGBP.find(element => element.date == element_.date)
                if (ethgbp) {
                    object.ETHGBP = ethgbp.ETHGBP
                } else {
                    object.ETHGBP = ''
                }
                const etheur =  obj.arrayETHEUR.find(element => element.date == element_.date)
                if (etheur) {
                    object.ETHEUR = etheur.ETHEUR
                } else {
                    object.ETHEUR = ''
                }
                const ethxmr =  obj.arrayETHXMR.find(element => element.date == element_.date)
                if (ethxmr) {
                    object.ETHXMR = ethxmr.ETHXMR
                } else {
                    object.ETHXMR = ''
                }
                const ethltc =  obj.arrayETHLTC.find(element => element.date == element_.date)
                if (ethltc) {
                    object.ETHLTC = ethltc.ETHLTC
                } else {
                    object.ETHLTC = ''
                }
                const ethars =  obj.arrayETHARS.find(element => element.date == element_.date)
                if (ethars) {
                    object.ETHARS = ethars.ETHARS
                } else {
                    object.ETHARS = ''
                }
                const ethbtc =  obj.arrayETHBTC.find(element => element.date == element_.date)
                if (ethbtc) {
                    object.ETHBTC = ethbtc.ETHBTC
                } else {
                    object.ETHBTC = ''
                }
                arr.push(object)
                object = {}
            }
    })
    return arr
}
module.exports = joinCryptos