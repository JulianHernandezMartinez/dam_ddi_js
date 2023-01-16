"use strict"

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


let cyclingType = "cross";
if (cyclingType === "MTB") {
  alert("Bien, el MTB esta bien!");
} else {
  alert("Y el cicloturismo mejor!");
}

function multiplicacion (num1,num2){
    let resultado = num1 * num2;
    return resultado;
}
console.log(multiplicacion(3,3));
console.log(multiplicacion(5,5));
console.log(multiplicacion(10,10));

/**document.querySelector("img").addEventListener("click", () => {
    alert("Ahh. Deja de pincharme!");
  });
  **/

const miImagen = document.querySelector("img");

  miImagen.onclick = () => {
    const mySrc = miImagen.getAttribute("src");
    if (mySrc === "images/bike1.png") {
      miImagen.setAttribute("src", "images/bike2.png");
    } else {
      miImagen.setAttribute("src", "images/bike1.png");
    }
  };

function setUserName() {
    const myName = prompt("Por favor escribe tu nombre.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hola ${myName}, ¿Te gusta el cicloturismo?`;
}

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `El cicloturismo es chulo, ${storedName}`;
  }
    
  myButton.onclick = () => {
    setUserName();
  };