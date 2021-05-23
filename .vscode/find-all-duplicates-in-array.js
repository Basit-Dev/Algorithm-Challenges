const array = [4, 3, 6, 3, 4, 3];

function count_duplicate(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  }
  for (let prop in counts) {
    if (counts[prop] >= 2) {
      console.log(prop + " counted: " + counts[prop] + " times.");
    }
  }
  return counts;
}

console.log(count_duplicate(array));
