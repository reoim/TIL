# EJS

#### In order to rander ejs file, ejs file need to be located under views folder.
ex> project/view/home.ejs

#### Difference between <%= %> and <% %>
* JavaScript between <% %> is executed.
* JavaScript between <$= $> adds HTML to the result

#### How to get data from route path
app.js
```
app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;

  res.render("love.ejs", {thingVar: thing});
  //thingVar in love.ejs is equal to thing
});
```
love.ejs
```
<h1>You fall in love with: <%= thingVar %></h1>
```
Cannot use var thing directly to ejs file.<br>
following code will not work.<br>
thing is not defined.
```
<h1>You fall in love with: <%= thing %></h1>
```
