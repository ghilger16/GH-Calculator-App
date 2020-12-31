"use strict";

let calcDisplay = document.getElementById("display");
let userInput = [];

document.getElementById("one").addEventListener("click", function () {
  if (calcDisplay.innerText) {
    calcDisplay.innerText = calcDisplay.innerText + "1";
  } else {
    calcDisplay.innerText = "1";
  }
});

document.getElementById("two").addEventListener("click", function () {
  if (calcDisplay.value === 0) {
    calcDisplay.appendChild((innerText = "2"));
  } else {
    calcDisplay.innerText = calcDisplay.innerText + "2";
  }
});
document.getElementById("three").addEventListener("click", function () {
  if (calcDisplay.innerText === 0) {
    calcDisplay.innerText = "3";
  } else {
    calcDisplay.innerText = calcDisplay.innerText + "3";
  }
});
document.getElementById("four").addEventListener("click", function () {
  if (calcDisplay.innerText === 0) {
    calcDisplay.innerText = "4";
  } else {
    calcDisplay.innerText = calcDisplay.innerText + "4";
  }
});
document.getElementById("five").addEventListener("click", function () {
  if (calcDisplay.innerText === 0) {
    calcDisplay.innerText = "5";
  } else {
    calcDisplay.innerText = calcDisplay.innerText + "5";
  }
});
document.getElementById("six").addEventListener("click", function () {
  if (calcDisplay.innerText === 0) {
    calcDisplay.innerText = "6";
  } else {
    calcDisplay.innerText = calcDisplay.innerText + "6";
  }
});
document.getElementById("seven").addEventListener("click", function () {
  if (calcDisplay.innerText === 0) {
    calcDisplay.innerText = "7";
  } else {
    calcDisplay.innerText = calcDisplay.innerText + "7";
  }
});
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
