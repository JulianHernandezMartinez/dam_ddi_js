import {
    saveData, 
    getDataChanged,
    deleteData,
    getDataCollection,
    updateData } from "./hellofirebase.js"
let contador = 0; 

const contadorHTML = document.getElementById('contadorHTML')
/*
getDataChanged('localidades',()=> {
    contador++
    contadorHTML.textContent = contador
})
*/


getDataChanged('localidades',(datos)=> {
    contador++
    contadorHTML.textContent = contador
    datos.forEach(doc => {
      console.log(doc.data()) 
    });
})

