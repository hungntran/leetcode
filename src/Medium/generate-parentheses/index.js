/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const stack = [];

  const helper = (openCount, closeCount) => {
    if (closeCount < openCount) {
      return;
    }

    if (closeCount === 0 && openCount === 0) {
      return res.push(stack.join(''));
    }

    if (openCount > 0) {
      stack.push('(');
      helper(openCount - 1, closeCount);
      stack.pop();
    }

    if (closeCount > 0) {
      stack.push(')');
      helper(openCount, closeCount - 1);
      stack.pop();
    }
  };

  helper(n, n);
  return res;
};
