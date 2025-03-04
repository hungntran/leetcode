/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    const arr = []
    let i = 0

    while (true) {
        const num = 3 ** i
        if (num === n) return true
        if (num > n) break

        arr.push(num)
        i += 1
    }

    return helper(0, 0)

    function helper(i, sum) {
        if (sum === n) return true
        if (sum > n) return false
        if (i === arr.length) return false

        return helper(i + 1, sum + arr[i]) || helper(i + 1, sum)
    }
}
