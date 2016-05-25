# Simple movie search app with Express.js

## Today I Learned
### [req.body](http://expressjs.com/en/4x/api.html#req.body)
> 초기상태는 undefined.<br>
[body-parser](https://www.npmjs.com/package/body-parser) 나 [multer](https://www.npmjs.com/package/multer) 같은 body-parsing middleware를 사용하여 값을 받을 수 있음. <br>

예시코드
```
var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
```



### req.query
> query string 의 변수값을 포함한 오브젝트.<br>
query string 이 없으면 빈 오브젝트를 반환 {}

예시코드
```
// GET /search?q=tobi+ferret
req.query.q
// => "tobi ferret"

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order
// => "desc"

req.query.shoe.color
// => "blue"

req.query.shoe.type
// => "converse"
```

### req.params
