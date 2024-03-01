const AdminModel = require('../models/RHModels');
const login =async (req,res)=>{
    const {email,password} = req.body
    const admin = await AdminModel.findOne({email})
   
   
    if(!admin){
      return res.json({message:"Admin doesn't exists!"})

    }

    const pwd = await  admin.password

    if(password!==pwd ){
      return res.json({message:"username or password is not correct"})

    }
    return res.json(admin)
  }
  //em
const vacationModels = require('../models/vacationModels');

const VacationModels = require('../models/vacationModels');
const getALLvacations = async (req, res) =>{
    const ALLvacation = await VacationModels.find()
    res.json(ALLvacation);
  };
  

  module.exports = {
    login,
    getALLvacations
    
  };
