console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - IF else, While, For...';

'use strict';

console.log ("----While----while----while---")

let n = 0;

while (n < 3) {
  n++;
  console.log(n)
}

console.log(n);
// Expected output in console: 
//1 
//2 
//3
//3

console.log ("Do--While----Do--while---")

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: String concatenadad "12345"

console.log ("----If..else----")

function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));
  // Expected output: "NOT positive"

console.log ('FOR - FOR - FOR')

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i; // + de concatenar 
}

console.log(str);

// Expected output: 01234567


console.log (" --FOR--FOR--RECORRIENDO UN ARRAY BIDIMENSIONAL---")

console.log('Creacion de un array bidimensional de 3x3');

const p = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, Math.random),
); // A 3×3 array of random numbers

console.log(p);

for (let i = 0, j = 2; i <= 2; i++, j--) {
  console.log(`p[${i}][${j}] = ${p[i][j]}`);
} 
