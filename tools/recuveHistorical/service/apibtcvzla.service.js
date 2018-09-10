const superagent = require('superagent')
const createArrayForCrypto = require('../utils/createArrayForCrypto.utils')
const joincryptoforfech = require('../utils/joincryptoforfech.utils')
const saveMAnyHistorical = require('../controller/savehistorical.controller')
const historicCoinQuery = require('../controller/findHistorical.controller')
const chalk = require('chalk')
const arrayResult = async (Url) => {
    try {
        const obj = await superagent.get(Url)
        const objDB = await historicCoinQuery()
        if (obj && objDB) {
            const arrforCrypto = createArrayForCrypto(obj.body)
            saveMAnyHistorical(joincryptoforfech(arrforCrypto,objDB))
        } 
    } catch (error) {
        console.log(`${chalk.red('[error]')} Please enter a valid URL ${error}`)
        process.exit()
        throw Error(`Error: ${error}`)
    }
}

module.exports = arrayResult