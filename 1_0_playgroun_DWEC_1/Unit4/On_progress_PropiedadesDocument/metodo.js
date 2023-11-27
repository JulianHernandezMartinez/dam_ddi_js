'use strict'


      document.addEventListener('DOMContentLoaded', function () {
        // Obtener el elemento ul para agregar la lista de métodos
        var listaMetodos = document.getElementById('metodos-documento');
  
        // Obtener todos los métodos de Document
        var metodosDocument = Object.getOwnPropertyNames(Document.prototype).filter(function (propiedad) {
          return typeof Document.prototype[propiedad] === 'function';
        });
  
        // Agregar cada método a la lista
        metodosDocument.forEach(function (metodo) {
          // Crear un elemento li para cada método
          var listItem = document.createElement('li');
  
          // Agregar el nombre del método y su descripción
          listItem.textContent = metodo + ': ' + Document.prototype[metodo].toString();
  
          // Agregar el elemento li a la lista
          listaMetodos.appendChild(listItem);
        });
      });

