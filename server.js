var mongoose = require('mongoose');

const router = require('express');
const opsRouter= require('router.js');
const app = router;

app.use(opsRouter,'/operation');


function initServer(){
    
try{
    mongoose.connect('mongodb://localhost:3000/users_db');
    console.log("connected ")
}catch(err){
    console.log("database not connected");
}


}

initServer();

