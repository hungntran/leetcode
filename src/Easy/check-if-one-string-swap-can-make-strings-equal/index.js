/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    const A_CHAR_CODE = 'a'.charCodeAt(0)
    const freq1 = new Array(26).fill(0)
    const freq2 = new Array(26).fill(0)

    let count = 0

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            count += 1
        }

        if (count > 2) return false

        freq1[s1[i].charCodeAt(0) - A_CHAR_CODE] += 1
        freq2[s2[i].charCodeAt(0) - A_CHAR_CODE] += 1
    }

    return freq1.every((item, i) => item === freq2[i])
};
