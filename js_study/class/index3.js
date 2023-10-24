class AbstractAnimal {
  constructor() {
    if (new.target === AbstractAnimal) {
      throw new Error(
        "AbstractAnimal is an abstract class and can't be instantiated directly."
      );
    }
  }

  sound() {
    throw new Error(
      'sound() is an abstract method and should be implemented by derived classes.'
    );
  }
}

class Dog extends AbstractAnimal {
  sound() {
    return 'Woof!';
  }
}

class Cat extends AbstractAnimal {
  // sound 메서드를 구현하지 않았기 때문에 에러 발생
}

const dog = new Dog();

const cat = new Cat();

console.log(dog.sound()); // okay

// console.log(cat.sound()); // error: sound() is an abstract method and should be implemented by derived classes.

// const animal = new AbstractAnimal(); // error: AbstractAnimal is an abstract class and can't be instantiated directly.

class Shape {
  area() {
    throw new Error(
      'area() is an abstract method and should be implemented by derived classes.'
    );
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  area() {
    return (this.base * this.height) / 2;
  }
}

const circle = new Circle(10);

const rectangle = new Rectangle(5, 10);

const triangle = new Triangle(10, 5);

class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}`);
  }
}

const john = new Person('John');

john.greet();
