'use strict';
console.log('PlayGround de JS! - Básicos');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - Overview';

// filter - Filtrado

const arr = [0,1,2,3];

function cubo(x){
    let result = x*x*x;
    return result;
}
const filtrado = arr.filter( x => x>1 );
console.log(arr[1], arr[3]);
console.log(arr);

console.log(`filtrado ${filtrado}`);
console.log(filtrado)

// map - Mapeo


function cubo(x){
    let result = x*x*x;
    return result;
}

const mapeado = arr.map( x => cubo(x) )
console.log(`mapeado ${mapeado}`);
console.log(mapeado)


const remapeado = mapeado.map( x=>x**3);
console.log(`remapeado ${remapeado}`);
console.log(remapeado)
    

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