const  filterHistoric = (object,coin,pair,version) => {
    let objectRes = {}
    if (coin) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                if (key.search(coin.toUpperCase())>0) {
                    objectRes[key] = object[key]
                }
            }
        }
    }
    if (pair) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                if (key.search(changePair(pair,version).toUpperCase())>-1) {
                    objectRes[key] = object[key]
                }
            }
        }
    }
    return objectRes
}
const changePair = (pair,version) => {
    if (version)
        return pair
    else
        return `${pair.substr(pair.length-3)}_${pair.substr(0,3)}`
}

module.exports = filterHistoric