var redis = require('redis')
const chalk = require('chalk')
const redisClient =  redis.createClient({host : 'localhost', port : 6379})
const initRedisDB = new Promise((resolve, reject) =>{
    redisClient.on('ready',() => {
        resolve(redisClient)
        console.log(`${chalk.green('[btven-api-v2]')} Conexion db Redis iniciada con exito!`)
        })
    redisClient.on('error',() => {
        console.log(`${chalk.red('Error in Redis')} ${error}`)
        reject(error)
    })
})
module.exports = {initRedisDB,redisClient}