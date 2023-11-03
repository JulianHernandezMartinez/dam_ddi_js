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

// que hace este codigo??

const arr1 = [0,1,2,3.4];
const resultadomisterioso = arr1
    .map(x=> x**2)
    .filter(x=> x >= 4)
    .reduce((acumulador, elemento)=> acumulador + elemento,0 );



    
// [0,1,2,3.4] --> [0,1,4,9,16] --> [4,9,16] -->29




// [0,1,2,3.4] --> [0,1,4,11,56] --> [4,11,56] -->15,56


console.log(resultadomisterioso);