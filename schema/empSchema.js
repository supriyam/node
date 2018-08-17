const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    salary:Number
})

const employee = mongoose.model('user',user);

module.exports = employee;