### **접근자 프로퍼티**

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get">MDN Getter</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set">MDN Setter</a>
<a href="https://ko.javascript.info/property-accessors#ref-614">관련문서</a>

- 접근자란 객체 지향 프로그래밍에서 객체가 가진 프로퍼티 값을 객체 바깥에서 읽거나 쓸 수 있도록 제공하는 메서드
- 객체의 프로퍼티를 객체 바깥에서 직접 조작하는 행위는 데이터의 유지 보수성을 해치는 주요한 원인.

### **getter | setter**

```js
let obj = {
  get fullName() {
    // getter, obj.propName을 실행할 때 실행되는 코드
  },

  set fullName(value) {
    // setter, obj.propNAme = value를 실행할 때 실행되는 코드
  },
};
```

- `getter` obj.fullName을 사용해 프로퍼티를 읽으려고 할 때 실행
- `setter` obj.fullName = value을 사용해 프로퍼티에 값을 할당하려 할 때 실행

```js
let user = {
  name: 'Ju',
  surname: 'Jihong',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
};

console.log(user.fullName); // Ju Jihong

user.fullName = 'Han Changmin';

console.log(user.fullName); // Han Changmin
console.log(user.name); // Han
console.log(user.surname); // Changmin
```

### **접근자 프로퍼티 설명자**

- get – 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
- set – 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
- enumerable – 데이터 프로퍼티와 동일함
- configurable – 데이터 프로퍼티와 동일함

```js
let user = {
  name: 'Ju',
  surname: 'Jihong',
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(' ');
  },
}); // {name: 'Ju', surname: 'Jihong'}
```

> 프로퍼티는 접근자 프로퍼티(get/set 메서드를 가짐)나 데이터 프로퍼티중 한 종류에만 속하고 둘 다에 속할 수 없다는 점을 항상 유의

### **활용**

```js
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log(
        '입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.'
      );
      return;
    }
    this._name = value;
  },
};

user.name = 'Jihong';
console.log(user.name); // Jihong

user.name = '';
console.log(user.name); // Jihong
```

- `getter`와 `setter`를 ‘실제’ 프로퍼티 값을 감싸는 래퍼(wrapper)처럼 사용하면 메서드를 새로 만드는 일 없이 프로퍼티 값을 원하는 대로 통제가 가능하다.

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User('Jihong', 29);

console.log(jihong.age);
```

- 그런데 곧 요구사항이 바뀌어서 age 대신에 birthday를 저장해야 하는 상황

```js
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let john = new User('John', new Date(1992, 6, 1));
```

- 이렇게 생성자 함수를 수정하면 기존 코드 중 프로퍼티 age를 사용하고 있는 코드도 수정해 줘야 한다

  age가 사용되는 부분을 모두 찾아서 수정하는 것도 가능하지만, 시간이 오래 걸린다

  게다가 여러 사람이 age를 사용하고 있다면 모두 찾아 수정하는 것 자체가 자원낭비

  대신 age를 위한 getter를 추가해서 문제를 해결하면 된다.

```js
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let jihong = new User('Jihong', new Date(1993, 04, 08));

console.log(jihong.birthday);
console.log(jihong.age);
```
