/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const hash = {};

  list2.forEach((word, index) => (hash[word] = index));

  let min = Infinity;

  return list1.reduce((res, word, index) => {
    if (hash[word] === undefined) {
      return res;
    }

    const indexSum = hash[word] + index;
    if (indexSum < min) {
      min = indexSum;
      return [word];
    }

    if (indexSum === min) {
      res.push(word);
    }

    return res;
  }, []);
};
