class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    return "I don't know what sound I make";
  }
}

class Dog extends Animal {
  sound() {
    return 'Woof!';
  }
}

class Cat extends Animal {
  sound() {
    return 'Meow!';
  }
}

const myDog = new Dog('dog');

const myCat = new Cat('cat');

const animals = [new Dog('dog'), new Cat('cat')];

// 캡슐화와 접근 제어자
// 자바스크립트에서는 접근 제어자를 직접 지원하지 않지만, _ (언더스코어)를 변수 앞에 붙여서 비공개 변수임을 표시하는 관례가 있습니다.

// 문제 3: 비공개 속성
// Person 클래스를 만들고, _age라는 비공개 속성을 추가하세요.
// getAge()와 setAge(value) 메서드를 만들어서 _age 속성에 접근하고 수정할 수 있도록하세요. 단, setAge(value)에서는 나이가 0 이하가 될 수 없게 처리하세요.

class NewPerson {
  constructor(age) {
    this._age = age;
  }

  set age(value) {
    if (value < 0) {
      throw new Error('나이는 0 미만이 될 수 없습니다.');
    } else {
      this._age = value;
    }
  }

  get age() {
    return this._age;
  }
}

const myPeople = new NewPerson(25);

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero!'); // 0으로 나눌 때의 예외 처리 추가
    }

    return a / b;
  }
}
