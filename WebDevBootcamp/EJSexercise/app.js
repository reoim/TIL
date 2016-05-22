var express = require("express");
var app = express();

//express serve files in public folder
app.use(express.static("public"));

//consider render file as ejs file
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
  //it's same as res.render("home.ejs")
  //because of code above
  //  app.set("view engine", "ejs");

});


app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;

  res.render("love", {thingVar: thing});
  //thingVar in love.ejs is equal to thing
});


app.get("/posts", function(req, res){
  var posts = [
    {
      title: "post1",
      author: "author1"
    },
    {
      title: "post2",
      author: "author2"
    },
    {
      title: "post3",
      author: "author3"
    }
  ];

  res.render("posts", {posts : posts});

});

app.listen(3000, function(){
  console.log("You are on port 3000");
});
