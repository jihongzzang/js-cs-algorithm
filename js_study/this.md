### **This**

- this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수

- `This의 바인딩`은 실행컨텍스트가 활성화 될때 한다.
- 실행 컨텍스트가 생성되는 순간에 `This를 바인딩` 한다.
- 실행 컨텍스트는 해당하는 함수가 호출되는 순간 생성
- 결국 this는 함수가 호출될때에 결정된다.
- this는 함수를 어떤 식으로 호출 했느냐에 따라 얼마든지 달라질 수 있다.

### **상황에 따라 달라지는 This(진짜 중요함)**

#### **전역공간에서**

- 전역객체
- 브라우저 => window | node.js => global

#### **함수 호출시**

- 전역객체

```js
function a() {
  // console.log(this);
}

a();

function b() {
  function c() {
    console.log(this);
  }
  c();
}

b();
```

> c 함수는 호출한 주체가 b 라고 봐야하지 않을까?
>
> 이건 버그일까? 자바스크립트 고유의 특성일까?
>
> ES6에서는 이게 문제라는 의견을 수렴해서 아에 this 바인딩을 하지 않는 arrow function이 나옴 위 컨텍스트에 있는 this를 가져다 씀
>
> ES5 환경에서는 무조건, 언제나 this는 전역객체를 가리킨다. 암기

#### **메서드 호출시**

- 메서드 호출 주체 (메서드 명 앞)

```js
var d = {
  e: function () {
    function f() {
      console.log(this);
    }
    f(); //함수로써 호출 했으니까 그냥 전역객체이고 호출 형태만 보면 된다.
  },
};

d.e();
```

```js
var a = {
  b: function () {
    console.log(this);
  },
};

a.b(); //this는 a가 된다.
```

> 메서드 => 객체지향 언어에서 어떤 인스턴스와 관련된 동작을 의미.
>
> 클래스의 인스턴스 여부와 상관 없이 객체와 관련된 동작으로 범위를 확장
>
> b함수를 a객체의 "메서드" 로서 호출
>
> 객체안에 e 라고 하는 메서드가 있고
>
> 맨 밑에서 메서드로써 호출
>
> 메서드로써 호출했을 때의 this는 호출한 대상 객체가 바인딩 됨
>
> 메서드와 함수의 차이는 독립성 함수의 경우 그 자체로 독립적인 기능을 수행하지만 메서드는 자신을 호출한 대상 객체에 관한 동작을 수행

```js
var a = {
  b: {
    c: function () {
      console.log(this);
    },
  },
};
a.b.c(); // this는 a.b가 된다. a.b라는 객체와 관련된 동작을 수행해라
```

```js
var a = 10;

var obj = {
  a: 20,
  b: function () {
    console.log(this.a); //20

    function c() {
      console.log(this.a); //10
      //전역객체 프로퍼티 a의 값을 달라 했더니 전역변수 a인 10을 준다.
      //this가 전역객체가 아니라 obj를 바라보게 하려면 어떻게 해야할까?
    }
    c();
    //c.call(this)를 사용하면 해결
  },
};

obj.b();
```

#### **메서드 내부함수 우회법**

```js
var a = 10;

var obj = {
  a: 20,
  b: function () {
    var self = this;
    console.log(this.a); //20

    function c() {
      console.log(self.a); //20
      //내부 함수보다 상위에서 self라고 하는 변수에 this를 담고 안쪽에서 self를 쓴다.
      //내부 함수는 자신의 LexicalEnv에서 self를 찾고 없으니까 outerRef를 타고 b함수의 LexicalEnv에서self를 찾음
    }
    //메서드에서와 동일한 this를 그대로 활용 가능하게 함.
    c();
  },
};

obj.b();
```

#### **Arrow Func을 활용하기**

```js
var a = 10;

var obj = {
  a: 20,
  b: function () {
    console.log(this.a); //20

    const c = () => {
      console.log(this.a); //20
    };
    c();
  },
};

obj.b();
```

#### **callback 호출시(어려움)**

- 기본적으로는 함수내부에서 동일 따라서 전역객체
- 콜백 함수를 넘겨 받는 대상, 매개변수로 넘겨받은 cb를 어떻게 처리하느냐에 따라 달라 질 수 있음.

```js
var callback = function () {
  console.log(this); // 전역객체
};

var obj = {
  a: 1,
  b: function (cb) {
    cb(); //함수로써 호출함
    //cb.call(this); // obj가 나옴
  },
};

obj.b(callback);
```

```js
// var callback = function () {
//   console.log(this);
// };

// var obj = { a: 1 };

// setTimeout(callback,1000)

var callback = function () {
  console.log(this);
};

var obj = { a: 1 };

setTimeout(callback.bind(obj), 1000);
```

```js
document.body.innerHTML += '<div id="a">클릭하세요</div>';

document.getElementById('a').addEventListener('click', function () {
  console.log(this);
});

//addEventListener 콜백함수의 this를 별도로 지정해놓음

var obj = { a: 1 };

document.getElementById('a').addEventListener(
  'click',
  function () {
    console.log(this);
  }.bind(obj)
);
```

#### **call, apply, bind 메서드 | 명시적으로 this를 바인딩하는 세가지 방법**

- `call` : 호출 주체인 함수를 즉시 실행하도록 하는 명령
- `apply` : `call` 메서드와 기능적으로 동일하나 두번째 인자가 배열
- `bind` : 념겨 받은 `this` 와 인수들을 바탕으로 새로운 함수를 반환하기만 하는 메서드

```js
function a(x, y, z) {
  console.log(this, x, y, z);
}

var b = {
  bb: 'bbb',
};

a.call(b, 1, 2, 3); // { bb: 'bbb' } 1 2 3
a.apply(b, [1, 2, 3]); // { bb: 'bbb' } 1 2 3

var c = a.bind(b); //this는 처음에 넘겨준 this를 그대로 물고 있는 상태
c(1, 2, 3); // { bb: 'bbb' } 1 2 3

var d = a.bind(b, 1, 2); //this는 처음에 넘겨준 this를 그대로 물고 있는 상태
d(3); // { bb: 'bbb' } 1 2 3
```

#### **생성자 함수 호출시**

- 새로 만들 인스턴스 객체 자체가 this가 된다
- 객체 지향언어에서는 클래스를 통해 만든 객체를 인스턴스라고 한다.

```js
function Person(n, a) {
  this.name = n;
  this.age = a;
}

var roy = Person('지홍', 30); //전역 객체의 name 프로퍼티와 age프로퍼티에 값이 할당
console.log(window.name, window.age);

var roy = new Person('지홍', 30); //객체가 새로 만들어지면서 그 객체안에 name프로퍼티, age프로퍼티가 생성되면서
console.log(roy);
```
