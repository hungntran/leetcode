/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    const bmax = count("")

    for (const s of words2) {
        const bcount = count(s)
        for (let i = 0; i < 26; i++) {
            bmax[i] = Math.max(bmax[i], bcount[i])
        }
    }

    const ans = []

    search: for (const s of words1) {
        const acount = count(s)

        for (let i = 0; i < 26; i++) {
            if (acount[i] < bmax[i]) {
                continue search
            }
        }

        ans.push(s)
    }

    return ans
};

function count(s) {
    const res = new Array(26).fill(0)

    for (const c of s) {
        res[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }

    return res
}
