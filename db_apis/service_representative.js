const oracledb = require('oracledb');
const database = require('../services/database.js');

const sql = `SELECT
                 id, 
                 description 
             FROM TBL_SERVICE_REP`;

const representative = async () => {
    const result = await database.simpleExecute(sql);
    
    return result.rows;
};

module.exports.representative = representative;