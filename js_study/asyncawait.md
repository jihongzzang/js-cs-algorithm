### **async & await**

```js
콜백에서 살려주세여!!


timer(1000, function () {
  console.log('작업');
  timer(1000, function () {
    console.log('작업2');
    timer(1000, function () {
      console.log('작업3');
      timer(1000, function () {
        console.log('작업4');
      });
    });
  });
});
```

- 위쪽의 코드의 경우 비동기적인 작업에서 콜백 헬의 예를 보여주는 코드
- 이런 문제를 도와주기 위해 등장한 것이 `Promise`

```js
콜백에서 살려주기 위해 내가 등장했다. `Promise`

timer(1000)
  .then(function () {
    console.log('작업1');
    return timer(1000);
  })
  .then(function () {
    console.log('작업2');
    return timer(1000);
  })
  .then(function () {
    console.log('작업3');
    return timer(1000);
  })
  .then(function () {
    console.log('작업4');
    return timer(1000);
  });
```

```js
내가 더 간편하게 해줄께 `aysnc await`

function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

async function run(){
  await timer(1000);
  console.log('작업1');

  await timer(1000);
  console.log('작업2');

  await timer(1000);
  console.log('작업3');

  await timer(1000);
  console.log('작업4');
}

run()
```

```js
function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
console.log('start'); //바로 반환
timer(1000)
  .then(function (time) {
    console.log(`time: ${time}`);
    return timer(time + 1000); //1초뒤 반환
  })
  .then(function (time) {
    console.log(`time: ${time}`);
    return timer(time + 1000); //2초뒤 반환
  })
  .then(function (time) {
    console.log(`time: ${time}`);
    console.log('end'); //--5번을 이렇게 넣기ㄴ
  }); //3초 뒤 반환
console.log('end'); //바로 반환 ---5
```

```js
async function run() {
  console.log('start'); //-2
  var time = await timer(1000);
  console.log('time: ' + time); //-->4
  time = await timer(time + 1000);
  console.log('time: ' + time); //-->5
  time = await timer(time + 1000);
  console.log('time: ' + time); //-->6
  console.log('end'); //-->6
}
console.log('parent start'); //-1
run();
console.log('parent end'); //-3
```

- `async` 가 붙어잇는 run 함수는 비동기적으로 동작하는 함수였다.

- 그렇다면 parent end를 제일 마지막에 출력 하는 방법은 무엇일까?
- 함수를 promise를 리턴하는 비동기적인 함수로 만들어주는 키워드 그렇기 때문에 저 함수 안에서는 await를 사용할 수 있다.

```js
async function run() {
  console.log('start'); //-2
  var time = await timer(1000);
  console.log('time: ' + time); //-3
  time = await timer(time + 1000);
  console.log('time: ' + time); //-4
  time = await timer(time + 1000);
  console.log('time: ' + time); //-5
  console.log('end'); //-6
}
async function run2() {
  console.log('parent start'); //-1
  await run();
  console.log('parent end'); //-8
}
run2();
```

- 모든 작업이 끝난 후에 처리 하고싶은 작업이 더있는데 그럴때마다 async키워드를 사용해서 함수를 계속 만들어야 할까?
- `aysnc func`은 `promise`값을 반환한다
- 그말은 즉 `then` 을 사용할 수 있다.

```js
run2().then(function () {
  console.log('parent parent end');
});
```

```js
async function run() {
  console.log('start'); //-2
  var time = await timer(1000);
  console.log('time: ' + time); //-3
  time = await timer(time + 1000);
  console.log('time: ' + time); //-4
  time = await timer(time + 1000);
  console.log('time: ' + time); //-5
  console.log('end'); //-6
  return time;
}
async function run2() {
  console.log('parent start'); //-1
  var time = await run();
  console.log('time: ' + time); //-7
  console.log('parent end'); //-8
}
run2();
```
