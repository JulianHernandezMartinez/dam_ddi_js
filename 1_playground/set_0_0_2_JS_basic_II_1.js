
'use strict'
// spread operator ...

const arr = [1,2,3];
const funcion = (a,b,c) => console.log(`Valor a: ${a}, valor b: ${b}, valor c: ${c}`);
funcion(...arr);

// También nos va a servir para concatenar 
// arrays:

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1, ...arr2];

console.log(arr3);

// O para crear un número indeterminado de parámetros en una función:


const muchosArgumentos = (...argumentos) => {
    for (let i in argumentos) {
            console.log(i);
    }
}

let razones = ['porquesi', 'porqueno','porquetalvez' ]

muchosArgumentos(razones); // log 0

muchosArgumentos('porquetu', 'porqueyo','porquenosotros',razones,'porquelaabuela'); // log 0, 1, 2, 3, 4





/*  Cuando definamos una función con spread 
operator este siempre debe ser el último en 
la definición. En este caso se le denomina 
REST operator */
