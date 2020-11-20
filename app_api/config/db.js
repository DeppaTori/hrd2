var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/hrd2';
mongoose.connect(mongoDB);


mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + mongoDB);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

require('../models/employee');
