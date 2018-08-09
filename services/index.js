const timestamp = Math.round(new Date().getTime()/1000)
const localbtc = require('./btc.service')

const coinValue = {
    "timestamp" : timestamp,
    'VEF_BTC' : localbtc()
                .then((data) => {return data})
                .catch((error) => {throw Error(error)})
}

module.exports = coinValue