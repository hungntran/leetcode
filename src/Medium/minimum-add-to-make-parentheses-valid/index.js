/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    const stack = []
    let count = 0

    for (const c of s) {
        if (c === '(') {
            stack.push(c)
        } else {
            if (stack.length === 0) {
                count += 1
            } else {
                stack.pop()
            }
        }
    }

    return stack.length + count
};
