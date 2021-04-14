
function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  } else {
    let result = array.reduce(function (accum, current) {
      return accum + current;
    });
    return result % 2 === 0 ? "even" : "odd";
  }
}
console.log(oddOrEven([1, 3,4]));

// using the above in one line
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}