// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming

/*
Modelling -

We create abstract definitions representing the types 
of objects we want to have in our system

*/


/*pseudocode

class Professor
    properties
        name
        teaches
    methods
        grade(paper)
        introduceSelf()

*/

// a class it's a kind of template for creating concrete objects 

// we can create "instances" of Proffessor with an constructor
// special function

// We pass values to the constructor for any internal state that 
// we want to initialize in the new instance.

/*

Generally, the constructor is written out as part of the class 
definition, and it usually has the same name as the class itself:

class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()
*/

class Professor {
    name;
    teaches;
    constructor(name, teaches) {
      this.name = name;
      this.teaches = teaches;
    }

    grade(){
        console.log(`${this.name} can grade on ${this.teaches}`);
    }
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, your teacher in ${this.teaches}`);
    }
  }
  
const pedro = new Professor('Pedro','Electronics');
const rafael = new Professor('Rafael','Telecom Systems');

console.log(pedro.name,pedro.teaches);
pedro.introduceSelf();
rafael.grade();
pedro.grade();


