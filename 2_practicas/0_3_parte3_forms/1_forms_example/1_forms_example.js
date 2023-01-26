
const nombreInp = document.querySelector('#nombre_input');
const nombreOut = document.querySelector('#nombre_out')

const myform = document.querySelector('#myform');

mydiv.textContent = 'How are you feeling today?';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked!");
    const name = nameInp.value;
    nombreOut.textContent=name;

    div1.style.display = 'none';
    div2.style.display = 'block';
});