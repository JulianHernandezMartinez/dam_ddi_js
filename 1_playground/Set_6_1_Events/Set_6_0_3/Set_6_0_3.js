'use strict'

// event bubbling / capture inner NOT First
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_capture

const output4 = document.querySelector('#output4');

// currentTarget PROPERTY
function handleClick(e) {
  output4.textContent +=`you clicked on a ${e.currentTarget.tagName} element \n`; 
}

const container4 = document.querySelector('#container4');
container4.addEventListener('click',handleClick,{capture:true});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click',handleClick); // trigger parent and button due to capture 


// event bubbling matters and are not anoying

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
