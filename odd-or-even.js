
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
