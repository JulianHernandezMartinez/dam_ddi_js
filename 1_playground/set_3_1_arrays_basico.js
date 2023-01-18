
console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - Objetos y Arrays';

'use strict';
 
/* ARRAYS */

console.log('==========> ARRAYS <=========');

let arr9 = ['A','B','C','D'];
let val6 =arr9.pop()  //get and removes last element
console.log(val6)
console.log(arr9);
arr9[3]='D'; // replace D into index 3
arr9[5]='F'; // add F into index 5 and add a empty slot in index 4
console.log(arr9);  // saca un empty slot en index 4
arr9[4]='E';  // metemos la  E en index 4 
const arr10 = arr9.reverse(); // revertimos orden
console.log(arr10);
const arr11 = arr10.concat(arr9);
console.log(arr11);

// loops

for (let i = 0; i < arr9.length; i++) {
    console.log(arr9[i]);
}
for (let item of arr1) {
    console.log(item);
}
arr9.forEach((item, idx) => {
    console.log(`item is ${item} at ${idx}`);
});

console.log('Creacion de un array bidimensional de 3x3');

const p = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, Math.random),
); // A 3×3 array of random numbers

console.log(p);

for (let i = 0, j = 2; i <= 2; i++, j--) {
  console.log(`p[${i}][${j}] = ${p[i][j]}`);
} 

