const department = require('../db_apis/department.js');

const get = async (req, res, next) => {
    try {
        const rows = await department.getDepartment();
    
        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(204).end();
        }
    } catch (err) {
        next(err);
        console.log(err);
    }
};

module.exports.get = get;