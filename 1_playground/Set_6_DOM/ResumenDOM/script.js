// sets of code in DOM resumen
// https://docs.google.com/document/d/17ka7TT4nRQ1lGl6MdYImPQeThCud0jnR6WPNpqYUSl4


// SELECCION y acceso

const link = document.querySelector("a");
console.log(link.href);

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
paragraphs.forEach((paragraph) => {
   // do something with it
   console.log(paragraph.textContent);
});

// other methods

const link2 = document.getElementsByTagName("a"); // html Node List - collection
console.log(link2[0].href);

// other pseudo.selectores

const para1 = paragraphs[0];
console.log (para1);
const link3 = para1.children[0];
console.log(link3.href);

// MODIFICACION
link2[0].href = 'https://developer.mozilla.org/'

// CREACION (createElement) y ADJUNTADO ( appendChild)
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

const para2 = document.createElement("p");
para2.textContent = "This paragraph is doing to be deleted.";
sect.appendChild(para2);


// BORRADO (remove())

sect.removeChild(para2);

//para2.remove();
//para2.parentNode.removeChild(para2);

para.setAttribute("id", "one");
let id1 = para.getAttribute("id"); // one
let id2 = para.id; // one


let accordion = document.querySelector('[data-expand]');
let btnHi = document.querySelector('[data-click="sayHi"]');
let btnMore = document.querySelector('[data-click="showMore"]')

const paragraphs3 = document.querySelectorAll("p");
console.log(paragraphs3);










// clonado 

const template = document.querySelector("#message");
const message = template.content.cloneNode(true);
message.querySelector('.heading').textContent = 'A title';
message.querySelector('.text').textContent = 'Some text here';
const mydiv = document.querySelector('#div1');
mydiv.appendChild(message);


