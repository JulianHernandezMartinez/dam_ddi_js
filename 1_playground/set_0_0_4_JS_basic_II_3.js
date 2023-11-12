'use strict'

let array = [0,'cero', 'uno',1, 'dos', 'tres', 'cuatro',5];

//.reverse()
let revertido = array.reverse();

console.log(revertido);

//.sort()
let ordenado = array.sort();

console.log(ordenado); // por orden alfabetico

//.forEach
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

console.log("el metodo de .sort() de array es 'in place' y segun 'Unicode'");

const numberstosort = [200,1,2,4,40,80];
console.log(numberstosort);
console.log("numberstosort ya ordenados",numberstosort.sort(), "segun Unicode 200 viene antes que 4");
console.log(numberstosort);  // check inplace

const   namestosort = ['alice', 'Peter', 'Anna','juan'];
console.log(namestosort);
console.log("namestosort ya ordenados",namestosort.sort(), "segun Unicode Anna y Peter van antes que alice y juan");
console.log(namestosort);

const easynumbertosort = [6,2,4];
let esaysortednumber = easynumbertosort.sort((a,b)=>(a-b));
console.log("easysortednumber ordenados",esaysortednumber);
console.log(easynumbertosort);  // in place ?









