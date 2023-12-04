// source
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."
  
const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."


// Constructors

// Convention - are named with the object type starting with 
// Capital leters
// in the following example, Person 

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
  
// To call Person as a constructor we use the "new" keyword

const pedro = new Person('Pedrito');
const maria = new Person('Maria');

pedro.introduceSelf();
maria.introduceSelf();


// everything are OBJETCTS with properties and methods

const phrase = 'el perro de san Roque no tiene Rabo porque ...';

console.log(phrase.slice(3,8)); // perro
let trueorfalse = (phrase.slice(phrase.length-3,phrase.length)==='...');
console.log(phrase.slice(phrase.length-3,phrase.length));
console.log(`it's ${trueorfalse} thats the last three characters substring  of "phrase" is "..."`);


// string.length 
// string.slice()

console.log(`it's also completelly ${phrase.endsWith('...')} thats the last three characters substring  of "phrase" is "..."`);

// prototype.chain

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
const str = myObject.toString(); // 
console.log(str);

console.log(Object.getPrototypeOf(myObject)); // Object { }

console.log('prototype chain of myDate');

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null



// Shadowing properties // Sombrea // Oculta

const mynewDate = new Date(1995, 11, 17);

console.log(mynewDate.getYear()); // 95

mynewDate.getYear = function () {
  console.log("something else!");
};

mynewDate.getYear();
console.log(mynewDate.getYear()); // undefined


// Setting a prototype with...
// Object.create

const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!


// Using a constructor and ...
// Object.assigns (Constructor.prototype, prototype)

const newpersonPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function NewPerson(name) {
  this.name = name;
}

Object.assign(NewPerson.prototype, newpersonPrototype);
// or
// NewPerson.prototype.greet = newpersonPrototype.greet;

const miguel = new NewPerson('Miguel');
miguel.greet();

console.log(miguel);

// own object properties Object.hasOwn(objectname,"propertyname")

const irma = new NewPerson("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false



