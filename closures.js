// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step
// Closure is function returning a function
function countdown() {
    let countDown = 10;
    // You can name this function below
    return function() {
        return countDown -= 1;
    }
}
const countingDown = countdown();
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

function countDownTwo(a,b) {
    return function decrease() {
        return a *= b;
    }
}
const countingDownTwo = countDownTwo(20, 5);
console.log(countingDownTwo());
console.log(countingDownTwo());
console.log(countingDownTwo());


function getName(fName) {
  return function (lName) {
    return fName + " " + lName;
  };
}
const fullName = getName("John");
console.log(fullName("Grimes"));

function getFruit(fruitName) {
  return function () {
    return console.log(fruitName);
  };
}
const f1 = getFruit("Apple");
f1();
const f2 = getFruit("Pear");
f2();
