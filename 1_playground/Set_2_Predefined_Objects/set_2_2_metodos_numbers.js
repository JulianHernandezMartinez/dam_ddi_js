
console.log('PlayGround de JS!');

const mydiv = document.querySelector('#mydiv');
mydiv.textContent = 'Terreno de Juegos - Metodos de Numbers';

'use strict';
console.log ('********** Metodos de Number**********')

/** metodos de Number*/
let numerolargo = 123456789;
let numeroflotante =13456.555455467843


console.log('el numero tal cual',numerolargo); // 123456789
console.log('el numero en string',numerolargo.toString()); // "123456789"
numerolargoenstring=numerolargo.toString()  // variable string con contenido de numero largo 
console.log('el numero a string con precision sin determinar',numerolargo.toPrecision()) // representa el numero como un string si especificar la precision
console.log('el numero a string con precision a 2',numerolargo.toPrecision(2)) // representa el numero como un string con la precision de 2
console.log('el numero',numerolargo,' a string con precision a 5 es--> ',numerolargo.toPrecision(5)) // representa el numero como un string con la precision de 5
console.log(numerolargoenstring.valueOf()) // "123456789"
console.log(numeroflotante.toFixed(4)) // 13456.5555
console.log(numeroflotante.toExponential(2)) // 1.35e+4
console.log(numeroflotante.toFixed) // 13456 equivale a floor // en python

console.log ('--> metodo ".toLocaleScring" arabe y castellano')
/** toLocaleString https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString*/
console.log(numeroflotante.toLocaleString(),'por defecto') //??
console.log(numeroflotante.toLocaleString('ar-EG'),'en arabe de Egipto')
console.log(numeroflotante.toLocaleString('es-ES'),'en español -castellano- de España')
//** en ruso c */
console.log(numeroflotante.toLocaleString('ru-RU'),'en ruso de Rusia') //??
console.log(numeroflotante.toLocaleString('en-US'),'en ingles norteamericano') //??
console.log(numeroflotante.toLocaleString('en-GB'),'en ingles britanico') //??

/**parseInt MDN*/

function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(' 0xF', 16)); // F en base hexadecimal = 15 * 100 = 1500
// expected output: 1500

console.log(roughScale('1345', 2));  // 12345 no es base 2, por lo tanto la funcion ->0
// expected output: 0
