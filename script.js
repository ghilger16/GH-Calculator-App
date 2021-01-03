"use strict";

let calculator = document.querySelector(".calculator");
let calculatorDisplay = document.getElementById("display");
let previousKey = "";
// document
//   .getElementById("zero")
//   .addEventListener("click", () => displayNumber(0));

// document
//   .getElementById("one")
//   .addEventListener("click", () => displayNumber(1));

// document
//   .getElementById("two")
//   .addEventListener("click", () => displayNumber(2));

// document
//   .getElementById("three")
//   .addEventListener("click", () => displayNumber(3));

// document
//   .getElementById("four")
//   .addEventListener("click", () => displayNumber(4));

// document
//   .getElementById("five")
//   .addEventListener("click", () => displayNumber(5));

// document
//   .getElementById("six")
//   .addEventListener("click", () => displayNumber(6));

// document
//   .getElementById("seven")
//   .addEventListener("click", () => displayNumber(7));

// document
//   .getElementById("eight")
//   .addEventListener("click", () => displayNumber(8));

// document
//   .getElementById("nine")
//   .addEventListener("click", () => displayNumber(9));
document.querySelectorAll(".calculator").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.className === "operator") {
      previousKey = "operator";
    } else {
      previousKey = "digit";
    }
  });
});

document.querySelectorAll(".digits").forEach((item) => {
  item.addEventListener("click", (e) => {
    const key = e.target;
    const keyContent = key.textContent;
    if (calculatorDisplay.innerText === "0" || previousKey === "operator") {
      calculatorDisplay.innerText = keyContent;
    } else {
      if (calculatorDisplay.textContent.length < 10) {
        calculatorDisplay.innerText = calculatorDisplay.innerText + keyContent;
      }
    }
  });
});

document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", (e) => {});
});
