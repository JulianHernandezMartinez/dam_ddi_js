
const numeroInp = document.querySelector('#numero_input');
const numeroOut = document.querySelector('#numero_out')
const cuadrado = document.querySelector('#cuadrado')
const cubo = document.querySelector('#cubo')

const myform = document.querySelector('#myform');

myform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked!");
    numeroOut.textContent=numeroInp.value;
    cuadrado.textContent = Number(numeroInp.value)**2;
    cubo.textContent = Number(numeroInp.value)**3;

    div1.style.display = 'none';
    div2.style.display = 'block';
}); 