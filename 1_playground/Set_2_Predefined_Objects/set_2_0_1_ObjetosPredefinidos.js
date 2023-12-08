
'use strict';

// ejemplos tomados desde https://xguaita.github.io/mtig-js/modulo3/

// Maths

console.log('Máximo de 100, 25, 38, 200, 150:', Math.max(100, 25, 38, 200, 150));
console.log('Redondear 1.7523:', Math.round(1.7523));
console.log('PI', Math.PI);
console.log('Número aleatorio', Math.random());
console.log('Raiz cuadrada de 100:', Math.sqrt(100));

// Arrays

// Crear arrays

let x= new Array(); // Array vacío
let b= []; // Array vacio
console.log(typeof x);
console.log(typeof(b));

let c= new Array(20); // Array vacío de 20 elementos
console.log(c);
console.log(c[1]);

let d= [20]; // Array de un elemento
let e= new Array(10, 20, 30, 40); // Array de 4 elementos
let f= [10, 20, 30, 40]; // Array de 4 elementos


// Acceso a los elementos del Array

let a= [10, 'texto', new Date()];
console.log('2º elemento:', a[1]);
console.log('Acceso a objeto Date:', a[2].getFullYear());
console.log(a);
a[0]= 1000;
console.log(a);

// Lengh de Array

let arr1= [];
console.log('Tamaño', arr1.length);
arr1= [10, 20, 30];
console.log('Tamaño', arr1.length);
arr1[10]= 1000;
console.log('Tamaño', arr1.length); // 11
console.log(arr1);
console.log('Índice 5:', arr1[5]);
arr1.length= 2;
console.log(arr1);
arr1.length=3;
console.log(arr1)

// Metodos de array

let arr2= ['azul', 'rojo', 'verde', 'amarillo'];
console.log('verde?', arr2.indexOf('verde'));
console.log('negro?', arr2.indexOf('negro'));
arr2.unshift('blanco');
console.log(arr2.join('-')); // 

// recorrer los elementos de un array

for (let i= 0; i < arr2.length; i++) console.log(arr2[i]);

for (let i in arr2) console.log(arr2[i]);

// Pregunta
// dado el siguiente código, 
// cuál es el valor de h?

let arr3 = [100, 200, ['a', 'b']];
let h = arr3[2];
console.log(h);

// h[1]= 'X';
console.log(h[1]);
// arr3[2][2]= 'Y';
console.log(arr3[2][1]) // "b"
console.log(arr3[2][2]) // undefined
console.log(arr3[2].length);


