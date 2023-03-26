/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function (s) {
  const stack = [];
  for (const c of s) {
    if (['(', '[', '{'].includes(c)) {
      stack.push(c);
    } else {
      const pop = stack.pop();
      if (c !== MAP[pop]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const MAP = {
  '(': ')',
  '[': ']',
  '{': '}',
};
