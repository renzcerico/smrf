const oracledb = require('oracledb');
const database = require('../services/database.js');

const sql = `
            DECLARE
                header_id NUMBER;
                request NUMBER;
            BEGIN
                INSERT INTO hr.tbl_request 
                        (date_required,
                        machine, 
                        department, 
                        notes, 
                        status, 
                        created_by, 
                        recipient, 
                        reviewed_by, 
                        approved_by, 
                        date_reviewed, 
                        date_approved, 
                        created_at, 
                        updated_at, 
                        priority) 
                    VALUES 
                        (TO_DATE(:date_required, 'YYYY/MM/DD'), 
                        :machine, 
                        :department, 
                        :notes,
                        :status, 
                        TO_NUMBER(:created_by), 
                        TO_NUMBER(:recipient), 
                        TO_NUMBER(:reviewed_by), 
                        TO_NUMBER(:approved_by), 
                        TO_DATE(:date_reviewed, 'MM/DD/YYYY'), 
                        TO_DATE(:date_approved, 'MM/DD/YYYY'), 
                        SYSDATE, 
                        TO_DATE(:updated_at, 'MM/DD/YYYY'), 
                        :priority) returning ID into header_id;

                    IF header_id > 0 THEN                        
                        FOR i IN 1..:request_id
                        LOOP
                            INSERT INTO hr.TBL_REQUEST_DETAILS 
                                (header_id, 
                                request_id, 
                                remarks) 
                            VALUES 
                                (header_id,
                                :request_id(i),
                                'ASDASD') returning ID into request;
                        END LOOP;
                        
                        IF request IS NULL THEN
                            ROLLBACK;
                        END IF;

                    END IF;
            END;`;

        const sql2 = `BEGIN 
                        dbms_ouput.put_line(:request_id);
                      END;`;

async function request(data) {
    const result = await database.simpleExecute(sql2, data);
    console.log(result);
    console.log(sql2);
    return result;
}

module.exports.request = request;