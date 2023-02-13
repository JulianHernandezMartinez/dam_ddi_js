'use strict';

//controls
const form = document.querySelector('#inputform');
const expresionIn = document.querySelector('#expresion');
const outputParagraph = document.querySelector('#resultout');

// on/off

// functions

function verifyemail(emailexpresion) {
  let result=false;
  // add the calls to all the other functions that verify from 1 to 6
  return result;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let resultado = false;
  console.log('clicked verifica email!');
  let emailexpresion = expresionIn.value;
  console.log('la expresion recogida',emailexpresion);
  
  resultado = verifyemail(emailexpresion);
  console.log ('el retorno de la funcion',resultado);

  if (!resultado) {
      badexpresion.style.display = 'block';
      return;
  }
  form.style.display = 'none';
  outputParagraph.style.display = 'block';
  outputParagraph.textContent = String(resultado);
});























/**
 * funtion identifyoperands(inputstring)
 * 1.- Adjust the input string expresion 
 *     removing all the spaces
 * 2.- Identify last "minus (-)" or last "plus(+)"
 *     and the operator (-) or (+)
 * 3.- Identify where to split the string expresion
 * 4.- Split the string to get operator1 and operator2
 * 
 * @param {string} mathexpresion
 * @returns {number, number, booleam}
 */

/**
 * funtion operate(number1, number2, operation)
 * @param {number, number, booleam}
 * @returns {string} resultado
 */

/**
 * funtion operaSimple(string)
 * 1.- Adjust the input string expresion 
 *     removing all the spaces
 * 2.- Identify last "minus (-)" or last "plus(+)"
 *     and the operator (-) or (+)
 * 3.- Identify where to split the string expresion
 * 4.- Split the string to get operator1 and operator2
 * 5.- Perform the operation
 * 6.- Return result or failure(NaN)
 * 
 * 
 * @param {string} mathexpresion
 * @returns {string} resultado
 */
