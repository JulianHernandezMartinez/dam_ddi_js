'use strict';

let counter = 0;

const counterSpn = document.querySelector('#counter');
const clickmeBtn = document.querySelector('#clickme');

clickmeBtn.addEventListener('click', () => {
  console.log('clicked!');
  counter ++;
  console.log(`new counter is ${counter}`);
  counterSpn.textContent = String(counter);
});
