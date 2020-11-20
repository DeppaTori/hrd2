var express = require('express');
var router = express.Router();
var employeeController = require('../controlles/employee');

//router.get('/employee',employeeController.getAll);
router.post('/employee',employeeController.save);
router.get('/employee/:employeeId',employeeController.getOne);
router.put('/employee/:employeeId',employeeController.update);
router.delete('/employee/:employeeId',employeeController.delete);

module.exports = router;