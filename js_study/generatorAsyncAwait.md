### **제네레이터와 async && await**

- ES6에서 제너레이터는 코드 블럭의 실행을 일시중지했다가 필요시점에 재개할 수 있는 특수 함수
  1. 제네레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도
  2. 제네레이터 함수는 함수 호출자와 함수의 상태를 주고 받을 수 있다.
  3. 제네레이터 함수를 호출하면 제너레이터 객체를 반환

```js
// 제네레이터 함수 선언문
function* genDecFunc() {
  yield 1;
}

// 제네레이터 함수 표현식
const genExpFunc = function* () {
  yield 1;
};

// 제너레이터 메서드
const obj = {
  *genObjMethod() {
    yield 1;
  },
};

// 제너레이터 클래스 메서드
class MyClass {
  *genClsMethod() {
    yield 1;
  }
}

//제네레이터 화살표 함수로 정의할 수 없다.
const genArrowFunc = * () => {
  yield 1;
} //SyntaxError

//제네레이터 함수는 new 연산자와 함께 생성자 함수로 호출할 수 없다.

function* genFunc(){
  yield 1;
}

new genFunc() //TypeError: genFunc is not a constructor
```

```js
function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = genFunc();

console.log(generator);
//Object [Generator] {}

console.log(generator.next());
// { value: 1, done: false }

console.log(generator.next());
// { value: 2, done: false }

console.log(generator.next());
// { value: 3, done: false }

console.log(generator.return('End'));
// { value: 'End', done: true }

console.log(generator.next());
// { value: undefined, done: true }

console.log(Symbol.iterator in generator);
// true

console.log('next' in generator);
// true
```

```js
function* genFunc() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.log(e);
    // Error!
  }
}

console.log(generator.next());
// { value: 1, done: false }

console.log(generator.throw('Error!'));
// { value: undefined, done: true }
```

### **제네레이터의 일시 중지와 재개**

- yield 키워드와 next 메서드를 통해 실행을 일시 중지했다가 필요한 시점에 다시 재개

- 제네레이터 객체는 이터러블하면서 이터레이터이다.

- 제네레이터 객체의 next메서드를 호출하면 제네레이터 함수의 코드블록을 실행

- yield 키워드는 제너레이터 함수의 실행을 일시 중지시키거나 yiedl 키워드 뒤에 오는 표현식의 평가 결과를 제네레이터 함수 호출자에게 반환한다.

- 제네레이터 객체의 next 메서드를 호출하면 yield 표현식 까지 실행되고 일시 중지되는데 이때 함수의 제어권이 호출자로 양도.

- 제네레이터 객체의 next 메서드에 전달한 인수는 제네레이터 함수의 yield 표현식을 할당받는 변수에 할당된다.

```js
function* genFunc() {
  const x = yield 1; // 2번째 메서드를 호출할때 완료
  const y = yield x + 10; //3번째 메서드를 호출할때 완료
  return x + y;
}

//제네레이터 객체를 반환
const generator = genFunc(0);

//처음 호출하는 next메서드에는 인수를 전달하지 않는다.
let res = generator.next();
console.log(res); //{ value: 1, done: false }

//next 메서드에 인수로 전달한 10은 x변수의 할당
//next 메서드가 반환된 객체의 value 프로퍼티에는 두 번째 값 yiedl 된 값 20이 할당
res = generator.next(10);
console.log(res); // { value: 20, done: false }

//next 메서드에 인수로 전달한 20은 y변수의 할당
//next 메서드가 반환된 객체의 value 프로퍼티에는 제네레이터 함수의 반환값 30이 할당
res = generator.next(20);
console.log(res); // { value: 30, done: true }
```

```js
//무한 이터러블을 생성하는 제너레이터 함수

const infiniteFibinacci = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

for (const num of infiniteFibinacci) {
  if (num > 1000) break;
  console.log(num);
}
```

```js
비동기 처리

const async = generatorFunc => {
  const generator = generatorFunc(); //2

  const onResolved = arg => {
    const result = generator.next(arg); //5

    return result.done
      ? result.value //9
      : result.value.then(res => onResolved(res)); //7 이후 5next 두번째 호출
  };
  return onResolved; //3
};

async(function* fetchTodo() {
  //1
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const response = yield fetch(url); //6
  const todo = yield response.json(); //8
  console.log(todo);
})(); //4
```

### **async && await**

- 비동기 프로그래밍을 동기 방식처럼 직관적으로 표현
- ES8에사 제네레이터보다 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 동작하도록 구현할 수 있는 `async | await` 가 도입

```js
async function fetchTodo() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const response = await fetch(url);
  console.log(response);
  const todo = await response.json();
  console.log(todo);
}

fetchTodo();
```

#### **async**

- await 키워드는 반드시 async 함수 내부에서 사용해야한다.
- async 키워드 함수는 반드시 promise를 반환
- async 함수가 명시적으로 프로미스를 반환하지 않더라도 암묵적으로 언제나 반환값을 resolve하는 프로미스를 반환

#### **await**

- 프로미스가 비동기 처리가 수행된 상태가 될 때 까지 대기하다가 비동기 처리가 수행된 상태가 되면 프로미스가 resolve 한 결과를 반환.

```js
const getUserName = async id => {
  const res = await fetch(`https://api.github.com/users/${id}`);
  const { name } = await res.json();
  console.log(name); // ayjihongzzang
};

getUserName('jihongzzang');
```

```js
async function foo() {
  const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
  const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
  const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));
  console.log([a, b, c]); //6초정도 걸림
}

foo();

async function foo() {
  const res = await Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
  ]);
  console.log(res); //3초 정도 걸림
}

foo();
```

### **async & await error handle**

- `try`, `catch` 문을 사용이 가능.
- 콜백 함수를 인자로 전달받는 비동기 함수와 달리 프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있기 때문에 호출자가 명확

```js
const foo = async () => {
  try {
    const wrongUrl = 'https://wrong.url';
    const response = await fetch(wrongUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err); // Error: 'Failed to fetch'
  }
};

foo();
```

- `catch`문 을 사용하지 않으면 `async` 함수는 발생한 에러를 reject하는 프로미스를 반환

```js
const foo = async () => {
  const wrongUrl = 'https://wrong.url';
  const response = await fetch(wrongUrl);
  const data = await response.json();
  return data;
};

foo()
  .then(result => console.log(result))
  .catch(err => console.log(err));
```
