'use strict';

let countdown;

// controls

// associate numberInp to <input> with id "number" within the <form>
// associate countSpn to <span> element with id "countdown"
// associate clickmeBtn to <button> with id "clickme"
// associate form to the form within div "one"

const numberInp = document.querySelector('#number');
const countSpn = document.querySelector('#countdown');
const clickmeBtn = document.querySelector('#clickme');
const form = document.querySelector('#one form');

// on/off 

// to disable/enable display for divs (disable "one" and enable "two")
// to enable/disable one or another paragraphs within div "two", "inprogress" 
// paragraph or "zeroreached" paragraph, when zeroreached is set, the "clickme" 
// button style will also change to disabled = true

const div1 = document.querySelector('#one');
const div2 = document.querySelector('#two');
const inprogress = document.querySelector('#inprogress');
const zeroreached = document.querySelector('#zeroreached');
const badamount = document.querySelector('#badamount');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = Number(numberInp.value);
  const invalidAmount = isNaN(amount) || amount <= 0;
  if (invalidAmount) {
    badamount.style.display = 'block';
    return;
  }

  countdown = amount;
  console.log(`countdown is ${countdown}`);  
  countSpn.textContent = String(countdown);
  // when a valid countdown amount is colllected, div1 will be set to display = 'none'
  // and div2 will be set to display = 'block' to 
  // the only displayed part is div2, so there are no risk to reset the initial value for counter
  div1.style.display = 'none';
  div2.style.display = 'block';
});

clickmeBtn.addEventListener('click', () => {
  console.log('clicked!');
  countdown --;
  console.log(`new counter is ${countdown}`);
  countSpn.textContent = String(countdown);

  if (countdown === 0) {
    // when a valid countdown reach zeo, inprogess paragraphs will be 
    // set to display = 'none' and zeroreached paragraphs will be displayed.
    // the clickme button will also be disabled
    inprogress.style.display = 'none';
    zeroreached.style.display = 'block';
    clickmeBtn.disabled = true;
  }
});