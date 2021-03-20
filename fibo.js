// 0+1=1
// 1+2=3
// 3+2=5
// 5+3=8

function getFib(num) {
  let a = 0;
  let b = 1;
  let c = a + b;

  for (let i = num; c < num; i++) {
    b = a;
    a = c;
    c = a + b;
    console.log(c);
  }
}
getFib(20)


// Recursive function to get the fifth fib position
  function fibRecursion(num) {
    if (num <= 1) return 1;
    return fibRecursion(num -1) + fibRecursion(num -2);
  }
console.log(fibRecursion(5)) 

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function getFibEvenNumbers(num) {
  let a = 0;
  let b = 1;
  let c = a + b;
  let getEven = 0;

  for (let i = num; c < num; i++) {
    b = a;
    a = c;
    c = a + b;
    //console.log(c);
    if (c % 2 == 0 ) getEven += c;
  
  }
  return getEven;
}
console.log(getFibEvenNumbers(4000000))

