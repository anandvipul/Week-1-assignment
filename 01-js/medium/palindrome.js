/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str1) {
  let str = str1
    .toLowerCase()
    .replaceAll(/\s/g, '')
    .replaceAll(/[^\w\s]/g, '');
  if (str.length === 1) {
    return true;
  }
  if (str.length === 2) {
    return str[0] === str[1];
  }
  if (str.length > 2) {
    if (str[str.length - 1] === str[0]) {
      return isPalindrome(str.slice(1, -1));
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
