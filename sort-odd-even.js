// Make even array input values in ascending order and odd values in descending order.

function oddEven(input) {
  const arrayEven = [];
  const arrayOdd = [];
  input.map(function (a) {
    if (a % 2 == 0) {
      arrayEven.push(a);
      arrayEven.sort(function (a, b) {
        return a - b;
      });
    } else  {
      arrayOdd.push(a);
      arrayOdd.sort(function (a, b) {
        return a - b;
      });
    }
  });
  return arrayEven.concat(arrayOdd.reverse());
  //return d
}

console.log(oddEven([16, 2, 11, 5, 13, 26, 7]));
