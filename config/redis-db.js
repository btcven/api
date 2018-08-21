var redis = require('redis')
const chalk = require('chalk')

const REDIS_HOST = process.env.REDIS_HOST || 'localhost'
const REDIS_PORT = process.env.REDIS_PORT || 6739

const redisClient =  redis.createClient({host : REDIS_HOST, port : REDIS_PORT})
const initRedisDB = new Promise((resolve, reject) =>{
    redisClient.on('ready',() => {
        resolve(redisClient)
        console.log(`${chalk.green('[btven-api-v2]')} Conexion db Redis iniciada con exito!`)
        })
    redisClient.on('error',(error) => {
        console.log(`${chalk.red('Error in Redis')} ${error}`)
        reject(error)
    })
})
module.exports = {initRedisDB,redisClient}
