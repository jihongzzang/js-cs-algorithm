let sayHelloMixin = {
  sayHello() {
    console.log(`Hello, ${this.name}`);
  },
};

let sayByeMixin = {
  sayBye() {
    console.log(`Bye, ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHelloMixin, sayByeMixin);

const user = new User('John');
user.sayHello(); // Hello, John
user.sayBye(); // Bye, John

let eatableMixin = {
  eat() {
    console.log(`${this.name} is Eating`);
  },
};

let drinkableMixin = {
  drink() {
    console.log(`${this.name} is Drinking`);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

Object.assign(Person.prototype, eatableMixin, drinkableMixin);

const person = new Person('jihong');

person.sayName();
person.drink();
person.eat();
