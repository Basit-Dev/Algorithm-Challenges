// Needs to be a global variable otherwise it would not update inside the function due to the function being recursive
let count = 0
function persistence(num) {
  // Convert number to string then remove leading zeros and split into array
  let array = num.toString().replace(/^0+/g, "").split("");
  let result = 1;
  // Base case
  if (num < 10) {
    // Zero the count variable otherwise it will kepp adding from where it left off
    let reset = count;
    count = 0;
    return reset;
  } else {
    // Iterate thorugh array and multiply by the next index element value 3*9=27 2*7=14 1*4=4 then exit from loop and add 1 to count variable
    for (let i = 0; i < array.length; i++) {
      result *= array[i];
    }
    count += 1;
    // call function again until num is less than 10
    return persistence(result)
  }
}
console.log(persistence(39))