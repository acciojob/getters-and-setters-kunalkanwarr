// Person class
class Person {
  constructor(name, age) {
    this._name = name;  // Private property
    this._age = age;    // Private property
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age
  get age() {
    return this._age;
  }
}

// Student class extending Person
class Student extends Person {
  constructor(name, age) {
    super(name, age);  // Call the constructor of the Person class
  }

  // Method specific to Student
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class extending Person
class Teacher extends Person {
  constructor(name, age) {
    super(name, age);  // Call the constructor of the Person class
  }

  // Method specific to Teacher
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage:

// Create a Person instance
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;  // Setting the age via the setter
console.log(person.age); // Output: 30

// Create a Student instance
const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

// Create a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
