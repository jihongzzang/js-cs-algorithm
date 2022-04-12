### **forEach vs map**

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach 공식문서</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map 공식문서</a>

### **함수형 프로그래밍**

- 함수형 프로그래밍은 **순수함수**와 **보조 함수의 조합**을 통해 로직 내에 존재하는 **조건문과 반복문을 제거**하여 **복잡성을 해결**하고 **변수의 사용을 억제**하여 **상태변경을 피하려는 프로그래밍 패러다임**

### **순수함수**

- 순수 함수란 동일한 인자를 넣었을 때 항상 동일한 리턴값을 반환하고 외부에 영향을 받지 않는 함수.

- 사이드 이펙트를 만들지 않는다. (외부에서 선언된 상태(state)를 수정하지 않는다)

```js
var obj = {val: 20};

//외부에 영향을 주는 add4
function add4(obj, b) {
  obj.val += b;
}

//외부에 영향을 주는 add5
function add5(obj, b) {
  retrun {val: obj.val + b}
}
```

### **Array.prototype.forEach**

- 배열 요소마다 한 번씩 주어진 함수(콜백)를 실행

### **Array.prototype.map**

- 배열 내의 모든 요소 각각에 대하여 주어진 함수(콜백함수)를 호출한 결과를 모아 새로운 배열을 반환

### **forEach와 map**

- forEach 메서드는 리턴 값을 버리고 항상 undefined를 리턴한다.
- map 메서드 메모리를 할당하고 리턴 값을 저장하지만,

- forEach 메서드는 콜백함수로 현재 배열의 원본을 수정할 수 있다.
- map메서드 새로운 Array를 리턴한다.

```js
let arr = [1, 2, 3, 4, 5];
let aPrime = [];

let a = arr.forEach(function (value) {
  return aPrime.push(value + 1);
});

console.log('a: ', a);
console.log('arr: ', arr);
console.log('aPrime: ', aPrime);
// 'a: undefined'
// 'arr: [ 1, 2, 3, 4, 5 ]'
// 'aPrime: [ 2, 3, 4, 5, 6 ]'

let arr2 = [1, 2, 3, 4, 5];

let b = arr2.map(function (value) {
  return value + 1;
});

console.log('b: ', b);
console.log('arr2: ', arr2);
// 'b: [ 2, 3, 4, 5, 6 ]'
// 'arr2: [ 1, 2, 3, 4, 5 ]'
```
