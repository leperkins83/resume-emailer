var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.end("my-life");
});

app.get('/kims-mood', function(req, res){
  if(Math.random() > 0.5) {
    res.end("Kim is thinking about nuclear destruction");
  }
  else{
    res.end("Kim is thinking about basketball")
  }
});

app.listen(3003);
