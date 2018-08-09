var mongoose = require('mongoose')
const chalk = require('chalk')
const debug = require('debug')('btcven-api-v2:mongo-db')
mongoose.Promise = global.Promise

const initMongoDB = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/btcven-db', { useNewUrlParser: true })
        debug('Conexion db Mongo iniciada')
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} ${error}`)
    }
}
module.exports = initMongoDB
