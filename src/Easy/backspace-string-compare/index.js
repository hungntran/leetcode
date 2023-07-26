/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return resolve(s) === resolve(t);
};

const resolve = (s) => {
  let res = [];

  for (const c of s) {
    if (c === '#') {
      res.pop();
    } else {
      res.push(c);
    }
  }

  return res.join('');
};
