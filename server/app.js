var express = require('express');
var app = express();
var fs = require('fs');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/inspiration/Videos",function(req,res) {
    res.send("Hitting server");
});
app.get("/inspiration/Books",function(req,res) {
    fs.rea
    res.send("/resource/Books.json").status(200);
    
});
app.listen(3000,function() {
    console.log("listening at port 3000!");
});