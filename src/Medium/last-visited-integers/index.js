/**
 * @param {string[]} words
 * @return {number[]}
 */
var lastVisitedIntegers = function (words) {
  let stack = [];
  let queue = [];
  const res = [];

  words.forEach((word, index) => {
    if (word === 'prev') {
      const prev = stack.pop() || -1;
      queue.unshift(prev);
      res.push(+prev);
      return;
    }

    stack = stack.concat(queue);
    stack.push(word);
    queue = [];
  });

  return res;
};
