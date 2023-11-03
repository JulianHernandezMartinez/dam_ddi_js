'use strict'

let array = [0,'cero', 'uno',1, 'dos', 'tres', 'cuatro',5];

//.reverse()
let revertido = array.reverse();

console.log(revertido);

//.sort()
let ordenado = array.sort();

console.log(ordenado); // por orden alfabetico

//.forEach
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"