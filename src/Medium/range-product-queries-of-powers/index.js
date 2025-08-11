/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function (n, queries) {
    const MOD = 1e9 + 7

    const powers = buildPowers(n)
    const output = []
    const prefix = []

    let cur = 1

    for (let i = 0; i < powers.length; i++) {
        cur = (cur * (powers[i] % MOD)) % MOD
        prefix[i] = cur
    }

    for (const [left, right] of queries) {
        if (left === 0) {
            output.push(prefix[right])
            continue
        }

        let product = 1

        for (let i = left; i <= right; i++) {
            product = (product * powers[i]) % MOD
        }

        output.push(product)
    }

    return output
}

function buildPowers(n) {
    const powers = []
    let remaining = n

    while (remaining > 0) {
        let k = 1

        while (k * 2 <= remaining) {
            k *= 2
        }

        powers.push(k)
        remaining -= k
    }

    return powers.reverse()
}
