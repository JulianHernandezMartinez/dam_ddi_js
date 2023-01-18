
console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - Objetos y Arrays';

'use strict';
 
/* ARRAYS */

console.log('==========> ARRAYS <=========');

// basic operations
console.log("array sobre let")
let arr23 = [];  // empty array
console.log(arr23); 

console.log("array sobre const")
let arr1 = []; // empty array
console.log(arr1);

arr1.push('one', 'two'); // add 1 or more elements
console.log(arr1);
arr1[0] = 'new one'; // replace
console.log(arr1);
arr1[3] = 'add it'; // add leaving some empty
console.log(arr1[2])
arr1[2]=null
console.log(arr1, arr1.length);
arr1[2] = 'was empty';
console.log(arr1);

console.log("metodo .pop() de array")
const val1 = arr1.pop(); // gets last element
console.log(arr1, val1);
const val2 = arr1.shift();
console.log(arr1, val2);

/** este playground permite ver que un 
 * array sobre "const" no se modifica
 * aparece como un objeto de "solo lectura", 
 * si el arr1, se redefine como "let", 
 * permite adderir/remover elementos, incluso 
 * saltandose indices, que los pondra a 
 * <empty slots>
 */
