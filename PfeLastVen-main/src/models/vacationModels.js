const mongoose = require ('mongoose');

const vacationSchema = mongoose.Schema({
     date:String
     
})
const model = mongoose.model('Vacation', vacationSchema);
module.exports = model;