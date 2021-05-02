/*If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.*/

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  let arr = [];
  if (a[0] > b[0]) {
    alice += 1;
  } else if (a[0] < b[0]) {
    bob += 1;
  }
  if (a[1] > b[1]) {
    alice += 1;
  } else if (a[1] < b[1]) {
    bob += 1;
  }
  if (a[2] > b[2]) {
    alice += 1;
  } else if (a[2] < b[2]) {
    bob += 1;
  }
  arr.push(alice, bob);
  return arr;
}

//console.log(compareTriplets([17,28,30], [99,16,8]));
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));


