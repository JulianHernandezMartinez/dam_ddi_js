'use strict'

// https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

const btn1 = document.querySelector('#btn1');

function ramdon(number){
    return Math.floor(Math.random()*(number+1));
}

btn1.addEventListener('click',()=>{
    const rndColor = `rgb(${ramdon(255)},${ramdon(255)},${ramdon(255)})`;
    document.body.style.backgroundColor = rndColor;
});

const btn2 = document.querySelector('#btn2');
function changeBgColour(){
    const rndColor = `rgb(${ramdon(255)},${ramdon(255)},${ramdon(255)})`;
    document.body.style.backgroundColor = rndColor;
};

btn2.addEventListener(('dblclick'),changeBgColour);
btn1.addEventListener(('focus'),changeBgColour); // enter in focus
btn1.addEventListener(('blur'),changeBgColour);  // leaving focus

btn2.addEventListener(('mouseover'),changeBgColour); // mouse over the element
btn2.addEventListener(('mouseout'),changeBgColour); // mouse out of the element


// btn2.removeEventListener(('dblclick'),changeBgColour);

// on-something,e.g. onclick are event handler properties of some elements

const btn3 = document.querySelector('#btn3');
btn3.onclick = changeBgColour;

btn3.ondblclick = () =>{btn3.removeEventListener((click)), changeBgColour};

// the best choice looks like to set listeners on the elements 
// and also allow to remove the listener.

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click',changeBgColour);
btn4.addEventListener('dblclick',()=>{btn4.removeEventListener(('click'),changeBgColour)});

// a second action can the tied to the event on the same element

btn4.addEventListener('click',()=>{
    (btn4.textContent === 'changed')? btn4.textContent='CHANGED': btn4.textContent = 'changed';
}); // add a second listener for click with a new function
