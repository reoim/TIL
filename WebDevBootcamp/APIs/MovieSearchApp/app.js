var express = require('express');
var app = express();
var request = require('request');

app.set("view engine", "ejs");

app.get("/", function(req, res){

  res.render("search");
});

app.get("/results", function(req, res){
  var query = req.query.search; //get data from query string
  var url = "http://omdbapi.com/?s=" + query;
  request(url, function(error, response, body){
    if(!error&&response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("result", {data: data});
    }
  });
});

app.listen(3000, function(){
  console.log("Server on port 3000!");
});
