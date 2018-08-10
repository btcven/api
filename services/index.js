const timestamp = Math.round(new Date().getTime()/1000)
const localbtc = require('./btc.service')
const coinValue = async () => {
    try {
        const object = {}
        const VEF_BTC = await localbtc()
        object.timestamp = timestamp
        object.VEF_BTC = VEF_BTC
        return object
    } catch (error) {
        throw Error(error)
    }
}

module.exports = coinValue