'use strict'
const debug = require('debug')('btcven-api-v2:btcUsdEurGbp-service')
const chalk = require('chalk')
var http = require('http')
const btcUsdEurGbp = async () =>{
    try {
       const result = await getRequest()
       return result 
    } catch (error) {
        debug('error al con coindesk')
        throw Error(`Error: ${error}`)
    }
}
const getRequest = () => {
    return new Promise((resolve, reject) => {
    const options = {host: 'api.coindesk.com',path: '/v2/bpi/currentprice.json'}
    let body = ''
    const callback = res => {
        res.on('data',  d => {
            body += d })
        res.on('end',  () => {
            let parsed = JSON.parse(body)
            resolve(parsed.bpi)
        })
        res.on('error', err => {
            reject(err)
          })
      }
      http.request(options, callback).end()
    })
}

module.exports = btcUsdEurGbp