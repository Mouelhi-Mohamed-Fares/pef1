const express =  require ('express');

const {createEmployee }= require('../controllers/employeeControllers');

const router = express.Router()

router.post('/createEmployee',createEmployee);
 

module.exports = router