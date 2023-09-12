/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  const map = Array(26);

  for (const c of s) {
    const index = c.charCodeAt(0) - 97;

    if (map[index] == null) {
      map[index] = 0;
    }

    map[index] += 1;
  }

  map.sort((a, b) => b - a);
  let deleteCount = 0;

  map.filter(Boolean).forEach((item, index, array) => {
    if (item >= array[index - 1]) {
      const ext = Math.min(item, item - array[index - 1] + 1);
      deleteCount += ext;
      array[index] = Math.min(item, item - ext);
    }
  });

  return deleteCount;
};

minDeletions('ceabaacb');
