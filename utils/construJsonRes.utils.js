module.exports = reply => {
    return {"time": {
                        "timestamp": Number(reply.timestamp)
                     }, 
             'BTC':  {  
                        "VEF": Number(reply.BTCVEF),
                        "USD": Number(reply.BTCUSD),
                        "EUR": Number(reply.BTCEUR),
                        "XMR": Number(reply.BTCXMR),
                        "ETH": Number(reply.BTCETH),
                        "LTC": Number(reply.BTCLTC),
                        "ARS": Number(reply.BTCARS)
                    },
            'LTC':  {   
                        "VEF": Number(reply.LTCVEF),
                        "USD": Number(reply.LTCUSD),
                        "EUR": Number(reply.LTCEUR),
                        "XMR": Number(reply.LTCXMR),
                        "ETH": Number(reply.LTCETH),
                        "ARS": Number(reply.LTCARS),
                        "BTC": Number(reply.LTCBTC)
                    },
            'XMR':  {   
                        "VEF": Number(reply.XMRVEF),
                        "USD": Number(reply.XMRUSD),
                        "EUR": Number(reply.XMREUR),
                        "ETH": Number(reply.XMRETH),
                        "LTC": Number(reply.XMRLTC),
                        "ARS": Number(reply.XMRARS),
                        "BTC": Number(reply.XMRBTC)
                    },
            'ETH':  {   
                        "VEF": Number(reply.ETHVEF),
                        "USD": Number(reply.ETHUSD),
                        "EUR": Number(reply.ETHEUR),
                        "LTC": Number(reply.ETHLTC),
                        "XMR": Number(reply.ETHXMR),
                        "ARS": Number(reply.ETHARS),
                        "BTC": Number(reply.ETHBTC)
                    },
  'exchange_rates': {   
                        "EUR_USD": Number(reply.USDEUR),
                        "VEF_USD": Number(reply.USDVEF),
                        "ARS_USD": Number(reply.USDARS),
                        "XVE_USD": Number(reply.USDXVE),
                        "XVE_EUR": Number(reply.EURXVE),
                        "XAR_USD": Number(reply.USDXAR)
                    },
            }
}