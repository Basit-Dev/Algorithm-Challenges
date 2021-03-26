// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function getLargestPrimeFactor(n) {
  var result = 0;
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      n = n / i;
      result = i;
      // console.log(result + " " + n + " " + i);
    }
  }
  return result;
}

const get = getLargestPrimeFactor(600851475143);
console.log("Result = " + get);
