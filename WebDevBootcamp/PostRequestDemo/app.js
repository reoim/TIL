var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Hailey", "Justin", "Ken"];

app.get("/", function(req, res){
  res.render("home");
});


app.get("/friends", function(req, res){


  res.render("friends", {friends: friends});

});

app.post("/addfriend", function(req, res){
  var newBuddy = req.body.newFriend;
  friends.push(newBuddy);
  res.redirect("friends");
});


app.listen(3000, function(){
  console.log("Server on port 3000");
});
