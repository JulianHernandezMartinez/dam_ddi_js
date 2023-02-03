const numberInp = document.querySelector('#numberInp');
const listaInp =document.querySelector('#lista')
const resultadotOut = document.querySelector('#salida')
const diventrada = document.querySelector('#entrada')

console.log(numberInp)
console.log(listaInp)

function calcula(operador1,operador2)
{
    let resultado = operador1 * operador2;
    return resultado;
}

listaInp.addEventListener('change', (event) => {
    event.preventDefault();
    console.log("list change detected!");
    const valor1 = Number(numberInp.value);
    const valor2 = Number(listaInp.value);
    console.log(valor1);
    console.log(valor2);
    resultadotOut.textContent = calcula(valor1,valor2);

    diventrada.style.display = 'none';
    //div2.style.display = 'block';
}); 