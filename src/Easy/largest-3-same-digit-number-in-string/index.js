/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    const str = num.toString()
    let max = ''

    for (let i = 2; i < str.length; i++) {
        if (str[i] === str[i - 1] && str[i] === str[i - 2]) {
            const substring = str[i].repeat(3)
            if (substring > max) {
                max = substring
            }
        }
    }

    return max
}
