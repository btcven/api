'use strict'
const redisClient = require('../../../config/redis-db').redisClient
const construcResp = require('../../../utils/construJsonRes.utils')
const {promisify} = require('util')
const jsonCoin = async (req,res) => {
    const getAsync = promisify(redisClient.hgetall).bind(redisClient)
    const reply = await getAsync("jsonCoin")
    res.status(200).send(construcResp(reply))
}
module.exports = jsonCoin