## Passing arguments and `this` to listeners
`eventEmitter.emit()` 메소드는 argument를 넘겨줄수 있음. <br>
`EventEmitter`를 통해 listener function이 불러질때 `this` 키워드는 그 listner function 이 붙어있는 `EventEmitter`를 레퍼런스함.

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined }
});
myEmitter.emit('event', 'a', 'b');
```

하지만 ES6 의 에로우 펑션을 이용할 경우엔 `EventEmitter` 를 레퍼런스 하지 않는다. (왜 이런거지 --?)
```javascript
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');
```


# Reference 
[Node.js Doc](https://nodejs.org/api/events.html)
