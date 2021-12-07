var express = require('express')
var app = express()
// var path = require('path')

app.get('/',function(req,res){
    res.send("Hellow From yash server")
})

app.listen(3009,function(error){
    if(error)console.log(error);
    console.log("Server is running at 3009");
    console.log("Hellow Yash Kumar");
})