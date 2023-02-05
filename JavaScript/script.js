'use strict';
//Variables
const btnEl = document.querySelectorAll('.btn');
const numb1El = document.querySelector('.num1');
const operationEl = document.querySelector('.operation');
const num2El = document.querySelector('.num2');
let flag = true;
let claculate = '';

let [number1, number2] = [0, 0];
let currentNumber = ' ';

//module to clear screen
function clearAll() {
  flag = true;
  [number1, number2] = [0, 0];
  currentNumber = ' ';
  print();
}

//functions to know which key was pressed
function inputNumber(number) {
  if (flag) {
    currentNumber = currentNumber + '' + number;
    numb1El.textContent = currentNumber;
    number1 = Number(currentNumber);
  } else {
    currentNumber = currentNumber + '' + number;
    num2El.textContent = currentNumber;
    number2 = Number(currentNumber);
  }
}

//function to print
function print() {
  number2 = 0;
  currentNumber = ' ';
  claculate = '';
  numb1El.textContent = number1;
  num2El.textContent = number2;
  operationEl.textContent = '';
}

//function to know the type of operation to perform
function inputOperation(ops) {
  claculate = ops;
  if (number1 === 0) {
    numb1El.textContent = number1;
    operationEl.textContent = ops;
    flag = false;
  } else {
    flag = false;
    currentNumber = '';
    operationEl.textContent = ops;
  }
}

//function to perform operation
function performOperation(ops) {
  switch (ops) {
    case '+':
      addition();
      break;
    case '-':
      subtraction();
      break;
    case '*':
    case 'x':
      multiplication();
      break;
    case '/':
      division();
      break;
  }
}
function addition() {
  number1 = number1 + number2;
}

function subtraction() {
  number1 = number1 - number2;
}

function multiplication() {
  number1 = number1 * number2;
}

function division() {
  number1 = number1 / number2;
}

//handling mouse clicks
for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener('click', (e) => {
    const number = e.target.textContent;
    const value = parseInt(number);
    if (!isNaN(value)) {
      inputNumber(value);
    } else {
      if (
        number === '/' ||
        number === 'x' ||
        number === '-' ||
        number === '+'
      ) {
        inputOperation(number);
      } else if (number === '=') {
        performOperation(claculate);
        print();
      } else if (number === 'AC') {
        clearAll();
      }
    }
  });
}

//handling keyboard press
document.addEventListener('keydown', (e) => {
  const number = e.key;
  const value = parseInt(number);

  if (!isNaN(value)) {
    inputNumber(value);
  } else {
    if (number === '/' || number === '*' || number === '-' || number === '+') {
      inputOperation(number);
    } else if (number === 'Enter') {
      performOperation(claculate);
      print();
    } else if (number === 'AC') {
      clearAll();
    }
  }
});
