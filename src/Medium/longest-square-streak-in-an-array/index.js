/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    const set = new Set(nums)

    let res = 0

    for (const num of nums) {
        let streak = 0
        let current = num

        while (set.has(current)) {
            streak += 1

            if (current * current > 10**5) {
                break
            }

            current *= current
        }

        res = Math.max(res, streak)
    }

    return res < 2 ? -1 : res
};
