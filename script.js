// Define the Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Define the Student class that extends Person
class Student extends Person {
  constructor(name, age) {
    super(name, age);  // Calling the parent constructor
  }

  // Method for studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Define the Teacher class that extends Person
class Teacher extends Person {
  constructor(name, age) {
    super(name, age);  // Calling the parent constructor
  }

  // Method for teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
