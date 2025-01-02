/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    const VOWELS = new Set(['u', 'e', 'o', 'a', 'i'])
    const prefixSum = new Array(words.length).fill(0)

    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        let factor = 0

        if (VOWELS.has(word[0]) && VOWELS.has(word.at(-1))) {
            factor = 1
        }

        prefixSum[i] = (prefixSum[i - 1] || 0) + factor
    }

    return queries.map((q) => {
        return prefixSum[q[1]] - (prefixSum[q[0] - 1] || 0)
    })
}
