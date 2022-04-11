### **Promise**

- 자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용.
- 콜백 패턴은 콜백헬이 발생했을때 가독성이 나쁘고 비동기 처리과정에서 에러처리가 힘들고, 여러개의 비동기를 한번에 처리하는 데도 한계가 있음.
- `따라서 ES6에서 비동기 처리를 위한 또 다른 패턴`으로 프로미스가 등장
- 프로미스의 경우 `비동기 처리 시점을 명확하게 표현`할 수 있는 장점

[프로미스 관련 코드 내용](Promise/promise.js)

#### **동기(synchronous) 와 비동기(asynchronous)**

```js
console.log(1); //---1
console.log(2); //---2
setTimeout(function () {
  console.log(3); //---4
}, 5000);
console.log(4); //---3
```

  <img src="https://miro.medium.com/proxy/1*V5syja2casc0gCuu9zKV5g.png">

  <img src="https://miro.medium.com/max/587/1*Y41dOkntUbR3I4UCJBx9Xg.png">

#### **비동기 함수**

- 함수 내부에 비동기로 동작하는 코드를 포함한 함수
- 비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 즉시 종료
- 비동기로 동작하는 코드는 비동기 함수가 종료된 이후 완료.
- 비동기 함수 내부의 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않음.
- 바로 앞의 문장에서 처리결과에 대한 후속처리는 비동기 함수 내부에서 수행해야함

> try..., catch..., finally...
>
> try 코드블럭 실행, 내부에서 에러가 발생하면 catch err변수에 전달되고 catch 코드블럭 실행
>
> finally 코드블럭은 에러 발생과 상관없이 반드시 한 번 실행

#### **비동기 처리는 언제할까?**

- 언제 실행될지 예측하기 어렵거나 주가 되는 작업이 아닐때
- 대표적으로 통신을 할때 많이 씀

- 웹브라우저와 웹서버가 통신을 할때 동기적으로 통신을 했다면 통신하는 동안에는 어떤 행위도 못했다.
- 심지어, 우리는 사실 통신을 했다는 사실 조차도 인지하지 못했음.

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(myJson => console.log(myJson));

/*Promise {<pending>}*/

/*(100)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]*/
```

앞선 예제 코드에서 `then` 이 `Promise`라고 한다.

```js
var fetched = fetch('https://jsonplaceholder.typicode.com/posts');

console.log('fetched', fetched);

//'fetchd' Promise { <pending> }
```

```js
var fetched = fetch('https://jsonplaceholder.typicode.com/posts');

fetched.then(function (result) {
  console.log('result', result);
});
//Response {type: 'basic', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}

fetched.catch(function (reason) {
  console.log('reason', reason);
});
//reasan TypeError: Failed to fetch at <anonymous>:3:15
```

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    console.log('response', response);
  })
  .catch(function (reason) {
    console.log('reason', reason);
  });
```

### **Promise 를 사용하는 이유**

- 비동기 적인 작업을 처리할때 그 작업이 성공했는지 실패했는지에 대해 표준화된 방식을 이용해 처리 할 수 있도록 해줌
- 성공시 `then`으로 전달된 함수가 실행
- 실패시 `catch`로 전달된 함수가 실행

#### **프로미스의 후속처리 메서드**

- 프로미스의 비동기 처리 상태가 변화했을때 이에 따른 후속처리를 해야하는데 이때 `then`, `catch`, `finally` 가 있음
- 이 후속처리 메서드에 인자로 전달한 콜백함수가 선택적으로 호출된다.
- 이 메서드의 결과값은 프로미스를 반환하며 비동기로 동작

- `then` 메서드의 경우 두 개의 콜백 함수를 인자로 받을 수 있다. 첫번째는 `fulfilled` 상태, 두번째는 `rejected` 상태

- `catch` 메서드의 경우 한개의 콜백 함수를 인자로 전달 받는다. 이 경우 프로미스가 `rejected` 인 경우에만 호출

