"use strict";

let calcDisplay = document.getElementById("display");
let userInput = [];

document.getElementById("eight").addEventListener("click", function () {
  if (calcDisplay.innerText === 0) {
    calcDisplay.innerText = "8";
  } else {
    calcDisplay.innerText = calcDisplay.innerText + "8";
  }
});
document.getElementById("nine").addEventListener("click", function () {
  if (!calcDisplay.innerText) {
    calcDisplay.innerText = "9";
  } else {
    calcDisplay.innerText = calcDisplay.innerText + "9";
  }
});
