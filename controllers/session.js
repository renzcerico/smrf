const session = require('express-session');

async function get(req, res, next) {
    session.username = "USER|RENZ CERICO|12092";
    console.log(session.username);
    res.status(201).json(session.username);
}
 
module.exports.get = get;
