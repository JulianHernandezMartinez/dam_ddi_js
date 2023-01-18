
console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - Metodos de Strings y Booleams';

'use strict';
 
let frase = '  Hola don Pepito      '; /** frase con espacios y tabuladores al principio y final */

console.log ('********** Metodos de string**********')

console.log(frase.endsWith('  '))

/** string.includes --> retorna true si incluye el subsctring */
console.log("Se le puede aplicar el metodo -.include- ");
console.log("sobre un string para ver que incluye el substring" );
console.log("-Pepito- y retorna -true- ",frase.includes("Pepito"));

/** string.trim -elimina spacios antes y despues - play */
console.log(frase); // con espacios
console.log(frase.lastIndexOf('epi')) // (12) presenta el "last index" del array-string donde aparece 'epi'
console.log(frase=frase.trim()); // sin espacios y actualizando la variable "frase"
console.log(frase.lastIndexOf('epi')) // (10) presentade nuevo el "last index" del array-string donde aparece 'epi'
console.log(frase.charAt(2)); // (l) Character en la posicion 2, iniciando en cero, una vez quitados los espacios
console.log(frase.toUpperCase());  // HOLA DON PEPITO por las llamadas a los metodos anteriores
console.log(frase.slice(5,8)); // don
console.log(frase=frase.concat(' ')) // concatena un espacio antes de replicar 4 veces la frase
console.log(frase.repeat(4)); // replica la frase 4 veces - Hola don Pepito Hola don Pepito Hola don Pepito Hola don Pepito 


console.log ('********** Metodos de Booleanos**********')

/** metodos de Booleam*/
let verdaderoofalso = true;
console.log(verdaderoofalso.valueOf()); // true
verdaderoofalso = false;
console.log(verdaderoofalso.valueOf()); // false
