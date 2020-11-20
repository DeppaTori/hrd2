var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    name:{type:String,required:true},
    children:{type:Number,"default":0,min:0,max:10},
    address:String
});
module.exports = mongoose.model('Employee',employeeSchema,'employee');