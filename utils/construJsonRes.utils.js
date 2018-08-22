module.exports = reply => {
    return {"time": {
                        "timestamp": Number(reply.timestamp)
                     }, 
             'BTC':  {  
                        "VEF": Number(reply.BTCVEF),
                        "VES": Number(reply.BTCVES),
                        "USD": Number(reply.BTCUSD),
                        "GBP": Number(reply.BTCGBP),
                        "EUR": Number(reply.BTCEUR),
                        "XMR": Number(reply.BTCXMR),
                        "ETH": Number(reply.BTCETH),
                        "LTC": Number(reply.BTCLTC),
                        "ARS": Number(reply.BTCARS)
                    },
            'LTC':  {   
                        "VEF": Number(reply.LTCVEF),
                        "VES": Number(reply.LTCVES),
                        "USD": Number(reply.LTCUSD),
                        "GBP": Number(reply.LTCGBP),
                        "EUR": Number(reply.LTCEUR),
                        "XMR": Number(reply.LTCXMR),
                        "ETH": Number(reply.LTCETH),
                        "ARS": Number(reply.LTCARS),
                        "BTC": Number(reply.LTCBTC)
                    },
            'XMR':  {   
                        "VEF": Number(reply.XMRVEF),
                        "VES": Number(reply.XMRVES),
                        "USD": Number(reply.XMRUSD),
                        "GBP": Number(reply.XMRGBP),
                        "EUR": Number(reply.XMREUR),
                        "ETH": Number(reply.XMRETH),
                        "LTC": Number(reply.XMRLTC),
                        "ARS": Number(reply.XMRARS),
                        "BTC": Number(reply.XMRBTC)
                    },
            'ETH':  {   
                        "VEF": Number(reply.ETHVEF),
                        "VES": Number(reply.ETHVES),
                        "USD": Number(reply.ETHUSD),
                        "GBP": Number(reply.ETHGBP),
                        "EUR": Number(reply.ETHEUR),
                        "LTC": Number(reply.ETHLTC),
                        "XMR": Number(reply.ETHXMR),
                        "ARS": Number(reply.ETHARS),
                        "BTC": Number(reply.ETHBTC)
                    },
  'exchange_rates': {   
                        "EUR_USD": Number(reply.USDEUR),
                        "VEF_USD": Number(reply.USDVEF),
                        "VES_USD": Number(reply.USDVES),
                        "ARS_USD": Number(reply.USDARS),
                        "XVE_USD": Number(reply.USDXVE),
                        "XVE_EUR": Number(reply.EURXVE),
                        "VES_EUR": Number(reply.EURVES),
                        "XAR_USD": Number(reply.USDXAR)
                    },
            }
}