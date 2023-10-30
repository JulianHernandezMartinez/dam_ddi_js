
'use strict';

// Functions

// ejemplos tomados desde https://xguaita.github.io/mtig-js/modulo3/

/*
function nombreFunc([param1[, ...[, paramN]]]) { // Parámetros opcionales
    ...
    codigo de la funcion
    ...
    return valor; // Opcional
  }
*/

// console.log de los elementos de un array


function logArray(a) {
    for (let i= 0; i < a.length; i++) console.log(a[i]); // comma operator
}

// x al cubo x*x*x
function cubo(x) {
  return x*x*x;
}
  
let laborables= ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
  
// invoca logArray, laborables es el argumento
logArray(laborables);
  
// invoca cubo en una expresión
console.log(1000000 + cubo(6));


/* Nota: para que la función devuelva más de 
un valor hay que devolver un objeto, 
por ejemplo un array (lista de valores) 
*/

// Crea array de n elementos de números aleatorios 
// entre min y max

function creaArray(n, min, max) {
  let a= []; 

  for (let i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));

  return a;
}



let numeros = creaArray(3, 0, 10);

console.log('numeros:', numeros);

console.log(creaArray(5, 10, 20));
console.log(creaArray(20, 1, 50));

// Crea array de n elementos de números 
// aleatorios entre min y max (0-100)
// parametros opcionales "undefined"


function creaArray(n, min, max) {
  let a= [];

  if (min === undefined || max === undefined) {
    min= 0;
    max= 100;
  }

  for (var i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));

  return a;
}

console.log(creaArray(4));
console.log(creaArray(4,90));
console.log(creaArray(4,20,30))
// creaArray & CreaArrayNew no son equivalentes,¿por que?

function creaArrayNew(n, min, max) {
  let a= [];
  min= min || 0;
  max= max || 100;

  for (var i= 0; i < n; i++) a.push(Math.round(min + Math.random()*(max-min)));

  return a;
}


function creaArrayBis(n, minbis=10, maxbis=40) {
  let a= [];
  for (var i= 0; i < n; i++) a.push(Math.round(minbis + Math.random()*(maxbis-minbis)));
  return a;
}

console.log ("creaArrayBis")
console.log(creaArrayBis(4,30)) // 

console.log(creaArrayBis(4));
console.log(creaArray(4));

// lista variable de argumentos

/* Las funciones cuentan con una propiedad denominada arguments que es un objeto con la lista de argumentos pasados a la función. Mediante su propiedad length obtenemos el número de argumentos y accedemos a ellos mediante su índice (como un array).
*/

// Función que sólo lista argumentos
function listaArgumentos() {
  console.log('Argumentos:', arguments.length);

  for (let i= 0; i < arguments.length; i++) console.log(arguments[i]);
}

listaArgumentos();
listaArgumentos(1, 2, 'texto');
listaArgumentos([10, 20]);

let a= 'global1';
let b= 'global2';

function ambito() {
  let a= 'local1',
      c= 'local2';

  console.log(a);
  console.log(b);
  console.log(c);
  a= 'otro valor local';
  console.log(a);
  b= 'otro valor global';
}

ambito();
console.log(a);
console.log(b);
console.log(c);



