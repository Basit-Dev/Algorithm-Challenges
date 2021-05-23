/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.*/

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
      positiveNum += 1;
    } else if (el < 0) {
      negativeNum += 1;
    } else {
      zeroNum += 1;
    }
  });
  positiveNum /= arr.length;
  negativeNum /= arr.length;
  zeroNum /= arr.length;

  return positiveNum.toFixed(6) + " " + negativeNum.toFixed(6)+ " " + zeroNum.toFixed(6);
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
