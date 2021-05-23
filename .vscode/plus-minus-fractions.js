/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
There are 3 positive numbers, 2 negative numbers, and 1 zero in the array, this is the divided by the arr length.*/

function plusMinus(arr) {
  // Get how many positive nunbers
  let positiveNum = 0;
  // Get how many negative numbers
  let negativeNum = 0;
  // Get  how manyzero
  let zeroNum = 0;
  // Loop through and filter
  arr.filter((el) => {
    if (el > 0) {
      positiveNum += 1 /arr.length;
    } else if (el < 0) {
      negativeNum += 1 /arr.length;
    } else {
      zeroNum += 1 /arr.length;
    }
  });
  return positiveNum.toFixed(6) + " " + negativeNum.toFixed(6)+ " " + zeroNum.toFixed(6);
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
