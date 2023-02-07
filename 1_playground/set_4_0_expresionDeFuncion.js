// expresiones de Funciones

let decirHola = function(nombre) {
    console.log(`hola, ${nombre}`);
  };
  
  decirHola('Joan');
  
  function hazLlamada(MiFuncion, nombre) {
    MiFuncion(nombre);
  }
  
  hazLlamada(decirHola, 'Anna');