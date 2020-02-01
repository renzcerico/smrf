const oracledb = require('oracledb');
const database = require('../services/database.js');

const sql = `SELECT 
                r.id, 
                r.description 
             FROM tbl_request_list r
             INNER JOIN tbl_assigned_rep a ON a.request_list_id = r.id
             INNER JOIN tbl_service_rep s ON s.id = a.department_id
             WHERE a.department_id = :department`;

const requestList = async (dept) => {
    const result = await database.simpleExecute(sql, dept);
    // console.log(dept);
    // console.log(result);
    return result.rows;
};

module.exports.requestList = requestList;