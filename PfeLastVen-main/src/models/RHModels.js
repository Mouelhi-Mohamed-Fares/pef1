const mongoose = require ('mongoose');

const RHSchema = mongoose.Schema({
    
    email:String,
    password:String
})
const model = mongoose.model('RH', RHSchema);
module.exports = model;