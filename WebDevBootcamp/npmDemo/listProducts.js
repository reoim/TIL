var Faker = require("Faker");

for(var i=0; i<10; i++){
  var name = Faker.Name.findName();
  var address = Faker.Address.streetAddress();
  console.log(name);
  console.log(address);
}
