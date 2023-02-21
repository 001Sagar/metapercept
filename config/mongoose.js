const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/test');

const db = mongoose.connection;



db.once('open',function(err){
    if(err){
        console.log(err);
    }
    console.log("Successfully connexted to MongoDB database");
})

module.exports = db;