'use strict'

// filter - Filtrado

const arr = [0,1,2,3];
const filtrado = arr.filter( x => x > 1 );
console.log(arr[1], arr[3]);
console.log(arr);
console.log(filtrado);

// map - Mapeo

const mapeado = arr.map( x => x ** 2 )
console.log(mapeado)

// En este caso devuelve un único valor 
// después de aplicar una función a los 
// elementos del array:

const suma = arr.reduce((acumulador,elemento)=>acumulador + elemento,0);


