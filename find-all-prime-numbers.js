//  Find all prime numbers upto 50

function findAllPrimeNumbers(num) {
  let array = [],
    missing = [2];
  for (let i = 3; i < num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        array.push(i);
        break;
      }
    }
    if (array.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  return console.log(missing.join(" "));
}
findAllPrimeNumbers(50);
