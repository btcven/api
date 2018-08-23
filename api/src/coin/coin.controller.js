'use strict'
const redisClient = require('../../../config/redis-db').redisClient
const construcResp = require('../../../utils/construJsonRes.utils')
const calculator = require('../../../utils/calculator.utils')
const {promisify} = require('util')
const jsonCoin = async (req,res) => {
    const html = req.query.html
    const currency = req.query.currency
    const amount = req.query.amount
    const to = req.query.to
    const getAsync = promisify(redisClient.hgetall).bind(redisClient)
    const json = await getAsync("jsonCoin")
    const jsonEstruct = construcResp(json)
    if (html==='no' && currency && amount)
        res.status(200).send(calculator(jsonEstruct,currency,amount,to))
      else
        res.status(200).send(jsonEstruct)
}
module.exports = jsonCoin