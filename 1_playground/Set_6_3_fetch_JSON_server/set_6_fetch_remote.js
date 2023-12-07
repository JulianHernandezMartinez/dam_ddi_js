// https://reqres.in//api/users?page=2

// https://jsonplaceholder.typicode.com/

// install JSON server on nodejs
// $ sudo npm install -g json-server

// start JSON Server 
// $ cd dam_ddi_js/1_playground/Set_6_3_fetch_JSON_server/JsonDDBB
// $ json-server --watch db.json
// $ json-server --watch localidades.json
/* 
\{^_^}/ hi!

Loading localidades.json
Done

Resources
http://localhost:3000/localidades

Home
http://localhost:3000

*/

fetch(`http://localhost:3000/localidades?provincia=Granada`)
.then((response) => response.json())
.then((data) => {
  allitems = data;
  console.log (allitems);
});

const newlocality = {
  "localidad" : "Diezma",
  "provincia" : "Granada"
}

console.log(JSON.stringify(newlocality));


fetch(`http://localhost:3000/localidades?provincia=Granada`,{
  method: 'POST', 
  body: JSON.stringify(newlocality),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
  });