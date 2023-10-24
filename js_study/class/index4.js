class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  area() {
    return Math.PI * this.#radius * this.#radius;
  }

  getRadius() {
    return this.#radius;
  }
}

const circle = new Circle(6);

console.log(circle.area());

console.log(circle.getRadius());

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(value) {
    const [firstN, lastN] = value.split(' ');
    this._firstName = firstN;
    this._lastName = lastN;
  }
}

const person = new Person('John', 'Doe');
console.log(person.fullName);

person.fullName = 'Jane Smith';
console.log(person.fullName);

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set Dimensions(arr) {
    const [width, height] = arr;
    this._width = width;
    this._height = height;
  }
}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.area);

rectangle.Dimensions = [20, 10];

console.log(rectangle.area);

class User {
  static staticId = 1;

  constructor(name) {
    this.name = name;
    this.id = User.staticId++;
  }
}

const user1 = new User('alice');

console.log(user1.id);

const user2 = new User('bob');

console.log(user2.id);
