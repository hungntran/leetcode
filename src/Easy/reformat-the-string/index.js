/**
 * @param {string} s
 * @return {string}
 */
export const reformat = function (s) {
  const letters = [];
  const digits = [];

  for (const c of s) {
    if (isNaN(c)) {
      letters.push(c);
    } else {
      digits.push(c);
    }
  }

  if (Math.abs(letters.length - digits.length) > 1) {
    return '';
  }

  const result = [];
  while (1) {
    if (digits.length === 0 || letters.length === 0) {
      break;
    }

    result.push(letters.pop());
    result.push(digits.pop());
  }

  if (letters.length !== 0) {
    result.push(letters.pop());
  } else if (digits.length !== 0) {
    result.unshift(digits.pop());
  }

  return result.join('');
};
