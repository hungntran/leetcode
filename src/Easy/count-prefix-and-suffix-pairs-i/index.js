/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    const n = words.length
    let result = 0

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                result += 1
            }
        }
    }

    return result
};


function isPrefixAndSuffix(s1, s2) {
    return s2.startsWith(s1) && s2.endsWith(s1)
}
