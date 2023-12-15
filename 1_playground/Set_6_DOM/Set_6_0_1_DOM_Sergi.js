'use strict'

const mydiv1 = document.getElementById("div1")
mydiv1.innerHTML = "<h1>Header cambiado</h1> <p>Paragraph GGGG 1 </p> <p>Paragraph HHHH 2 </p> <p>Paragraph JJJJ 3 </p>";
console.log(`el html de ${mydiv1.innerHTML}`);


document.getElementsByTagName("p")[0].innerHTML = "Hello World!"; 
document.getElementsByTagName("p")[5].innerHTML = "Goodbye World!"; 


const divName = document.getElementById('div2');
console.log(divName.textContent);


const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const items = document.querySelectorAll('li');
console.log(items);

for (let i=0; i<items.length;i++) {
  items[i].innerHTML = '<b>list item bolded</b>'
}

for (let i=0; i<items.length;i++) {
  items[i].textContent = 'list item NO bolded'
}


// https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp

