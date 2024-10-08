/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
    const stack = []
    let unbalanced = 0

    for (const c of s) {
        if (c === '[') {
            stack.push(c)
        } else {
            if (stack.length > 0) {
                stack.pop()
            } else {
                unbalanced += 1
            }
        }
    }

    return Math.floor((unbalanced + 1) / 2)
};
