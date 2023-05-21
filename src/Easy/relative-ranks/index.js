/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sorted = [...score].sort((a, b) => b - a);

  sorted.forEach((item, index) => {
    const i = score.indexOf(item);
    score[i] = helper(index);
  });

  return score;
};

const helper = (indx) => {
  switch (indx) {
    case 0:
      return 'Gold Medal';
    case 1:
      return 'Silver Medal';
    case 2:
      return 'Bronze Medal';
    default:
      return String(indx + 1);
  }
};
