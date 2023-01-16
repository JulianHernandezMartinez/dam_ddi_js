
console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - tipos, conversiones de tipos y constructores de tipos';

'use strict';

/* let and const keywords for variables in Js */
/* see and practice -Difference between var, let and const keywords in JavaScript-
/* https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/

/* typeof */

console.log("TIPOS Y CONVERSORES");
console.log("*****TIPOS*****");

let namePerson = "Julian";
let numberPerson = 666666;
let ciclistPerson = true;

// typeof(string)
console.log("Se obtiene el tipo de la variable namePerson")
console.log(namePerson," mediante typeof(namePerson) y su resultado es")
console.log("tipo :",typeof(namePerson)); // string

// typeof(number)
console.log("Se obtiene el tipo de la variable numberPerson")
console.log(numberPerson," mediante typeof(numberPerson) y su resultado es")
console.log("tipo ",typeof(numberPerson)); //number

//typeof (boolean)
console.log("Se obtiene el tipo de la variable ciclistPerson ")
console.log(ciclistPerson," mediante typeof(ciclistPerson) y su resultado ")
console.log("tipo ",typeof(ciclistPerson)); //boolean

/* CONVERSIONES */
console.log("*****CONVERSIONES String<->Number<->Booleam*****");

console.log("la conversion de namePerson a Booolean se hace mediante -Boolean(namePerson)- y retorna -true-", Boolean(namePerson));
namePerson = null;
console.log("la conversion de namePerson que se ha actualizado a -null- mediante -Boolean(namePerson)- retorna -false-", Boolean(namePerson));
namePerson=undefined;
console.log("namePerson=undefined mediante Boolean(namePerson)->false", Boolean(namePerson));

namePerson = null;
console.log ("la conversionn de un null -namePerson- ahora a numero retornara -0-", Number(namePerson));
namePerson = undefined;
console.log ("la conversionn de un undefined -namePerson- ahora a numero retornara -NaN-", Number(namePerson));


console.log ("la conversion de Pedro en Number --> NaN y de NaN a Booleano -->Falsy", Boolean (Number("pedro"))); /* la conversion de Pedro en Number --> NaN y de NaN a Booleano -->Falsy)

console.log("la conversion de numberPerson a String se hace mediante -String(numberPerson)- y retorna", String(numberPerson));

/* obs  si en lugar de la conversion sacamos directamente numberperson el display de consola lo saca de otro color*/ 

console.log("Si sacamos numberPerson sin conversion se representa con color verde en consola Firefox", numberPerson);

/* obs  si en lugar de la conversion sacamos directamente numberperson el display de consola lo saca de otro color*/ 

console.log("Si sacamos numberPerson SIN conversion se");
console.log("representa con color VERDE en consola Firefox");
console.log(numberPerson);
console.log("Si sacamos numberPerson CON conversion a string se ");
console.log("representa con color NEGRO en consola Firefox");
console.log(String(numberPerson));

/* CONSTRUCTORES DE TIPOS  */
console.log("*****CONSTRUCTORES DE TIPOS*****");

let nombre = String('Julian')
let numero = Number(666666)
let ciclista = Boolean(true)

console.log(typeof(nombre)) // string
console.log(typeof(numero)) // number
console.log(typeof(ciclista)) // booleam
