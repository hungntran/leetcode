/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  const conditions = [false, false, false];

  for (let i = 0; i < triplets.length; i++) {
    if (conditions.every(Boolean)) {
      return true;
    }

    const item = triplets[i];
    const matched = checkWithTarget(item, target);

    conditions[0] = conditions[0] || matched[0];
    conditions[1] = conditions[1] || matched[1];
    conditions[2] = conditions[2] || matched[2];
  }

  return conditions.every(Boolean);
};

function checkWithTarget(triplet, target) {
  const store = [false, false, false];

  for (let i = 0; i < 3; i++) {
    if (target[i] < triplet[i]) {
      return [false, false, false];
    }

    if (target[i] === triplet[i]) {
      store[i] = true;
    }
  }

  return store;
}
