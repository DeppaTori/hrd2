var mongoose = require('mongoose');
var departmentSchema = new mongoose.Schema({
    name:{type:String,required:true},
});
mongoose.model('Department',departmentSchema);