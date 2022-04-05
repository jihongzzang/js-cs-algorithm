### **ExecutionContext**

- 코드를 실행하는데에 필요한 배경이 되는 조건 / 환경
- `동일한 조건/환경정보를 지니는 코드뭉치` + `코드뭉치를 실행 할 때 필요한 조건 / 환경정보`

### **Excution (거대한 함수공간)**

- 전역공간
- 함수
- module
- eval (몹시 위험한 명령어)

> if / for / switch / while... '문'?
>
> 별개의 실행컨텍스트를 생성하진 않는다.
>
> 오직 함수에 의해서만 context를 구분 할 수 있다.

```js
var x = 1;
function outer() {
  console.log(x); //첫번째로 실행 - 1

  function inner() {
    console.log(x); //두번째로 실행 - 2
    var x = 3;
    //전역공간에서 생성된 동일 이름 x변수에는 접근 불가능하고
    //이를 변수 은닉화
  }

  inner();

  console.log(x); //세번째로 실행 - 3
}

outer();
console.log(x); //마지막으로 실행 - 4
```

### **예시코드 실행순서**

> 전역공간을 한줄한줄 실행

- `outer함수` 호출하면서 실행컨텍스트가 열림 - 1
- `inner 함수`에 대한 실행컨텍스트가 열림 - 2
- `inner 함수`에 대한 호출이 종료됨 - 3
- `outer 함수`에 대한 호출이 종료 - 4
- 전역컨텍스트 종료

> `전역` - `아우터` - `이너` - `이너함수 제거` - `아우터함수 제거` - `전역컨텍스트 사라짐`
> 제일먼저 들어왔던 게 제일 마지막에 빠지는 개념을 스택

<img src="../public/image/executionContext.png"/>

### **call Stack**

- 현재 어떤 함수가 동작중인지, 다음에 어떤 함수가 호출될 예정인지 등을 제어하는 자료구죠

### **VariableEnv LexicalEnv**

- `VariableEnv` | `LexicalEnv` 는 현재 환경과 관련된 식별자 정보들

- `VariableEnv` 식별자 정보 수집 (변화 반영 X)

- `LexicalEnv` 각 식별자의 데이터 추적 (변화 반영 O)

> 둘의 차이는 값의 변화가 실시간으로 반영되느냐 그렇지 않느냐의 차이

### **LexicalEnv**

- 어휘적 / 사전적 환경
- `environmentRecord` 와 `outerEnvironmentReference`로 구성
- 현재 컨텍스트 내부의 식별자 정보 | 문자 그대로 외부 환경을 참조하는 정보

> - 실행컨텍스트 A 환경 사전
> - 내부식별자 a : 현재 값은 undefined 이다.
> - 내부식별자 b : 현재 값은 20이다.
> - 외부 정보 : D를 참조한다.

> 즉 , 실행컨텍스트를 구성하는 환경 정보를 모아 사전처럼 구성한 객체

### **Hoisting**

- 식별자 정보를 끌어올리다.
- 현재 문맥의 식별자 정보를 environmentRecord에 담는 과정
- 함수 선언문의 경우 전체를 끌어 올림

```js
console.log(a());
console.log(b());
console.log(c());

function a() {
  return 'a';
}

var b = function bb() {
  return 'bb';
};

var c = function () {
  return 'c';
};
```

```js
function a() {
  return 'a';
}
var b;
var c;

// 상위 부분이 environmentRecord

/*
{
  function a(){...},
  b: undefined,
  c: undefined
}
*/

console.log(a());
console.log(b());
console.log(c());

b = function bb() {
  return 'bb';
};

c = function () {
  return 'c';
};
```

### **outerEnvironmentReference**

- 현재 문맥과 관련있는 외부 식별자 정보

> inner

- LexicalEnvironment
  - `environmentRecord`
  - `outerEnvironmentReference` => `outer`의 렉시컬 환경 참조

> outer

- LexicalEnvironment
  - `environmentRecord`
  - `outerEnvironmentReference` => `전역` 렉시컬 환경 참조

> 전역

- LexicalEnvironment
  - `environmentRecord`

> `outerEnvironmentReference`가 관여하는게 `SCOPE CHAIN`

### **SCOPE**

> SCOPE 변수의 유효범위 => 실행컨텍스트에 의해 결정
>
> 변수의 유효범위는 실행컨텍스트가 만들고, 실행컨텍스트가 수집해 놓은 정보만 접근을 할 수 있다.
>
> 그 변수는 실행컨텍스트 내부에 존재

### **SCOPE CHAIN**

> 가장 가까운 자기 자신부터 점점 멀리있는 스코프로 찾아나가는 것
>
> 식별자의 유효 범위를 안에서 바깥으로 차례로 검색해나가게 해주는것
