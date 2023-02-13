'use strict';

//controls
const form = document.querySelector('#inputform');
const expresionIn = document.querySelector('#expresion');
const outputParagraph = document.querySelector('#resultout');

// on/off

// functions


/**
 * FUNCION NO PERMITIDA
 * 
function operaSimple(str) {
  return Function(`'use strict'; return (${str})`)()
}
* empty -> 0
* spaces -> 0
* -1 -> -1
* +1 --> 1
* 1 -> 1
* -1+1 ->0


*/

function operaSimple(mathexpresion) {
  let operatorsimbol; // lo load '+' or '-' or 'invalidsimbol'
  let result;
  mathexpresion = mathexpresion.replace(/ /g,''); // "   - a  +  b  "-> "-a+b"
  console.log(mathexpresion);
  
  // to identify operator '+', or operator '-' or invalidoperator 
  // (it means only a positive or negative number should be possible)

  mathexpresion.lastIndexOf('+') > 0 ? operatorsimbol = '+' : mathexpresion.lastIndexOf('-') > 0 ? operatorsimbol = '-' : operatorsimbol ='invalidsimbol';
  console.log (operatorsimbol)
  
  if (mathexpresion.lastIndexOf(operatorsimbol) > 0){
    let operand1 = Number(mathexpresion.slice(0,mathexpresion.lastIndexOf(operatorsimbol)));
    let operand2 = Number(mathexpresion.slice(mathexpresion.lastIndexOf(operatorsimbol)+1,mathexpresion.length));
    console.log(operand1, operand2);
    operatorsimbol === '+'? result = operand1+operand2 : operatorsimbol === '-'? result = operand1-operand2 : result = NaN;
    //result = result.toFixed(2); // 2 digits fraction
  } else { // in case there are no valid + or - operator simbol
    result = String(Number(mathexpresion)); // if mathexpresion is not a number --> NaN
  }

  // NaN as result will be managed as 'expresion invalida' by manager in listener
  return result;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('clicked calcula!');
  cabecera.textContent ='Nombre Alumn@';
  let mathexpresion = expresionIn.value;
  console.log('la expresion recogida',mathexpresion);
  
  let result = operaSimple(mathexpresion);
  console.log ('en el retorno de la funcion',result);
  
  const invalidresult = isNaN(result);
  if (invalidresult) {
      badexpresion.style.display = 'block'; // ojo no esta referenciada con una ref a queryselector
      return;
  }
  form.style.display = 'block';
  outputParagraph.style.display = 'block';
  outputParagraph.textContent = String(result);
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
