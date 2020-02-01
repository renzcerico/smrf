const request = require('../db_apis/request.js');
const session = require('express-session');
const oracledb = require('oracledb');

const requestData = (req) => {
    // const loggedIn = session.username;
    // const user = loggedIn.split('|');
    const requestID = [];
    const requestRemarks = [];

    req.body.reqDetails.forEach(element => {
        requestID.push(parseInt(element.request));
        requestRemarks.push(element.remarks);
    });

    const data = {     
        date_required: req.body.reqDateRequired,
        machine: req.body.reqMachine,
        department: req.body.reqDepartment,
        notes: req.body.reqNotes,
        request_id: requestID,
        request_remarks: requestRemarks,
        status: 'pending',
        created_by: 12092,
        recipient: parseInt(req.body.reqRecipient),
        reviewed_by: 0,
        approved_by: 0,
        date_reviewed: null,
        date_approved: null,
        updated_at: null,
        priority: req.body.reqPriority
    };

    const data2 = { request_id: requestID }

    return data2;
};

const requestPost = async (req, res, next) => {
    try {
        let requestSet = requestData(req);
        // console.log(requestSet);
        const result = await request.request(requestSet);
        res.status(201).send(result);
    } catch (err) {
        next(err);
    }
};

module.exports.request = requestPost;