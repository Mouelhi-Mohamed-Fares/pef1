const express = require('express');
const db =require('./db');
const employeeRouter= require('./routes/employeeRouter');
const RHRouter= require('./routes/RHRouters');
const vrRouter= require('./routes/vacationRouter');
const app = express();


const cors = require ("cors")
app.use(cors())
 
app.use(express.json())
app.use('/employee',employeeRouter);
app.use('/RH',RHRouter);
app.use('/vacation',vrRouter);

app.listen(3000,()=> {
console.log('listening on port 3000');
});
