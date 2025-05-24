/**
 * @param {string} s
 * @return {number}
 */
var sumOfLargestPrimes = function (s) {
    const cache = {}
    const primes = new Set()

    const isPrime = (num) => {
        if (cache[num] !== undefined) return cache[num]
        cache[num] = checkPrime(num)
        return cache[num]
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substring = s.slice(i, j)

            if (isPrime(Number(substring))) {
                primes.add(Number(substring))
            }
        }
    }

    const largestPrimes = Array.from(primes)
        .sort((a, b) => b - a)
        .slice(0, 3)

    return largestPrimes.reduce((sum, prime) => sum + prime, 0)
}

const checkPrime = (num) => {
    if (num < 2) return false
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false
    }
    return true
}
