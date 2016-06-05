var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Bittangabe",
//     image: "http://www.nationalparks.nsw.gov.au/~/media/D37B15D23FE74F8286DBF29D409E6520.ashx"
//   }, function(err, campground){
//     if(err){
//       console.log(err);
//     } else {
//       console.log(campground);
//     }
//   }
//
// );



app.get("/", function(req, res){
  res.render("landing");
});


//INDEX - show all campgrounds
app.get("/campgrounds", function(req,res){
  //get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds", {campgrounds: allCampgrounds});
    }
  });


});


//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name:name, image:image};
  //Create new campgrounds and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
        //redirect back to campgrounds page
        res.redirect("/campgrounds");
    }
  });

});


//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

app.listen(3000, function(){
  console.log("server on port 3000");
});
