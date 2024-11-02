/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let count = 1
    let prev = s[0]
    let res = s[0]

    for (let i = 1; i < s.length; i++) {
        if (prev === s[i]) {
            count += 1
        } else {
            count = 1
            prev = s[i]
        }

        if (count <= 2) {
            res += s[i]
        }
    }

    return res
}
