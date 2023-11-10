// Examples From
// https://marioyepes.com/jsdoc-intro-and-tutorial/#documenting-parameters



/**
 * This is a JSDoc comment
 * ...
 */
function myFunc() {
    // ...
  }

/**
 * @type {String}
 */
var myStringVariable

/**
 * This is the description of the variable
 *
 * @type {String[]}
 */
let myArrayVariable = []

/**
 * This is a global variable
 *
 * @type {Array<object>}
 */
const arrayOfObjects = []

/**
 * This is an array that can contain numbers or strings.
 *
 * @type {Array<number|string>}
 */
const arrayOfNumbersOrStrings = []


arrayOfObjects

arrayOfNumbersOrStrings

/**
 * This is the test function.
 *
 * @param {String} name - This it the `name` parameter
 * @param {Number} [age=21] - This is the `age` parameter
 */
function myFunction(name, age = 21) {
    console.log(`Parameter 1 is ${name} and Parameter 2 is ${age}`)
    return true
}

/**
 * Function with an object parameter
 *
 * @param {Object} obj1 This explains that the parameter is an object
 * @param {String} obj1.name This explains there should be a `name` value on the object
 * @param {Number} obj1.age This explains that there should be an `age` value
 * @param {Number} [obj1.city=Medellín] And the **optional** 3rd parameter can be also documented.
 */

function requieresAndObject(obj1) {
    obj1.city = "undefined" === typeof obj1.city ? "Medellín" : obj1.city
    console.log(
      `The name is ${obj1.name}. The age is ${obj1.age}. And the city ${obj1.city}`
    )
  }

/**
 * Just a function that returns a string
 *
 * @return {String} Always return `Hello World!`
 */
const returnAString = () => {
    return "Hola Mundo!"
  }


/**
 * This returns a dictionary with a `table` _key_ and a `database` _key_.
 *
 * @param {Array} params - An array of 2 elements
 * @return {{table: string, database: string}} - The database and table to query
 */
function parseTableAndDb = (params) =>  {
    return { table: params[0], database: params[1] };
  }


  function registerPerson(person) {
    /* ... */
  }
  function updatePerson(person) {
    /* ... */
  }
  function deletePerson(person) {
    /* ... */
  }

  // The `person` object for the previous functions:
  {
    name: "Fist Name", // string
    laset: "Last Name", // string
    isDeveloper: true, // boolean
    city: "Users City" // string
  }

  /**
 * Tell JSDoc and the IDE that there is an `object` called `PersonObject`
 *
 * @typedef {Object} PersonObject
 * @property {String} name The persons name
 * @property {String} last The persons last name
 * @property {Boolean} [isDeveloper=true] Set to `true` is the person is a developer
 * @property {Number} city City code for the person
 */

// No need to create a PersonObject

/**
 * Function that uses the `PersonObject` defined with `@typedef`
 *
 * @param {PersonObject} person The person to register
 * @return {void}
 */
function registerPerson(person) {
    console.log(person.isDeveloper)
  }

/**
 * A class representing a car
 *
 * @property {String} brand - The cars brand
 * @property {Number} model - The cars model
 * @property {String[]} colors - The available colors
 */

class MyCarClass {
    /** @constructor */
    constructor() {
      this.brand = "Mustang"
      this.model = 1965
      this.colors = ["Red", "Black", "White"]
    }
  }

// VisualStudio Code and jsconfig.json
// pending
