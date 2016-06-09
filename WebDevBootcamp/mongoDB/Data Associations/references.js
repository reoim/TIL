var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

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
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

var User = mongoose.model("User", userSchema);

// Post.create({
//   title: "Pear",
//   content: "Yum Yum Yum"
// }, function(err, post){
//     User.findOne({name:"Reo"}, function(err, foundUser){
//       if(err){
//         console.log(err);
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save(function(err, data){
//           if(err){
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         })
//       }
//     });
// });



// Find user
// Find all posts for that user

User.findOne({name:"Reo"}).populate("posts").exec(function(err, user){
  if(err){
    console.log(err);
  } else {
    console.log(user);
  }
})
