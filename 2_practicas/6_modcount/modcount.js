import { initCounter, incrementCounter, getCounter } from "./libcount.js";

// variables

const counterSpn = document.querySelector('#counter');
const clickmeBtn = document.querySelector('#clickme');

// functions

// listeners & inits

clickmeBtn.addEventListener('click', () => {
    console.log('clicked!');
    incrementCounter();
    const counter = getCounter();
    console.log(`new counter is ${counter}`);
    counterSpn.textContent = String(counter);
});

initCounter();
