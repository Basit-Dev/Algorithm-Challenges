const obj = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
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

// for loop
function getCount(objects) {
    let count = 0;
    for (let index in objects) {
        if (objects[index].x == objects[index].y) {
            count++;
        }
    }
    return count;
}