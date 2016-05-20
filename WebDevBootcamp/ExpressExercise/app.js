var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res){
  var sounds = {
    pig: "Oink",
    dog: "Woof, Woof",
    cow: "Mow",
    cat: "Nyaong"
  }
  var animalKind = req.params.animal;
  var animalSound = sounds[animalKind];

  res.send("the " + animalKind + " says '" + animalSound + "'");
});

app.get('/repeat/:saySomething/:number', function(req, res){
  var say = req.params.saySomething;
  var num = req.params.number;
  var result = "";

  for(var i=0; i<num; i++){
    result += say + "  "
  };

  res.send(result);
});


app.get('*', function(req, res){

  res.send("What do you want, mate?");

});


app.listen(3000, function(){
  console.log("Listening on port 3000");
});
