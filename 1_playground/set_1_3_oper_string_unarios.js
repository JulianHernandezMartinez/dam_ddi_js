
console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - Operacionc con Strings, unarios,...  ';

'use strict';

/* let and const keywords for variables in Js */
/* see and practice -Difference between var, let and const keywords in JavaScript-
/* https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/*/

let namePerson = "Julian";
let numberPerson = 666666;
let ciclistPerson = true;


console.log("CONCATENACIONES de STRINGs CON '+'");

  /**concatenar con + */
  let surnamePerson = "Hernandez";
  namePerson = "Julian";
  console.log(namePerson + " " + surnamePerson);

console.log("MAS UNARIOS + equivale a number(string), ++incrementa in_place y --decrementa in_place");

  /** unario + como Number(value) */
  numberTextNumber="22";
  console.log(numberTextNumber) // numero en string (COLOR NEGRO en consola)
  console.log(+numberTextNumber); /** "+"" equivale a Number(value) -conversor- a texto representando un numero en number*/

    /** unario ++ -> incrementa in_place y -- i-> decrementa in_place */

  console.log(++numberTextNumber); //23
  console.log(++numberTextNumber); //24
  console.log(numberTextNumber); //24 

  console.log(--numberTextNumber,--numberTextNumber,numberTextNumber); //23, 22, 22 

  /** hacemos necesario el typeof() */
  console.log(String(numberTextNumber),typeof(numberTextNumber),numberTextNumber=String(numberTextNumber),numberTextNumber,typeof(numberTextNumber)); //23, 22, 22 

/** coma como operador */
/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator */
/** el ejmplo de abajo permite ver que son utiles y utilizadas en los "for", ya que permite agrupar las acciones del for*/
/** en este caso inicializa contadores i y j, impone la condicion de fin "i<=9", y actualiza los contadores en el for,  */
/** operador coma (,) devuelve el ultimo valor evaluado */

console.log("OPERADOR COMMA (,) ULTIMO VALOR EVALUADO");

  let x = 1;

  x = (x++,x,x++,x); 

  console.log(x);
  // expected output: 3

  x = (2, 3, 4, 3, 2, 100);

  console.log(x);
  // expected output: 100


  // Strings Interpolation
  // se emplea ampliamente construyendo html que se renderiza

const nameAbdul="Abdul Rawoof"
let salary = 18000
let increment = 2000

console.log(`Employee name is ${nameAbdul} and his salary after increment is ${salary+increment}$`)

// Multiline String ( alternative to \n), solo requiere que se esciban en lineas diferentes

const edad = 4.5

const edadTierra = `Se estima que la Tierra tiene ${edad} mil millones de años.

Los científicos han rastreado la Tierra en busca de las rocas más antiguas para precisar fechas radiométricamente.

En el noroeste de Canadá, descubrieron rocas de unos 4.030 millones de años.
`;

console.log(edadTierra)