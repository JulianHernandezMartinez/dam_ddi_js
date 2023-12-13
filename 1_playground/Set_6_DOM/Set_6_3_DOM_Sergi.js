'use strict'

const mydiv1 = document.getElementById("div1")
mydiv1.innerHTML = "<h1>Header cambiado</h1> <p>Paragraph GGGG 1 </p> <p>Paragraph HHHH 2 </p> <p>Paragraph JJJJ 3 </p>";
console.log(`el html de ${mydiv1.innerHTML}`);


document.getElementsByTagName("p")[0].innerHTML = "Hello World!"; 
document.getElementsByTagName("p")[1].innerHTML = "Goodbye World!"; 


const divName = document.getElementByName('seconddiv');
const p1 = document.getElementsByName("p1");
const p1bis = document.querySelector("#p1");
console.log(p1bis.textContent);
console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKK')


const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const items = document.querySelectorAll('li');
console.log(items);

for (let item in items) {
  items[item].innerHTML = '<b>list intem bolded</b>'
}

