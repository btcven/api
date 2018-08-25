'use strict'
const debug = require('debug')('btcven-api-v2:historic-coin')
const  jsonfile = require('jsonfile')
const filterHistoric = require('../../../utils/filterHistoric.utils')
 const  historicCoinQuery = (req,res) => {
    const coin = req.query.coin
    const pair = req.query.pair
    jsonfile.readFile('historicV2.json', (err, obj) => {
        if (err) 
            debug("An error occured while reading JSON Object to File V2.")
        if (coin || pair) 
            res.status(200).send(filterHistoric(obj,coin,pair,2))
        else
            res.status(200).send(obj)
    })
}

module.exports = historicCoinQuery