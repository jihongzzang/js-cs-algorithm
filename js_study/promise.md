### **Promise**

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
