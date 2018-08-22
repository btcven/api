'use strict'
const debug = require('debug')('btcven-api-v2:historic-coin')
const  jsonfile = require('jsonfile')
 const  historicCoinQuery = (req,res) => {
    const coin = req.query.coin
    const pair = req.query.pair
    jsonfile.readFile('historic.json', (err, obj) => {
        if (err) 
            debug("An error occured while reading JSON Object to File.")
        if (coin || pair) 
            res.status(200).send(filterHistoric(obj,coin,pair))
        else
            res.status(200).send(obj)
    })
}
const  filterHistoric = (object,coin,pair) => {
    let objectRes = {}
    if (coin) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                if (key.search(coin)>0) {
                    objectRes[key] = object[key]
                }
            }
        }
    }
    if (pair) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                if (key.search(changePair(pair))>-1) {
                    objectRes[key] = object[key]
                }
            }
        }
    }
    return objectRes
}
const changePair = pair =>{return `${pair.substr(pair.length-3)}_${pair.substr(0,3)}`}

module.exports = historicCoinQuery