var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
  res.send("Hi there!");
});


// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
  res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
  console.log("Someone request /dog");
  res.send("MEOW!");
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000');
});
