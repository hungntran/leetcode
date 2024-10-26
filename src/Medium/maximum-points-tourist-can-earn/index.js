/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} stayScore
 * @param {number[][]} travelScore
 * @return {number}
 */
var maxScore = function (n, k, stayScore, travelScore) {
    // n cities
    // k days
    // stay -> add score[dayth][city]
    // move -> add travel[city][next_city]
    // find max score

    const dp = new Array(k).fill(0).map(_ => new Array(n))

    for (let d = 0; d < k; d++) {

        for (let city = 0; city < n; city++) {
            // stay
            dp[d][city] = (dp[d - 1]?.[city] || 0) + stayScore[d][city]

            for (let prevCity = 0; prevCity < n; prevCity++) {
                if (travelScore[prevCity][city] > 0) {
                    dp[d][city] = Math.max(dp[d][city], travelScore[prevCity][city] + (dp[d - 1]?.[prevCity] || 0))
                }
            }
        }
    }

    let max = 0

    for (let city = 0; city < n; city++) {
        max = Math.max(max, dp[k - 1][city])
    }

    return max
};
