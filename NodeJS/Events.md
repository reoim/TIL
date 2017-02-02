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


## Error Events
`EventEmitter` 인스턴스에서 에러가 발생하면 보통 `error` 이벤트를 emit 하는데 Node.js에서는 요게 좀 특별한 케이스임. 

`EventEmitter`에 `error` event를 등록시키지 않고 `error` event가 emit될 경우 에러가 발생하고 Node.js 프로세스가 종료됨.

```javascript
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));
// Throws and crashes Node.js
```

Node.js 프로세스가 크래쉬 되는것을 방지하기 위해서는 listenr를 [process object's uncaughtException event](https://nodejs.org/api/process.html#process_event_uncaughtexception)에 등록시켜야 함.

```javascript
const myEmitter = new MyEmitter();

process.on('uncaughtException', (err) => {
  console.log('whoops! there was an error');
});

myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error
```

제일 좋은 방법은 항상 `error` event를 따로 등록 시켜두는거임

```javascript
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.log('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error
```

# Reference 
[Node.js Doc](https://nodejs.org/api/events.html)
