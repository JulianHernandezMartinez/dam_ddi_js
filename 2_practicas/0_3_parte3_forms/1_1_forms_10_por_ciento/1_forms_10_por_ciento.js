
const numeroInp = document.querySelector('#numero_input');
const numeroOut = document.querySelector('#numero_out')
const diezporciento = document.querySelector('#diezporcien')

const myform = document.querySelector('#myform');

myform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked!");
    numeroOut.textContent=numeroInp.value;
    diezporciento.textContent = Number(numeroInp.value)/10;

    div1.style.display = 'none';
    div2.style.display = 'block';
}); 