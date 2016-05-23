# Post Request Express

## [body-parser](https://www.npmjs.com/package/body-parser)
유저가 form 을 통해 보낸 데이터를 서버사이드에서 추출할때 사용함.<br>
Express 이용해서 post 라우팅할때<br>
console.log(req.body); 하면 undefined 상태임.
> #### Install
```
$ npm install body-parser
```
#### API
```
var bodyParser = require('body-parser')
```
#### Example
```
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
```
>
