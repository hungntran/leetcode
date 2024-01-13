/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  if (s === t) return 0;

  const mt = createMap(t);
  let output = 0;

  for (const c of s) {
    if (mt[c]) {
      mt[c]--;
      continue;
    }

    output++;
  }

  return output;
};

function createMap(s) {
  const map = {};

  for (const c of s) {
    map[c] = map[c] ? map[c] + 1 : 1;
  }

  return map;
}
