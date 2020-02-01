const express = require('express');
const router = new express.Router();
const login = require('../controllers/logins.js');
const personnel = require('../controllers/personnel.js');
const session = require('../controllers/session.js');
const request = require('../controllers/request.js');

const serviceRepresentative = require('../controllers/service_representative.js');
const department = require('../controllers/department.js');
const requestList = require('../controllers/list_of_request.js');

router.route('/login/:id?')
  .post(login.post);

router.route('/personnel/:search?')
  .get(personnel.get);

router.route('/session')
  .get(session.get);
  
router.route('/requests')
  .post(request.request);
  
router.route('/service-representatives')
  .get(serviceRepresentative.get);

router.route('/departments')
  .get(department.get);

router.route('/request-list')
  .post(requestList.post);

module.exports = router;