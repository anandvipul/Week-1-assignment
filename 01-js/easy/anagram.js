/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let alphaDict = {};
  for (let alpha of str1) {
    alphaDict[alpha] = alphaDict[alpha] + 1 || 1;
  }
  for (let alpha of str2) {
    if (alphaDict[alpha] > 0) {
      alphaDict[alpha] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
