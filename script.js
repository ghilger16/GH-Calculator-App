"use strict";

let calculator = document.querySelector(".calculator");
let calculatorDisplay = document.getElementById("display");
let clearButton = document.getElementById("clear");
let previousKey = "";
let firstValue = "";
let operator = "";
let secondValue = "";

document.querySelectorAll(".digits").forEach((item) => {
  item.addEventListener("click", (e) => {
    const userSelection = e.target.textContent;
    if (calculatorDisplay.textContent === "0" || previousKey === "operator") {
      calculatorDisplay.textContent = userSelection;
    } else {
      if (calculatorDisplay.textContent.length < 10) {
        calculatorDisplay.textContent =
          calculatorDisplay.textContent + userSelection;
      }
    }
    clearButton.textContent = "CE";
    previousKey = "digit";
  });
});

document.querySelector(".decimal").addEventListener("click", () => {
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent = calculatorDisplay.textContent + ".";
  } else if (previousKey === "operator" || previousKey === "calculate") {
    calculatorDisplay.textContent = "0.";
  }
  clearButton.textContent = "CE";
  previousKey = "decimal";
});

document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", (e) => {
    operator = e.target.id;
    if (!firstValue) {
      firstValue = calculatorDisplay.textContent;
    } else {
      if (previousKey === "digit") {
        secondValue = calculatorDisplay.textContent;
        const returnValue = calculate(firstValue, operator, secondValue);
        calculatorDisplay.textContent = returnValue;
        firstValue = returnValue;
      }
    }
    previousKey = "operator";
  });
});

document.querySelector(".calculate").addEventListener("click", () => {
  if (firstValue) {
    secondValue = calculatorDisplay.textContent;
  } else {
    firstValue = calculatorDisplay.textContent;
  }
  if (previousKey === "calculate") {
    calculatorDisplay.textContent = calculate(
      secondValue,
      operator,
      firstValue
    );
  }
  calculatorDisplay.textContent = calculate(firstValue, operator, secondValue);
  firstValue = "";
  previousKey = "calculate";
});

document.querySelector(".clear").addEventListener("click", () => {
  if ((clearButton.textContent = "CE")) {
    calculatorDisplay.textContent = "0";
    clearButton.textContent = "AC";
    firstValue = "";
    operator = "";
    secondValue = "";
  }
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
  if (Number.isInteger(result)) {
    return result;
  } else {
    return result.toFixed(3);
  }
};
