module.exports = reply => {
    return {"time": {
                        "timestamp": Number(reply.timestamp)
                     }, 
             'BTC':  {  
                        "VEF": Number(reply.BTCVEF),
                        "USD": Number(reply.BTCUSD),
                        "EUR": Number(reply.BTCEUR),
                        "LTC": Number(reply.BTCLTC),
                        "ARS": Number(reply.BTCARS)
                    },
            'LTC':  {   
                        "VEF": Number(reply.LTCVEF),
                        "USD": Number(reply.LTCUSD),
                        "EUR": Number(reply.LTCEUR),
                        "ARS": Number(reply.LTCARS),
                        "BTC": Number(reply.LTCBTC)
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