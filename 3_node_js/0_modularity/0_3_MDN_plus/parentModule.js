import {name1, number1, Person, sayHello, arr1, obj1 } from "./childModule1.js";

console.log(name1, number1)
const persona = new Person(name1)
persona.introduceSelf();
sayHello(name1);
console.log(arr1[0]);
console.log(obj1.number);



// In parentModule.js
// Only aggregating the exports from childModule1 and childModule2
// to re-export them
//export { myFunction, myVariable } from "./childModule1.js";
//export { MyClass } from "./childModule2.js";
