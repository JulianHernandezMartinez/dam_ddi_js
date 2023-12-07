
console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - tipos, conversiones de tipos y constructores de tipos';

'use strict';

/* let and const keywords for variables in Js */
/* see and practice -Difference between var, let and const keywords in JavaScript-
/* https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/

/* typeof */

console.log("Types & Converters");
console.log("\n*****Types / TIPOS*****");

let namePerson = "Julian";
let numberPerson = 666666;
let ciclistPerson = true;

// typeof(const)--> return type of variable
console.log(`\n Firefox debugger shows number green and string black`);
console.log(`namePerson type--> ${typeof(namePerson)}`,namePerson); // string
console.log(`numberPerson type--> ${typeof(numberPerson)}`,numberPerson); // number
console.log(`ciclistPerson type--> ${typeof(ciclistPerson)}`,ciclistPerson); // boolean

/* CONVERSIONS &/or Constructors()*/
console.log("\n*****CONVERSIONS String()<->Number()<->Booleam()*****");

console.log(`\n*****Booleam() method Constructor Starting with Capital letter*****`);
console.log(`namePerson to Booolean --> ${Boolean(namePerson)}`); // true (trutty)
console.log(`null to Booolean --> ${Boolean(null)}`); // false
console.log(`undefined to Booolean --> ${Boolean(undefined)}`); // false

console.log("\n *****Number() method Constructor Starting with Capital letter*****");
console.log(`null to Number with Number(null)-->${Number(null)}`,Number(null)); //0
console.log(`undefined to Number with Number(undefined)-->${Number(undefined)}`, Number(undefined));// 0
console.log(`'Julian' to Nutruember with Number('Julian')-->${Number('Julian')}`, Number('Julian')); // NaM
console.log(`0/10 to Number with Number(0/10)-->${Number(0/10)}`, Number(0/10)); // 0
console.log(`Infinity to Number with Number(Infinity)-->${Number(Infinity)}`, Number(Infinity)); // Infinity
console.log(`10/0 to Number with Number(10/0)-->${Number(10/0)}`, Number(10/0)); // Infinity

console.log("\n *****String() method Constructor Starting with Capital letter*****");
console.log(`null to String with String(null)-->${String(null)}`,String(null)); // null
console.log(`undefined to String with String(undefined)-->${String(undefined)}`, String(undefined));// undefined
console.log(`'Julian' to String with String(undefined)-->${String('Julian')}`, String('Julian')); // Julian
console.log(`0/10 to String with String(0/10)-->${String(0/10)}`, String(0/10)); // '0'
console.log(`Infinity to String with String(Infinity)-->${String(Infinity)}`, String(Infinity)); // 'Infinity'
console.log(`10/0 to String with Number(10/0)-->${String(10/0)}`, String(10/0)); // 'Infinity'

/* CONSTRUCTORES DE TIPOS  */
console.log("n\*****CONSTRUCTORES DE TIPOS*****");

let nombre = String('Julian');
let numero = Number(666666);
let ciclista = Boolean('Ciclista');

console.log(typeof(nombre), nombre); // string Julian
console.log(typeof(numero), numero); // number 666666
console.log(typeof(ciclista),ciclista); // booleam true

console.log("n\*****Guess falsy or trutty*****");

console.log(Boolean(Number(10/0)));  // ??
console.log(Boolean(Number('pedro'))); // ??
console.log(Boolean(Number(0/10)));  // ??
console.log(Boolean('pedro')); // ??
console.log(Boolean(String(100/10000))); // ??
