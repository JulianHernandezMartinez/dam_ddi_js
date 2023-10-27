
'use strict';

// Functions

// ejemplos tomados desde https://xguaita.github.io/mtig-js/modulo3/

/*
function nombreFunc([param1[, ...[, paramN]]]) { // Parámetros opcionales
    ...
    codigo de la funcion
    ...
    return valor; // Opcional
  }
*/

// console.log de los elementos de un array


function logArray(a) {
    for (let i= 0; i < a.length; i++) console.log(a[i]); // comma operator
}

// x al cubo x*x*x
function cubo(x) {
  return x*x*x;
}
  
let laborables= ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
  
// invoca logArray, laborables es el argumento
logArray(laborables);
  
// invoca cubo en una expresión
console.log(1000000 + cubo(6));

function logArrayComma(a) {
    for (i= 0, i < a.length, i++) {
        console.log(a[i])
    }  // comma operator
}

  