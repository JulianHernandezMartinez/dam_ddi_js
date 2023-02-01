
const nombreInp = document.querySelector('#nombre_input');
const nombreOut = document.querySelector('#nombre_out')

const myform = document.querySelector('#myform');

myform.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked!");
    nombreOut.textContent=nombreInp.value;

    div1.style.display = 'none';
    div2.style.display = 'block';
}); 