var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = mongoose.Schema({
  name: String,
  age: Number
});

var Cat = mongoose.model('Cat', catSchema);


// var reo = new Cat({
//     name: "Noris",
//     age: 11
// });
//
// reo.save(function(err,cat){
//   if(err){
//     console.log("Something is wrong!");
//   } else {
//     console.log("We just saved a cat to DB");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Snow",
  age: 9
}, function(err,cat){
  if(err){
    console.log(err);
  } else {
    console.log(cat);
  }
});

Cat.find({}, function(err,cats){
  if(err){
    console.log(err);
  } else {
    console.log(cats);
  }
});
