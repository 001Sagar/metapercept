const express = require('express');
const app = express();

const port = 8000;

// require Mongodb
const db = require('./config/mongoose');

//Routes
const routes = require('./routes/route')
app.use('/user',routes);

app.get('/',function(req,res){
    res.send('Yead Server is run');
})

app.listen(port,function(req,res){
    // if(err){
    //     console.log(err);
    // }
    console.log("server is run on port::",port);
})