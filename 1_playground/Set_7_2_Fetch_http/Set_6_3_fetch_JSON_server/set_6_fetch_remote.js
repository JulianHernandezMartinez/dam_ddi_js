// https://reqres.in//api/users?page=2

// https://jsonplaceholder.typicode.com/

// install JSON server on nodejs
// $ sudo npm install -g json-server

// start JSON Server 
// $ cd /home/vboxuser/dam_ddi_js/1_playground/Set_6_Fetch_http/Set_6_3_fetch_JSON_server/JsonDDBB
// $ 
// $ json-server --watch bbdd.json
/* 
\{^_^}/ hi!

Loading localidades.json
Done

Resources
http://localhost:3000/localidades

Home
http://localhost:3000

*/

// JSON in MDN   --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON 
// JSON standard --> https://datatracker.ietf.org/doc/html/rfc8259
// JSON grammar  --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#full_json_grammar

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// 
// Español
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

fetch(`http://localhost:3000/progbooks`)
.then((response) => response.json())
.then((data) => {
  allbooks = data;
  console.log (allbooks);
});


fetch(`http://localhost:3000/localidades?provincia=Granada`)
.then((response) => response.json())
.then((data) => {
  allitems = data;
  console.log('fetch localidades con filtro Provincia = Granada');
  console.log (allitems);
});

class Localidad {
  localidad;
  provincia;
  constructor(localidad,provincia) {
    this.localidad = localidad;
    this.provincia = provincia;
  }
}

const nuevalocalidad = new Localidad("Benaojan","Malaga");

const newlocality = {
  "localidad" : "Lugros",
  "provincia" : "Granada"
}

console.log(JSON.stringify(newlocality));

console.log(JSON.stringify(nuevalocalidad));

fetch(`http://localhost:3000/localidades`,{
  method: 'POST', 
  body: JSON.stringify(nuevalocalidad),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
  })
.then((response) => response.json())
.then((data) => {
  postresult = data;
  console.log('resultado del post de Nueva Localidad')
  console.log (postresult);
});
