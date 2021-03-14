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

// Without arrays
function findAllPrimeNumbers(num) {
    let isNotPrime = false;
  for (let i = 2; i < num; i++) {
    for (let j = 2; j < i; j++) {
    // 1st condition
      if (i % j == 0 && i !== 2) {
        isNotPrime = true;
        break;
      }
    }
    // 2nd condition
    if (!isNotPrime) {
      console.log(i);
    }
    isNotPrime = false;
  }
}
findAllPrimeNumbers(50);
