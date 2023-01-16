'use strict';

console.log('contador');

const mydiv = document.querySelector('#mydiv');
const p1 = document.querySelector('#p1');
let contador = 0; /** valor inicial del contador */
const buttonToBeClickedtoIncrease = document.getElementById("clickadd-button");

mydiv.textContent = "Ejercicio para implementar un contador de clicks";

  
  // cuando clickamos el boton del contador,
  buttonToBeClickedtoIncrease.addEventListener(
    "click",
    () => {
      console.log('clicked!');
      contador ++;
      console.log(`new counter is ${contador}`);
      p1.textContent = `El contador es ${contador}`;
    }
  );