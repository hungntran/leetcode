/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    const set = new Set()

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode('a'.charCodeAt(0) + i)
        const l = s.indexOf(letter)
        const r = s.lastIndexOf(letter)
        
        if (r - l <= 1) {
            continue
        }

        findSubsequence(letter, l + 1, r)
    }

    return set.size

    function findSubsequence(char, l, r) {
        while (l < r) {
            set.add(`${char}${s[l]}${char}`)
            l += 1
        }
    }
}
