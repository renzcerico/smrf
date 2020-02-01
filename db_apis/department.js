const oracledb = require('oracledb');
const database = require('../services/database.js');

const sql = `SELECT 
                id, 
                name
            FROM tbl_department`;

const getDepartment = async () => {
    const result = await database.simpleExecute(sql);

    return result.rows;
};

module.exports.getDepartment = getDepartment;