'use strict'

/* JSON parse and stringfy  examples are from
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
*/

// object (or prototype) sintax {}
console.log("JSON.parse");

const jsonstring =`{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}`

const obj = JSON.parse(jsonstring);

console.log(obj);
console.log(obj.menu.id);
console.log(obj.menu.popup.menuitem[0].value);
console.log(obj.menu.popup.menuitem[2].onclick);

// Stringfy
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

