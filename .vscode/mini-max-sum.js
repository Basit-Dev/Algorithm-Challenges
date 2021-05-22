/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/

// With forEach
function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  const sortedArr = arr.sort((a, b) => a - b);
  sortedArr.slice(1, sortedArr.length).forEach((element, index, array) => {
    max += element;
  });
  sortedArr.slice(0, sortedArr.length - 1).forEach((element) => {
    min += element;
  });
  console.log(min, max);
}
// With reduce

function miniMaxSum(arr) {
  //const result
  const sortedArr = arr.sort((a, b) => a - b);
  const min = sortedArr.slice(0, sortedArr.length - 1).reduce((acc, val) => {
    return acc + val;
  }, 0);
  const max = sortedArr.slice(1, sortedArr.length).reduce((acc, val) => {
    return acc + val;
  }, 0);
  return min + " " + max;
}
console.log(miniMaxSum([7, 69, 2, 221, 8974]));
console.log(miniMaxSum([1, 2, 3, 4, 5]));
