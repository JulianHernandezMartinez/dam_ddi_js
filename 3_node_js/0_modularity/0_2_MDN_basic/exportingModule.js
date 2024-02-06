// Exporting declarations


let name1 = "Julian"; // also var
const number1 = 25; /*, … */; // also var, let

function sayHello(name) {
console.log(`Hello ${name}`)
}

class Person {
    name;
    constructor(name) {
      this.name = name.toUpperCase();
    }
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }

const obj1 = { name:name1, number:number1 };
const arr1 = [ name1, number1 ];

// export declaration
export let name2 = "Pepito";

// Export list
export { name1, number1, Person, sayHello, arr1, obj1 as otherobj1 };



