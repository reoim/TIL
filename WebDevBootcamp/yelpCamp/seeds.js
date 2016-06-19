var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment  = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://farm9.staticflickr.com/8154/7634428598_ef829a3b7d.jpg",
    description: "blah blah blah"
  },
  {
    name: "Knox Hills",
    image: "https://farm1.staticflickr.com/200/477903419_4fe5a5e827.jpg",
    description: "blah blah blah"
  },
  {
    name: "Sunnybank Hills",
    image: "https://farm3.staticflickr.com/2143/2386957066_1c95f3a888.jpg",
    description: "blah blah blah"
  }
]

function seedDB(){

  //Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed campground!");
    //add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, data){
          if(err){
            console.log(err);
          } else {
            console.log("added a campground");
            //create a comment
            Comment.create(
              {
                text: "This place need internet",
                author: "Homer"
              }, function(err, comment){
                if(err){
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Create new comment");
                }
              });

          }
        });
      });
  });




  //add a few comments

}

module.exports = seedDB;
