
/** @type {HTMLUListElement} */
const resultUl = document.querySelector('#result');
/** @type {HTMLInputElement} */
const searchInp = document.querySelector('#search');
/** @type {HTMLFormElement} */
const filterFrm = document.querySelector('#filter');
/** @type {HTMLElement} */
const noitemsP = document.querySelector('#noitems');

/** @type {*} */
let willfetch;

filterFrm.addEventListener('submit', (event) => {
  event.preventDefault();
});

searchInp.addEventListener('input', (event) => {  
  clearTimeout(willfetch);    
  willfetch = setTimeout(() => {
    const inputTarget = /** @type {HTMLInputElement} */ (event.target);
    fetchItems(inputTarget.value);
  },500);
});

/**
 * @typedef {Object} BookEntry
 * @property {number} id
 * @property {string} title
 * @property {string} author
 * 
 * @param {Array<BookEntry>} allitems
 */
function createAllItems(allitems) {

  noitemsP.style.display = allitems.length > 0? 'none' : 'block';

  while (resultUl.firstChild) {
    resultUl.removeChild(resultUl.firstChild);
  }
  for (const entry of allitems) {
    const li = document.createElement('li');
    li.textContent = `${entry.title} of ${entry.author}`;
    li.setAttribute('id', `item_${entry.id}`);
    resultUl.appendChild(li);
  }
  searchInp.style.display = 'list-item';
  searchInp.focus();
}

/**
 * Fetch by a query string
 * @param {string} query 
 */
function fetchItems(query) {
  console.log(`fetching ${query}`);
  fetch(`https://dam.jg5.dev:9000/posts?q=${query}`)
  .then((response) => response.json())
  .then((data) => {
    createAllItems(data);
  });
}

fetchItems('');

export {};
