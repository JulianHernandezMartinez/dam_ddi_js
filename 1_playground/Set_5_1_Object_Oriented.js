'use strict'

/* OBJECTS the following examples are from
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
*/

// object (or prototype) sintax {}

const perso = {};
console.log(perso);

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {  logProperty("name");
    // ["Mikel", "Perez"]
    logProperty("age");
    // 43
  
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

console.log(person);

// propiedades y metodos de person

console.log(person.name);  // array
console.log(person.name[0]); // element in array
console.log(person.age); 
console.log(person.bio()); // metodo
console.log(person.introduceSelf()); // metodo

// Sintax of Objects de JS

const objectName = {
    member1Name: "member1Value",
    member2Name: "member2Value",
    member3Name: "member3Value",
  };

console.log(objectName);
/* 
When the object's members are functions 
there's a simpler syntax. Instead of 
bio: function () we can write bio(). 
Like this:
*/

const persona = {
    name: ["Maria", "Perez"],
    age: 23,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

/*
  An object like this is referred to as an 
  object literal — we've literally written 
  out the object contents as we've come 
  to create it. This is different compared 
  to objects instantiated from classes, 
  which we'll look at later on.
  */

// DOT notation

persona.age;
persona.bio();

console.log(persona.age);
console.log(persona.bio());


/* Object can also be a property, in the 
following example 
"name" is an object with two properties, 
"first" and "last"
*/

const pers = {
    name: {
      first: "Mafalda",
      last: "De Quino",
    },
    age: 23,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name.first} ${this.name.last}.`);
    },
  };
  
// the dot notation applies also like a chain. 

console.log(pers.name.last); // "De Quino"

/*Activity -- Change the methods to work 
with object pers including object name as property
to make methods reamin working */

console.log(pers.introduceSelf()); // 

/* Bracket notation altrenative to DOT 
notation...

and worst??
*/

console.log(pers.name.first); // Mafalda 
console.log(pers.name["first"]); // Mafalda



// alternate both notations


console.log(pers["name"].first) // Mafalda
console.log(pers["name"]["first"]); // Mafalda

// Objetcs are sometimes called Associative Arrays
// instead of acces with an index, we acces with 
// the name of element 


// We can't use dot notation to access the value,
// if an object property name is held in a variable, 
// We must use bracket notation to access the value.

const per = {
    name: ["Mikel", "Perez"],
    age: 43,
  };
  
function logProperty(propertyName) {
  console.log(per[propertyName]);
}

logProperty("name");// ["Mikel", "Perez"]
logProperty("age"); // 43
  







/* SEUDOCODE

class Professor
    properties
        name
        teaches
    methods
        grade(paper)
        introduceSelf()


Class Student 
    properties
    name
    year
constructor
    Student(name, year)
methods
    introduceSelf()

*/


