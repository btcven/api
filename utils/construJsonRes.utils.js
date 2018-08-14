module.exports = reply => {
    return {"time": {
                        "timestamp": Number(reply.timestamp)
                     }, 
             'BTC':  {  "USD": Number(reply.USD_BTC),
                        "EUR": Number(reply.EUR_BTC),
                        "VEF": Number(reply.VEF_BTC),
                        "GBP": Number(reply.GBP_BTC),
                        "XMR": Number(reply.XMR_BTC),
                        "ETH": Number(reply.ETH_BTC),
                        "LTC": Number(reply.LTC_BTC),
                        "ARS": Number(reply.ARS_BTC)
                    },
            'LTC':  {   "VEF": Number(reply.VEF_LTC),
                        "USD": Number(reply.USD_LTC),
                        "GBP": Number(reply.GBP_LTC),
                        "EUR": Number(reply.EUR_LTC),
                        "XMR": Number(reply.XMR_LTC),
                        "ETH": Number(reply.ETH_LTC),
                        "ARS": Number(reply.ARS_LTC)
                    },
            'XMR':  {   "VEF": Number(reply.VEF_XMR),
                        "USD": Number(reply.USD_XMR),
                        "GBP": Number(reply.GBP_XMR),
                        "EUR": Number(reply.EUR_XMR),
                        "LTC": Number(reply.LTC_XMR),
                        "ETH": Number(reply.ETH_XMR),
                        "ARS": Number(reply.ARS_XMR)
                    },
            'ETH':  {   "VEF": Number(reply.VEF_ETH),
                        "USD": Number(reply.USD_ETH),
                        "GBP": Number(reply.GBP_ETH),
                        "EUR": Number(reply.EUR_ETH),
                        "LTC": Number(reply.LTC_ETH),
                        "XMR": Number(reply.XMR_ETH),
                        "ARS": Number(reply.ARS_ETH)
                    },
  'exchange_rates': {   "EUR_USD": Number(reply.EUR_USD),
                        "VEF_USD": Number(reply.VEF_USD),
                        "ARS_USD": Number(reply.ARS_USD),
                        "XVE_USD": Number(reply.XVE_USD),
                        "XVE_EUR": Number(reply.XVE_EUR),
                        "XAR_USD": Number(reply.XAR_USD)
                    },
            }
}