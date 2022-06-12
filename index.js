/*
 * number
 * string
 * null
 * undefined
 * boolean
 * object
 * symbol
 * bigint
 *
 *
 * DOM - document object model
 * ES6
 *
 * variables
 *
 * var
 *
 * let, const
 */

let first = document.getElementById("first");
let second = document.getElementById("second");

let plus = document.getElementById("plus");

let res = document.getElementById("results");

plus.onclick = function () {
  let firstNum = parseInt(first.value);
  let secondNum = parseInt(second.value);
  if (firstNum && secondNum) {
    res.innerHTML = firstNum + secondNum;
  } else {
    res.innerHTML = "Пишите цыфры";
  }
};

minus.onclick = function () {
  let firstNum = parseInt(first.value);
  let secondNum = parseInt(second.value);
  if (firstNum && secondNum) {
    res.innerHTML = firstNum - secondNum;
  } else {
    res.innerHTML = "Пишите цыфры";
  }
};
