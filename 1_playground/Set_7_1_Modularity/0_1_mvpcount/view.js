
const counterSpn = document.querySelector('#counter');
const clickmeBtn = document.querySelector('#clickme');

function setCounter(value) {
    counterSpn.textContent = String(value);
}

function register(callback) {
    clickmeBtn.addEventListener('click', (e) => {
        console.log('botón clicado!');
        callback();
    });
}

export { setCounter, register };

