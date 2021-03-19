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
// getFib(10);

// Recursive function
  function fibRecursion(num) {
    if (num <= 1) return 1;
    return fibRecursion(num -1) + fibRecursion(num -2);
  }
console.log(fibRecursion(5)) 