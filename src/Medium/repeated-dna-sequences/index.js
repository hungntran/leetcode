/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    const set = new Set()
    const output = new Set()

    for (let i = 0; i <= s.length - 10; i++) {
        const dna = s.slice(i, i + 10)

        if (set.has(dna)) {
            output.add(dna)
        } else {
            set.add(dna)
        }
    }

    return Array.from(output)
}
