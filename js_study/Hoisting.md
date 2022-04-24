### **Hoisting**

- 변수 선언문이나 함수 선언문 등을 해당 식별자의 유효범위의 선두로 옮긴 것처럼 동작하는 특성
- `let` 과 `const` 역시도 호이스팅이 일어남

> 변수는 프로그램 내에서 크게 세 가지 단계를 거친다.
>
> - 선언 : 파싱 과정에서 변수 객체가 변수에 대한 식별자들을 수집한다.
> - 초기화 : 식별자에 메모리를 할당하고 undefined 상태를 부여한다.
> - 할당 : 변수 안에 직접 값을 넘겨 준다.

```js
hoist(); //hoisted!

function hoist() {
  console.log('hoisted!');
}

console.log(h); // undefined

var h = function () {
  console.log('hoisted!!');
};

console.log(h); // ƒ h()
```

- `var` 는 호이스팅이 발생하면, 선언과 초기화가 동시에 이루어진다. 실행 시점의 스코프 최상단에서 해당 변수에 대한 메모리가 살아있기 때문에 선언부 위치에 상관 없이 참조, 할당이 가능하다.

### **TDZ(Temporal Dead Zone)**

- 스코프의 시작 지점부터 초기화 시작 지점까지의 구간

### **let**

- `let` 키워드로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.

```js
// 스코프의 선두에서 선언 단계가 실행된다.
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.
console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1
```

![https://poiemaweb.com/img/let-lifecycle.png](https://poiemaweb.com/img/let-lifecycle.png)

```js
let foo = 1; // 전역 변수

{
  console.log(foo); // ReferenceError: foo is not defined
  let foo = 2; // 지역 변수
}

//let으로 선언된 변수는 블록 레벨 스코프
```

### **const**

- `const`는 반드시 선언과 동시에 할당이 이루어져야 한다

```js
let hello
hello = 'hello'

const hi //SyntaxError: Missing initializer in const declaration
hi = 'hi'
```

### **`var` | `let` | `const`**

- ES6를 사용한다면 var 키워드는 사용하지 않는다.

- `var` 는 재선언, 재할당이 모두 가능하다. 따라서 여러사람이 프로젝트를 진행할 경우 변수가 오염될 수 있다.
- `let` 은 재선언은 불가능하나, 재할당은 가능하다.
  - 변수의 스코프는 최대한 좁게 만든다.
- `const` 는 재선언과 재할당이 모두 불가하다.
  - 변경이 발생하지 않는(재할당이 필요 없는 상수) 원시 값과 객체에는 const 키워드를 사용
