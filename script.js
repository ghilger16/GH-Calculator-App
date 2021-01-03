"use strict";

let calculator = document.querySelector(".calculator");
let calculatorDisplay = document.getElementById("display");
let previousKey = "";
let firstValue = "";
let operator = "";
let secondValue = "";

document.querySelectorAll(".calculator").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.className === "operator") {
      previousKey = "operator";
    } else if (e.target.className === "decimal") {
      previousKey = "decimal";
    } else if (e.target.className === "calculate") {
      previousKey = "calculate";
    } else {
      previousKey = "digit";
    }
    console.log(previousKey);
  });
});

document.querySelectorAll(".digits").forEach((item) => {
  item.addEventListener("click", (e) => {
    const keyContent = e.target.textContent;
    if (calculatorDisplay.innerText === "0" || previousKey === "operator") {
      calculatorDisplay.innerText = keyContent;
    } else {
      if (calculatorDisplay.textContent.length < 10) {
        calculatorDisplay.innerText = calculatorDisplay.innerText + keyContent;
      }
    }
  });
});

document.querySelector(".decimal").addEventListener("click", () => {
  if (!calculatorDisplay.innerText.includes(".")) {
    calculatorDisplay.innerText = calculatorDisplay.innerText + ".";
  } else if (previousKey === "operator" || previousKey === "calculate") {
    calculatorDisplay.innerText = "0";
  }
});

document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", (e) => {
    firstValue = calculatorDisplay.textContent;
    operator = e.target.id;
    console.log(firstValue);
    console.log(operator);
  });
});

document.querySelector(".calculate").addEventListener("click", () => {
  if (firstValue) {
    secondValue = calculatorDisplay.textContent;
  }
  calculatorDisplay.textContent = calculate(firstValue, operator, secondValue);
});

let calculate = function (firstValue, operator, secondValue) {
  let result = "";
  if (operator === "plus") {
    result = parseFloat(firstValue) + parseFloat(secondValue);
  } else if (operator === "minus") {
    result = parseFloat(firstValue) - parseFloat(secondValue);
  } else if (operator === "multiply") {
    result = parseFloat(firstValue) * parseFloat(secondValue);
  } else if (operator === "divide") {
    result = parseFloat(firstValue) / parseFloat(secondValue);
  }
  return result;
};
