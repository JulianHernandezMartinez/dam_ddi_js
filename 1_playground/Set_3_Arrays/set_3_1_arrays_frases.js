

let arr_frases_cancion = ["Hola Don Pepito","Hola Don José","¿Paso usted ya por casa?","Por su casa yo pase","¿vio usted a mi abuela?","a su abuela yo la vi","adios don Pepito","adios don Jose"];

console.log('LAS FRASES de LA CANCION');

arr_frases_cancion.forEach((item, idx) => {
    console.log(`frase ${idx+1} es "${item}"`);
});

console.log('LA CANCION');

for (let i = 0; i < arr_frases_cancion.length; i++) {
    console.log(arr_frases_cancion[i]);
}

console.log('LA CANCION AL REVES');

for (let i = arr_frases_cancion.length - 1; i >-1; i--) {
    console.log(arr_frases_cancion[i]);
}

console.log('LA CANCION - Frases de DON JOSE');

for (let i = 0; i < arr_frases_cancion.length; i= i+2) {
    console.log(arr_frases_cancion[i]);
}

console.log('LA CANCION - OTRA FORMA');

for (let item of arr_frases_cancion) {
    console.log(item);
}
