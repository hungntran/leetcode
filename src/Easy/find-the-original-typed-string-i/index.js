/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let prev = word[0]
    let res = 0

    for (let i = 1; i < word.length; i++) {
        if (prev === word[i]) {
            res += 1
        } else {
            prev = word[i]
        }
    }

    return res + 1
};
