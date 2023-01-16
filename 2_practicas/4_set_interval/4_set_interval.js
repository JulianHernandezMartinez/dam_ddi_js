// variable to store our intervalID
let nIntervId;

// by default is set to false
// we could also set nIntervId to true ** let nIntervId=true; ** and ...
// remove negation ! within changeColor ** if (nIntervId) ** and ...
// restore to true within stopTextColor ** nIntervId = true; **

function flashText() {
    const oElem = document.getElementById("my_box");
    oElem.className = oElem.className === "go" ? "stop" : "go";
  }

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable allowing re-Start button
  nIntervId = null; 
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);

//