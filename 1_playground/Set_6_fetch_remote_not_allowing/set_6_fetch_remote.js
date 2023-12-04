let query = 'prog';
fetch(`https://dam.jg5.dev:9000/posts?q=  `)
.then((response) => response.json())
.then((data) => {
  allitems = data;
  console.log (allitems);
});
 