/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let temp = ''
    let spaceIndex = 0
    const res = []

    for (let i = 0; i < s.length; i++) {
        if (spaces[spaceIndex] === i) {
            res.push(temp)
            temp = s[i]
            spaceIndex += 1
            continue
        }

        temp += s[i]
    }

    res.push(temp)

    return res.join(' ')
}
