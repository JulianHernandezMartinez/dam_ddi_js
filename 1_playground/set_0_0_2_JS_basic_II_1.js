
'use strict'
// spread operator ...

const arr = [1,2,3];
const funcion = (a,b,c) => console.log(`Valor a: ${a}, valor b: ${b}, valor c: ${c}`);
funcion(...arr);

// También nos va a servir para concatenar 
// arrays:

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];

console.log(arr3);

// O para crear un número indeterminado de parámetros en una función:

const muchosArgumentos = (...argumentos) => {
    for (let i in argumentos) {
            console.log(i);
    }
}

let razones = ['porquesi', 'porqueno','porquetalvez' ]

muchosArgumentos(razones); // log 0
console.log('razones spreadas');

muchosArgumentos(...razones); // log 2

console.log('sin argumentos');

muchosArgumentos(); //

muchosArgumentos('porquetu','porqueyo','porquenosotros',...razones,'porquelaabuela'); // log 0, 1, 2, 3, 4

const muchosArgumentos2 = (...argumentos) => {
    for (let i in argumentos) {
            console.log(argumentos);
    }
}
muchosArgumentos2('porquetu', 'porqueyo','porquenosotros',razones,'porquelaabuela'); // log 0, 1, 2, 3, 4

/*  Cuando definamos una función con spread 
operator este siempre debe ser el último en 
la definición. En este caso se le denomina 
REST operator */

// destructuring

console.log('destructuring')

let [a,b] = [1,2];
console.log(a,b);

const persona = {
    nombre: 'Pedro',
    apellidos: 'Pereda Mellado',
    edad: 53,
    profesion: 'Informático',
}

let {nombre, apellidos, ...otrosDatos} = persona;

console.log(nombre, apellidos, otrosDatos);

// para reflexionar
// ¿Qué hace este código?:

const useState = () =>  ['valor', () => {} ];

const [valor, setValor] = useState();

console.log(valor, setValor)

// Ternario: ? (igual que en Java)
const activo = false;
const mensaje1 = (activo) ?  'Activo' : 'No Activo';

const activo2 = true;
console.log(mensaje1);

// También nos encontramos muchos:
const mensaje2 = activo2 && 'Activo';
console.log(mensaje2)