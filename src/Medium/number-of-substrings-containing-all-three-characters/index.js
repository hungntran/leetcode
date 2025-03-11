/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let left = 0
    let right = 0
    let total = 0
    const freq = { a: 0, b: 0, c: 0 }

    while (right < s.length) {
        if (['a', 'b', 'c'].includes(s[right])) {
            freq[s[right]] += 1
        }

        while (isValid(freq)) {
            total += s.length - right

            if (freq[s[left]]) {
                freq[s[left]] -= 1
            }

            left += 1
        }

        right += 1
    }

    return total
}

function isValid(freq) {
    return freq.a > 0 && freq.b > 0 && freq.c > 0
}
