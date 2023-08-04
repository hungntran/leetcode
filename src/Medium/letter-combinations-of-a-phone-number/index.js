/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length <= 1) {
    return LETTERS[digits[0]] || [];
  }

  const letters = Array.from(digits).map((value) => LETTERS[value]);
  const result = [];
  helper(letters, [], result);
  return result;
};

const helper = (list, accumulate = [], result = []) => {
  if (list.length === 0) {
    result.push(accumulate.join(''));
    return;
  }

  const letters = list[0];

  letters.forEach((letter) => {
    accumulate.push(letter);
    helper(list.slice(1), accumulate, result);
    accumulate.pop();
  });
};

const LETTERS = {
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};
