var mongoose = require('mongoose')
const chalk = require('chalk')
const debug = require('debug')('btcven-api-v2:mongo-db')
mongoose.Promise = global.Promise

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/btcven-db'

const initMongoDB = async () =>{
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true })
        debug('Conexion db Mongo iniciada')
    } catch (error) {
        console.log(`${chalk.red('[fatal error]')} ${error}`)
    }
}
module.exports = initMongoDB
