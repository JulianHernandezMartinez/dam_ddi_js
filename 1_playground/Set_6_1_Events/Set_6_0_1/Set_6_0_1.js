'use strict'

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects


const btn1 = document.querySelector('#btn1');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn1.addEventListener("click", bgChange);

// extra properties of event objetcs
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#extra_properties_of_event_objects


const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');

textBox.addEventListener('keydown',(x)=>{
    output.textContent = `You pressed ${x.key}`;
});


// prevent default behaviour
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behavior


const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});


// event bubbling
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling

