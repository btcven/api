'use strict'
const redisClient = require('../../../config/redis-db').redisClient
const {promisify} = require('util')
const jsonCoin = async (req,res) => {
    const getAsync = promisify(redisClient.hgetall).bind(redisClient)
    const reply = await getAsync("key")
    console.log(construcResp(reply))
    res.status(200).send(construcResp(reply))
}
const construcResp = (reply) => {
    return {
            "time": {   "timestamp":reply.timestamp},
            'BTC':  {   "VEF":reply.VEF_BTC,
                        "USD":reply.USD_BTC,
                        "GBP":reply.GBP_BTC,
                        "EUR":reply.EUR_BTC
                    }
            }
}
module.exports = jsonCoin