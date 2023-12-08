'use strict'

// almacerna el valor Tom asociado a la key/clave 
// MyCat en el localStorage del navegador

localStorage.setItem("myCat", "Tom");

// recupera el valor almacenado en el navegador asociado
// a la clave/key MyCat y lo asigna a la variable cat
const cat = localStorage.getItem("myCat"); 

console.log(cat); // Tom

// borra la pareja MyCat = Tom del localStorage
localStorage.removeItem("myCat");

// borra todas las parejas del local Storage

localStorage.clear();

