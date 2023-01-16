import {
  getName,
  nameExists,
  nameIsValid,
  addPerson,
  addDebt,
  loadDebts,
  getDebts,
  getPersons,
} from "./model.js";

// types

/** @typedef {import("./model.js").Person} Person */

// variables

/** @type {HTMLFormElement} */
const form = document.querySelector('#perform');
/** @type {HTMLInputElement} */
const personnameTxt = document.querySelector('#personname');
/** @type {HTMLInputElement} */
const amountTxt = document.querySelector('#amount');
/** @type {HTMLSelectElement} */
const personidSel = document.querySelector('#personid');
/** @type {HTMLElement} */
const debtsUl = document.querySelector('#debts');
/** @type {HTMLElement} */
const personidErrorP = document.querySelector('#personiderror');
/** @type {HTMLElement} */
const amountErrorP = document.querySelector('#amounterror');
/** @type {HTMLElement} */
const nopendingP = document.querySelector('#nopending');
/** @type {HTMLInputElement} */
const submitBtn = document.querySelector('#submitbutton');

// functions

/**
 Listener for handling the form submission
 * @param {Event} event 
 */
function onSubmit(event) {
  event.preventDefault();

  const [ errors, createPerson, newName, amountValue] = checkFormValidity();
  if (errors) { // can this really happen?
    return;
  }

  // perform

  let personId;
  if (createPerson) {
    personId = addPerson(newName);
    addPersonOption(personId, newName);
  } else {
    personId = Number(personidSel.value);
  }

  /** @type {HTMLInputElement} */
  const op = document.querySelector('input[name="operation"]:checked');

  let result;
  if (op.value === 'give') {
    result = addDebt(personId, amountValue);
  }
  else if (op.value === 'get') {
    result = addDebt(personId, -amountValue);
  }

  /** @type {HTMLElement} */
  let linode = document.querySelector(`#debt_${personId}`);
  if (result === 0) {
    debtsUl.removeChild(linode);
  }
  else {
    const text = getDebtText(personId, result);

    if (linode) {
      linode.innerText = text;
    } else {
      linode = addDebtItem(personId, text);
    }

    const liclasses = linode.classList;
    liclasses.remove('iowe', 'owesme');
    liclasses.add('blink');
    liclasses.add(result > 0 ? 'owesme' : 'iowe');
    setTimeout(() => {
      liclasses.remove('blink');
    }, 250);
  }

  setNoPending(getDebts());
}

/**
 * Listener for handling the form submission
 * @param {Event} event 
 */
function onPersonChange(event) {
  // cast using parenthesis
  const inputTarget = /** @type {HTMLInputElement} */ (event.target);
  const createPerson = inputTarget.value === "0";
  personnameTxt.disabled = !createPerson;
  checkFormValidity();
}

/**
 * Called when user name or amount changes
 */
function onInputChange() {
  checkFormValidity();
}

/**
 * Gets an array with the contents of validation
 * @returns {[boolean, boolean, string, number]}
 */
function checkFormValidity() {

  /** @type {boolean} */
  let errors = false;
  /** @type {string} */
  let newName = null;

  // check name

  const createPerson = personidSel.value === "0";
  if (createPerson) {
    let invalidName = false;
    newName = personnameTxt.value?.trim();
    if (!nameIsValid(newName)) {
      errors = true;
      personidErrorP.textContent = 'invalid name';
      invalidName = true;
    } else if (nameExists(newName)) {
      errors = true;
      personidErrorP.textContent = 'name already exists';
      invalidName = true;
    }
    else {
      personidErrorP.textContent = '';
    }
    setInvalid(personnameTxt, invalidName);
  }

  // check amount

  const amountValue = Number(amountTxt.value);
  const invalidAmount = isNaN(amountValue) || amountValue <= 0;
  if (invalidAmount) {
    errors = true;
    amountErrorP.textContent = 'invalid amount';
  }
  else {
    amountErrorP.textContent = '';
  }
  setInvalid(amountTxt, invalidAmount);

  submitBtn.disabled = errors;
  console.log(`errors is ${errors}`);

  return [errors, createPerson, newName, amountValue];
}

// utils

/**
 * Sets or removes the aria-invalid attribute for PicoCSS
 * @param {HTMLElement} element 
 * @param {boolean} invalid 
 */
function setInvalid(element, invalid) {
  if (invalid) element.setAttribute("aria-invalid", "true");
  else element.removeAttribute("aria-invalid");
}

/**
 * Adds a new person option in the SELECT of persons
 * @param {number} id 
 * @param {string} text 
 */
function addPersonOption(id, text) {
  let op = document.createElement("option");
  op.setAttribute("value", String(id));
  op.innerText = text;
  personidSel.appendChild(op);
  personidSel.value = String(id);
  personnameTxt.value = "";
  personnameTxt.disabled = true;
}

/**
 * Gets the text that explains a debt
 * @param {number} personId 
 * @param {number} amount 
 * @returns {string}
 */
function getDebtText(personId, amount) {
  const personName = getName(personId);
  return amount > 0
    ? `${personName} owes me ${amount}`
    : `I owe ${personName} ${-amount}`;
}

/**
 * Adds a debt item in the UL of debts
 * @param {number} id 
 * @param {string} text 
 */
function addDebtItem(id, text) {
  let li = document.createElement("li");
  li.setAttribute("id", `debt_${id}`);
  li.innerText = text;
  debtsUl.appendChild(li);
  return li;
}

/**
 * Shows or hides the no pending message
 * @param {Person[]} debts
 */
function setNoPending(debts) {
  const hasDebts = debts.filter(person => person.amount !== 0).length > 0;
  nopendingP.style.display = hasDebts ? 'none' : 'block';
}

// init

loadDebts();

submitBtn.disabled = true;

for (const person of getPersons()) {
  const name = person.name;
  const idPerson = Number(person.id);
  addPersonOption(idPerson, name);
}

const debts = getDebts();
setNoPending(debts);
for (const debt of debts) {
  const personId = Number(debt.id);
  const text = getDebtText(personId, debt.amount);
  const linode = addDebtItem(personId, text);
  linode.classList.add(debt.amount > 0 ? 'owesme' : 'iowe');
}

// listeners

form.addEventListener("submit", onSubmit);
personidSel.addEventListener("change", onPersonChange);
personnameTxt.addEventListener('input', onInputChange);
amountTxt.addEventListener('input', onInputChange);

