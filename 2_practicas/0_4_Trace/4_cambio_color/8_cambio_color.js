
'use strict'

// controls

const redBtn = document.querySelector('#red');
const blueBtn = document.querySelector('#blue');
const mensajeOut = document.querySelector('#mensaje')

redBtn.addEventListener('click', () => {
    console.log('clicked boton red!');
    mensajeOut.style.color = 'red';
});

blueBtn.addEventListener('click', () => {
    console.log('clicked boton blue!');
    mensajeOut.style.color = 'blue';
});
