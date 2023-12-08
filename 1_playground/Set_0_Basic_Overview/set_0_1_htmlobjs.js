
/* using JSDoc for querySelector elements
<input type="text" id="amount" /> */

/** @type {HTMLInputElement} */
const amountInput = document.querySelector('#amount');
amountInput.value = 'a text';

/* using a form with an input type="submit" inside
<form id="myform">
    ...
    <input type="submit" value="Enter" />
</form> */

const form = document.querySelector('#myform');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // ...
});

// gets the current value of a radio button set
document.querySelector('input[name="op"]:checked').value;

// append a li to a ul

const parentUl = document.querySelector('#myul');

let li = document.createElement("li");
li.setAttribute("id", 123);
li.innerText = 'some text';
parentUl.appendChild(li);
