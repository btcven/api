const serviceRecuve = require('./service/apibtcvzla.service')
const validUrl = require('valid-url');
const chalk = require('chalk')
const recuveHistoricalRemote = (url) =>{
    if (validUrl.isUri(url)) {
        serviceRecuve(url)
        console.log('Espere mientras importamos El historical...')
    } else {
        console.log(`${chalk.red('[error]')} Please enter a params valid URL`)
        process.exit()
    }
}
  module.exports = recuveHistoricalRemote