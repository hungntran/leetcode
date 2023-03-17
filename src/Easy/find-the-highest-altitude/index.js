/**
 * @param {number[]} gain
 * @return {number}
 */
export const largestAltitude = function (gain) {
  let result = 0;
  let altitude = 0;

  for (const num of gain) {
    altitude += num;

    if (altitude > result) {
      result = altitude;
    }
  }

  return result;
};
