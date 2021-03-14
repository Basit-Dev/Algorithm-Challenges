// Is word or number a palindrome

function isPalindrome(input) {
    const modifyInput = input.toString().split("");
    const reverseInput = modifyInput.slice().reverse();
    let isPalindrome = true;
    for (let i = 0; i < modifyInput.length; i++) {
      if (modifyInput[i] === reverseInput[i]) {
        isPalindrome = true;
      } else {
        isPalindrome = false;
        break;
      }
    }
    return isPalindrome
      ? console.log(`${input} is a palindrome`)
      : console.log(`${input} is not a palindrome`);
  }
  
  isPalindrome("abba");
  isPalindrome(1221);