'use strict';
console.log('PlayGround de JS! - Básicos');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - Overview';

// console.log(valor);
let valor = 7;
console.log(valor);
console.log(nohacerlo);  // Hoisting evitará error. Aun así…
//console.log(constante_x);
const constante_x = 23;
console.log(constante_x);
// constante = 44;
var nohacerlo = 33;

const nombre = 'Julian';
const apellidos = 'Hernandez Martinez';
const edad = 'X'

const ejemplo = `Hola ${nombre} ${apellidos}. ¿tienes ${edad} años?`;
console.log (ejemplo);

// JS object

const persona = {
	nombre: 'Pedro',
	apellidos:'Pereda',
    edad:53,
};
console.log(persona.nombre, persona.edad);

let ejemplo2 = `Hola ${persona.nombre} ${persona.apellidos}. ¿tienes ${persona.edad} años?`;

console.log('ejemplo2',ejemplo2);
console.log('ejemplo2',`Hola ${persona.nombre} ${persona.apellidos}. ¿tienes ${persona.edad} años?`);

const persona2 = persona;

// Y continuamos con el siguiente código:

persona.nombre = "Luis";
console.log(persona2);
console.log(persona);

const persona3 = {... persona};

persona3.nombre ='Maria'
console.log(persona3)
console.log(persona)


function nombrefuncion(param1, param2) {
	console.log('cuerpo de la función');
	let valor = 'dummy value';
	return valor;
};

const nuevaFuncion = () => {}

// Si esta arrow functions solo tiene una línea que en la que devolvemos el valor, se pueden obviar las llaves:

const devuelveDos = () => 2;


// spread ...

function sum(x, y, z) {
	return x + y + z;
  }
  
const numbers = [1, 2, 3];
  
console.log(sum(...numbers));
// Expected output: 6
  
console.log(sum.apply(null, numbers));
// Expected output: 6