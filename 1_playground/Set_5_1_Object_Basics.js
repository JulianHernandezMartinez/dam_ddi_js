'use strict'

/* OBJECTS the following examples are from
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
*/

// object (or prototype) sintax {}

const perso = {}; //llaves
console.log(perso);

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
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
person.bio(); // metodo
person.introduceSelf(); // metodo

// Sintax of Objects de JS

const objectName = {
    member1Name: "member1Value",
    member2Name: ["member2Value1", 2],
    member3Name: 45.45,
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

pers.introduceSelf(); // 

/* Bracket notation alternative to DOT 
notation...

*/

console.log(pers.name.first); // Mafalda 
console.log(pers.name["first"]); // Mafalda

// alternate both notations

console.log(pers["name"].first) // Mafalda
console.log(pers["name"]["first"]); // Mafalda

// Objetcs are sometimes called Associative Arrays
// instead of acces with an index, we acces with 
// the name of element 


// We CAN NOT use dot notation to access the value,
// if an object property name is held in a variable, 
// We MUST use bracket notation to access the value.
// see below the propertyName arguments in the
// function call is used to access the property
// of the per object

const per = {
    name: ["Mikel", "Irigoyen"],
    age: 65,
};
  
function logProperty(propertyName) {
    console.log(per[propertyName]);
}
  
logProperty("name"); // ["Mikel", "Irigoyen"]
logProperty("age");  // 65
logProperty("ciclist");  // undefined


console.log ('hhhhhhhhhhhhhhhhhhhhhhh')
console.log(per.ciclist); // undefined

function logPropertyBis(propertyName) {
    console.log(per.propertyName);
}

console.log('llamada sin backets con dot notation resulted in...')
logPropertyBis("name"); // ["Mikel", "Irigoyen"]
logPropertyBis("age");  // 65
console.log('llamada sin backets con dot notation result in...')

// Setting object members

per.age = 33;
per.name[0] = "Miguelito";

console.log(per.name);

// adding members like properties and methods
console.log(per);

per["eyes"] = "hazel";
per.farewell = function () {
  console.log("Bye everybody!");
};

per.farewell();  //"bye..."

// bis

per.farewell2 =function () {
    console.log("Bye, Bye, Bye 2222 everybody!");
  };
console.log(per.eyes);
per.farewell2();

// the prototype has now new property (eyes)
// the prototype has now a new method (farewell)
console.log(per);

//


// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;
// per[myDataName] = myDataValue;

// 

const myDataName = "height";
const myDataValue = "1.75m";
per[myDataName] = myDataValue;

console.log(per);  // object including height propoerty
console.log(per.height); // 1.75m

// this keywords

// The this keyword refers to the current object the code is being written inside — 
// so in this case this is equivalent to person


let varglobal = "Nicolas";
const person1 = {
    name: "Chris",
    introduceSelf() {
        this.name=varglobal;
        console.log(`Hi! I'm ${person1.name}.`)
    },
};
  
const person2 = {
name: "Deepti",
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}.`);
    },
};

person1.introduceSelf();
person2.introduceSelf();

const person1bis ={
    name: "Pedro",
    introduceSelf() {
        console.log (`Hola! soy ${person1bis.name}`)
    },
};

person1bis.introduceSelf();













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


