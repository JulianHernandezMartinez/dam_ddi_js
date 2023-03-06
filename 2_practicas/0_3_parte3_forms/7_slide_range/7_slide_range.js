'use strict'

const sliderange = document.querySelector("#RangoValor")
const resultado = document.querySelector("#resultado")

sliderange.addEventListener('change', (event) => {
    event.preventDefault();
    console.log("range change detected!");
    const valor1 = Number(sliderange.value);
    console.log(valor1);
    resultado.textContent = valor1;
});
