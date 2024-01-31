'use strict'

const promise1 = new Promise((resolve, reject) => resolve(1));
promise1.then(v1 => v1 + 1).then(v2 => v2*2).then(v3 => console.log(`ultima consumicion ${v3}`));


async function myAsyncFunc() {
    return 1; // lo mismo que Promise.resolve(1)
  }

myAsyncFunc().then(alert); // muestra 1


async function myAsyncFunc2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000)
    });
  }
myAsyncFunc2(); // devuelve la promesa, que no utilizamos
console.log('¡grita hecha!');
myAsyncFunc2().then(alert); 


async function myAsyncFunc3() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("hecho!"), 23000)
    });
    const value = await promise;
    return "bien " + value;
  }
  myAsyncFunc3().then(value => alert(value)); // bien hecho



console.log(Date);
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
console.log(Date);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function failureCallback(){
    console.log('never happen');
} 

function saySomething(n){
    console.log(n);
}

wait(10 * 1000)
  .then(() => saySomething("10 seconds - Promesa CUMPLIDA"))
  .catch(failureCallback);

