class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }
}

class Student extends Person {
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching

// Cypress Tests
describe("Person Class Tests", () => {
  let person;
  let student;
  let teacher;

  beforeEach(() => {
    person = new Person("John", 25);
    student = new Student("Alice", 22);
    teacher = new Teacher("Bob", 40);
  });

  it("should get the name", () => {
    expect(person.name).to.equal("John");
  });

  it("should change the age using setter", () => {
    person.age = 30;
    expect(person.age).to.equal(30);
  });

  it("should log student studying", () => {
    cy.spy(console, "log");
    student.study();
    expect(console.log).to.have.been.calledWith("Alice is studying");
  });

  it("should log teacher teaching", () => {
    cy.spy(console, "log");
    teacher.teach();
    expect(console.log).to.have.been.calledWith("Bob is teaching");
  });
});