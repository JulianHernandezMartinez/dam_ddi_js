'use strict'
// types

/**
 * @typedef {Object} Person
 * @property {number} id
 * @property {string} name
 * @property {number} amount
 **/

/**
 * Next ID for an item
 * @type {number}
 */
let nextId = 1;

/** An array of persons
 * @type {Person[]}
 */
let people = [];
console.log(people);

/**
 * Saves the debts to the session storage
 */
function saveDebts() {
  sessionStorage.setItem('id', String(nextId));
  sessionStorage.setItem('people', JSON.stringify(people));
  console.log(people);
}

/**
 * Loads the debts from the session storage
 */
function loadDebts() {
  const idStr = sessionStorage.getItem('id');
  console.log(idStr);
  if (!idStr) {
    console.log('no session available');
    return;
  }
  console.log('loading session');
  nextId = Number(idStr);
  people = JSON.parse(sessionStorage.getItem('people'));
  console.log(people);
}

/**
 * Gets a person's name for an ID
 * @param {number} personId 
 * @returns {string}
 */
function getName(personId) {
  const person = people.find(p => p.id === personId);
  console.log (person?.name);
  return person?.name;
}

/**
 * True if the name exists
 * @param {string} name 
 * @returns {boolean}
 */
function nameExists(name) {
  const person = people.find(p => p.name === name);
  return person !== undefined;
}

/**
 * True if the name syntax is accepted
 * @param {string} name 
 * @returns {boolean}
 */
function nameIsValid(name) {
  if (!name || /^\s*$/.test(name)) {
    console.log(name);
    return false;
  }

  return true;
}

/**
 * Creates a person and returns its new ID
 * @param {string} name 
 * @returns {number}
 */
function addPerson(name) {
  const newId = nextId++;
  /** @type {Person} */
  const person = {
    id: newId,
    name: name,
    amount: 0
  };
  people.push(person);
  saveDebts();
  return newId;
}

/**
 * Creates a shallow copy of people
 * @returns {Person[]}
 */
function getPersons() {
  return [...people];
}

/**
 * Creates a shallow copy of people with debts
 * @returns {Person[]}
 */
 function getDebts() {
  return people.filter(person => person.amount !== 0);
}

/**
 * Adds a debt for a person ID
 * @param {number} personId 
 * @param {number} amount 
 * @returns the new debt with that person
 */
function addDebt(personId, amount) {
  const person = people.find(p => p.id === personId);
  person.amount += amount;
  saveDebts();
  return person.amount;
}

export {
  loadDebts,
  getName,
  nameExists,
  nameIsValid,
  addPerson,
  getPersons,
  getDebts,
  addDebt,
};
