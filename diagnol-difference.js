// Diagnol difference
function diagonalDifference(arr) {
    let g=0
    let f=0
  for (let i = 0; i < arr.length; i++) {
      g += arr[i][i]
  }
  arr.reverse()
  for (let i = arr.length -1; i >= 0; i--) {
    f += arr[i][i]
    //console.log(arr[i][i]);
}
return Math.abs(g-f)
}

console.log(diagonalDifference([
    [1,2,3],
    [4,5,6],
    [9,8,9]
]));
console.log(diagonalDifference([
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]));
