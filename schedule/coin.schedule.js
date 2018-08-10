const coinValue = require('../services/index')
const cron = require('node-cron')
const chalk = require('chalk')
const { promisify } = require('util')
const momentTimeZone = require('moment-timezone')
let m1 = momentTimeZone().tz('America/Caracas')
const workingEvery5min = async (redisClient) => {
    try {
        const VEF_BTC = await coinValue.VEF_BTC
        const getAsync = promisify(redisClient.hmset).bind(redisClient)
        const reply = await getAsync("key", { 'timestamp': coinValue.timestamp, 'VEF': VEF_BTC })
        console.log(`${chalk.green('[btven-coin-schedule]')} set value ${reply}  ${m1}`)
    } catch (error) {
        throw Error(error)
    }
}
const uploadDataCache = (redisClient) => {
    workingEvery5min(redisClient)
    cron.schedule('15 * * * *', () => {
        workingEvery5min(redisClient)
    })
}

module.exports = uploadDataCache