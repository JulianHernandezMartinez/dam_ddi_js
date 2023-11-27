'use strict'

document.addEventListener('DOMContentLoaded', function () {
    // Obten la fecha actual
    const fechaActual = new Date();
  
    // Fecha de referencia: 1 de enero de 2000
    const fechaReferencia = new Date('January 1, 2000 00:00:00 GMT+00:00');
  
    // Calcula la diferencia en milisegundos
    const  diferenciaMilisegundos = fechaActual - fechaReferencia;
  
    // Muestra el resultado en la página
    const  resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = 'Milisegundos transcurridos desde el 1 de enero de 2000: ' + diferenciaMilisegundos;
  });
  