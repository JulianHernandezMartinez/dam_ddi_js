'use strict';

let countdown;
let interval;

// controls
const numberInp = document.querySelector('#number');
const countSpn = document.querySelector('#countdown');
const form = document.querySelector('#one form');

// on/off
const div1 = document.querySelector('#one');
const div2 = document.querySelector('#two');
const inprogress = document.querySelector('#inprogress');
const zeroreached = document.querySelector('#zeroreached');
const badamount = document.querySelector('#badamount');

function countDown() {
    countdown --;
    countSpn.textContent = String(countdown);

    if (countdown === 0) {
        inprogress.style.display = 'none';
        zeroreached.style.display = 'block';
        clearInterval(interval);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("clicked!");
    const amount = Number(numberInp.value);
    const invalidAmount = isNaN(amount) || amount <= 0;
    if (invalidAmount) {
        badamount.style.display = 'block';
        return;
    }

    countdown = amount + 1;
    countDown();

    div1.style.display = 'none';
    div2.style.display = 'block';
    interval = setInterval(countDown, 1000);
});