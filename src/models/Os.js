const pool = require('../utils/connMySql2')

const allOs = async(limit, offset)=>{
    const result = await pool.query('SELECT * from os limit ? offset ?', [+limit, +offset]);
    return result
}

const countOs = async()=>{
    const result = await pool.query('SELECT count(*) as count from os');
    return result
}

module.exports = {
    allOs,
    countOs,
}