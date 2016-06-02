var express = require('express');
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req,res){
  var campgrounds = [
    {name: "Salmon creek", image: "http://d3tgwe5x8vy0gu.cloudfront.net/~/media/DF58734103EF43669F1005AF8B668209.ashx"},
    {name: "Sunnybank", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdYM5TAPf0r9SgGnWTys8GUaJ--XijnoSXCUcxCcv146oMWSGEg"},
    {name: "Bittangabe", image: "http://www.nationalparks.nsw.gov.au/~/media/D37B15D23FE74F8286DBF29D409E6520.ashx"}
  ];

  res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function(){
  console.log("server on port 3000");
});
