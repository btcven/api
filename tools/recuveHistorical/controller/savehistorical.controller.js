const HistoricCoinModel = require('../../../models/historic-coin.model')
const chalk = require('chalk')
const saveMAnyHistorical = async (arrayHictorical) => {
    try {
       const res = await HistoricCoinModel.insertMany(arrayHictorical)
       if (res) {
           console.log(`${chalk.green('[succes]')} Successfull procces save ${res.length} items!!`)
           process.exit()
       }
    } catch (error) {
        throw Error(`Not save many  historic coin ${error} `)
    }

}
module.exports = saveMAnyHistorical