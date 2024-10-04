/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    const sum = skill.reduce((a, b) => a + b)
    const target = sum / (skill.length / 2)

    skill.sort((a, b) => a - b)

    let result = 0
    let l = 0
    let r = skill.length - 1

    while (l < r) {
        if (skill[l] + skill[r] !== target) {
            return -1
        }

        result += skill[l] * skill[r]
        l++
        r--
    }

    return result
};