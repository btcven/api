module.exports = reply => {
    return {"time": {
                        "timestamp":reply.timestamp
                     }, 
             'BTC':  {  "USD":reply.USD_BTC,
                        "EUR":reply.EUR_BTC,
                        "VEF":reply.VEF_BTC,
                        "GBP":reply.GBP_BTC,
                        "XMR":reply.XMR_BTC,
                        "ETH":reply.ETH_BTC,
                        "LTC":reply.LTC_BTC,
                        "ARS":reply.ARS_BTC
                    },
            'LTC':  {   "VEF":reply.VEF_LTC,
                        "USD":reply.USD_LTC,
                        "GBP":reply.GBP_LTC,
                        "EUR":reply.EUR_LTC,
                        "XMR":reply.XMR_LTC,
                        "ETH":reply.ETH_LTC,
                        "ARS":reply.ARS_LTC
                    },
            'XMR':  {   "VEF":reply.VEF_XMR,
                        "USD":reply.USD_XMR,
                        "GBP":reply.GBP_XMR,
                        "EUR":reply.EUR_XMR,
                        "LTC":reply.LTC_XMR,
                        "ETH":reply.ETH_XMR,
                        "ARS":reply.ARS_XMR
                    },
            'ETH':  {   "VEF":reply.VEF_ETH,
                        "USD":reply.USD_ETH,
                        "GBP":reply.GBP_ETH,
                        "EUR":reply.EUR_ETH,
                        "LTC":reply.LTC_ETH,
                        "XMR":reply.XMR_ETH,
                        "ARS":reply.ARS_ETH
                    },
  'exchange_rates': {   "EUR_USD":reply.EUR_USD,
                        "VEF_USD":reply.VEF_USD,
                        "ARS_USD":reply.ARS_USD,
                        "XVE_USD":reply.XVE_USD,
                        "XVE_EUR":reply.XVE_EUR,
                        "XAR_USD":reply.XAR_USD
                    },
            }
}