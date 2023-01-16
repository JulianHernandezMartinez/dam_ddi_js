/** @type {HTMLUListElement} */
const resultUl = document.querySelector('#result');
/** @type {HTMLInputElement} */
const searchInp = document.querySelector('#search');
/** @type {HTMLFormElement} */
const filterFrm = document.querySelector('#filter');
/** @type {HTMLElement} */
const noitemsP = document.querySelector('#noitems');
 
/** @type {Array<BookEntry>} */
let allitems = [];
console.log(allitems);
 
filterFrm.addEventListener('submit', (event) => {
 event.preventDefault();
});
 
searchInp.addEventListener('input', (event) => {
 const inputTarget = /** @type {HTMLInputElement} */ (event.target);
 filterItems(inputTarget.value);
 console.log(inputTarget.value);
});
 
/**
* Filter by a string
* @param {string} value
*/
function filterItems(value) {
 let anyshow = false;
 for (const entry of allitems) {
   const show = value.length > 0 ?
     (entry.author.includes(value) || entry.title.includes(value))
     : true;
   if (show) {
     anyshow = true;
   }
   /** @type {HTMLElement} */
   const item = document.querySelector(`#item_${entry.id}`);
   item.style.display = show ? 'list-item' : 'none ';   
 }
 noitemsP.style.display = anyshow? 'none' : 'block';
}
 
/**
* @typedef {Object} BookEntry
* @property {number} id
* @property {string} title
* @property {string} author
*
* @param {Array<BookEntry>} allitems
*/
function createAllItems(allitems) {
 for (const entry of allitems) {
   const li = document.createElement('li');
   li.textContent = `${entry.title} of ${entry.author}`;
   li.setAttribute('id', `item_${entry.id}`);
   resultUl.appendChild(li);
 }
 searchInp.style.display = 'list-item';
 searchInp.focus();
}

/** fetch('./posts,json') para obtener el JSON localmente */
/** fetch('https://dam.jg5.dev:9000/posts') para acceder al servicio*/

fetch('./posts.json')
 .then((response) => response.json())
 .then((data) => {
   allitems = data;
   console.log (allitems);
   createAllItems(data);
 });
 
export {};
