### **Error Handle**

- 에러가 발생하지 않는 코드를 작성하는 것은 불가능하다. 발생한 에러에 대처하지 않고 방치하면 프로그램은 강제종료된다.

```js
console.log('[Start]');

foo(); //Reference Error

console.log('[End]'); //출력이 되지 않음
```

---

```js
console.log('[Start]');

try {
  foo();
} catch (e) {
  console.log(e); //Error: 'foo is not defined'
}

console.log('[End]'); //정상적으로 출력
```

```js
const $button = document.querySelector('button');
//null

$button.classList.add('disabled');
//TypeError: Cannot read properties of null (reading 'classList')
```

```js
const $elem = document.querySelector('#1');
//SyntaxError: Failed to execute 'querySelector' on 'Document': '#1' is not a valid selector.
```

```js
//DOM에 버튼 요소가 존자할때 쿼리셀렉터 메서드는 에러를 발생시키지 않고 null을 반환
const $button = document.querySelector('button');
//null
$button?.classList.add('disabled');
//옵셔널 체이닝
```

### **에러 처리 코드를 미리 등록해서 처리하기**

```js
try {
  //실행할 코드
} catch (err) {
  //try코드 블럭에서 에러가 발생하면 이 코드 블럭이 실행
  //err에는 try 코드 블록에서 발생한 error 객체가 전달
} finally {
  //에러발생과 상관없이 단 한번만 실행
}
```

### **에러 객체**

```js
const error = new Error('invalid');
```

- 에러 객체는 message 프로퍼티와 stack 프로퍼티를 갖는다.
- 메세지 프로퍼티의 경우 Error 생성자 함수에 인수로 전달한 에러메세지
- stack 프로퍼티의 값은 에러를 발생시킨 콜스택의 호출 정보를 나타내는 문자열

---

- Error

  - 일반적 에러

- SyntaxError

  - 자바스크립트 문법에 맞지 않는 문을 해석할때

- ReferenceError

  - 참조할 수 없는 식별자를 참조했을 때

- TypeError

  - 피연산자 또는 인자의 데이터 타입이 유효하지 않을 때

- RangeError

  - 숫자값의 허용 범위를 벗어났을 때 발생

- URIError

  - URI 함수에 부적절한 인자를 전달했을 때 발생

- EvalError

  - eval 함수에서 발생

### **throw**

- 에러 생성자 함수로 에러 객체를 생성한다고 에러가 발생하는 것은 아니다.
- 에러를 발생시키고 싶을때 throw문으로 try 코드 블럭에 에러 객체를 던져야 한다.

```js
try {
  throw new Error('something wrong');
} catch (err) {
  console.log(err);
}
```

```js
const repeat = (n, cb) => {
  if (typeof ch !== 'function') throw new TypeError('cb must be a function');

  for (let i = 0; i < n; i++) {
    f(i);
  }
};

try {
  repeat(2, 1);
} catch (err) {
  console.log(err);
}
```

### **에러의 전파**

- 에러는 호출자(caller) 방향으로 전파된다.
- 콜스택의 아래방향(실행 중인 실행 컨텍스트가 푸시되기 직전에 푸시된 실행 컨텍스트 방향)

<img src="https://velog.velcdn.com/images%2Fniyu%2Fpost%2Fff86054c-31b0-4440-b5f1-b312f0e20b61%2Fimage.png">

```js
const foo = () => {
  throw Error('foo 에서 발생한 에러');
};

const bar = () => foo();

const baz = () => bar();

try {
  baz();
} catch (e) {
  console.log(e); //Error: 'foo 에서 발생한 에러'
}
```

- 여기서 주의할 점은 비동기 함수 `setTimeout`나 `Promise의 콜백 함수`는 호출자(caller)가 없다는 것이다.
- `setTimeout`이나 `Promise의 콜백 함수`는 `테스크 큐`나 `마이크로태스크 큐`에 일시 저장되었다가 콜 스택이 비면 이벤트 루프에 의해서 콜 스택으로 푸시되어 실행된다.

- 이때 콜 스택에 푸시된 콜백 함수의 실행 컨텍스트는 콜 스택의 가장 하부에 존재하게 되기 때문에, 에러를 전파할 호출자가 존재하지 않는다.

```js
try {
  setTimeout(function () {
    foo(); // Reference Error
  }, 1000);
} catch (error) {
  console.log(error); // 출력되지 않는다.
}
```

```js
setTimeout(function () {
  try {
    foo();
  } catch (error) {
    console.log(error); // ReferenceError: foo is not defined
  }
}, 1000);
```
