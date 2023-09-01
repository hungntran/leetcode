/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (OPERATORS.includes(token)) {
      const a = stack.pop();
      const b = stack.pop();

      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(b - a);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(parseInt(b / a));
          break;
      }
    } else {
      stack.push(+token);
    }
  }

  return stack[0];
};

const OPERATORS = ['+', '-', '*', '/'];
