# Function constructor and prototype

자바스크립트에서 function은 object다. 모든 function object는 prototype 이라는 property 를 가지고 있다.

function constructor를 이용하여 객체 형성할때 

prototype 으로 필요한 메소드를 추가해주면 훨씬 깔끔한 코드를 작성할 수 있다.

예를들면,

```
function Person(firstname, lastname, age) {
    
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}


var haily = new Person('Haily', 'Jo', 31);

console.log(haily.getFullName());
```

function constructor안에 메소드를 추가하게 되면 객체가 생성될때마다 메모리를 잡아먹는다. 수천개가 넘는 객체가 쓰지도 않는 메소드 메모리를 잡아먹는건 비효율적. prototype으로 메소드를 추가해주면 function constructor를 통해 생성된 객체에서 자유롭게 메소드를 사용가능하다.

