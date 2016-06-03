var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [

  {name: "Sunnybank", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdYM5TAPf0r9SgGnWTys8GUaJ--XijnoSXCUcxCcv146oMWSGEg"},
  {name: "Bittangabe", image: "http://www.nationalparks.nsw.gov.au/~/media/D37B15D23FE74F8286DBF29D409E6520.ashx"},
  {name: "Mountain Gravatte", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAsJ3BrCoNyeaHh_0GPBYHB7nCqlRidK1IRa1a_IYREoVQ0PFB"},
  {name: "Salmon creek", image: "http://d3tgwe5x8vy0gu.cloudfront.net/~/media/DF58734103EF43669F1005AF8B668209.ashx"},
  {name: "Sunnybank", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdYM5TAPf0r9SgGnWTys8GUaJ--XijnoSXCUcxCcv146oMWSGEg"},
  {name: "Bittangabe", image: "http://www.nationalparks.nsw.gov.au/~/media/D37B15D23FE74F8286DBF29D409E6520.ashx"},
  {name: "Mountain Gravatte", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAsJ3BrCoNyeaHh_0GPBYHB7nCqlRidK1IRa1a_IYREoVQ0PFB"},
  {name: "Salmon creek", image: "http://d3tgwe5x8vy0gu.cloudfront.net/~/media/DF58734103EF43669F1005AF8B668209.ashx"},
  {name: "Sunnybank", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdYM5TAPf0r9SgGnWTys8GUaJ--XijnoSXCUcxCcv146oMWSGEg"},
  {name: "Bittangabe", image: "http://www.nationalparks.nsw.gov.au/~/media/D37B15D23FE74F8286DBF29D409E6520.ashx"},
  {name: "Mountain Gravatte", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAsJ3BrCoNyeaHh_0GPBYHB7nCqlRidK1IRa1a_IYREoVQ0PFB"},
  {name: "Salmon creek", image: "http://d3tgwe5x8vy0gu.cloudfront.net/~/media/DF58734103EF43669F1005AF8B668209.ashx"}



];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req,res){


  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name:name, image:image};
  campgrounds.push(newCampground);

  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

app.listen(3000, function(){
  console.log("server on port 3000");
});
