
console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - operadores logicos, condicionales. comparadores';

'use strict';

let namePerson = "Julian";
let numberPerson = 666666;
let ciclistPerson = true;

console.log("OPERADORES LOGICOS || && y ?? != ")

 /** Operadores logicos || && y ?? */

 const tres = 3;
 const menosdos = -2;

 console.log('|| si uno de los operandos es true la op');
 console.log('logical OR dara true como resultado');
 console.log('en nuestro caso siguiente debe salir false la siguiente');
 
 console.log(tres < 0 || menosdos > 0); // false
 console.log(tres > 0 || menosdos > 0); // true

 console.log('si los operandos son todos true la op && ')
 console.log('(logical AND) dara true como resultado')
 console.log('en nuestro caso debe salir true la primera')

 console.log(tres > 0 && menosdos < 0); // true
 console.log(tres > 0 && menosdos > 0); // falsee
 

 // ?? nullish coalescing operator - operador de fusion nula

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

// != (no es igual a...)
console.log(0 != 1);
// Expected output: true
console.log('hello' != 'hello');
// Expected output: false

console.log("OPERADORES LOGICOS CON ASIGNACION &&= ||= y ??= ")
// check MDN directlty
// &&= 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment
// ||=
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment
// ??=
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment

console.log("OPERADORES COMPARADORES > < >= <= != == === ")

/** comparadores = > < >= <= != == (iguales) 
 * === (estrictamente iguales) */

 console.log(tres>menosdos); //true
 console.log(menosdos<tres);//true
 console.log('3'>= tres);//true
 console.log('-2'== menosdos);//true
 console.log(typeof(menosdos)); // 
 console.log(-2===menosdos) //true - estrictamente iguales
 console.log('-2'=== menosdos);//false 
 console.log(typeof('-2'));
 console.log(-2<0);//true

 console.log("OPERADOR CONDICIONAL el clasico 'IF X THEN z ELSE y'")
 console.log("condición? value1 : value2")

 /** condición? value1 : value2 
 * devuelve value1 si la condición es true */
 surnamePerson=String('Hernandez')
 
 console.log(namePerson+' '+surnamePerson+' es', ciclistPerson? 'ciclista' : 'no ciclista');
 
 ciclistPerson=false; // para ver que si no se cumple, se ejecuta la opcion tras los dos puntos :
 console.log(namePerson+' '+surnamePerson+(ciclistPerson? 'ciclista' : ' no es ciclista'));
 
 ciclistPerson=true;  // restablecer el playground

console.log("**********ANIDAMIENTO**********")
 console.log ("la conversion de Pedro en Number --> NaN"); 
 console.log ("y de NaN a Booleano -->Falsy"); 
 
 /** por pasos */
 console.log (Newnumber=Number("pedro")); 
 console.log (Boolean(Newnumber)); 
 /**en una sentencia */
 console.log (Boolean(Number("pedro"))); 
 /**en una linea con 2 sentencias */
 console.log (Newnumber=Number("pedro"),Boolean(Newnumber)); 
 
 /**en una linea con 2 sentencias con hoising? --> No funciona*/
 // console.log (Boolean(AnotherNewnumber),AnotherNewnumber=Number("pedro")); 
 