console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - POR HACER - Arrows funtionsy constructores de tipos';

'use strict';
console.log("Este playground de expresion de funcionae con flecha esta pendiente")

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 */

// Traditional anonymous function from MDN

// Declaracion de Funcion con return 

function testNum(a=5) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(-5));
console.log(testNum());

// Expected output: "NOT positive"


const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // Expected output: Array [8, 6, 7, 9]
  
  /**  
  let func1 = (arg1, arg2...) => expression;
  let func2 = (arg1, arg2, ...) => sentence;
  let func3 = (arg1, arg2, ...) => {
    // code with optional return sentence
  }

  */

// ejemplo func1 -> expresion

let suma = (a, b) => a + b;
suma(1,2);
console.log(suma(3,4))

// ejemplo func2 -> sentencia
somevar="something to log";
let logme = (a) => console.log(a);
logme(somevar);

// ejemplo func3 ->{ funcion multilinea con opcion de return}


  