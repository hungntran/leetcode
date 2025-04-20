/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    let result = 0
    const map = {}

    for (const a of answers) {
        map[a] = (map[a] || 0) + 1
    }

    for (const [k, v] of Object.entries(map)) {
        const groupSize = parseInt(k) + 1
        const groups = Math.ceil(v / groupSize)
        result += groups * groupSize
    }

    return result
};
