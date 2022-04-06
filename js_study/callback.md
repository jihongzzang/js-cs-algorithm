### **callBack**

- 상황을 가지고 생각해보자

```
a: 이 함수 처리해주세요.
b: 네 처리하고 다시 연락드릴게요

=> 제어권 위임
```

### **제어권 위임**

1. 실행시점
2. 매개변수
3. this

- 실행시점

```js
var cb = function () {
  console.log('1초마다 실행될 겁니다.');
};

setInterval(cb, 1000);

=> 제어권을 setInterval에 넘겨준다.
```

- 매개변수

```js
var arr = [1, 2, 3, 4, 5];
var entries = [];
arr.forEach(
  function (v, i) {
    etries.push(i, v, this[i]);
  },
  [10, 20, 30, 40, 50]
);

console.log(entries);

// output
// [([0, 1, 10], [1, 2, 20], [2, 3, 30], [3, 4, 40], [4, 5, 50])];
```

- this

```js
document.body.innerHTML = '<div id="a">abc</div>';
function cbFunc(x) {
  console.log(this, x);
}

document.getElementById('a').addEventListenr('click', cbFunc);

//output
// this => domElement
// x => PointerEvent
```

### **callBack 특징**

- 다른 함수(A)의 인자로 콜백함수(B)를 전달하면 A가 B의 제어권을 갖게 된다
- 특별한 요청(bind)이 없는 한 A에 미리 정해놓은 방식에 따라 B를 호출한다
- 미리 정해놓은 방식이란
  - 어떤 시점에 콜백을 호출할지
  - 인자에는 어떤값들을 지정할지
  - this에 무엇을 바인딩할지 등

### **callBack 주의**

- 콜백은 함수다

```js
var arr = [1, 2, 3, 4, 5];
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    if (this.vals) {
      console.log(this.vals, v, i);
    } else {
      console.log(this, v, i);
    }
  },
};

obj.logValues(1, 2);
//이경우엔 메서드로서 호출 했으니 결과값은 [ 1, 2, 3 ] 1 2

arr.forEach(obj.logValues);
//콜백함수로 전달 따라서 this에는 전역객체가 담긴

//this가 obj를 바라보게 하고싶을때
arr.forEach(obj.logValues.bind(obj));
arr.forEach(obj.logValues, obj);
```
