fetch('./posts.json')
 .then((response) => response.json())
 .then((data) => {
   allitems = data;
   console.log (allitems);
 });
 