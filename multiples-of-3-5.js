// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


// function pow(x, n) {
//     let result = 1;
  
//     // multiply result by x n times in the loop
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   console.log( pow(2, 2) ); // 4
//   console.log( pow(2, 3) ); // 8
//   console.log( pow(2, 4) ); // 16

  function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 2) ); // 4
  console.log( pow(2, 3) ); // 8
  console.log( pow(2, 4) ); // 16