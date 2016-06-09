var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);


//USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts:[postSchema]
});

var User = mongoose.model("User", userSchema);


User.findOne({name: "Reo"}, function(err, user){
  if(err){
    console.log(err);
  } else {
    user.posts.push({
      title: "Banana",
      content: "Yum Yum"
    });
    user.save(function(err, user){
        if(err){
          console.log(err);
        } else {
          console.log(user);
        }
    });
  };
});



// test user model

// var newUser = new User({
//   email: "reoim@naver.com",
//   name: "Reo"
// });
//
// newUser.save(function(err, user){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });


// test post model

// var newPost = new Post({
//   title: "Apple",
//   content: "Delicious"
// });
//
// newPost.save(function(err, post){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });
