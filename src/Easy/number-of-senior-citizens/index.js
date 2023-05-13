/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  const ages = details.map((s) => +s.slice(11, 13));
  return ages.filter((age) => age > 60).length;
};
