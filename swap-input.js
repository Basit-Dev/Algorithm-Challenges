// Swap a given input for example 12 become 21

function swapInput(input) {
    const array = input.toString().split("");
    const reverse = array.slice().reverse();
    return console.log(reverse.join(""));
  }
  swapInput(32);