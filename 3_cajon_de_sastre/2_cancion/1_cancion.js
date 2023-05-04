'use strict'
console.log('Hello, PicoCSS!');
console.log('Re-Modifiado desde VM')
 
let arr_frases_cancion = ["Hola Don Pepito","Hola Don José","¿Paso usted ya por casa?","Por su casa yo pase","¿vio usted a mi abuela?","a su abuela yo la vi","adios don Pepito","adios don Jose"
];
 
const mydiv = document.querySelector('#mydiv');
let indice = 0;
mydiv.textContent = 'How are you feeling today?';
 
/**identifico los espacios del DOM donde escribir las frases */
/**espacio del DOM de las columnas 1 y 2 */
 
/** para que funcione con "use strict" requiere definir la variable con "let" */
 
const espacio_columna1 = document.querySelector('#columna1');
const espacio_columna2 = document.querySelector('#columna2');
 
/** intento iterar sacando las frases de la cancion temporizadas */
 
/** busco el numero total de elementos en el array */
let indiceMax = arr_frases_cancion.length;
console.log(indiceMax) /** pinta 8 porque hay 8 frases */
 
espacio_columna1.textContent = arr_frases_cancion[indice];
console.log (arr_frases_cancion[indice]);
indice++;
espacio_columna2.textContent = arr_frases_cancion[indice];
console.log (arr_frases_cancion[indice]);
 
/** ejemplo desde https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction */
 
const story = document.body.querySelector(".story");
 
const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
 story.textContent = "It was a dark and stormy night...";
});
 
const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
 story.textContent = "";
});
