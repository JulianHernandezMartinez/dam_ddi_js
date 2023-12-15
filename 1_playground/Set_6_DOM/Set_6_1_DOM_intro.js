'use strict'
const paragraphs = document.getElementsByTagName("p");
// paragraphs[0] es el primer elemento <p>
// paragraphs[1] es el segundo elemento <p>, etc.
console.log((paragraphs[0].nodeName));
console.log((paragraphs[1].textContent));
console.log((paragraphs[0].id));
console.log(paragraphs.defaultView);
 

// ejecuta esta función cuando se cargue el documento
window.onload = function () {
    // crea dinámicamente un par de elementos HTML en una página vacia
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("el texto que desee");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    console.log(heading.textContent);
};

const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
    story.textContent = "It was a dark and stormy night...";
});
      
const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
    story.textContent = "";
});

// PARENT - CHILD

const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // Only add a child if we don't already have one
  // in addition to the text node "parent"
  if (parent.childNodes.length > 1) {
    // parent.textContent='Padrecito';
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});

      
