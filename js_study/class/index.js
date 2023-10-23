class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  getDetails() {
    return `This car is a ${this.brand} from ${this.year}.`;
  }
}

const myCar = new Car('benz', '21');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old, and I am in ${this.grade} grade.`;
  }
}

class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log('Insufficient funds!');
    }
  }

  getBalance() {
    return this.balance;
  }
}
