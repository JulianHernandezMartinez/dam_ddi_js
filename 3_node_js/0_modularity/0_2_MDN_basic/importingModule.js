import { name1, number1, Person, sayHello, arr1, otherobj1 as newobj1 } from "./exportingModule.js";
import { name2 } from "./exportingModule.js";
// modules = strict mode
// "as" aliases ¿to...avoid names repeated?

console.log(name1, number1)
const persona = new Person(name1)
persona.introduceSelf();
sayHello(name1);
console.log(arr1[0]);
console.log(newobj1.number);

// read only
// name1 = "Pepito";
// console.log(arr1[0]);

console.log(name2);

