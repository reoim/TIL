var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});


app.get("/friends", function(req, res){

  var friends = ["Tony", "Hailey", "Justin", "Ken"];
  res.render("friends", {friends: friends});

});

app.post("/addfriend", function(req, res){
  res.send("You have reached the post method");
});


app.listen(3000, function(){
  console.log("Server on port 3000");
});