- `finally` 메서드는 한개의 콜백 함수를 인자로 전달 받는데 프로미스의 성공 또는 실패와 상관없이 한번만 호출

### **response**

```js
fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
  console.log('reponse', response.json());
});
```

response.json() 역시 `Promise`를 반환 json 텍스트를 자바스크립트 데이터 타입으로 컨버팅 하는 `Promise` 따라서 `then`, `catch`를 쓸 수 있음 `then` 과 `catch`는 콜백함수가 인자로 들어가고 그 결과값을 받는다.

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  }); // promise chaining
```

  <img src="https://infohubblog.com/wp-content/uploads/2021/08/promises.png">

### **나의 Promise를 만들어보자**

```js
function myPromiseFunc() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('2초 후 작업이 성공했습니다.');
    }, 2000);
  });
}

myPromiseFunc().then(function (data) {
  console.log('data', data);
});
```

```js
Nested 방식

function myPromiseFunc() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('2초 후 작업이 성공했습니다.');
    }, 2000);
  });
}

function myPromuseFunc2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('4초 후 작업이 성공했습니다.');
    }, 2000);
  });
}

myPromiseFunc().then(function (data) {
  console.log('data', data);
  myPromuseFunc2().then(function (data) {
    console.log('data', data);
  });
});
```

```js
Chanining 방식
function myPromiseFunc() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('2초 후 작업이 성공했습니다.');
    }, 2000);
  });
}

function myPromuseFunc2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('4초 후 작업이 성공했습니다.');
    }, 2000);
  });
}
myPromiseFunc()
  .then(function (data) {
    console.log('data', data);
    return myPromuseFunc2();
  })
  .then(function (data) {
    console.log('data', data);
  });
```

```js
function myPromiseFunc() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('에러가 발생했습니다.');
    }, 2000);
  });
}

function myPromuseFunc2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('4초 후 작업이 성공했습니다.');
    }, 2000);
  });
}

myPromiseFunc()
  .then(function (data) {
    console.log('data', data);
    return myPromuseFunc2();
  })
  .catch(function (reason) {
    console.log('reason', reason);
    return Promise.reject(); //이 부분이 다음 then을 실행 시키지 않게함
  }) //에러사항 처리
  .then(function (data) {
    console.log('data', data);
  }); //하지만 이것도 실행됨
// Error 에러메세지가 발생함
```

### **Promise All | Promise Race**

```js
function timer(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

console.time('Promise.all');

Promise.all([timer(1000), timer(2000), timer(3000)]).then(function (result) {
  console.log('result', result);
  console.timeEnd('Promise.all');
});

//result (3) [1000, 2000, 3000]
//Promise.all: 3002.2490234375 ms

console.time('Promise.race');

Promise.race([timer(1000), timer(2000), timer(3000)]).then(function (result) {
  console.log('result', result);
  console.timeEnd('Promise.race');
});

//'result' 1000
//'Promise.race: 1003ms'
```

- `all` 의 경우 가장 늦게 끝나는 작업 이후 후속으로 처리되는 작업이 있을때 사용

- `race` 의 경우 같은 일을 하는 함수끼리 경쟁을 시켜 가장 먼저 끝나는 작업의 결과값을 받아 그 다음 후속으로 처리되는 작업이 있을때

### **fetch**

- HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 Web API
- 사용법이 간단하고, 프로미스를 지원하기 때문에 비동기 처리를 위한 콜백 패턴의 단점에서 자유롭다.

```js
const promise = fetch(url[,options])

fetch("https://jsonplaceholder.typicode.com/todos/1")

fetch('https://jsonplaceholder.typicode.com/XXX/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

const wrongUrl = 'https//jsonplaceholder.typicode.com/XXX/1';

fetch(wrongUrl)
  .then(() => console.log('ok'))
  .catch(() => console.log('error')); //잘못된 방법

fetch(wrongUrl).then((response) => {
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}); //좋은 에러 처리

```

- axios의 경우 모든 HTTP에러를 reject하는 promise를 반환. catch에서 처리가 가능
