/*Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:
If the element is even, multiply the element by .
If the element is odd, multiply the element by .
The function must then return the modified array.*/

function modifyArray(nums) {
  const result = nums.map((el) => {
    if (el % 2 == 0) {
      el = el * 2;
    } else if (el % 2 == 1) {
      el = el * 3;
    }
    return el;
  });
  return result;
}

console.log(modifyArray([1, 2, 3, 4, 5]));
