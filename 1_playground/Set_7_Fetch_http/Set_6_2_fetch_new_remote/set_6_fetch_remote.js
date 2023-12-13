// Public Test Server
// https://jsonplaceholder.typicode.com/

fetch(`https://jsonplaceholder.typicode.com/todos`)
.then((response) => response.json())
.then((data) => {
  allitems = data;
  console.log (allitems);
});
 