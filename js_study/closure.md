### **closure**

- 영어사전에는 닫힘 | 폐쇄 | 완결성
- `내부함수`와 `LexicalEnv`의 조합
- [closuer 관련 코드](closure/closure.js)

### **그래서 closure가 뭐야?**

- 어떤 함수에서 A에서 함수 B를 선언했고 그때의 `함수 B`와 `A의 LexicalEnv`의 조합

- 함수를 선언할때 만들어지는 유효범위가 사라진 후에도 호출할 수 있는 함수
- 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수
- 자신이 생성될 때의 스코프에서 알 수 있었던 변수들 중 언젠가 자신이 실행될때 사용할 변수들만을 기억하여 유지시키는 함수

### **closure의 특별한 현상**

- 좀더 이해하기 쉽게 closure를 설명하자면
- `A의 LexicalEnv`와 `내부함수 B`의 조합에서 나타나는 특별한 현상

```
B(inner)
  LexicalEnv
    - environmentRecord
    - outerEnvironmentReference --!!


A(outer)
  LexicalEnv
    - environmentRecord --!!
    - outerEnvironmentReference

!!이 두부분이 서로 관련이 있는데 이때 나타나는 현상을
컨텍스트 A에서 선언한 변수를 내부함수 B에서 참조 할 경우에 발생하는 특별한 현상
```

```js
var outer = function () {
  var a = 1;
  var inner = function () {
    console.log(++a);
  };
  inner();
};

outer();
```

위의 코드의 경우 전역컨텍스트와 outer내부에서 선언한 변수 사이에 클로저가 생겼다.

전역컨텍스트에서 선언한 변수를 내부함수 outer에서 참조하는 상황은 아니다.

`당연한 개념`에 속하는 클로저

---

outer컨텍스트에서 선언한 변수를 내부함수 inner에서 참조하는 상황

특별한 현상?

```
outer
  LexicalEnv
    - environmentRecord : {a: 1, inner: f}
    - outerEnvironmentReference {outer: f}

전역컨텍스트
```

```
inner
  LexicalEnv
    - environmentRecord : {}
    - outerEnvironmentReference : {a: 1->2, inner: f}

outer
  LexicalEnv
    - environmentRecord : {a: 1->2, inner: f}
    - outerEnvironmentReference {outer: f}

전역컨텍스트
```

```
outer
  LexicalEnv
    - environmentRecord : {a: 1->2, inner: f}
    - outerEnvironmentReference {outer: f}

전역컨텍스트
```

```
전역컨텍스트 => 이 자체도 사라지면서 끝이남
```

```js
var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a; //콘솔에 출력하는 대신 return
  };
  return inner; //inner를 호출하는 대신에 return
};

var outer2 = outer(); //outer의 실행결과를 outer2에 할당
console.log(outer2()); //outer2 실행
```

```
전역컨텍스트
  - environmentRecord : {outer: f, outer2: undefined}
```

- outer 호출

```
outer
  - environmentRecord : {a: 1, inner: f}
  - outerEnvironmentReference {outer: f, outer2: undefined}

전역컨텍스트
  - environmentRecord : {outer: f, outer2: undefined}
```

- outer 실행 끝

```
outer
  - environmentRecord : {a: 1, inner: f}
  - outerEnvironmentReference {outer: f, outer2: undefined}

전역컨텍스트
  - environmentRecord : {outer: f, outer2: inner}
```

> 여기서 outer에 대한 실행컨텍스트는 사실 종료되었는데 이 내부에서 선언한 변수 a가 inner 내부 에서
>
> 참조하고 있는 outerEnvironmentRecord 상의 a변수의 참조카운트가 0이 아니다.
>
> 가비지 컬렉터는 어떤 값을 참조하는 변수가 하나라도 있다면 그 값은 수집 대상에 포함시키지 않음.
>
> 19년 기준 크롬이나 노드 등에서 사용 중인 V8엔진의 경우 내부 함수에서 실제로 사용하는 변수만 남겨두고 나머지는 GC하도록 최적화 되어있다.

```
inner
  - environmentRecord : {}
  - outerEnvironmentReference {a: 1->2}

outer
  - environmentRecord : {a: 1->2}

전역컨텍스트
  - environmentRecord : {outer: f, outer2: inner}
```

- inner 종료

```
outer
  - environmentRecord : {a: 2}

전역컨텍스트
  - environmentRecord : {outer: f, outer2: inner}
```

### **Closure 의 핵심**

- `컨텍스트 A`에서 선언한 `변수 a`를 `참초`하는 `내부함수 B`를 `A`의 `외부로 전달`할 경우, `A`가 종료된 이후에도 `a`가 `사라지지 않는` 현상

- 지역변수가 함수 종료 후에도 사라지지 않는 지역변수를 만들 수 있다.

### **Closure 활용**

```js
function user(_name) {
  var _logged = true;
  return {
    get name() {
      return _name;
    },
    set name(v) {
      _name = v;
    },
    login() {
      _logged = true;
    },
    logout() {
      _logged = false;
    },
    get status() {
      return _logged ? 'login' : 'logout';
    },
  };
}

var roy = user('재남');
roy.name = '지홍2';
roy.status;
roy.logout();
roy.status;
```

- `_name` 과 `_logged` 는 함수 종료 후에도 사라지지 않고 값을 유지하는 변수
- `get name()` | `set name(v)` | `login()` | `logout()` | `get status()`외부로 부터 내부 변수 보호(캡슐화)

### **메모리 누수와 closure**

- "메모리 누수" 라는 표현은 개발자의 의도와 달리 어떤 값의 참조 카운트가 0이 되지 않아 GC의 수거 대상이 되지 않는 경우

```js
클로저의 메모리 관리

var outer = (function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
})();

outer()
outer()
outer = null;
```

### **콜백함수 내부에서 외부 변수를 참조하기 위한 방법**

- 콜백함수를 내부함수로 선언해서 외부변수를 직접 참조
- bind메서드로 값을 직접 넘겨줌
- bind의 제약사항을 해결하기위해 콜백함수를 고차함수로 바꿔서 사용

### **접근 권한 제어**

- 정보은닉은 어떤 모듈의 내부 로직에 대해 외부로의 노출을 최소화해서 모듈간의 결합도를 낮추고 유연성을 높이고자 하는 개념
- 접근권한에는 `public` | `private` | `protected`

```js
var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
};

var outer2 = outer();
outer2();
outer2();
```

- outer 함수는 외부(전역 스코프)로부터 철저하게 격리된 닫힌 공간이다. 외부에서는 외부공간에 노출돼 있는 outer라는 변수를 통해 outer 함수를 실행시킬수는 있지만, outer함수 내부에는 어떤 개입도 할 수 없다. 결국 외부에서는 outer함수가 return한 정보에만 접근 할 수 있다.

> 외부에 제공하자가 하는 정보들을 모아서 return하고, 내부에서만 사용할 정보들은 return 하지 않는 것으로 접근 권한 제어가 가능하다.

> return한 변수들은 공개멤버(public member)가 되고 그렇지 않은 변수들은 비공개멤버(private member)가 되는 것

### **부분 적용 함수**

- n개의 인자를 받는 함수에 미리 m개의 인자만 넘겨 기억 시켰다가, 나중에 (n-m)개의 인자를 넘기면 비로소 원래 함수의 실행 결과를 얻을 수 있게 끔 하는 함수. this를 바인딩 하는 점을 제외하면 bind메서드의 실행 결과가 바로 부분 적용함수.
