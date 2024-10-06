/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
    let words1 = sentence1.split(' ')
    let words2 = sentence2.split(' ')

    while (words1.length > 0 && words2.length > 0 && words1[0] === words2[0]) {
        words1.shift()
        words2.shift()
    }

    while (
        words1.length > 0 &&
        words2.length > 0 &&
        words1.at(-1) === words2.at(-1)
    ) {
        words1.pop()
        words2.pop()
    }

    return words1.length === 0 || words2.length === 0
}
