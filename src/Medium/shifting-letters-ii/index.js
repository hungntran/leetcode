/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    const A_CHAR_CODE = 'a'.charCodeAt(0)

    const n = s.length
    const diff = new Array(s.length).fill(0)

    for (const [start, end, direction] of shifts) {
        if (direction === 1) {
            diff[start] += 1
            if (end + 1 < n) {
                diff[end + 1] -= 1
            }
        } else {
            diff[start] -= 1
            if (end + 1 < n) {
                diff[end + 1] += 1
            }
        }
    }

    let numberOfShifts = 0
    let result = ''

    for (let i = 0; i < n; i++) {
        numberOfShifts = (numberOfShifts + diff[i]) % 26

        if (numberOfShifts < 0) numberOfShifts += 26

        const charCode = A_CHAR_CODE + (s[i].charCodeAt(0) - A_CHAR_CODE + numberOfShifts) % 26
        result += String.fromCharCode(charCode)
    }

    return result
};
