'use strict'
const redisClient = require('../../../config/redis-db').redisClient
const {promisify} = require('util')
const jsonCoin = async (req,res) => {
    const getAsync = promisify(redisClient.hgetall).bind(redisClient)
    const reply = await getAsync("key")
    res.status(200).send({"time":{"timestamp":reply.timestamp},'BTC':{"VEF":reply.VEF}})
}
module.exports = jsonCoin