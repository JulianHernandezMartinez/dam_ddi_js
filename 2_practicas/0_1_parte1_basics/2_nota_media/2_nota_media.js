
'use strict'

// controls

const notaIn = document.querySelector('#notainput');
const añadeNotaBtn = document.querySelector('#añadenota');
const newform = document.querySelector('#newform');
const caculaMediaBtn = document.querySelector('#calcula');
const mediaOut = document.querySelector('#media');

// on / off
const notadiv = document.querySelector('#notadiv');
const mediapart = document.querySelector('#mediapart');


let notas = [];  // empty array
console.log(notas);

newform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked Añade nota!");
    notas.push(Number(notaIn.value));
    console.log(notas);
    notadiv.style.display = 'block';
    mediapart.style.display = 'none';
}); 

caculaMediaBtn.addEventListener('click', () => {
    console.log('clicked boton de media!');
    mediaOut.textContent = String(notas[1]);
});


