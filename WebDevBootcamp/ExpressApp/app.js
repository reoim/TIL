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

app.get("/r/:subredditName", function(req, res){
  console.log(req.params.subredditName);
  res.send("You are in subredditName page!");
});

app.get("*", function(req, res){
  res.send("You are a star!!");
});



app.listen(3000, function(){
  console.log('Example app listening on port 3000');
});
