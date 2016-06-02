# EJS

### In order to render ejs file, ejs file need to be located under views folder.
ex> project/view/home.ejs
<br>

### Difference between <%= %> and <% %>
* JavaScript between <% %> is executed.
* JavaScript between <%= %> adds HTML to the result
<br>

### How to get data from route path
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
<br>

### Styleing
Locate css file under public folder.<br>
Add following code to app.js
It makes express serve files under <strong>public</strong> folder
```
app.use(express.static("public"));
```

##### link tag
Use /app.css instead of public/app.css<br>
Don't forget prefix "/"<br>
If you use "app.css", it won't work for pages that rendered from sub-route.
```
<link rel="stylesheet" href="/app.css">
```

### Header and Footer
Instead of repeating same code, create header and footer.<br>
create partials folder under views folder
```
mkdir views/partials
touch views/partials/header.ejs
touch views/partials/footer.ejs
```
example of header.ejs
```
<!DOCTYPE html>
<html>
  <head>
    <title>EJS Demo App</title>
    <link rel="stylesheet" href="/app.css" >
  </head>
  <body>
```
<strong>How to include? </strong>
```
<% include partials/header %>

<h1>You fall in love with: <%= thingVar.toUpperCase() %></h1>

<%include partials/footer %>
```
