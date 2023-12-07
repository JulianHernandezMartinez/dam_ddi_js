'use strict'
console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - operadores aritmeticos, In_place, etc.';

/* let and const keywords for variables in Js */
/* see and practice -Difference between var, let and const keywords in JavaScript-
/* https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/*/

let namePerson = "Julian";
let numberPerson = 666666;
let ciclistPerson = true;
let resultadoSuma;
let resultadoResta;
let resultadoDivision;
let resultadoMultiplicacion;
let resultadoExponencial;
let resultadoResto;

/* OPERADORES https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators */

console.log("OPERADORES + , - , *, /, %, ** ");

/* Los operador matemáticos son + - * / %(remainder) y **  */

  console.log(resultadoSuma=4+5) // 4+5=9
  console.log(resultadoResta=12-8) // 12-8=4
  console.log(resultadoMultiplicacion=10*5) // 10*5=50
  console.log(resultadoDivision=120/12) //120/12=10
  console.log(resultadoResto=24%5) //24%5=4
  console.log(resultadoExponencial =2**3) //8

console.log("OPERACIONES 'IN_PLACE' y 'No IN_PLACE' + , - , *, /, %, ** ");

  /** Le reasignamos el valor restandole 666(in_place), */
  console.log(numberPerson-=666); /**nuevo numberPerson=666000 */
  console.log(numberPerson); /**numberPerson=666000 */

  /** le restamos 666000 y la variable no se 
   *altera/reasigna  (not in_place) 
   y mantiene su valor,*/
  console.log(numberPerson-666000, numberPerson); /**(0) y numberPerson (666000) */

  /** lo reflejamos como una operacion reasignando 
   * la variable = variable + X, y se actualiza la variable */
  console.log(numberPerson=numberPerson-666000);

console.log("OPERANDO CON 'IN_PLACE' -= , += ,*=, /= ");

/**La inicializamos a 0 
 * Le reasiganis el nuevo valor sumando 1 (1), 
 * le multiplicamos por 1000 (1000), 
 * le dividimos por 100 (10)
 * le restamos 6 (4)
 * mostramos el valor final (4)*/
  console.log(numberPerson=0) // (0)
  console.log(numberPerson+=1) // (1)
  console.log(numberPerson*=1000) // (1000)
  console.log(numberPerson/=100) // (10)
  console.log(numberPerson-=6) // (4)
  console.log(numberPerson) // (4)

console.log("TODOS 'IN_PLACE' y SEGUIDOS (0)+2->(2)*50->(100)/20->(5)-10->(-5)");

  /** Todo en una linea, partiendo de 0,+2,*50,/20,-10 */
  numberPerson=0
  console.log(numberPerson+=2,numberPerson*=50,numberPerson/=20,numberPerson-=10)

  console.log("UNOS 'IN_PLACE' y OTROS NO");

  numberPerson=14
  console.log(numberPerson%=4, numberPerson**numberPerson); // IN_PLACE (2) y not in place (4)
  console.log(numberPerson**numberPerson**numberPerson); // Not inplace (16)
  console.log(numberPerson) // 2
