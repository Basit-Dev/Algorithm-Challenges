/*Find the sum of the digits of all the numbers from 1 to N (both ends included).*/

function twistedSum(n) {
  let numToString = [];
  let stringResult = 0;
  let number = 0;
  for (let i = 1; i <= n; i++) {
    if (i <= 9) {
      console.log(i);
      number += i;
    } else if (i >= 9) {
      numToString = i.toString().split("");
      for (let i = 0; i < numToString.length; i++) {
        stringResult += parseInt(numToString[i]);
      }
    }
  }
  console.log(stringResult);
  return number + stringResult;
}

console.log(twistedSum(12));

// With reduce function

function twistedSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b), 0);
      console.log(i, sum);
  }

  return sum;
}
