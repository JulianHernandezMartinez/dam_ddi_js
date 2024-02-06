import { initCounter, incrementCounter, getCounter } from "./model.js";
import { register, setCounter } from "./view.js";


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export


register(() => {
    incrementCounter();
    const counter = getCounter();
    setCounter(counter);
});

initCounter();


