const EmployeeModel = require('../models/employeeModels');

const createEmployee = async (req, res) => {
  const {fullname,email,password } = req.body;

  const newEmplyee = await EmployeeModel.create({ fullname,email,password });
  res.json(newEmplyee);
};



module.exports = {
  createEmployee,
   
};
 