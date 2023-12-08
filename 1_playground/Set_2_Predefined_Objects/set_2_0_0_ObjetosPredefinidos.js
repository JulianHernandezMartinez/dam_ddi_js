'use stric'

// ejemplos tomados desde https://xguaita.github.io/mtig-js/modulo3/

let c= 'H o l a', // Tipo primitivo
b= new String('Hola'); // Objeto String

console.log('Tipo dato c:', typeof c);
console.log('Tipo dato b:', typeof b);
console.log('c == b', c == b);
console.log('c === b', c === b);
console.log('Longitud a:', c.length);

// play+

console.log(c.includes('l')); // True
console.log(c.indexOf('l'));   // 2
console.log(c.split(' ')) // [H,o,l,a]


// Metodos de String

let a= 'La lluvía en Sevilla es una auténtica maravilla';
console.log('Longitud:', a.length);
console.log('Buscar Sevilla:', a.indexOf('Sevilla'));
console.log('Buscar Palma:', a.indexOf('Palma'));
console.log('Reemplaza maravilla:', a.replace('maravilla', 'pesadilla'));
console.log('Devuelve Sevilla:', a.substr(13, 7));
console.log('Mayúsculas:', a.toUpperCase());
console.log('Rompe con espacios:', a.split(' '));


// Dates

let d=new Date(); // Fecha y hora actual
console.log('Día de la semana', d.getDay());
console.log('Día del mes', d.getDate());
console.log('Mes', d.getMonth());
console.log('Año', d.getFullYear());
console.log('Hora', d.getHours());
console.log('Minutos', d.getMinutes());
console.log('Fecha', d.toLocaleDateString());
console.log('ISO 8601', d.toISOString());

// ejercicio 1

/* dada la fecha actual, en qué día de la 
semana nos encontramos (lunes, martes...)? */
console.log ('Ejercicio 1')
let semana =['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
console.log(semana[d.getDay()])

// Ejercicio2 : 
/* dada cualquier fecha, devolverla 
formateada como dd-mm-yyyy */
console.log ('Ejercicio 2')
console.log(d.toLocaleDateString('es-ES'))
