const mongoose = require ('mongoose');

const EmployeeSchema = mongoose.Schema({
    fullname:String,
    email:String,
    password:String
})
const model = mongoose.model('Employee', EmployeeSchema);
module.exports = model;