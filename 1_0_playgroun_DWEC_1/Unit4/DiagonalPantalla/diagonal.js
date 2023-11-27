document.addEventListener('DOMContentLoaded', function () {
    // Obtén el ancho y alto de la pantalla
    const anchoPantalla = screen.width;
    const altoPantalla = screen.height;

    // Calcula la longitud de la diagonal usando el teorema de Pitágoras
    const longitudDiagonal = Math.sqrt(anchoPantalla ** 2 + altoPantalla ** 2);

    // Muestra el resultado en la página
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = 'Longitud de la diagonal de la pantalla: ' + longitudDiagonal.toFixed(2) + ' pixels';
  });