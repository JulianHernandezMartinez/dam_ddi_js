'use strict'
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
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);

