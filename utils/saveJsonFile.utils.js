'use strict'
const historicCoinModel = require('../models/historic-coin.model')
const formatHistoric = require('./formatHistoricCoin.utils')
const formatHistoricV2 = require('./formatHistoricCoinV2.utils')
const jsonfile = require('jsonfile')
const debug = require('debug')('btcven-api-v2:saveJsonFile-utils')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

const HISTORIC_FILE = process.env.HISTORIC_FILE || 'historic.json'
const HISTORIC_FILE_V2 = process.env.HISTORIC_FILE_V2 || 'historicV2.json'

 async function historicCoinQuery(){
    try {
        const historicCoin = await historicCoinModel.find({},{_id:false,__v:false},{lean: true}).sort({date:1})
        if (historicCoin) {
            savejsonfile(historicCoin,HISTORIC_FILE,formatHistoric)
            savejsonfile(historicCoin,HISTORIC_FILE_V2,formatHistoricV2)
        } else {
           debug('not found')
        }
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} ${error.message}`)
    }
}
const savejsonfile = (historicCoin,historic_file,formatHistoric_) => {
    ensureDirectoryExistence(historic_file)
    jsonfile.writeFile(historic_file, formatHistoric_(historicCoin), err => {
        if (err) {
            console.log("An error occured while writing JSON Object to File.")
        }else {
            console.log("JSON file has been saved.")
        }
    })
}

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }

  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

module.exports = historicCoinQuery
