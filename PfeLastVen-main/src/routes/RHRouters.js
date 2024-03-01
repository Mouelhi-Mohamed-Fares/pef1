const express =  require ('express');

const { login,getALLvacations}= require('../controllers/RHcontrollers');

const router = express.Router()

router.post('/login',login);
router.get('/getALLvacations',getALLvacations);
 

module.exports = router