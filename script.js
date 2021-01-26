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
        calculatorDisplay.textContent += userSelection;
      }
    }
    clearButton.textContent = "CE";
    previousKey = "digit";
  });
});

document.querySelector(".decimal").addEventListener("click", () => {
  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent += ".";
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
        firstValue = `${returnValue}`;
      }
    }
    previousKey = "operator";
  });
});

document.querySelector(".calculate").addEventListener("click", () => {
  if (previousKey === "operator" || !firstValue) return;

  secondValue = calculatorDisplay.textContent;

  calculatorDisplay.textContent = calculate(firstValue, operator, secondValue);
  firstValue = "";
  previousKey = "calculate";
});

document.querySelector(".clear").addEventListener("click", () => {
  if (clearButton.textContent === "CE") {
    calculatorDisplay.textContent = "0";
    clearButton.textContent = "AC";
    firstValue = "";
    operator = "";
    secondValue = "";
  }
});

const plus = (num1, num2) => {
  return parseFloat(num1) + parseFloat(num2);
};
const minus = (num1, num2) => {
  return parseFloat(num1) - parseFloat(num2);
};
const multiply = (num1, num2) => {
  return parseFloat(num1) * parseFloat(num2);
};
const divide = (num1, num2) => {
  return parseFloat(num1) / parseFloat(num2);
};

let calculate = function (firstValue, operator, secondValue) {
  const operations = {
    plus,
    minus,
    multiply,
    divide,
  };

  const operation = operations[operator];

  const result = operation(firstValue, secondValue);

  if (Number.isInteger(result)) {
    return result;
  } else {
    return result.toFixed(3);
  }
};
