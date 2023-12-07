// https://reqres.in//api/users?page=2

// https://jsonplaceholder.typicode.com/

let query = 'prog';
fetch(`https://jsonplaceholder.typicode.com/todos/1`)
.then((response) => response.json())
.then((data) => {
  allitems = data;
  console.log (allitems);
});
 