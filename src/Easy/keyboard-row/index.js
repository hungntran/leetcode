/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  return words.filter((word) => {
    const letters = word.toLowerCase().split('');
    return (
      letters.every((letter) => ROWS[0].includes(letter)) ||
      letters.every((letter) => ROWS[1].includes(letter)) ||
      letters.every((letter) => ROWS[2].includes(letter))
    );
  });
};

const ROWS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
