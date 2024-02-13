/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (word.split('').reverse().join('') === word) {
      return word
    }
  }

  return ''
}
