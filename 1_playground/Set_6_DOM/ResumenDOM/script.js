// sets of code in DOM resumen
// https://docs.google.com/document/d/17ka7TT4nRQ1lGl6MdYImPQeThCud0jnR6WPNpqYUSl4

const link = document.querySelector("a");
console.log(link.href);

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
paragraphs.forEach((paragraph) => {
   // do something with it
   console.log(paragraph.textContent);
});

// other methods

const link2 = document.getElementsByTagName("a"); // html collection
console.log(link2[0].href);

