// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript


class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }

/*
The constructor is defined using the constructor keyword. Just 
like a constructor outside a class definition, it will:

    1.- create a new object
    2.- bind this to the new object, so you can refer to this in 
    your constructor code
    3.- run the code in the constructor
    4.- return the new object.

*/

// creates giles  calling Person class with "new"

const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles

// Omitting constructors

class Animal {
    sleep() {
      console.log("zzzzzzz");
    }
}
  
const spot = new Animal();
  
spot.sleep(); // 'zzzzzzz'


// Inheritance - subclass Professor of class Person above

// "extends" Keyword 
// "super()" superclass constructors Keyword passes (name) 
// to Person Class

class Professor extends Person {
    teaches;
  
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(
        `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
      );
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  }


  // introduceSelf() in subclass override the one in class Person

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
console.log(walsh.teaches); // Phycology
// Encapsulation

// private data properties
// Solve te canStudyArchery() with private property of year
// #year is a private data property

class Student extends Person {
    #year;
  
    constructor(name, year) {
      super(name);
      this.#year = year;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
    }
  }
  
  const summers = new Student("Summers", 2);

  summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
  console.log(summers.canStudyArchery()); // true
  
  console.log(summers.year); // SyntaxError "summers.#year" or undefined  

// Private Methods also starts with #

  class Example {
    somePublicMethod() {
      this.#somePrivateMethod();
    }
  
    #somePrivateMethod() {
      console.log("You called me?");
    }
  }
  
  const myExample = new Example();
  
  myExample.somePublicMethod(); // 'You called me?'
  
  // "myExample.#somePrivateMethod()"-> SyntaxError
  
console.log(myExample.somePublicMethod);
// console.log(myExample.somePrivateMethod());