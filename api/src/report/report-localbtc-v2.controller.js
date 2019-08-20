'use strict'
const localbtc = require('../../../services/localbitcoins.service')
const reportLocalbtcV2 = async (req,res) => {
    try {
        const ARR_VES = await localbtc()
        res.xls('reportLocalbtc.xlsx', ARR_VES)
    } catch (error) {
        throw Error(error)
    } 
}
module.exports = reportLocalbtcV2