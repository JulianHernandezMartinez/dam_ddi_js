
const nombreInp = document.querySelector('#nombre_input');
const nombreOut = document.querySelector('#nombre_out')

const myform = document.querySelector('#myform');


mydiv.textContent = 'How are you feeling today?';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked!");
    const name = String(nameInp.value);
    saluda(name);

    div1.style.display = 'none';
    div2.style.display = 'block';
    interval = setInterval(countDown, 1000);
});