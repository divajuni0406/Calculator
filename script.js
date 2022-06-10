let prevNumber = "";
let calculationOperator = "";
let currentNumber = 0;

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

let calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentNumber === 0) return (currentNumber = number);
  if (currentNumber !== 0) return (currentNumber += number);
};

const operator = document.querySelectorAll(".operator");
operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = 0;
};

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  if (calculationOperator === "+") {
    currentNumber = parseFloat(prevNumber) + parseFloat(currentNumber);
  } else if (calculationOperator === "-") {
    currentNumber = parseFloat(prevNumber) - parseFloat(currentNumber);
  } else if (calculationOperator === "/") {
    currentNumber = parseFloat(prevNumber) / parseFloat(currentNumber);
  } else if (calculationOperator === "*") {
    currentNumber = parseFloat(prevNumber) * parseFloat(currentNumber);
  } else currentNumber = 0;
  updateScreen(currentNumber);
});

const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = 0;
};

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
  calculatorScreen.value = calculatorScreen.value.slice(0, -1);
  currentNumber = currentNumber.slice(0, -1);
});

const percentageNumber = document.querySelector(".percentage");
percentageNumber.addEventListener("click", () => {
  currentNumber = currentNumber / 100;
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

// const calculate = () => {
//   let result = "";
//   switch (calculationOperator) {
//     case "+":
//       result = parseFloat(prevNumber) + parseFloat(currentNumber);
//       break;
//     case "-":
//       result = parseFloat(prevNumber) - parseFloat(currentNumber);
//       break;
//     case "/":
//       result = parseFloat(prevNumber) / parseFloat(currentNumber);
//       break;
//     case "*":
//       result = parseFloat(prevNumber) * parseFloat(currentNumber);
//       break;
//   }
//   currentNumber = result;
//   calculationOperator = "";
// };
