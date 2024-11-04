/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    let comp = ''
    let prev = word[0]
    let count = 1

    for (let i = 1; i <= word.length; i++) {
        if (prev !== word[i]) {
            comp += `${count}${prev}`
            prev = word[i]
            count = 1
        } else {
            if (count === 9) {
                comp += `${count}${prev}`
                count = 0
            }

            count += 1
        }
    }

    return comp
}
