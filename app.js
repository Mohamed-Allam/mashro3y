var express = require("express");

var app = express();

app.get("/",function(req,res){
    res.send("Hello from My Crowd funding App :) !");
})

app.listen(3000,function(){
    console.log("... App is up and Running on port 3000");
})