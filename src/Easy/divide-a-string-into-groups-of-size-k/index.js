/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const result = []

    for (let i = 0; i < s.length; i += k) {
        result.push(s.slice(i, i + k).padEnd(k, fill))
    }

    return result
};
