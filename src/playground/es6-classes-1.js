class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.location) {
      greeting += ` I am visiting from ${this.location}.`;
    }
    return greeting;
  }
}

const me = new Traveller('Kevin Vizconde', 29, 'Vancouver');
const other = new Traveller('Kevin Vizconde');
const blank = new Traveller(undefined, undefined, 'Nowhere');

console.log(me.getGreeting());

console.log(other.getGreeting());

console.log(blank.getGreeting());
