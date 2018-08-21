const coinValue = require('../services/index')
const cron = require('node-cron')
const chalk = require('chalk')
const { promisify } = require('util')
const momentTimeZone = require('moment-timezone')

const uploadDataCache = redisClient => {
    workingEvery5min(redisClient)
    cron.schedule('*/15 * * * *', () => {
        let m1 = momentTimeZone().tz('America/Caracas')
        console.log(`hora ${m1}`)
        workingEvery5min(redisClient)
    })
}
const workingEvery5min = async redisClient => {
    try {
        const coinvalue = await coinValue()
        if (coinvalue) {
            const getAsync = promisify(redisClient.hmset).bind(redisClient)
            const reply = await getAsync("jsonCoin",coinvalue)
            console.log(`${chalk.green('[btven-coin-schedule]')} set value ${reply}`)
        }
    } catch (error) {
        throw Error(error)
    }
}
module.exports = uploadDataCache