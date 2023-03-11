/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
export const hardestWorker = function (n, logs) {
  let longestTime = 0;
  let checkpoint = 0;
  let result = -1;

  for (let i = 0; i < logs.length; i++) {
    const [id, time] = logs[i];
    const workTime = time - checkpoint;
    checkpoint = time;

    if (workTime === longestTime) {
      result = Math.min(result, id);
    } else if (workTime > longestTime) {
      longestTime = workTime;
      result = id;
    }
  }

  return result;
};
