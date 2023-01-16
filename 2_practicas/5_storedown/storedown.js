
'use strict';

let countdown;

const numberInp = document.querySelector('#number');
const countSpn = document.querySelector('#countdown');
const clickmeBtn = document.querySelector('#clickme');
const form = document.querySelector('#one form');

const div1 = document.querySelector('#one');
const div2 = document.querySelector('#two');
const inprogressP = document.querySelector('#inprogress');
const zeroreachedP = document.querySelector('#zeroreached');
const badamountP = document.querySelector('#badamount');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const amount = Number(numberInp.value);
    const invalidAmount = isNaN(amount) || amount <= 0;
    if (invalidAmount) {
      badamountP.style.display = 'block';
      return;
    }

    countdown = amount;
    localStorage.setItem('countdown', String(countdown));

    countSpn.textContent = String(countdown);
    div1.style.display = 'none';
    div2.style.display = 'block';
});

clickmeBtn.addEventListener('click', () => {
    countdown --;
    localStorage.setItem('countdown', String(countdown));
    countSpn.textContent = String(countdown);

    if (countdown === 0) {
        inprogressP.style.display = 'none';
        zeroreachedP.style.display = 'block';
        clickmeBtn.disabled = true;   
        localStorage.removeItem('countdown');
    }
});

const storecount = localStorage.getItem('countdown');
if (storecount) {
    // obtener el valor y  mostrarlo
    countdown = Number(storecount);
    countSpn.textContent = String(countdown);
    div1.style.display = 'none';
    div2.style.display = 'block';
}
else {
    // mostrar el formulario
    div1.style.display = 'block';
    div2.style.display = 'none';  
}