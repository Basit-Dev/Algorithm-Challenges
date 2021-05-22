

const arr = [
  [1, 1],
  [2, 1],
  [3, 3],
  [3, 4],
  [4, 5],
];
function getCount(param) {
  let result = 0;
  param.map((element) => {
    if (element.x === element.y) {
      result += 1;
    }
  });
  return result;
}
console.log(getCount(obj));
