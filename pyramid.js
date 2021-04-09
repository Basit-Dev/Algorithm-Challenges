// Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

function pyramid(balls) {
  let count = 0;
  let i = 0;
  do {
    if (i + count >= balls) {
      return count;
    }
    count++;
    // 1
    // 2
    // 3
    // 4
    console.log(count);
    i = i + count;
    // 0 + 1 =1
    // 1 + 2 =3
    // 3 + 3 =6
    // 6 + 4 =10
    console.log("i " + i);
    //result = result +1
  } while (i <= balls);
  // 1
}
console.log(pyramid(10));
//pyramid(1)
